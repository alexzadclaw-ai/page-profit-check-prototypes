#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const args = process.argv.slice(2);

function usage(code = 1) {
  console.error('Usage: node scripts/capture-batch-subset.js <batch> --slugs slug-a,slug-b [--dry-run] [--keep-temp]');
  console.error('   or: node scripts/capture-batch-subset.js <batch> --slugs-file path/to/slugs.txt [--dry-run] [--keep-temp]');
  process.exit(code);
}

if (!args.length) usage();
const batch = args[0];
let slugsCsv = null;
let slugsFile = null;
let dryRun = false;
let keepTemp = false;

for (let i = 1; i < args.length; i += 1) {
  const arg = args[i];
  if (arg === '--slugs') slugsCsv = args[++i];
  else if (arg === '--slugs-file') slugsFile = args[++i];
  else if (arg === '--dry-run') dryRun = true;
  else if (arg === '--keep-temp') keepTemp = true;
  else usage();
}

if ((!slugsCsv && !slugsFile) || (slugsCsv && slugsFile)) usage();

const metaPath = path.join(root, 'opportunities', batch, 'batch.json');
if (!fs.existsSync(metaPath)) {
  console.error(`Missing batch metadata: ${metaPath}`);
  process.exit(2);
}

const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
const items = Array.isArray(meta.items) ? meta.items : [];
const wanted = slugsCsv
  ? slugsCsv.split(',').map(s => s.trim()).filter(Boolean)
  : fs.readFileSync(path.resolve(slugsFile), 'utf8').split(/\r?\n/).map(s => s.trim()).filter(Boolean);

if (!wanted.length) {
  console.error('No slugs provided after parsing input.');
  process.exit(2);
}

const bySlug = new Map(items.map(item => [item.slug, item]));
const missing = wanted.filter(slug => !bySlug.has(slug));
if (missing.length) {
  console.error(`Unknown slug(s) for batch ${batch}: ${missing.join(', ')}`);
  process.exit(2);
}

const subsetItems = wanted.map(slug => bySlug.get(slug));
const tempBatch = `${batch}__subset__${Date.now()}`;
const tempOppDir = path.join(root, 'opportunities', tempBatch);
const tempProtoLink = path.join(root, 'prototypes', tempBatch);
const tempShotLink = path.join(root, 'screenshots', tempBatch);
const realProtoDir = path.join(root, 'prototypes', batch);
const realShotDir = path.join(root, 'screenshots', batch);

function cleanup() {
  for (const p of [tempProtoLink, tempShotLink]) {
    try {
      if (fs.existsSync(p) || fs.lstatSync(p)) fs.rmSync(p, { recursive: true, force: true });
    } catch {}
  }
  try {
    fs.rmSync(tempOppDir, { recursive: true, force: true });
  } catch {}
}

const subsetMeta = { ...meta, items: subsetItems };

console.log(`Batch: ${batch}`);
console.log(`Subset slugs (${subsetItems.length}): ${subsetItems.map(i => i.slug).join(', ')}`);
console.log(`Temp batch alias: ${tempBatch}`);
console.log(`Screenshots will land in: screenshots/${batch}/`);
console.log(`Prototype source path: prototypes/${batch}/<slug>/index.html`);

if (dryRun) process.exit(0);

fs.mkdirSync(tempOppDir, { recursive: true });
fs.mkdirSync(realShotDir, { recursive: true });
fs.writeFileSync(path.join(tempOppDir, 'batch.json'), JSON.stringify(subsetMeta, null, 2));
fs.symlinkSync(realProtoDir, tempProtoLink, 'dir');
fs.symlinkSync(realShotDir, tempShotLink, 'dir');

const finish = () => {
  if (!keepTemp) cleanup();
};

try {
  const result = spawnSync(process.execPath, [path.join(root, 'scripts', 'capture-batch.js'), tempBatch], {
    cwd: root,
    stdio: 'inherit'
  });
  finish();
  process.exit(result.status == null ? 1 : result.status);
} catch (err) {
  console.error(err.message);
  finish();
  process.exit(1);
}
