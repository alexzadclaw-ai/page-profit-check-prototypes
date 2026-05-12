#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const batch = process.argv[2];
if (!batch) {
  console.error('Usage: node scripts/check-nightly-fidelity-gate.js <batch> [--json]');
  process.exit(1);
}
const jsonMode = process.argv.includes('--json');
const metaPath = path.join(root, 'opportunities', batch, 'batch.json');
if (!fs.existsSync(metaPath)) {
  console.error(`Missing batch metadata: opportunities/${batch}/batch.json`);
  process.exit(2);
}
const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
const items = Array.isArray(meta.items) ? meta.items : [];

function exists(rel) { return fs.existsSync(path.join(root, rel)); }
function read(rel) { return exists(rel) ? fs.readFileSync(path.join(root, rel), 'utf8') : ''; }
function size(rel) { try { return fs.statSync(path.join(root, rel)).size; } catch { return 0; } }
function visibleText(html='') {
  return String(html)
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
function hasAuditSection(audit, name) {
  return new RegExp(`(^|\\n)##\\s+${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(audit);
}
function countMatches(s, re) { return (s.match(re) || []).length; }
function runVisualSimilarity(targetRel, prototypeRel) {
  const script = path.join(root, 'scripts', 'visual_similarity_gate.py');
  const result = spawnSync('python3', [script, path.join(root, targetRel), path.join(root, prototypeRel)], { encoding: 'utf8' });
  const raw = (result.stdout || '').trim();
  let parsed = {};
  try { parsed = raw ? JSON.parse(raw) : {}; } catch (e) { parsed = { error: `invalid visual similarity JSON: ${raw.slice(0, 300)}` }; }
  if (result.status !== 0 && !parsed.error) parsed.error = result.stderr || `visual similarity exited ${result.status}`;
  return parsed;
}
function visualPass(metrics) {
  if (!metrics || metrics.error) return false;
  // These thresholds are intentionally conservative. A real surgical clone may
  // change copy/CTA/spacing, but it must still preserve the live site's visible
  // color direction, top-of-page structure, and overall layout rhythm.
  return metrics.weightedSimilarity >= 0.78 &&
    metrics.colorHistogramSimilarity >= 0.72 &&
    metrics.edgeLayoutSimilarity >= 0.72 &&
    metrics.perceptualHashSimilarity >= 0.66;
}

const requiredAuditSections = [
  'Audit-to-Prototype Coverage',
  'Similarity check',
  'Final acceptance checklist'
];
const requiredFingerprintTerms = [
  /source screenshot|live screenshot|target screenshot/i,
  /logo/i,
  /hero|background/i,
  /dominant colors|palette|colou?rs/i,
  /font|typography/i,
  /header|nav|utility/i,
  /recognizable|visual fingerprint|visual dna/i,
  /structural cue/i
];
const genericSkeletonTerms = [
  /generic conversion stack/i,
  /premium agency/i,
  /brand-new visual identity/i,
  /dramatic redesign/i,
  /new brand system/i,
  /house template/i
];

const results = items.map((item, index) => {
  const slug = item.slug;
  const auditRel = `opportunities/${batch}/${slug}-audit.md`;
  const protoRel = `prototypes/${batch}/${slug}/index.html`;
  const targetRel = `screenshots/${batch}/${slug}-target.png`;
  const pshotRel = `screenshots/${batch}/${slug}-prototype.png`;
  const audit = read(auditRel);
  const proto = read(protoRel);
  const protoVisible = visibleText(proto);
  const failures = [];
  const warnings = [];

  for (const rel of [auditRel, protoRel, targetRel, pshotRel]) {
    if (!exists(rel) || size(rel) <= 0) failures.push(`missing or empty ${rel}`);
  }
  const visualMetrics = exists(targetRel) && exists(pshotRel) ? runVisualSimilarity(targetRel, pshotRel) : null;
  if (!visualPass(visualMetrics)) {
    failures.push(`rendered screenshot similarity failed: ${visualMetrics && visualMetrics.error ? visualMetrics.error : JSON.stringify(visualMetrics)}`);
  }
  for (const section of requiredAuditSections) {
    if (!hasAuditSection(audit, section)) failures.push(`audit missing section: ${section}`);
  }
  if (!/visual fingerprint|visual dna|recognizable visual|structural cue/i.test(audit)) {
    failures.push('audit does not document visual fingerprint / structural cues');
  }
  const fingerprintHits = requiredFingerprintTerms.filter(re => re.test(audit)).length;
  if (fingerprintHits < 7) failures.push(`fingerprint evidence too thin (${fingerprintHits}/8 checks)`);
  const structuralCueCount = Math.max(
    countMatches(audit, /structural cue/ig),
    countMatches(audit, /non-negotiable/ig)
  );
  if (structuralCueCount < 1) failures.push('missing explicit non-negotiable structural cues');
  if (!/Visual resemblance:\s*(High|Medium)/i.test(audit)) failures.push('missing acceptable Visual resemblance verdict');
  if (!/Audit coverage:\s*(High|Medium)/i.test(audit)) failures.push('missing acceptable Audit coverage verdict');
  if (/Visual resemblance:\s*Low/i.test(audit)) failures.push('visual resemblance verdict is Low');
  if (/Audit coverage:\s*Low/i.test(audit)) failures.push('audit coverage verdict is Low');
  if (!/Would the owner recognize|same business|business, upgraded|same website/i.test(audit)) {
    failures.push('audit does not explicitly answer owner-recognition gate');
  }
  if (!/logo|brand|nav|header|hero|photo|image|font|typography/i.test(proto)) {
    warnings.push('prototype text/CSS has weak visible brand cue evidence');
  }
  for (const re of genericSkeletonTerms) {
    if (re.test(proto)) failures.push(`prototype contains forbidden/internal genericity language: ${re}`);
  }
  if (/prototype|audit deliverable|experiment|concept/i.test(protoVisible)) {
    failures.push('prototype appears to expose internal prototype/audit/concept language');
  }

  return {
    index,
    slug,
    name: item.name || slug,
    passed: failures.length === 0,
    visualMetrics,
    failures,
    warnings
  };
});

// Batch-level anti-template check: if many prototypes are visually close to
// each other while their source sites are not, the worker is probably emitting
// a shared template instead of site-derived pages. This protects against the
// exact failure mode where each audit says "high resemblance" but every render
// looks like the same house layout.
let repeatedTemplatePairs = [];
for (let i = 0; i < items.length; i++) {
  for (let j = i + 1; j < items.length; j++) {
    const a = items[i].slug;
    const b = items[j].slug;
    const protoA = `screenshots/${batch}/${a}-prototype.png`;
    const protoB = `screenshots/${batch}/${b}-prototype.png`;
    const targetA = `screenshots/${batch}/${a}-target.png`;
    const targetB = `screenshots/${batch}/${b}-target.png`;
    if (![protoA, protoB, targetA, targetB].every(exists)) continue;
    const protoSim = runVisualSimilarity(protoA, protoB);
    const targetSim = runVisualSimilarity(targetA, targetB);
    if (!protoSim.error && !targetSim.error && protoSim.weightedSimilarity >= 0.88 && targetSim.weightedSimilarity < 0.78) {
      repeatedTemplatePairs.push({ a, b, prototypeSimilarity: protoSim.weightedSimilarity, targetSimilarity: targetSim.weightedSimilarity });
    }
  }
}
if (repeatedTemplatePairs.length) {
  const offenders = new Set(repeatedTemplatePairs.flatMap(p => [p.a, p.b]));
  for (const r of results) {
    if (offenders.has(r.slug)) {
      r.passed = false;
      r.failures.push(`batch-level repeated-template visual pattern detected (${repeatedTemplatePairs.length} suspicious pair(s))`);
    }
  }
}

const summary = {
  batch,
  itemCount: items.length,
  passedCount: results.filter(r => r.passed).length,
  failedCount: results.filter(r => !r.passed).length,
  results
};

if (jsonMode) {
  console.log(JSON.stringify(summary, null, 2));
} else {
  console.log(`Nightly visual-fidelity gate: ${batch}`);
  console.log(`passed: ${summary.passedCount}/${summary.itemCount}`);
  for (const r of results) {
    console.log(`${r.passed ? 'PASS' : 'FAIL'} ${r.slug} (${r.name})`);
    for (const f of r.failures) console.log(`  - ${f}`);
    for (const w of r.warnings) console.log(`  warning: ${w}`);
  }
}
process.exit(summary.failedCount ? 4 : 0);
