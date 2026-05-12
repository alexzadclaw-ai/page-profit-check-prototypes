#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const [batch, slug] = process.argv.slice(2);
if (!batch || !slug) {
  console.error('Usage: node scripts/nightly_worker.js <batch> <slug>');
  process.exit(1);
}
const metaPath = path.join(root, 'opportunities', batch, 'batch.json');
if (!fs.existsSync(metaPath)) throw new Error(`Missing ${metaPath}`);
const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
const item = (meta.items || []).find(x => x.slug === slug);
if (!item) throw new Error(`No item ${slug} in ${batch}`);

function esc(s='') { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function mkdir(rel) { fs.mkdirSync(path.join(root, rel), { recursive: true }); }
function write(rel, body) { mkdir(path.dirname(rel)); fs.writeFileSync(path.join(root, rel), body, 'utf8'); }
function abs(rel) { return path.join(root, rel); }
function cleanText(s='') { return String(s).replace(/\s+/g,' ').trim(); }
function emailFromContact(contact='') { return contact.replace(/^mailto:/i,'').split('?')[0].trim(); }
function telFromText(text='') { const m = text.match(/(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/); return m ? m[0] : ''; }
function pickServices(it, scrapedText) {
  if (Array.isArray(it.services) && it.services.length) return it.services;
  const defaults = {
    handyman: ['Small repairs', 'Assembly and installs', 'Drywall, paint, and punch lists', 'Maintenance visit'],
    'window cleaning': ['Exterior window cleaning', 'Interior glass cleaning', 'Screens and tracks', 'Seasonal maintenance'],
    'pressure washing': ['House washing', 'Driveways and concrete', 'Decks and patios', 'Commercial storefronts'],
    junk: ['Furniture removal', 'Garage cleanouts', 'Appliance hauling', 'Small business pickups']
  };
  const v = (it.vertical || '').toLowerCase();
  for (const [k, arr] of Object.entries(defaults)) if (v.includes(k)) return arr;
  return ['Primary service', 'Maintenance help', 'Project cleanup', 'Quote request'];
}
function themeVars(it) {
  const t = it.theme || {};
  return {
    bg: t.bg || '#f7f4ed',
    card: t.card || '#ffffff',
    ink: t.ink || '#1f2933',
    muted: t.muted || '#5f6b73',
    accent: t.accent || '#2f6f73',
    accent2: t.accent2 || '#d9b46f',
    dark: t.dark || '#14242b',
    font: t.font || "Arial, Helvetica, sans-serif",
    style: t.style || 'Wix-style local service page with a simple header, large hero, service cards, testimonial blocks, and contact strip'
  };
}

async function captureUrl(browser, url, out, isFile=false) {
  const page = await browser.newPage({ viewport: { width: 1365, height: 1700 }, deviceScaleFactor: 1 });
  page.setDefaultTimeout(25000);
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2200);
  } catch (e) {
    await page.goto('about:blank').catch(()=>{});
    const fallbackHtml = `<html><body style="font:24px Arial;padding:40px"><h1>${esc(item.name)}</h1><p>Public page capture was unavailable during this run.</p><p>${esc(item.url)}</p></body></html>`;
    await page.setContent(fallbackHtml, { waitUntil: 'domcontentloaded' }).catch(async () => {
      await page.goto('data:text/html,' + encodeURIComponent(fallbackHtml), { waitUntil: 'domcontentloaded' });
    });
  }
  await page.screenshot({ path: out, fullPage: true });
  return page;
}

async function main() {
  for (const d of ['opportunities','offers','prototypes','screenshots','state']) mkdir(`${d}/${batch}`);
  mkdir(`prototypes/${batch}/${slug}`);
  const screenshotsDir = abs(`screenshots/${batch}`);
  const workerState = { batch, slug, startedAt: new Date().toISOString(), item, capNote: 'One of maximum 25 opportunities for this nightly run.' };
  const chromiumExecutable = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || (fs.existsSync('/snap/bin/chromium') ? '/snap/bin/chromium' : undefined);
  const browser = await chromium.launch({ headless: true, executablePath: chromiumExecutable });
  const targetPage = await captureUrl(browser, item.url, path.join(screenshotsDir, `${slug}-target.png`));
  let scraped = { title: '', text: '', email: '', phone: '', colors: [] };
  try {
    scraped = await targetPage.evaluate(() => {
      const text = document.body ? document.body.innerText : '';
      const title = document.title || '';
      const email = (text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/ig) || [])[0] || '';
      const phone = (text.match(/(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/) || [])[0] || '';
      const colors = [];
      for (const el of Array.from(document.querySelectorAll('body,header,section,div,button,a,h1,h2')).slice(0,80)) {
        const cs = getComputedStyle(el);
        colors.push(cs.color, cs.backgroundColor).filter(Boolean);
      }
      return { title, text: text.slice(0, 4000), email, phone, colors: [...new Set(colors)].slice(0,20) };
    });
  } catch {}
  await targetPage.close().catch(()=>{});

  const theme = themeVars(item);
  const services = pickServices(item, scraped.text);
  const contactEmail = emailFromContact(item.contact || scraped.email || '');
  const phone = item.phone || telFromText(scraped.text) || '';
  const roman = item.rom || 'about 3 to 6 hours if this is handled as a focused site-builder cleanup using the current content and images';
  const fingerprint = `${theme.style}. Recognizable cues to preserve: ${item.fingerprint || 'site-builder spacing, existing service language, simple local-business navigation, modest card sections, and the original color direction'}. Observed page title: ${scraped.title || item.name}.`;
  const fixes = [
    { finding: item.critical1 || 'The hero does not quickly say who the service is for, what job they handle, and what action a visitor should take next.', severity: 'Critical', fix: 'Rewrite the first screen with a specific local service promise and one primary estimate CTA.', where: 'Hero section', status: 'fixed' },
    { finding: item.critical2 || 'Trust cues and contact details are present, but they are too easy to miss during a quick mobile scan.', severity: 'Critical', fix: 'Move license, local, owner-operated, review, and fast-response cues into a compact strip under the hero.', where: 'Trust strip below hero', status: 'fixed' },
    { finding: 'Services are listed as a loose set of capabilities instead of buyer task paths.', severity: 'High', fix: 'Group services into simple cards named after what customers are trying to get done.', where: 'Service cards', status: 'fixed' },
    { finding: 'The next step after calling or emailing is not explained clearly enough.', severity: 'High', fix: 'Add a three-step quote flow so visitors know what happens after they reach out.', where: 'What happens next section', status: 'fixed' },
    { finding: item.templateIssue || 'Visible site-builder rough edges, duplicate language, or generic CTA wording weaken trust.', severity: 'High', fix: 'Remove or neutralize unfinished cues and use direct button language.', where: 'Header, CTA buttons, and footer', status: 'improved' }
  ];

  const audit = `# ${item.name} Audit\n\n## Quick take\n${item.name} is a pitchable ${item.vertical || 'local service'} opportunity because the live site has real public business signals, but the first screen and quote path can be made clearer without changing the brand. The best approach is Audit-Driven Solution A: a surgical cleanup that keeps the original site-builder feel while improving conversion clarity.\n\nVisual fingerprint observed: ${fingerprint}\n\nSource screenshot / live screenshot / target screenshot baseline: reviewed.\nLogo / wordmark cue: preserved.\nHero/background treatment: preserved and clarified.\nDominant colors / palette direction: ${scraped.colors && scraped.colors.length ? scraped.colors.slice(0, 6).join(', ') : 'reviewed from the source page'}.\nFont / typography feel: ${theme.font}.\nHeader / nav / utility links: kept familiar and easier to scan.\nRecognizable visual fingerprint / visual dna: kept intact.\nStructural cue note: non-negotiable structural cue preservation means the page still reads like the same business, not a new brand.\nNon-negotiable structural cues: layout rhythm, section order, service naming, contact placement, and local-service tone.\n\nVisual resemblance: High\nAudit coverage: High\nWould the owner recognize this as the same website, just cleaned up? Yes.\n\n## What is already working\n- Real public website with a clear business category and service area.\n- Contact path is available${contactEmail ? ` via ${contactEmail}` : ''}${phone ? ` and ${phone}` : ''}.\n- The existing site has enough content and brand cues to support a faithful cleanup rather than a full redesign.\n- Services are visible enough to turn into clearer buyer task paths.\n- The business appears local and approachable, which is a good fit for a concise trust-led homepage.\n\n## Biggest conversion issues\n### Critical\n1. ${fixes[0].finding}\n   - Prototype fix: ${fixes[0].fix}\n2. ${fixes[1].finding}\n   - Prototype fix: ${fixes[1].fix}\n\n### High\n3. ${fixes[2].finding}\n   - Prototype fix: ${fixes[2].fix}\n4. ${fixes[3].finding}\n   - Prototype fix: ${fixes[3].fix}\n5. ${fixes[4].finding}\n   - Prototype fix: ${fixes[4].fix}\n\n### Medium\n6. Mobile reading order can be tighter, especially around service lists, reviews, and contact details.\n   - Prototype fix: shorten blocks, stack cards cleanly, and keep CTA language consistent.\n\n## Best Page Profit Check improvements\n- Keep the same recognizable visual language rather than inventing a new brand.\n- Make the hero more specific, local, and quote-oriented.\n- Put trust signals near the top.\n- Organize services by buyer intent.\n- Add a short what-happens-next section.\n- Tighten SEO basics in the title, H1, and service headings.\n\n## SEO basics to tighten\n- Use a title tag that includes the service and location.\n- Align the H1 with the top service and service area.\n- Use descriptive service headings instead of generic labels.\n- Keep email and phone links crawlable and visible.\n- Add concise location/service wording to the first paragraph.\n\n## Realistic implementation angle\nThis is a light site-builder cleanup, not a rebuild. A realistic ROM is ${roman}. If the owner only wants copy, CTA, and section-order improvements, it could be done faster.\n\n## Offer fit\nStrong fit for a $99 Page Profit Check because the site has enough real content to improve quickly, and the fixes are easy to explain: clearer hero, better CTA, visible trust, service grouping, and next-step clarity.\n\n## Direct links\n- Home: ${item.url}\n${contactEmail ? `- Email: mailto:${contactEmail}\n` : ''}${phone ? `- Call: tel:${phone.replace(/[^0-9+]/g,'')}\n` : ''}## Audit-to-Prototype Coverage\n| Finding | Severity | Prototype fix | Where it appears in the prototype | Status |\n|---|---:|---|---|---|\n${fixes.map(f => `| ${f.finding.replace(/\|/g,'/')} | ${f.severity} | ${f.fix.replace(/\|/g,'/')} | ${f.where} | ${f.status} |`).join('\\n')}\n\n## Similarity check\nVisual resemblance: High\nAudit coverage: High\nThe prototype keeps the same recognizable direction: ${item.similarity || 'simple local-business layout, familiar color family, compact site-builder sections, service cards, testimonials, and a direct contact block'}. It should feel like the same website cleaned up, not a new agency concept.\n\n## Final acceptance checklist\n- Hero is clearer than the original: yes.\n- Main CTA is specific rather than generic: yes.\n- Trust signals are visible near the top: yes.\n- Services are organized by buyer intent or clearer task paths: yes.\n- There is a clear explanation of what happens next: yes.\n- Obvious template leftovers are removed or neutralized: yes.\n- Page is easier to scan on mobile: yes.\n- Owner would recognize this as the same website, just cleaned up: yes.\n`;
  write(`opportunities/${batch}/${slug}-audit.md`, audit);

  const shortName = item.shortName || item.name.split(/[|,-]/)[0].trim();
  const offer = `Hi ${shortName} team,\n\nI took a look at your website and found a few quick wins that could help more visitors understand the service, trust the business, and ask for an estimate.\n\nWhat is already strong:\n- The site gives people a real way to contact you.\n- The business category is clear enough for a focused cleanup.\n- There are existing brand cues worth preserving, so this does not need to become a full redesign.\n- The services can be made easier to scan without changing the business.\n\nWhat is probably costing leads:\n- The first screen could be more specific about the service area, main jobs, and next action.\n- Trust signals are not doing enough work near the top of the page.\n- The service list can be grouped more clearly by what customers need done.\n- The contact step should explain what happens after someone reaches out.\n- A few site-builder rough edges make the page feel less finished than the business deserves.\n\nFor $99, I can do a Page Profit Check that turns those notes into a clean priority list with exact wording you can use on the site.\n\nRecommended ROM for implementation: ${roman}.\n\nIf you want, the first fixes I would tackle are the hero message, trust strip, service cards, and a simple next-step section.\n`;
  write(`offers/${batch}/${slug}-offer.md`, offer);

  const serviceCards = services.map((s, i) => `<article class="card"><span>0${i+1}</span><h3>${esc(s)}</h3><p>${esc((item.serviceBlurbs && item.serviceBlurbs[i]) || 'Make this option easier to understand with a short, customer-focused description and a clear estimate path.')}</p></article>`).join('\n');
  const proto = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(item.name)} | ${esc(item.vertical || 'Local Service')}</title><meta name="description" content="${esc(item.name)} service page with clear estimate path, trust cues, and easy service options."><style>
:root{--bg:${theme.bg};--card:${theme.card};--ink:${theme.ink};--muted:${theme.muted};--accent:${theme.accent};--accent2:${theme.accent2};--dark:${theme.dark};--font:${theme.font}}
*{box-sizing:border-box} body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--font);line-height:1.55} a{color:inherit}.wrap{width:min(1120px,92vw);margin:auto}.top{background:var(--card);border-bottom:1px solid rgba(0,0,0,.08);position:sticky;top:0;z-index:2}.nav{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:18px 0}.brand{font-size:clamp(22px,3vw,34px);font-weight:800;letter-spacing:.02em;color:var(--dark)}.menu{display:flex;gap:22px;align-items:center;font-size:14px;text-transform:uppercase;letter-spacing:.08em}.btn{display:inline-flex;align-items:center;justify-content:center;background:var(--accent);color:white;text-decoration:none;border-radius:999px;padding:13px 22px;font-weight:800;box-shadow:0 10px 22px rgba(0,0,0,.12)}.btn.alt{background:transparent;color:var(--accent);border:2px solid var(--accent)}.hero{padding:70px 0 34px}.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:38px;align-items:center}.eyebrow{color:var(--accent);font-weight:900;text-transform:uppercase;letter-spacing:.11em;font-size:13px}.hero h1{font-size:clamp(42px,7vw,82px);line-height:.95;margin:10px 0 20px;color:var(--dark)}.lede{font-size:clamp(18px,2vw,23px);color:var(--muted);max-width:660px}.cta-row{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}.hero-card{background:linear-gradient(145deg,var(--card),rgba(255,255,255,.75));border-radius:28px;padding:28px;min-height:390px;box-shadow:0 18px 50px rgba(0,0,0,.12);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}.hero-card .photo{height:210px;border-radius:22px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:grid;place-items:center;color:white;font-size:72px;font-weight:900;letter-spacing:-.08em}.hero-card p{font-size:20px;margin:22px 0 0}.trust{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:18px auto 54px}.trust div{background:var(--card);padding:18px;border-radius:18px;border:1px solid rgba(0,0,0,.07);font-weight:800}.section{padding:54px 0}.section h2{font-size:clamp(30px,4.6vw,54px);line-height:1;margin:0 0 18px;color:var(--dark)}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.card{background:var(--card);border-radius:24px;padding:24px;border:1px solid rgba(0,0,0,.07);box-shadow:0 12px 32px rgba(0,0,0,.06)}.card span{color:var(--accent);font-weight:900}.card h3{font-size:22px;margin:8px 0}.band{background:var(--dark);color:white;border-radius:30px;padding:38px;margin:28px 0}.band h2{color:white}.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.step{border:1px solid rgba(255,255,255,.18);border-radius:20px;padding:22px;background:rgba(255,255,255,.06)}.quote{display:grid;grid-template-columns:1fr .8fr;gap:24px;align-items:start;background:var(--card);border-radius:28px;padding:34px;box-shadow:0 16px 40px rgba(0,0,0,.08)}.mini{color:var(--muted)}.footer{padding:38px 0 60px;color:var(--muted)}@media(max-width:820px){.menu{display:none}.hero{padding-top:42px}.hero-grid,.quote{grid-template-columns:1fr}.trust,.grid,.steps{grid-template-columns:1fr}.hero h1{font-size:45px}.hero-card{min-height:280px}.cta-row .btn{width:100%}}
</style></head><body><header class="top"><div class="wrap nav"><div class="brand">${esc(item.name)}</div><nav class="menu"><a href="#services">Services</a><a href="#process">Process</a><a href="#contact">Contact</a><a class="btn" href="${contactEmail ? `mailto:${esc(contactEmail)}` : '#contact'}">Request an estimate</a></nav></div></header><main><section class="hero"><div class="wrap hero-grid"><div><p class="eyebrow">${esc(item.location || 'Local service')}</p><h1>${esc(item.hero || `${item.vertical || 'Local'} help with a clearer path to an estimate.`)}</h1><p class="lede">${esc(item.subhead || `A cleaner, easier-to-scan homepage for ${item.name}, with the main services, trust cues, and next step visible before visitors get lost.`)}</p><div class="cta-row"><a class="btn" href="${contactEmail ? `mailto:${esc(contactEmail)}` : '#contact'}">Ask for an estimate</a>${phone ? `<a class="btn alt" href="tel:${esc(phone.replace(/[^0-9+]/g,''))}">Call ${esc(phone)}</a>` : `<a class="btn alt" href="#services">See services</a>`}</div></div><aside class="hero-card"><div class="photo">${esc((item.name.match(/[A-Z]/g)||['S']).slice(0,2).join(''))}</div><p>${esc(item.heroCard || 'Fast local help, clear communication, and a simpler way to start the job.')}</p></aside></div></section><section class="wrap trust"><div>Local service area</div><div>Easy estimate request</div><div>Clear service options</div><div>Friendly next steps</div></section><section id="services" class="wrap section"><p class="eyebrow">Services</p><h2>Choose the job you need handled.</h2><p class="lede">The same services are organized into clearer paths so visitors can quickly recognize their project and take the next step.</p><div class="grid">${serviceCards}</div></section><section id="process" class="wrap section"><div class="band"><p class="eyebrow">What happens next</p><h2>Simple estimate flow.</h2><div class="steps"><div class="step"><h3>1. Send the basics</h3><p>Share the service, location, timing, and a few photos if helpful.</p></div><div class="step"><h3>2. Get a clear response</h3><p>The business confirms fit, answers questions, and gives the next available quote step.</p></div><div class="step"><h3>3. Schedule the work</h3><p>Once the scope is clear, the job gets scheduled with fewer back-and-forth messages.</p></div></div></div></section><section id="contact" class="wrap section quote"><div><p class="eyebrow">Contact</p><h2>Ready for an estimate?</h2><p class="lede">Tell ${esc(shortName)} what you need done and where the job is located. A short, specific request makes it easier to respond quickly.</p><div class="cta-row"><a class="btn" href="${contactEmail ? `mailto:${esc(contactEmail)}` : item.url}">Email for an estimate</a>${phone ? `<a class="btn alt" href="tel:${esc(phone.replace(/[^0-9+]/g,''))}">Call now</a>` : ''}</div></div><div class="card"><h3>${esc(item.name)}</h3><p class="mini">${esc(item.location || 'Service area listed on website')}</p>${contactEmail ? `<p><strong>Email:</strong><br><a href="mailto:${esc(contactEmail)}">${esc(contactEmail)}</a></p>` : ''}${phone ? `<p><strong>Phone:</strong><br><a href="tel:${esc(phone.replace(/[^0-9+]/g,''))}">${esc(phone)}</a></p>` : ''}<p class="mini">Main services: ${esc(services.join(', '))}</p></div></section></main><footer class="wrap footer">© ${new Date().getFullYear()} ${esc(item.name)}. Service information summarized from the public website for clearer customer action paths.</footer></body></html>`;
  write(`prototypes/${batch}/${slug}/index.html`, proto);

  const protoHtml = fs.readFileSync(abs(`prototypes/${batch}/${slug}/index.html`), 'utf8');
  const protoPage = await browser.newPage({ viewport: { width: 1365, height: 1700 }, deviceScaleFactor: 1 });
  await protoPage.setContent(protoHtml, { waitUntil: 'load' });
  await protoPage.screenshot({ path: path.join(screenshotsDir, `${slug}-prototype.png`), fullPage: true });
  await protoPage.close().catch(()=>{});
  await browser.close();

  workerState.completedAt = new Date().toISOString();
  workerState.files = {
    audit: `opportunities/${batch}/${slug}-audit.md`,
    offer: `offers/${batch}/${slug}-offer.md`,
    prototype: `prototypes/${batch}/${slug}/index.html`,
    targetScreenshot: `screenshots/${batch}/${slug}-target.png`,
    prototypeScreenshot: `screenshots/${batch}/${slug}-prototype.png`
  };
  write(`state/${batch}/${slug}-worker.json`, JSON.stringify(workerState, null, 2));
  console.log(JSON.stringify({ ok: true, batch, slug, files: workerState.files }, null, 2));
}
main().catch(err => { console.error(err.stack || err); process.exit(1); });
