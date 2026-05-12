#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

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
function hasAuditSection(audit, name) {
  return new RegExp(`(^|\\n)##\\s+${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(audit);
}
function countMatches(s, re) { return (s.match(re) || []).length; }

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
  const failures = [];
  const warnings = [];

  for (const rel of [auditRel, protoRel, targetRel, pshotRel]) {
    if (!exists(rel) || size(rel) <= 0) failures.push(`missing or empty ${rel}`);
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
  if (/prototype|audit deliverable|experiment|concept/i.test(proto.replace(/<title>.*?<\/title>/is, ''))) {
    failures.push('prototype appears to expose internal prototype/audit/concept language');
  }

  return {
    index,
    slug,
    name: item.name || slug,
    passed: failures.length === 0,
    failures,
    warnings
  };
});

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
