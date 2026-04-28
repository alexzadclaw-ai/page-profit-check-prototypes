const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function exists(p){return fs.existsSync(path.join(root,p));}
function relFile(p){return p && exists(p) ? p : ''}
const batchDirs = new Set();
for (const base of ['opportunities','offers','prototypes','screenshots']) {
  const dir = path.join(root, base);
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir)) {
    if (fs.statSync(path.join(dir,name)).isDirectory()) batchDirs.add(name);
  }
}
const batches = [...batchDirs].sort().reverse();
let cards = [];
for (const batch of batches) {
  const metaPath = path.join(root,'opportunities',batch,'batch.json');
  let items = [];
  if (fs.existsSync(metaPath)) items = JSON.parse(fs.readFileSync(metaPath,'utf8')).items || [];
  else {
    const oppDir = path.join(root,'opportunities',batch);
    if (fs.existsSync(oppDir)) items = fs.readdirSync(oppDir).filter(f=>f.endsWith('-audit.md')).map(f=>({slug:f.replace(/-audit\.md$/,''),name:f.replace(/-audit\.md$/,'').replace(/-/g,' ')}));
  }
  if (!items.length) continue;
  cards.push(`<section class="batch-meta"><p class="eyebrow">Batch</p><h2>${esc(batch)}</h2><p>${items.length} opportunities. Future runs are stored in their own dated batch folders, so previous batches stay reviewable.</p></section>`);
  cards.push('<section class="grid">');
  for (const it of items) {
    const slug = it.slug;
    const audit = relFile(`opportunities/${batch}/${slug}-audit.md`);
    const offer = relFile(`offers/${batch}/${slug}-offer.md`);
    const proto = relFile(`prototypes/${batch}/${slug}/index.html`);
    const target = relFile(`screenshots/${batch}/${slug}-target.png`);
    const pshot = relFile(`screenshots/${batch}/${slug}-prototype.png`);
    cards.push(`<article class="opportunity">
      <p class="score">Priority ${esc(it.priority || it.score || 'review')}</p>
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
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page Profit Check Prototype Reviews</title><meta name="robots" content="noindex,nofollow"><link rel="stylesheet" href="assets/styles.css"></head><body><main class="wrap"><p class="eyebrow">Small Site Studio</p><h1>Page Profit Check prototype reviews</h1><p class="lede">Batch-isolated audit, offer, and static prototype reviews. New runs append dated folders instead of overwriting previous work.</p>${cards.length ? cards.join('\n') : '<section class="empty"><h2>Waiting for prototype batch</h2></section>'}</main></body></html>`;
fs.writeFileSync(path.join(root,'index.html'), html);
