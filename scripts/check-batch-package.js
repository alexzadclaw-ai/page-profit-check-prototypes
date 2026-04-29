#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const batch = process.argv[2];
if (!batch) {
  console.error('Usage: node scripts/check-batch-package.js <batch> [--json]');
  process.exit(1);
}
const jsonMode = process.argv.includes('--json');
const metaPath = path.join(root, 'opportunities', batch, 'batch.json');
if (!fs.existsSync(metaPath)) {
  console.error(`Missing batch metadata: opportunities/${batch}/batch.json`);
  process.exit(2);
}

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}

function statSafe(rel) {
  try {
    return fs.statSync(path.join(root, rel));
  } catch {
    return null;
  }
}

const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
const items = Array.isArray(meta.items) ? meta.items : [];
const requiredKinds = [
  { key: 'audit', rel: slug => `opportunities/${batch}/${slug}-audit.md` },
  { key: 'offer', rel: slug => `offers/${batch}/${slug}-offer.md` },
  { key: 'prototype', rel: slug => `prototypes/${batch}/${slug}/index.html` },
  { key: 'targetScreenshot', rel: slug => `screenshots/${batch}/${slug}-target.png` },
  { key: 'prototypeScreenshot', rel: slug => `screenshots/${batch}/${slug}-prototype.png` }
];

const seen = new Set();
const duplicateSlugs = [];
const results = items.map((item, index) => {
  const slug = item.slug;
  if (!slug) {
    return {
      index,
      name: item.name || null,
      slug: null,
      missing: ['slug'],
      complete: false,
      files: {}
    };
  }
  if (seen.has(slug)) duplicateSlugs.push(slug);
  seen.add(slug);

  const files = {};
  const missing = [];
  for (const kind of requiredKinds) {
    const rel = kind.rel(slug);
    const st = statSafe(rel);
    const ok = !!st && st.isFile() && st.size > 0;
    files[kind.key] = { path: rel, exists: ok, size: st ? st.size : 0 };
    if (!ok) missing.push(kind.key);
  }
  return {
    slug,
    name: item.name || slug,
    priority: item.priority || null,
    status: item.status || null,
    complete: missing.length === 0,
    missing,
    files
  };
});

const summary = {
  batch,
  batchJson: path.relative(root, metaPath),
  itemsInBatchJson: items.length,
  duplicateSlugs,
  completeCount: results.filter(r => r.complete).length,
  incompleteCount: results.filter(r => !r.complete).length,
  missingByKind: results.reduce((acc, r) => {
    for (const key of (r.missing || [])) acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {}),
  results
};

if (jsonMode) {
  console.log(JSON.stringify(summary, null, 2));
  process.exit(summary.incompleteCount ? 3 : 0);
}

console.log(`Batch package QA: ${batch}`);
console.log(`batch.json items: ${summary.itemsInBatchJson}`);
console.log(`complete: ${summary.completeCount}`);
console.log(`incomplete: ${summary.incompleteCount}`);
if (duplicateSlugs.length) console.log(`duplicate slugs in batch.json: ${duplicateSlugs.join(', ')}`);
if (Object.keys(summary.missingByKind).length) {
  console.log('missing by kind:');
  for (const [kind, count] of Object.entries(summary.missingByKind)) {
    console.log(`  - ${kind}: ${count}`);
  }
}
console.log('');
for (const r of results) {
  const status = r.complete ? 'OK' : 'MISSING';
  const missing = r.missing && r.missing.length ? ` :: ${r.missing.join(', ')}` : '';
  console.log(`${status} ${r.slug || `(item ${r.index + 1})`} (${r.name || 'unnamed'})${missing}`);
}

process.exit(summary.incompleteCount ? 3 : 0);
