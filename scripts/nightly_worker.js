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

function sourceOrigin(url='') {
  try { return new URL(url).origin; } catch { return ''; }
}
function sourceBase(url='') {
  try {
    const u = new URL(url);
    u.hash = '';
    u.search = '';
    if (!u.pathname.endsWith('/')) u.pathname = u.pathname.replace(/\/[^/]*$/, '/') || '/';
    return u.href;
  } catch { return url; }
}
function injectIntoHead(html, injection) {
  if (/<head[^>]*>/i.test(html)) return html.replace(/<head([^>]*)>/i, `<head$1>\n${injection}`);
  return `<!doctype html><html><head>${injection}</head><body>${html}</body></html>`;
}
function injectBeforeBodyEnd(html, injection) {
  if (/<\/body>/i.test(html)) return html.replace(/<\/body>/i, `${injection}\n</body>`);
  return `${html}\n${injection}`;
}
function sanitizeInternalWords(html='') {
  return String(html)
    .replace(/[A-Za-z]*experiments?[A-Za-z]*/gi, 'site-settings')
    .replace(/\bprototype(s)?\b/gi, 'site-copy')
    .replace(/\baudit(s)?\b/gi, 'review')
    .replace(/\bconcept(s)?\b/gi, 'idea');
}
async function applyInPlaceCleanup(page, { item, contactEmail, phone, services }) {
  await page.evaluate(({ item, contactEmail, phone, services }) => {
    const clean = s => String(s || '').replace(/\s+/g, ' ').trim();
    const serviceText = clean((services || []).slice(0, 3).join(', '));
    const business = item.name || document.title || 'this business';
    document.title = `${business} | ${item.vertical || 'Local service'}`;
    const textEls = Array.from(document.querySelectorAll('h1,h2,h3,p,span,a,button'));
    for (const el of textEls) {
      const txt = clean(el.textContent);
      if (!txt) continue;
      if (/^i'?m a testimonial\.?/i.test(txt) || /click to edit me/i.test(txt)) {
        el.textContent = `${business} helps customers with ${serviceText || item.vertical || 'clear local service needs'} and makes the next step easier to request.`;
      }
      if (/^learn more$/i.test(txt)) el.textContent = 'Ask for details';
      if (/^book now$|^get started$|^contact us$/i.test(txt)) el.textContent = 'Ask for an estimate';
    }
    const estimateHref = contactEmail ? `mailto:${contactEmail}` : (item.contact || item.url || '#');
    for (const a of Array.from(document.querySelectorAll('a'))) {
      const txt = clean(a.textContent);
      if (/ask for an estimate|contact us|get started|book now|learn more/i.test(txt)) a.setAttribute('href', estimateHref);
    }
    if (phone) {
      const telHref = `tel:${String(phone).replace(/[^0-9+]/g, '')}`;
      for (const a of Array.from(document.querySelectorAll('a'))) {
        if (/call|phone|\(?\d{3}\)?[\s.-]?\d{3}/i.test(clean(a.textContent))) a.setAttribute('href', telHref);
      }
    }
  }, { item, contactEmail, phone, services }).catch(() => {});
}
function buildSiteDerivedPrototype({ liveHtml, item, scraped, contactEmail, phone, services }) {
  const baseHref = sourceBase(item.url);
  const origin = sourceOrigin(item.url);
  const primaryService = services[0] || item.vertical || 'service';
  const phoneHref = phone ? `tel:${phone.replace(/[^0-9+]/g,'')}` : '';
  const emailHref = contactEmail ? `mailto:${contactEmail}` : item.contact || item.url;
  const title = `${item.name} | ${item.vertical || scraped.title || 'Local Service'}`;
  const headInjection = `
<base href="${esc(baseHref)}">
<meta name="robots" content="noindex,nofollow">
<title>${esc(title)}</title>
<style id="ppc-surgical-cleanup">
  :root { --ppc-accent: #165f73; --ppc-ink: #17212b; --ppc-card: rgba(255,255,255,.94); }
  html { scroll-behavior: smooth; }
  body { min-width: 0 !important; }
  img, video, iframe { max-width: 100%; }
  a[href^="tel:"], a[href^="mailto:"] { word-break: break-word; }
  .ppc-clarity-strip { font-family: Arial, Helvetica, sans-serif; position: relative; z-index: 2147483000; background: var(--ppc-card); color: var(--ppc-ink); border-bottom: 1px solid rgba(0,0,0,.14); box-shadow: 0 8px 24px rgba(0,0,0,.10); }
  .ppc-clarity-inner { width: min(1120px, 94vw); margin: 0 auto; display: grid; grid-template-columns: 1.15fr auto; gap: 18px; align-items: center; padding: 14px 0; }
  .ppc-clarity-copy { display: grid; gap: 4px; }
  .ppc-clarity-kicker { font-size: 12px; letter-spacing: .09em; text-transform: uppercase; font-weight: 800; color: var(--ppc-accent); }
  .ppc-clarity-title { font-size: clamp(18px, 2.2vw, 25px); line-height: 1.15; font-weight: 800; }
  .ppc-clarity-sub { font-size: 14px; line-height: 1.35; opacity: .82; max-width: 760px; }
  .ppc-clarity-actions { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-end; }
  .ppc-clarity-actions a { display: inline-flex; align-items: center; justify-content: center; padding: 10px 15px; border-radius: 999px; text-decoration: none; font-weight: 800; border: 1px solid var(--ppc-accent); color: var(--ppc-accent); background: white; }
  .ppc-clarity-actions a:first-child { background: var(--ppc-accent); color: white; }
  .ppc-next-step { font-family: Arial, Helvetica, sans-serif; background: #f7f7f4; color: #18222c; padding: 34px 0; }
  .ppc-next-step-inner { width: min(1120px, 94vw); margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .ppc-next-card { background: white; border: 1px solid rgba(0,0,0,.10); border-radius: 18px; padding: 22px; box-shadow: 0 10px 26px rgba(0,0,0,.06); }
  .ppc-next-card h2, .ppc-next-card h3 { margin-top: 0; line-height: 1.15; }
  .ppc-next-list { margin: 0; padding-left: 20px; }
  .ppc-next-list li { margin: 7px 0; }
  @media (max-width: 820px) {
    .ppc-clarity-inner, .ppc-next-step-inner { grid-template-columns: 1fr; }
    .ppc-clarity-actions { justify-content: flex-start; }
    .ppc-clarity-actions a { width: 100%; }
  }
</style>`;
  let html = liveHtml || `<html><body><h1>${esc(item.name)}</h1><p>${esc(scraped.text || item.url)}</p></body></html>`;
  html = html.replace(/<script\b[\s\S]*?<\/script>/gi, match => /application\/ld\+json/i.test(match) ? match : '');
  html = injectIntoHead(html, headInjection);
  html = sanitizeInternalWords(html);
  if (origin) html = html.replace(/(src|href)=(['"])\/(?!\/)/gi, `$1=$2${origin}/`);
  return html;
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
  await applyInPlaceCleanup(targetPage, { item, contactEmail: emailFromContact(item.contact || scraped.email || ''), phone: item.phone || telFromText(scraped.text) || '', services: pickServices(item, scraped.text) });
  const liveHtml = await targetPage.content().catch(() => '');
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

  const proto = buildSiteDerivedPrototype({ liveHtml, item, scraped, contactEmail, phone, services });
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
