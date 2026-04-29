const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const repo = 'https://github.com/alexzadclaw-ai/page-profit-check-prototypes';
const branch = 'main';
const rawBase = `https://raw.githubusercontent.com/alexzadclaw-ai/page-profit-check-prototypes/${branch}`;
const previewBase = 'https://htmlpreview.github.io/?';
function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function exists(p){return fs.existsSync(path.join(root,p));}
function relFile(p){return p && exists(p) ? p : ''}
function rawUrl(p){return p ? `${rawBase}/${p}` : ''}
function blobUrl(p){return p ? `${repo}/blob/${branch}/${p}` : ''}
function previewUrl(p){return p ? `${previewBase}${rawUrl(p)}` : ''}
function isPackaged(batch, slug) {
  return [
    `opportunities/${batch}/${slug}-audit.md`,
    `offers/${batch}/${slug}-offer.md`,
    `prototypes/${batch}/${slug}/index.html`,
    `screenshots/${batch}/${slug}-target.png`,
    `screenshots/${batch}/${slug}-prototype.png`
  ].every(exists);
}
function batchRank(batch) {
  const m = batch.match(/^(\d{4})-(\d{2})-(\d{2})(?:-(\d{4}))?/);
  if (!m) return `000000000000-${batch}`;
  return `${m[1]}${m[2]}${m[3]}${m[4] || '0000'}-${batch}`;
}
const batchDirs = new Set();
for (const base of ['opportunities','offers','prototypes','screenshots']) {
  const dir = path.join(root, base);
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir)) {
    if (fs.statSync(path.join(dir,name)).isDirectory()) batchDirs.add(name);
  }
}
const batches = [...batchDirs]
  .filter(batch => !/similarity|experiment/i.test(batch))
  .sort((a, b) => batchRank(b).localeCompare(batchRank(a)));
let cards = [];
const seenSlugs = new Set();
for (const batch of batches) {
  const metaPath = path.join(root,'opportunities',batch,'batch.json');
  let items = [];
  if (fs.existsSync(metaPath)) items = JSON.parse(fs.readFileSync(metaPath,'utf8')).items || [];
  else {
    const oppDir = path.join(root,'opportunities',batch);
    if (fs.existsSync(oppDir)) items = fs.readdirSync(oppDir).filter(f=>f.endsWith('-audit.md')).map(f=>({slug:f.replace(/-audit\.md$/,''),name:f.replace(/-audit\.md$/,'').replace(/-/g,' ')}));
  }
  const uniqueItems = [];
  for (const it of items) {
    const slug = it.slug;
    if (!slug || seenSlugs.has(slug)) continue;
    if (!isPackaged(batch, slug)) continue;
    seenSlugs.add(slug);
    uniqueItems.push(it);
  }
  if (!uniqueItems.length) continue;
  cards.push(`<section class="batch-meta"><p class="eyebrow">Batch</p><h2>${esc(batch)}</h2><p>${uniqueItems.length} opportunities. Future runs are stored in their own dated batch folders, so previous batches stay reviewable.</p></section>`);
  cards.push('<section class="grid">');
  for (const it of uniqueItems) {
    const slug = it.slug;
    const auditPath = relFile(`opportunities/${batch}/${slug}-audit.md`);
    const offerPath = relFile(`offers/${batch}/${slug}-offer.md`);
    const protoPath = relFile(`prototypes/${batch}/${slug}/index.html`);
    const targetPath = relFile(`screenshots/${batch}/${slug}-target.png`);
    const pshotPath = relFile(`screenshots/${batch}/${slug}-prototype.png`);
    const audit = blobUrl(auditPath);
    const offer = blobUrl(offerPath);
    const proto = previewUrl(protoPath);
    const target = rawUrl(targetPath);
    const pshot = rawUrl(pshotPath);
    cards.push(`<article class="opportunity">
      <p class="score">Priority ${esc(it.priority || it.score || 'review')} · Latest batch ${esc(batch)}</p>
      <h2>${esc(it.name || slug)}</h2>
      <p>${esc(it.summary || it.angle || 'Audit/prototype package prepared for review.')}</p>
      <div class="shots">
        <figure class="shot">${target ? `<img src="${esc(target)}" alt="Target screenshot for ${esc(it.name||slug)}">` : `<div class="placeholder">Target screenshot unavailable</div>`}<figcaption>Current site</figcaption></figure>
        <figure class="shot">${pshot ? `<img src="${esc(pshot)}" alt="Prototype screenshot for ${esc(it.name||slug)}">` : `<div class="placeholder">Prototype screenshot unavailable</div>`}<figcaption>Prototype</figcaption></figure>
      </div>
      <div class="links">
        ${it.url ? `<a href="${esc(it.url)}">Original site</a>` : ''}
        ${proto ? `<a class="primary" href="${esc(proto)}">Open prototype</a>` : ''}
        ${audit ? `<a href="${esc(audit)}">Audit</a>` : ''}
        ${offer ? `<a href="${esc(offer)}">Draft offer</a>` : ''}
        ${it.contact ? `<a href="${esc(it.contact)}">Contact/source</a>` : ''}
      </div>
    </article>`);
  }
  cards.push('</section>');
}
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page Profit Check side-by-side report</title><meta name="robots" content="noindex,nofollow"><link rel="stylesheet" href="assets/styles.css"></head><body><main class="wrap"><p class="eyebrow">Small Site Studio</p><h1>Page Profit Check side-by-side report</h1><p class="lede">Batch-isolated audit, offer, and static prototype reviews. Each prospect appears once, using the latest available batch, with current-site and prototype screenshots shown side by side.</p>${cards.length ? cards.join('\n') : '<section class="empty"><h2>Waiting for prototype batch</h2></section>'}</main></body></html>`;
fs.writeFileSync(path.join(root,'index.html'), html);
