#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const repo = 'https://github.com/alexzadclaw-ai/page-profit-check-prototypes';
const branch = process.env.PPC_REPORT_BRANCH || 'main';
const rawBase = `https://raw.githubusercontent.com/alexzadclaw-ai/page-profit-check-prototypes/${branch}`;
const previewBase = 'https://htmlpreview.github.io/?';
const batch = process.argv[2];
const outArg = process.argv[3];
if (!batch) {
  console.error('Usage: node scripts/build-batch-report.js <batch> [out.html]');
  process.exit(2);
}
const out = outArg || `reports/page-profit-check-nightly-${batch.replace(/-/g, '')}.html`;
function esc(s = '') { return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c])); }
function rel(...parts) { return path.join(...parts); }
function abs(p) { return path.join(root, p); }
function readJson(p) { return JSON.parse(fs.readFileSync(abs(p), 'utf8')); }
function exists(p) { return fs.existsSync(abs(p)); }
function rawUrl(p) { return `${rawBase}/${p.split(path.sep).join('/')}`; }
function blobUrl(p) { return `${repo}/blob/${branch}/${p.split(path.sep).join('/')}`; }
function previewUrl(p) { return `${previewBase}${rawUrl(p)}`; }
const batchJson = rel('opportunities', batch, 'batch.json');
if (!exists(batchJson)) {
  console.error(`Missing ${batchJson}`);
  process.exit(2);
}
const meta = readJson(batchJson);
const qaPath = rel('state', `${batch}-package-qa.json`);
const qa = exists(qaPath) ? readJson(qaPath) : null;
const items = meta.items || [];
const cards = items.map(it => {
  const slug = it.slug;
  const auditPath = rel('opportunities', batch, `${slug}-audit.md`);
  const offerPath = rel('offers', batch, `${slug}-offer.md`);
  const protoPath = rel('prototypes', batch, slug, 'index.html');
  const targetPath = rel('screenshots', batch, `${slug}-target.png`);
  const protoShotPath = rel('screenshots', batch, `${slug}-prototype.png`);
  const qaItem = qa && (qa.results || []).find(r => r.slug === slug);
  const metrics = qaItem && qaItem.visualMetrics ? ` · visual ${qaItem.visualMetrics.weightedSimilarity} weighted / ${qaItem.visualMetrics.edgeLayoutSimilarity} edge` : '';
  const failures = qaItem && qaItem.failures && qaItem.failures.length ? `<p class="note fail">QA failures: ${esc(qaItem.failures.join('; '))}</p>` : '';
  const warnings = qaItem && qaItem.warnings && qaItem.warnings.length ? `<p class="note">QA warnings: ${esc(qaItem.warnings.join('; '))}</p>` : '';
  return `<article class="opportunity" id="${esc(slug)}">
    <p class="score">Priority ${esc(it.priority || 'review')} · Batch ${esc(batch)}${esc(metrics)}</p>
    <h2>${esc(it.name || slug)}</h2>
    <p>${esc(it.summary || it.angle || 'Surgical Page Profit Check cleanup with source-site assets and clearer conversion flow.')}</p>
    ${failures}
    ${warnings}
    <div class="shots">
      <figure class="shot"><figcaption>Current site</figcaption><img src="${esc(rawUrl(targetPath))}" alt="Current-site screenshot for ${esc(it.name || slug)}"></figure>
      <figure class="shot"><figcaption>Prototype</figcaption><img src="${esc(rawUrl(protoShotPath))}" alt="Prototype screenshot for ${esc(it.name || slug)}"></figure>
    </div>
    <div class="links">
      ${it.url ? `<a href="${esc(it.url)}">Original site</a>` : ''}
      <a class="primary" href="${esc(previewUrl(protoPath))}">Open prototype</a>
      <a href="${esc(blobUrl(auditPath))}">Audit</a>
      <a href="${esc(blobUrl(offerPath))}">Draft offer</a>
      ${it.contact ? `<a href="${esc(it.contact)}">Contact/source</a>` : ''}
    </div>
  </article>`;
}).join('\n');

const qaSummary = qa ? `<p class="lede">QA: ${qa.passed ? 'passed' : 'failed'} · ${qa.completeCount}/${qa.itemsInBatchJson} complete · normalized screenshots: ${(qa.normalizedScreenshots || []).length}.</p>` : '';
const outDir = path.dirname(out);
const cssHref = outDir === '.' ? 'assets/styles.css' : `${path.relative(outDir, 'assets')}/styles.css`.split(path.sep).join('/');
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page Profit Check ${esc(batch)}</title><meta name="robots" content="noindex,nofollow"><link rel="stylesheet" href="${esc(cssHref)}"></head><body><main class="wrap"><p class="eyebrow">Small Site Studio</p><h1>Page Profit Check nightly batch</h1><p class="lede">Batch-isolated side-by-side report for <strong>${esc(batch)}</strong>. Prototypes are intended as source-faithful surgical cleanups, not generic redesign templates.</p>${qaSummary}<section class="batch-meta"><p class="eyebrow">Batch</p><h2>${esc(batch)}</h2><p>${items.length} opportunities. Screenshots and links point to committed repository assets so this report remains stable after later runs.</p></section><section class="grid">${cards}</section></main></body></html>`;
fs.mkdirSync(path.dirname(abs(out)), { recursive: true });
fs.writeFileSync(abs(out), html);
console.log(out);
