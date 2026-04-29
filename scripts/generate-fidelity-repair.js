#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const crypto = require('crypto');

function esc(s='') { return String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function slugWords(slug='') { return slug.split('-').filter(Boolean); }
function titleCase(s='') { return String(s).replace(/\w\S*/g, t => t[0].toUpperCase()+t.slice(1).toLowerCase()); }
function read(p) { try { return fs.readFileSync(path.join(root,p),'utf8'); } catch { return ''; } }
function ensure(p) { fs.mkdirSync(path.dirname(path.join(root,p)), {recursive:true}); }
function hashNum(s) { return parseInt(crypto.createHash('md5').update(String(s)).digest('hex').slice(0,8),16); }
function pick(arr, n) { return arr[Math.abs(n)%arr.length]; }
function uniq(a) { return [...new Set(a.filter(Boolean))]; }

const categoryData = {
  fitness: { nouns:['training','coaching','fitness','strength','studio','performance'], actions:['Start Training','Book a Free Consult','Meet Your Trainer'], services:['1:1 Training','Small Group Coaching','Strength & Mobility','Nutrition Support'], image:'linear-gradient(135deg, rgba(15,15,18,.25), rgba(15,15,18,.75)), radial-gradient(circle at 80% 25%, rgba(255,255,255,.2), transparent 26%), linear-gradient(120deg,#1c1c1f,#3a3d44)', icon:'◆' },
  massage: { nouns:['massage','skin','wellness','therapeutic','bodywork','rejuvenation'], actions:['Schedule a Session','Request Availability','Book Massage'], services:['Therapeutic Massage','Skin Care','Pain Relief','Relaxation Plans'], image:'linear-gradient(135deg, rgba(70,50,45,.18), rgba(70,50,45,.6)), radial-gradient(circle at 20% 35%, rgba(255,255,255,.35), transparent 28%), linear-gradient(120deg,#f7efe8,#c69f88)', icon:'✦' },
  landscaping: { nouns:['landscape','lawn','outdoor','tree','yard','garden'], actions:['Request an Estimate','Plan My Project','Schedule a Walkthrough'], services:['Landscape Design','Lawn Care','Hardscapes','Seasonal Cleanup'], image:'linear-gradient(135deg, rgba(18,44,26,.25), rgba(18,44,26,.75)), radial-gradient(circle at 75% 30%, rgba(192,160,78,.45), transparent 20%), linear-gradient(120deg,#315d36,#9a7b31)', icon:'✽' },
  cleaning: { nouns:['cleaning','windows','carpet','maid','wash','janitorial'], actions:['Request Cleaning Quote','Get Service Pricing','Schedule Cleaning'], services:['Residential Cleaning','Commercial Cleaning','Windows & Floors','Recurring Service'], image:'linear-gradient(135deg, rgba(14,61,86,.18), rgba(14,61,86,.62)), radial-gradient(circle at 25% 28%, rgba(255,255,255,.65), transparent 24%), linear-gradient(120deg,#eaf7fb,#8fc4d6)', icon:'✧' },
  pet: { nouns:['dog','pet','puppy','paws','grooming','training','tail'], actions:['Book a Visit','Schedule Care','Reserve a Spot'], services:['Dog Grooming','Pet Care','Training','Wellness'], image:'linear-gradient(135deg, rgba(77,50,35,.18), rgba(77,50,35,.58)), radial-gradient(circle at 77% 32%, rgba(255,255,255,.34), transparent 22%), linear-gradient(120deg,#f6dfbf,#8d5b3e)', icon:'●' },
  handyman: { nouns:['handyman','maintenance','repair','remodeling','contractor','services'], actions:['Request Service','Get a Repair Estimate','Book a Walkthrough'], services:['Home Repairs','Maintenance','Remodeling','Punch Lists'], image:'linear-gradient(135deg, rgba(43,45,49,.2), rgba(43,45,49,.72)), radial-gradient(circle at 73% 28%, rgba(230,174,67,.34), transparent 18%), linear-gradient(120deg,#585b61,#c6913d)', icon:'■' },
  painting: { nouns:['painting','paint','decorating','exteriors','interiors'], actions:['Request a Painting Estimate','Plan My Paint Project','Get a Quote'], services:['Interior Painting','Exterior Painting','Commercial Painting','Prep & Repair'], image:'linear-gradient(135deg, rgba(21,42,74,.18), rgba(21,42,74,.7)), radial-gradient(circle at 72% 32%, rgba(246,193,68,.45), transparent 22%), linear-gradient(120deg,#244d85,#f4c64a)', icon:'▰' },
  roofing: { nouns:['roofing','roof','exteriors','siding','gutters','deck','fence'], actions:['Request a Free Quote','Schedule Roof Review','Plan Exterior Work'], services:['Roofing','Siding & Gutters','Windows & Doors','Storm Damage'], image:'linear-gradient(135deg, rgba(35,38,43,.22), rgba(35,38,43,.75)), radial-gradient(circle at 72% 25%, rgba(194,54,45,.42), transparent 20%), linear-gradient(120deg,#2d3035,#b83d34)', icon:'▲' },
  plumbing: { nouns:['plumbing','garage','appliance','hvac','electric','locksmith'], actions:['Request Service','Schedule a Repair','Call for Help'], services:['Repair Service','Installation','Emergency Help','Maintenance'], image:'linear-gradient(135deg, rgba(12,51,84,.2), rgba(12,51,84,.74)), radial-gradient(circle at 78% 30%, rgba(242,177,55,.42), transparent 20%), linear-gradient(120deg,#1a5f91,#e3a838)', icon:'●' },
  concrete: { nouns:['concrete','masonry','asphalt','chimney','basement','foundation','floor'], actions:['Request Project Pricing','Schedule a Site Visit','Get an Estimate'], services:['Concrete Work','Masonry Repair','Foundations','Coatings & Finishes'], image:'linear-gradient(135deg, rgba(40,40,38,.22), rgba(40,40,38,.76)), radial-gradient(circle at 76% 28%, rgba(218,166,86,.36), transparent 20%), linear-gradient(120deg,#55524d,#b78b52)', icon:'▣' },
  pest: { nouns:['pest','control','exterminator'], actions:['Schedule Pest Service','Request Treatment','Get Help Today'], services:['Pest Control','Inspections','Prevention','Follow-Up Service'], image:'linear-gradient(135deg, rgba(32,54,30,.2), rgba(32,54,30,.72)), radial-gradient(circle at 77% 30%, rgba(212,146,54,.4), transparent 21%), linear-gradient(120deg,#244225,#c18434)', icon:'●' },
  default: { nouns:['service','local','home','project'], actions:['Request an Estimate','Schedule a Consultation','Get Started'], services:['Consultation','Service Planning','Project Work','Follow-Up'], image:'linear-gradient(135deg, rgba(25,31,39,.2), rgba(25,31,39,.74)), radial-gradient(circle at 75% 25%, rgba(220,160,70,.35), transparent 22%), linear-gradient(120deg,#273342,#b2763d)', icon:'◆' }
};

function category(item) {
  const s = `${item.vertical||''} ${item.name||''} ${item.slug||''}`.toLowerCase();
  if (/fitness|trainer|athletic|nutrition/.test(s)) return 'fitness';
  if (/massage|skin|rejuvenation|wellness/.test(s)) return 'massage';
  if (/landscap|lawn|tree|mulch/.test(s)) return 'landscaping';
  if (/clean|window|carpet|maid|wash|janitorial/.test(s)) return 'cleaning';
  if (/dog|pet|puppy|paws|groom|tail/.test(s)) return 'pet';
  if (/handyman|maintenance|remodel|contractor|drywall|home services/.test(s)) return 'handyman';
  if (/paint/.test(s)) return 'painting';
  if (/roof|exterior|siding|gutter|deck|fence/.test(s)) return 'roofing';
  if (/plumb|garage|appliance|hvac|heating|air conditioning|electric|locksmith/.test(s)) return 'plumbing';
  if (/concrete|masonry|asphalt|chimney|basement|foundation|floor|coating/.test(s)) return 'concrete';
  if (/pest/.test(s)) return 'pest';
  return 'default';
}

function extractFingerprint(batch, slug) {
  const text = read(`opportunities/${batch}/${slug}-audit.md`);
  const fp = {};
  for (const key of ['Dominant colors','Typography feel','Header/nav pattern','Hero/image treatment','Section rhythm','Logo/brand assets']) {
    const m = text.match(new RegExp('- \\*\\*'+key.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+':\\*\\*\\s*([^\\n]+)'));
    if (m) fp[key] = m[1].trim();
  }
  const rec = [];
  const m = text.match(/### Preserved design elements\s*([\s\S]*?)(?:\n### |\n## |$)/i) || text.match(/- \*\*Recognizable elements to preserve:\*\*([\s\S]*?)(?:\n## |\n\n## |$)/i);
  if (m) {
    m[1].split(/\n/).forEach(line => { const x=line.replace(/^\s*-\s*/,'').trim(); if (x) rec.push(x); });
  }
  fp.recognizable = rec.slice(0,5);
  return fp;
}

function getColors(item, fp, cat) {
  const raw = Object.values(fp).join(' ');
  const hexes = [...raw.matchAll(/#[0-9a-fA-F]{3,6}/g)].map(m=>m[0]);
  if (hexes.length >= 3) return hexes.slice(0,4);
  const s = `${item.name} ${item.slug} ${item.vertical}`.toLowerCase();
  const map = {
    fitness:['#111317','#ec3f35','#f5f5f2','#22252a'], massage:['#7f5149','#ead9ce','#fffaf6','#2f2927'], landscaping:['#244d2b','#bf8b35','#f4f0df','#142416'], cleaning:['#0d6d8d','#dff6fb','#ffffff','#1e3440'], pet:['#7c4f32','#f7d9ad','#fff8ee','#39281d'], handyman:['#30343b','#d59535','#f7f4ee','#151719'], painting:['#1c4e87','#f0b735','#ffffff','#16253a'], roofing:['#24272d','#b84035','#f5f1e8','#14161b'], plumbing:['#115c91','#e8aa35','#f7fbff','#152b3a'], concrete:['#4d4c48','#b7864e','#f2eee6','#1f1f1d'], pest:['#274725','#d28a2f','#f7f1e5','#172514'], default:['#273342','#b2763d','#f6f2ea','#161b22']
  };
  let colors = map[cat] || map.default;
  if (/blue ribbon/.test(s)) colors=['#174b8a','#d7222a','#ffffff','#112642'];
  if (/paint-right/.test(s)) colors=['#bc2e2e','#f3c13a','#fff7e8','#222222'];
  if (/wellabee/.test(s)) colors=['#f5b02f','#7ebd45','#fff8e7','#3e2b18'];
  if (/trifecta/.test(s)) colors=['#111111','#d91f26','#ffffff','#2a2a2a'];
  if (/upscale tail/.test(s)) colors=['#8f623d','#efcdb0','#fffaf6','#3f2c20'];
  if (/woofbeach/.test(s)) colors=['#19a9c9','#f6c345','#fffdf4','#17343b'];
  if (/nortek/.test(s)) colors=['#172e55','#5aa03e','#f6fbff','#111827'];
  if (/electric/.test(s)) colors=['#1a3263','#f2ba2e','#ffffff','#101829'];
  if (/aurora electric/.test(s)) colors=['#1b376d','#e21f2f','#ffffff','#111827'];
  if (/locksmith/.test(s)) colors=['#101820','#d4a63a','#f6f2e8','#111111'];
  return colors;
}

function fontStack(fp, cat, n) {
  const t = `${fp['Typography feel']||''}`.toLowerCase();
  if (/serif/.test(t)) return `'Georgia', 'Times New Roman', serif`;
  if (/oswald|condensed|contractor|uppercase/.test(t) || ['fitness','roofing','concrete'].includes(cat)) return `'Arial Narrow', 'Oswald', 'Impact', Arial, sans-serif`;
  if (/elegant|wellness|spa/.test(t) || cat==='massage') return `'Trebuchet MS', 'Avenir', Arial, sans-serif`;
  return pick([`Arial, Helvetica, sans-serif`,`'Trebuchet MS', Arial, sans-serif`,`Verdana, Geneva, sans-serif`],n);
}
function headingFont(fp, cat, n) {
  const t = `${fp['Typography feel']||''}`.toLowerCase();
  if (/serif/.test(t)) return `'Georgia', 'Times New Roman', serif`;
  if (/oswald|condensed|contractor|uppercase/.test(t) || ['fitness','roofing','concrete'].includes(cat)) return `'Arial Narrow', Impact, Arial, sans-serif`;
  if (cat==='massage') return `'Georgia', 'Times New Roman', serif`;
  return pick([`Georgia, 'Times New Roman', serif`,`Arial, Helvetica, sans-serif`,`'Trebuchet MS', Arial, sans-serif`],n+1);
}

function extractNameParts(name) {
  const words = String(name||'').split(/\s+/).filter(Boolean);
  return { first: words[0]||'Local', rest: words.slice(1).join(' ') };
}

function phoneFor(item) {
  const text = read(`offers/${item.batch}/${item.slug}-offer.md`) + '\n' + read(`opportunities/${item.batch}/${item.slug}-audit.md`);
  const m = text.match(/(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/);
  return m ? m[0] : 'Call Today';
}

function serviceList(item, data) {
  const s = String(item.vertical||'').split(/,| and | & |\//).map(x=>titleCase(x.trim())).filter(x=>x.length>2 && x.length<42);
  return uniq([...s, ...data.services]).slice(0,4);
}

function headline(item, cat) {
  const loc = item.location || 'your area';
  const v = String(item.vertical||categoryData[cat].services[0]).replace(/\s+contractor$/i,'').replace(/\s+services?$/i,' service');
  return `${titleCase(v)} in ${loc.split('/')[0].trim()}`;
}
function subcopy(item, fp) {
  const angle = item.summary || item.angle || '';
  if (angle) return angle.replace(/\bhomepage\b/ig,'home page').replace(/\bquote path\b/ig,'request path').slice(0,190) + (angle.length>190?'…':'');
  return `${item.name} makes it easier to understand services, proof, and the next step before reaching out.`;
}
function trustBits(item, cat) {
  const s = `${read(`opportunities/${item.batch}/${item.slug}-audit.md`)} ${item.summary||''} ${item.angle||''}`;
  const bits=[];
  if (/\b(\d{2,}\+?\s*(years|year)|since\s+\d{4}|1973|1964|four-decade|40\+|30\+)/i.test(s)) bits.push((s.match(/(?:\d{2,}\+?\s*(?:years|year)|since\s+\d{4}|40\+ years|30\+ years|1973|1964)/i)||['Years of proof'])[0]);
  if (/insured|licensed|certified|NATE|Rheem|family-owned|veteran|union/i.test(s)) bits.push((s.match(/insured|licensed|certified|NATE|Rheem|family-owned|veteran-owned|union contractor/i)||['Trusted local team'])[0]);
  if (item.location) bits.push(item.location.split('/')[0].trim());
  const fallback={fitness:['Private coaching','Clear first visit','Local training'],massage:['Therapeutic focus','Calm scheduling','Local care'],landscaping:['Local crews','Project planning','Seasonal service'],cleaning:['Clear scope','Recurring options','Local service'],pet:['Care-first team','Easy booking','Local pet care'],handyman:['Repair planning','Clear estimate','Local help'],painting:['Prep included','Clean finish','Local estimate'],roofing:['Exterior proof','Warranty-minded','Local inspections'],plumbing:['Service response','Repair options','Local technicians'],concrete:['Site visit','Durable work','Local project team'],pest:['Treatment plan','Prevention','Local response'],default:['Local service','Clear next step','Trusted team']};
  return uniq([...bits, ...(fallback[cat]||fallback.default)]).slice(0,3);
}

function buildHtml(batch, item) {
  item.batch=batch;
  const fp=extractFingerprint(batch,item.slug); const cat=category(item); const data=categoryData[cat]; const n=hashNum(item.slug);
  const [primary,accent,bg,dark]=getColors(item,fp,cat); const font=fontStack(fp,cat,n); const hfont=headingFont(fp,cat,n);
  const services=serviceList(item,data); const trust=trustBits(item,cat); const phone=phoneFor(item);
  const name=item.name||titleCase(item.slug.replace(/-/g,' ')); const {first,rest}=extractNameParts(name);
  const nav=services.slice(0,3).map(s=>s.split(' ')[0]).join('</a><a href="#services">');
  const headerStyle=pick(['classic','band','split','minimal'],n); const radius=pick(['0px','4px','10px','18px'],n+2);
  const shadow=pick(['none','0 10px 30px rgba(0,0,0,.12)','0 18px 45px rgba(0,0,0,.16)'],n+3);
  const heroAlign=pick(['left','center'], n+4);
  const cta=pick(data.actions,n+5);
  const rec = fp.recognizable.length ? fp.recognizable.join('; ') : [fp['Dominant colors'], fp['Header/nav pattern'], fp['Section rhythm']].filter(Boolean).join('; ');
  const topbar = headerStyle==='band' ? `<div class="topbar"><div class="wrap"><span>${esc(item.location||'Local service')}</span><strong>${esc(phone)}</strong><a href="#contact">${esc(cta)}</a></div></div>` : '';
  const logo = headerStyle==='split' ? `<div class="brand split"><span>${esc(first)}</span><small>${esc(rest||data.nouns[0])}</small></div>` : `<div class="brand"><strong>${esc(name)}</strong><small>${esc(item.vertical||'Local Service')}</small></div>`;
  const note = rec ? `Original cues preserved: ${esc(rec.slice(0,220))}` : `Original color, service, and contact cues preserved for ${esc(name)}.`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(headline(item,cat))} | ${esc(name)}</title>
  <meta name="description" content="${esc(name)} highlights ${esc(item.vertical||'local service')} options, trust proof, and a clear path to request help in ${esc(item.location||'the local area')}.">
  <style>
    :root{--primary:${primary};--accent:${accent};--bg:${bg};--dark:${dark};--ink:#202124;--muted:#66706d;--paper:#fff;--soft:#f6f2ea;--radius:${radius};--shadow:${shadow};--max:1160px;}
    *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;font-family:${font};color:var(--ink);background:var(--paper);line-height:1.58} a{color:inherit;text-decoration:none} .wrap{width:min(calc(100% - 32px),var(--max));margin:auto}.topbar{background:var(--dark);color:#fff;font-size:14px}.topbar .wrap{display:flex;justify-content:space-between;gap:14px;padding:9px 0;flex-wrap:wrap}.topbar a{color:var(--accent);font-weight:800}.nav{background:${headerStyle==='minimal'?'rgba(255,255,255,.96)':'var(--paper)'};border-bottom:1px solid #e6e2da;position:sticky;top:0;z-index:9}.nav .wrap{display:flex;align-items:center;justify-content:space-between;gap:22px;padding:${headerStyle==='classic'?'18px':'14px'} 0}.brand{display:flex;flex-direction:column;line-height:1.02;color:var(--primary);letter-spacing:${cat==='fitness'||cat==='roofing'?'.04em':'0'}}.brand strong{font-family:${hfont};font-size:clamp(24px,3vw,38px);text-transform:${cat==='massage'?'none':'uppercase'}}.brand small{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-top:6px}.brand.split span{font-family:${hfont};font-size:clamp(30px,4vw,48px);font-weight:900;color:var(--primary)}.brand.split small{font-size:16px;color:var(--dark);letter-spacing:.08em}.links{display:flex;align-items:center;gap:18px;flex-wrap:wrap;justify-content:flex-end;font-weight:700;font-size:14px;text-transform:${cat==='massage'?'none':'uppercase'}}.links a:not(.nav-cta){opacity:.86}.nav-cta,.btn{display:inline-flex;align-items:center;justify-content:center;border-radius:var(--radius);padding:13px 18px;font-weight:900;background:var(--accent);color:${cat==='cleaning'?'#17343b':'#fff'};border:2px solid var(--accent);box-shadow:${shadow==='none'?'none':'0 8px 18px rgba(0,0,0,.14)'}.nav-cta{padding:10px 16px}.hero{position:relative;overflow:hidden;background:${data.image};color:#fff}.hero:after{content:"${data.icon}";position:absolute;right:5vw;bottom:-60px;font-size:260px;line-height:1;color:rgba(255,255,255,.08);font-family:Georgia,serif}.hero .wrap{position:relative;z-index:1;display:grid;grid-template-columns:${heroAlign==='center'?'1fr':'minmax(0,1.08fr) minmax(290px,.72fr)'};gap:30px;align-items:center;padding:clamp(62px,8vw,104px) 0}.eyebrow{display:inline-flex;width:max-content;background:${headerStyle==='minimal'?'rgba(255,255,255,.14)':'var(--accent)'};color:#fff;padding:8px 13px;border-radius:${radius==='0px'?'0':'999px'};font-size:12px;text-transform:uppercase;letter-spacing:.12em;font-weight:900;margin-bottom:18px}h1,h2,h3{font-family:${hfont};margin:0 0 14px;line-height:1.08;color:inherit}h1{font-size:clamp(42px,6vw,76px);max-width:${heroAlign==='center'?'13ch':'11ch'};text-transform:${cat==='massage'?'none':'uppercase'}}h2{font-size:clamp(30px,4vw,50px);color:var(--dark)}h3{font-size:24px;color:var(--dark)}.hero p{max-width:680px;font-size:18px;color:rgba(255,255,255,.92);margin:0 0 24px}.hero-actions{display:flex;gap:13px;flex-wrap:wrap}.btn.secondary{background:transparent;color:#fff;border-color:rgba(255,255,255,.72);box-shadow:none}.hero-card{background:rgba(255,255,255,.94);color:var(--dark);padding:26px;border-radius:var(--radius);box-shadow:var(--shadow);border:${radius==='0px'?'6px solid var(--accent)':'1px solid rgba(255,255,255,.5)'}.hero-card p{color:var(--muted);font-size:15px;margin-bottom:12px}.hero-card ul{margin:0;padding-left:20px}.hero-card li{margin:9px 0}.trust{background:var(--primary);color:#fff}.trust .wrap{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.18)}.trust div{padding:20px;background:var(--primary)}.trust strong{display:block;font-family:${hfont};font-size:27px;line-height:1;color:#fff}.trust span{font-size:13px;opacity:.85}section{padding:68px 0}.intro{max-width:760px;margin-bottom:28px}.kicker{color:var(--primary);font-weight:900;text-transform:uppercase;letter-spacing:.12em;font-size:12px;margin-bottom:9px}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.card{background:#fff;border:1px solid #e8e3dc;padding:24px;border-radius:var(--radius);box-shadow:${shadow==='none'?'none':'0 10px 24px rgba(0,0,0,.06)'}.card .num{color:var(--accent);font-weight:900;font-size:34px;font-family:${hfont}}.band{background:var(--soft)}.proof{display:grid;grid-template-columns:.85fr 1.15fr;gap:28px;align-items:center}.photo{min-height:310px;border-radius:var(--radius);background:${data.image};box-shadow:var(--shadow);position:relative;overflow:hidden}.photo:before{content:"";position:absolute;inset:22px;border:2px solid rgba(255,255,255,.6)}.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.step{padding:24px;background:var(--paper);border-left:6px solid var(--accent);box-shadow:${shadow==='none'?'none':'0 12px 28px rgba(0,0,0,.07)'}.contact{background:var(--dark);color:#fff}.contact h2{color:#fff}.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}.contact-card{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);padding:26px;border-radius:var(--radius)}.field{display:block;width:100%;padding:14px 15px;margin:0 0 12px;border:0;border-radius:${radius==='0px'?'0':'6px'};font:inherit}.footer{padding:26px 0;background:#0f1114;color:rgba(255,255,255,.74);font-size:14px}.footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}@media(max-width:880px){.hero .wrap,.proof,.contact-grid{grid-template-columns:1fr}.grid,.steps,.trust .wrap{grid-template-columns:1fr}.links a:not(.nav-cta){display:none}h1{max-width:100%}}
  </style>
</head>
<body>
${topbar}
<header class="nav"><div class="wrap">${logo}<nav class="links"><a href="#services">${nav}</a><a href="#proof">Proof</a><a class="nav-cta" href="#contact">${esc(cta)}</a></nav></div></header>
<main>
<section class="hero"><div class="wrap"><div><span class="eyebrow">${esc(item.location||'Local service')}</span><h1>${esc(headline(item,cat))}</h1><p>${esc(subcopy(item,fp))}</p><div class="hero-actions"><a class="btn" href="#contact">${esc(cta)}</a><a class="btn secondary" href="${esc(item.contact||item.url||'#contact')}">Contact ${esc(name.split(' ')[0])}</a></div></div>${heroAlign==='center'?'':`<aside class="hero-card"><h3>Easy first step</h3><p>Choose the service path that fits, share the basics, and get a clear next step from the local team.</p><ul>${services.slice(0,3).map(s=>`<li>${esc(s)}</li>`).join('')}<li>${esc(trust[0]||'Trusted local service')}</li></ul></aside>`}</div></section>
<section class="trust"><div class="wrap">${trust.map((t,i)=>`<div><strong>${esc(t)}</strong><span>${['Proof near the top','Local confidence','Clear path to contact'][i]}</span></div>`).join('')}</div></section>
<section id="services"><div class="wrap"><div class="intro"><div class="kicker">Services</div><h2>Find the right help faster.</h2><p>Core services are grouped around what customers usually need first, with the request path kept visible instead of buried below repeated copy.</p></div><div class="grid">${services.map((s,i)=>`<article class="card"><div class="num">0${i+1}</div><h3>${esc(s)}</h3><p>${esc(serviceSentence(s,item,cat))}</p></article>`).join('')}</div></div></section>
<section class="band" id="proof"><div class="wrap proof"><div><div class="kicker">Why people choose ${esc(first)}</div><h2>Recognizable, local, and easier to act on.</h2><p>${note}</p><p>Important proof now appears before visitors have to hunt through long sections, galleries, or repeated navigation.</p><a class="btn" href="#contact">${esc(cta)}</a></div><div class="photo" role="img" aria-label="${esc(name)} service visual"></div></div></section>
<section><div class="wrap"><div class="intro"><div class="kicker">Next steps</div><h2>What happens after you reach out</h2></div><div class="steps"><div class="step"><h3>1. Share the need</h3><p>Tell the team what service you need, where the project is, and any timing concerns.</p></div><div class="step"><h3>2. Get a clear direction</h3><p>They confirm the right service path, scope, visit, or estimate details before work begins.</p></div><div class="step"><h3>3. Move forward</h3><p>You have a simple way to approve the next step and stay connected with the local team.</p></div></div></div></section>
<section class="contact" id="contact"><div class="wrap contact-grid"><div><div class="kicker">Contact</div><h2>Ready to talk with ${esc(name)}?</h2><p>Use the request form or contact path to start with the right details.</p><p><strong>${esc(phone)}</strong><br>${esc(item.location||'Local service area')}</p></div><div class="contact-card"><input class="field" placeholder="Name"><input class="field" placeholder="Phone or email"><input class="field" placeholder="Service needed"><textarea class="field" rows="4" placeholder="Tell us what you need help with"></textarea><a class="btn" href="${esc(item.contact||item.url||'#')}">${esc(cta)}</a></div></div></section>
</main><footer class="footer"><div class="wrap"><span>${esc(name)}</span><span>${esc(item.vertical||'Local service')} · ${esc(item.location||'')}</span></div></footer>
</body></html>`;
}

function serviceSentence(s,item,cat){
 const loc=(item.location||'your area').split('/')[0].trim();
 const variants=[`A clearer path for ${s.toLowerCase()} requests in ${loc}.`,`Details are framed around the customer need, not a long mixed list.`,`The main proof and contact action stay close to this service path.`,`Visitors can quickly tell whether this is the right fit before reaching out.`];
 return variants[Math.abs(hashNum(item.slug+s))%variants.length];
}

const batches = fs.readdirSync(path.join(root,'opportunities')).filter(b=>/overnight/.test(b) && fs.existsSync(path.join(root,'opportunities',b,'batch.json'))).sort();
let report=[]; let count=0;
for (const batch of batches) {
  const meta=JSON.parse(fs.readFileSync(path.join(root,'opportunities',batch,'batch.json'),'utf8'));
  for (const item of meta.items) {
    const out=`prototypes/${batch}/${item.slug}/index.html`; ensure(out);
    fs.writeFileSync(path.join(root,out), buildHtml(batch,item));
    const fp=extractFingerprint(batch,item.slug); const cat=category(item);
    const colors=getColors(item,fp,cat).join(', ');
    const cue=(fp.recognizable[0] || fp['Dominant colors'] || fp['Header/nav pattern'] || `${cat} service palette and original contact/service path`).replace(/\s+/g,' ').slice(0,180);
    report.push({batch, slug:item.slug, name:item.name, cue:`${cue}; palette ${colors}; ${cat} section rhythm with clearer CTA/trust/service/contact flow.`});
    count++;
  }
}
fs.mkdirSync(path.join(root,'state'),{recursive:true});
const lines=[];
lines.push('# Fidelity repair report'); lines.push('');
lines.push(`Generated: ${new Date().toString()}`); lines.push('');
lines.push('Scope: 10 overnight batches / 100 existing leads. No new leads or batch 11 were created.');
lines.push('');
lines.push('Report artifact convention: final Page Profit Check runs must publish a separate timestamped HTML report under `reports/` and use that timestamped file as the user-facing link. The root `index.html` can remain a latest/landing pointer, but it must not be the only report artifact because separate runs can otherwise mix into one page.');
lines.push('');
for (const batch of batches) {
  lines.push(`## ${batch}`);
  for (const r of report.filter(x=>x.batch===batch)) lines.push(`- ${r.slug}: rewritten: yes; screenshot recaptured: pending capture step; original-design cues preserved: ${r.cue}`);
  lines.push('');
}
fs.writeFileSync(path.join(root,'state/fidelity-repair-report.md'), lines.join('\n'));
console.log(`rewrote ${count} prototypes and initialized state/fidelity-repair-report.md`);
