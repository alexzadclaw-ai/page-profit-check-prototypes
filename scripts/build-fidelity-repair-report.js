const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const repo = 'https://github.com/alexzadclaw-ai/page-profit-check-prototypes';
const branch = 'main';
const rawBase = `https://raw.githubusercontent.com/alexzadclaw-ai/page-profit-check-prototypes/${branch}`;
const previewBase = 'https://htmlpreview.github.io/?';
function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function exists(p){return fs.existsSync(path.join(root,p));}
function rawUrl(p){return p ? `${rawBase}/${p}` : ''}
function blobUrl(p){return p ? `${repo}/blob/${branch}/${p}` : ''}
function previewUrl(p){return p ? `${previewBase}${rawUrl(p)}` : ''}
function isPackaged(batch, slug) { return [`opportunities/${batch}/${slug}-audit.md`,`offers/${batch}/${slug}-offer.md`,`prototypes/${batch}/${slug}/index.html`,`screenshots/${batch}/${slug}-target.png`,`screenshots/${batch}/${slug}-prototype.png`].every(exists); }
const batches = fs.readdirSync(path.join(root,'opportunities')).filter(batch => /overnight/.test(batch) && exists(`opportunities/${batch}/batch.json`)).sort((a,b)=>b.localeCompare(a));
let cards=[];
for (const batch of batches) {
  const items = JSON.parse(fs.readFileSync(path.join(root,'opportunities',batch,'batch.json'),'utf8')).items || [];
  const packaged = items.filter(it => it.slug && isPackaged(batch,it.slug));
  if (!packaged.length) continue;
  cards.push(`<section class="batch-meta"><p class="eyebrow">Fidelity repair batch</p><h2>${esc(batch)}</h2><p>${packaged.length} repaired opportunities from the overnight run. This timestamped report is isolated from other Page Profit Check runs.</p></section>`);
  cards.push('<section class="grid">');
  for (const it of packaged) {
    const slug=it.slug;
    const auditPath=`opportunities/${batch}/${slug}-audit.md`, offerPath=`offers/${batch}/${slug}-offer.md`, protoPath=`prototypes/${batch}/${slug}/index.html`, targetPath=`screenshots/${batch}/${slug}-target.png`, pshotPath=`screenshots/${batch}/${slug}-prototype.png`;
    cards.push(`<article class="opportunity">
      <p class="score">Priority ${esc(it.priority || 'review')} · Repaired ${esc(batch)}</p>
      <h2>${esc(it.name || slug)}</h2>
      <p>${esc(it.summary || it.angle || 'Visual-fidelity repair completed with clearer CTA, trust proof, services, and contact path.')}</p>
      <div class="shots">
        <figure class="shot"><img src="${esc(rawUrl(targetPath))}" alt="Current site screenshot for ${esc(it.name||slug)}"><figcaption>Current site</figcaption></figure>
        <figure class="shot"><img src="${esc(rawUrl(pshotPath))}" alt="Repaired page screenshot for ${esc(it.name||slug)}"><figcaption>Repaired page</figcaption></figure>
      </div>
      <div class="links">
        ${it.url ? `<a href="${esc(it.url)}">Original site</a>` : ''}
        <a class="primary" href="${esc(previewUrl(protoPath))}">Open repaired page</a>
        <a href="${esc(blobUrl(auditPath))}">Audit</a>
        <a href="${esc(blobUrl(offerPath))}">Draft offer</a>
        ${it.contact ? `<a href="${esc(it.contact)}">Contact/source</a>` : ''}
      </div>
    </article>`);
  }
  cards.push('</section>');
}
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page Profit Check fidelity repair report</title><meta name="robots" content="noindex,nofollow"><link rel="stylesheet" href="../assets/styles.css"></head><body><main class="wrap"><p class="eyebrow">Small Site Studio</p><h1>Page Profit Check fidelity repair report</h1><p class="lede">Timestamped side-by-side report for the repaired 100-lead overnight run. It includes only the ten overnight batches, not older nightly items or future runs.</p>${cards.join('\n')}</main></body></html>`;
const out = process.argv[2];
if (!out) { console.error('Usage: node scripts/build-fidelity-repair-report.js reports/file.html'); process.exit(1); }
fs.mkdirSync(path.dirname(path.join(root,out)),{recursive:true});
fs.writeFileSync(path.join(root,out), html);
console.log(out);
