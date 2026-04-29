const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname,'..');
const repo='https://github.com/alexzadclaw-ai/page-profit-check-prototypes';
const branch='main';
const rawBase=`https://raw.githubusercontent.com/alexzadclaw-ai/page-profit-check-prototypes/${branch}`;
const previewBase='https://htmlpreview.github.io/?';
const sites=[
 ['2026-04-29-0110-overnight-10','corwin-drywall-contracting','Corwin Drywall Contracting LLC','https://corwindrywall.com/'],
 ['2026-04-29-0110-overnight-10','adv-masonry-contractor','ADV Masonry Contractor','https://advmasonry.net/'],
 ['2026-04-28-2303-overnight-3','pure-windows','Pure Windows','https://www.purewindows.net/'],
 ['2026-04-28-2337-overnight-5','anderson-window-gutter-cleaning','Anderson Window & Gutter Cleaning','https://weknowgutters.com/'],
 ['2026-04-29-0004-overnight-6','tm-tree-service','T&M Tree Service','https://www.tandmtreeservice.com/'],
 ['2026-04-29-0039-overnight-8','wiz-plumbing','Wiz Plumbing','https://www.wizplumbingandsewer.com/'],
 ['2026-04-29-0039-overnight-8','henson-concrete-construction','Henson Concrete Construction','https://www.hccil.com/'],
 ['2026-04-29-0027-overnight-7','stec-roofing-sg','Stec Roofing S&G, Inc.','https://www.stecroofinginc.com/'],
 ['2026-04-29-0027-overnight-7','executive-green-carpet-cleaning','Executive Green Carpet Cleaning Services','https://www.executivegreencarpetcleaning.com/'],
 ['2026-04-29-0110-overnight-10','copper-oak-remodeling','Copper Oak Remodeling','https://copperoakremodeling.com/'],
];
function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function dataUri(rel){const p=path.join(root,rel); const ext=path.extname(p).slice(1)||'png'; return `data:image/${ext==='jpg'?'jpeg':ext};base64,${fs.readFileSync(p).toString('base64')}`;}
function raw(rel){return `${rawBase}/${rel}`}
function preview(rel){return `${previewBase}${raw(rel)}`}
const cards=[];
for (const [batch,slug,name,url] of sites) {
  const target=`screenshots/${batch}/${slug}-target.png`;
  const proto=`screenshots/${batch}/${slug}-prototype.png`;
  const protoPath=`prototypes/${batch}/${slug}/index.html`;
  const fp=`state/fidelity-pilot-10site/${slug}-fingerprint.md`;
  cards.push(`<!-- verified-name: ${name} | verified-slug: ${slug} --><article class="site" id="${esc(slug)}"><div class="meta"><p class="eyebrow">${esc(batch)}</p><h2>${esc(name)}</h2><p><code>${esc(slug)}</code></p><p class="links"><a href="${esc(url)}">Original site</a><a href="${esc(preview(protoPath))}">Open repaired page</a><a href="${esc(`${repo}/blob/${branch}/${fp}`)}">Fingerprint</a></p></div><div class="shots"><figure><img src="${dataUri(target)}" alt="Original screenshot for ${esc(name)}"><figcaption>Original live screenshot</figcaption></figure><figure><img src="${dataUri(proto)}" alt="Repaired screenshot for ${esc(name)}"><figcaption>Repaired fidelity page</figcaption></figure></div></article>`);
}
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Ten-site Page Profit Check visual fidelity pilot</title><meta name="robots" content="noindex,nofollow"><style>*{box-sizing:border-box}body{margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;background:#101318;color:#f4f6f8;line-height:1.5}.wrap{width:min(1500px,calc(100% - 36px));margin:auto;padding:34px 0 70px}.lede{max-width:900px;color:#c9d0d8}.eyebrow{text-transform:uppercase;letter-spacing:.12em;font-size:12px;color:#92a4bd;margin:0 0 6px}h1{font-size:clamp(32px,5vw,64px);line-height:1;margin:0 0 16px}h2{font-size:28px;margin:0 0 4px}.site{background:#fff;color:#17202b;border-radius:18px;padding:20px;margin:24px 0;box-shadow:0 18px 50px #0006}.meta{display:flex;align-items:end;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-bottom:16px}.meta code{background:#eef2f6;padding:4px 7px;border-radius:6px}.links{display:flex;gap:10px;flex-wrap:wrap}.links a{background:#17202b;color:#fff;text-decoration:none;padding:9px 12px;border-radius:9px;font-weight:700}.shots{display:grid;grid-template-columns:1fr 1fr;gap:16px}figure{margin:0;border:1px solid #dbe1e8;border-radius:14px;overflow:hidden;background:#f6f8fa}img{display:block;width:100%;height:auto}figcaption{padding:10px 12px;font-weight:800;color:#344052}@media(max-width:900px){.shots{grid-template-columns:1fr}}</style></head><body><main class="wrap"><p class="eyebrow">Small Site Studio</p><h1>Ten-site Page Profit Check visual fidelity pilot</h1><p class="lede">Embedded side-by-side report for the controlled 10-site visual-fidelity repair. Each card includes the original live screenshot and the repaired static page screenshot as data URIs, plus links to the original, repaired page, and fingerprint evidence.</p>${cards.join('\n')}</main></body></html>`;
const out=process.argv[2]; if(!out){console.error('Usage: node scripts/build-10site-fidelity-report.js reports/file.html'); process.exit(1)}
fs.mkdirSync(path.dirname(path.join(root,out)),{recursive:true}); fs.writeFileSync(path.join(root,out),html); console.log(out);
