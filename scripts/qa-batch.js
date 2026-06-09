#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const batch = process.argv[2];
if (!batch) {
  console.error('Usage: node scripts/qa-batch.js <batch>');
  process.exit(2);
}

function rel(...parts) { return path.join(...parts); }
function abs(p) { return path.join(root, p); }
function exists(p) { return fs.existsSync(abs(p)); }
function size(p) { return exists(p) ? fs.statSync(abs(p)).size : 0; }
function read(p) { return fs.readFileSync(abs(p), 'utf8'); }
function ensureDir(p) { fs.mkdirSync(path.dirname(abs(p)), { recursive: true }); }
function copyIfMissing(src, dst) {
  if (exists(src) && !exists(dst)) {
    ensureDir(dst);
    fs.copyFileSync(abs(src), abs(dst));
    return true;
  }
  return false;
}

const batchJson = rel('opportunities', batch, 'batch.json');
if (!exists(batchJson)) {
  console.error(`Missing ${batchJson}`);
  process.exit(2);
}
const meta = JSON.parse(read(batchJson));
const items = meta.items || [];
const duplicateSlugs = items.map(i => i.slug).filter((s, i, a) => s && a.indexOf(s) !== i);

const requiredAuditSections = [
  'Quick take',
  'What is already working',
  'Biggest conversion issues',
  'Best Page Profit Check improvements',
  'SEO basics to tighten',
  'Realistic implementation angle',
  'Offer fit',
  'Direct links',
  'Audit-to-Prototype Coverage',
  'Similarity check',
  'Source assets reused',
  'Final acceptance checklist',
];

const stockPatterns = [/images\.unsplash\.com/i, /unsplash\.com/i, /pexels\.com/i, /pixabay\.com/i];
const results = [];
let failed = false;
let normalized = [];

for (const item of items) {
  const slug = item.slug;
  const result = {
    slug,
    name: item.name || slug,
    complete: true,
    failures: [],
    warnings: [],
    files: {},
    visualMetrics: null,
  };
  function fail(msg) { result.complete = false; result.failures.push(msg); failed = true; }
  function warn(msg) { result.warnings.push(msg); }

  for (const kind of ['target', 'prototype']) {
    const top = rel('screenshots', batch, `${slug}-${kind}.png`);
    const nested = rel('screenshots', batch, slug, `${slug}-${kind}.png`);
    if (copyIfMissing(nested, top)) normalized.push(`${nested} -> ${top}`);
  }

  const files = {
    audit: rel('opportunities', batch, `${slug}-audit.md`),
    offer: rel('offers', batch, `${slug}-offer.md`),
    prototype: rel('prototypes', batch, slug, 'index.html'),
    targetScreenshot: rel('screenshots', batch, `${slug}-target.png`),
    prototypeScreenshot: rel('screenshots', batch, `${slug}-prototype.png`),
  };
  for (const [key, p] of Object.entries(files)) {
    result.files[key] = { path: p, exists: exists(p), size: size(p) };
    if (!exists(p)) fail(`Missing ${key}: ${p}`);
    else if (size(p) < (key.includes('Screenshot') ? 20000 : 500)) fail(`${key} looks too small: ${p} (${size(p)} bytes)`);
  }

  if (exists(files.audit)) {
    const audit = read(files.audit);
    for (const section of requiredAuditSections) {
      if (!new RegExp(`^##\\s+${section.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'mi').test(audit)) {
        fail(`Audit missing required section: ${section}`);
      }
    }
    if (!/\$99|99\s+Page Profit Check/i.test(audit)) warn('Audit does not visibly mention the $99 offer');
  }

  if (exists(files.offer)) {
    const offer = read(files.offer);
    if (!/\$99|99\s+Page Profit Check/i.test(offer)) fail('Offer missing $99 Page Profit Check language');
    if (/—/.test(offer)) fail('Offer contains em dash, forbidden for outreach drafts');
    if (!/hour|ROM|rough|estimate|implementation/i.test(offer)) warn('Offer may be missing rough implementation estimate language');
  }

  if (exists(files.prototype)) {
    const html = read(files.prototype);
    for (const pat of stockPatterns) {
      if (pat.test(html)) fail(`Prototype contains likely external stock image reference: ${pat}`);
    }
    if (!/<html/i.test(html) || !/<body/i.test(html)) fail('Prototype is not a complete HTML document');
    if (!new RegExp((item.name || '').split(/\s+/)[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i').test(html)) warn('Prototype may not include recognizable business-name text');
  }

  if (exists(files.targetScreenshot) && exists(files.prototypeScreenshot)) {
    const py = spawnSync('python3', [path.join(root, 'scripts', 'visual_similarity_gate.py'), abs(files.targetScreenshot), abs(files.prototypeScreenshot)], { encoding: 'utf8' });
    if (py.status !== 0) {
      fail(`Visual similarity gate errored: ${py.stderr || py.stdout}`.trim());
    } else {
      try {
        result.visualMetrics = JSON.parse(py.stdout);
        if (result.visualMetrics.error) fail(`Visual similarity gate error: ${result.visualMetrics.error}`);
        const m = result.visualMetrics;
        if (m.weightedSimilarity < 0.70 || m.edgeLayoutSimilarity < 0.70) {
          fail(`Visual resemblance below gate: weighted=${m.weightedSimilarity}, edge=${m.edgeLayoutSimilarity}`);
        } else if (m.weightedSimilarity < 0.78 || m.edgeLayoutSimilarity < 0.78) {
          warn(`Low visual similarity, requires human/vision review: weighted=${m.weightedSimilarity}`);
        }
      } catch (e) {
        fail(`Could not parse visual similarity output: ${py.stdout}`);
      }
    }
  }

  const sourceNoteCandidates = [
    rel('state', batch, `${slug}-source-assets.md`),
    rel('state', batch, slug, `${slug}-source-assets.md`),
  ];
  const sourceNote = sourceNoteCandidates.find(exists);
  result.sourceAssetsNote = sourceNote || null;
  if (!sourceNote) fail('Missing source asset notes markdown');

  results.push(result);
}

const out = {
  batch,
  batchJson,
  itemsInBatchJson: items.length,
  duplicateSlugs,
  normalizedScreenshots: normalized,
  completeCount: results.filter(r => r.complete).length,
  incompleteCount: results.filter(r => !r.complete).length,
  passed: !failed && duplicateSlugs.length === 0,
  results,
};
if (duplicateSlugs.length) out.passed = false;
fs.mkdirSync(abs('state'), { recursive: true });
fs.writeFileSync(abs(rel('state', `${batch}-package-qa.json`)), JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
process.exit(out.passed ? 0 : 1);
