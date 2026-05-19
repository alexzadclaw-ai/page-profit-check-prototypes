const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const url = 'https://finishingtouchpa.wixsite.com/start';
const batch = '2026-05-19-0200-nightly';
const slug = 'finishing-touch-handyman';
const root = process.cwd();
const outState = path.join(root, 'state', batch);
const outShots = path.join(root, 'screenshots', batch);

function unique(arr){ return [...new Set(arr.filter(Boolean))]; }

(async () => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const context = await browser.newContext({ viewport: { width: 1365, height: 1700 }, deviceScaleFactor: 1, userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36 PPCInspect/1.0' });
  const page = await context.newPage();
  const responses = [];
  page.on('response', async (r) => {
    const req = r.request();
    const ct = (r.headers()['content-type'] || '').toLowerCase();
    const u = r.url();
    if (/image|font|css|javascript|json|html/.test(ct) || /static\.wixstatic\.com|static\.parastorage\.com/.test(u)) {
      responses.push({ url: u, status: r.status(), contentType: ct, resourceType: req.resourceType() });
    }
  });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  try { await page.waitForLoadState('networkidle', { timeout: 30000 }); } catch(e) {}
  await page.waitForTimeout(3000);
  // Dismiss obvious banners/popups if present without clicking lead forms.
  for (const text of ['Accept', 'I Agree', 'Got it', 'Close']) {
    try { const loc = page.getByRole('button', { name: new RegExp(`^${text}$`, 'i') }).first(); if (await loc.count()) await loc.click({timeout:1000}); } catch(e) {}
  }
  const height = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  for (let y = 0; y <= height; y += 600) { await page.evaluate(y => window.scrollTo(0, y), y); await page.waitForTimeout(500); }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outShots, `${slug}-target.png`), fullPage: true });

  const data = await page.evaluate(() => {
    const abs = u => { try { return new URL(u, location.href).href; } catch(e) { return u; } };
    const imageSet = new Set();
    const bgSet = new Set();
    const seen = new Set();
    const elements = [];
    const maxElements = 160;
    function extractUrlsFromCss(value) {
      if (!value || value === 'none') return [];
      const urls = [];
      const re = /url\((['"]?)(.*?)\1\)/g;
      let m; while ((m = re.exec(value))) { if (m[2] && !m[2].startsWith('data:')) urls.push(abs(m[2])); }
      return urls;
    }
    document.querySelectorAll('img, picture source').forEach(el => {
      const srcs = [];
      if (el.currentSrc) srcs.push(el.currentSrc);
      if (el.src) srcs.push(el.src);
      if (el.getAttribute('src')) srcs.push(el.getAttribute('src'));
      if (el.getAttribute('data-src')) srcs.push(el.getAttribute('data-src'));
      const srcset = el.getAttribute('srcset') || el.getAttribute('data-srcset') || '';
      srcset.split(',').map(s => s.trim().split(/\s+/)[0]).forEach(s => s && srcs.push(s));
      srcs.forEach(s => { if (s && !s.startsWith('data:')) imageSet.add(abs(s)); });
    });
    document.querySelectorAll('*').forEach((el, idx) => {
      const cs = getComputedStyle(el);
      [...extractUrlsFromCss(cs.backgroundImage), ...extractUrlsFromCss(cs.borderImageSource), ...extractUrlsFromCss(cs.listStyleImage)].forEach(u => bgSet.add(u));
      const r = el.getBoundingClientRect();
      const txt = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
      const tag = el.tagName.toLowerCase();
      if (elements.length < maxElements && r.width > 8 && r.height > 8 && (txt || tag === 'img' || cs.backgroundImage !== 'none')) {
        const key = `${tag}|${Math.round(r.top+window.scrollY)}|${Math.round(r.left)}|${Math.round(r.width)}|${Math.round(r.height)}|${txt.slice(0,80)}`;
        if (!seen.has(key)) {
          seen.add(key);
          elements.push({
            tag, id: el.id || '', className: typeof el.className === 'string' ? el.className : '',
            text: txt.slice(0,500),
            rect: { x: Math.round(r.left), y: Math.round(r.top + window.scrollY), w: Math.round(r.width), h: Math.round(r.height) },
            color: cs.color, backgroundColor: cs.backgroundColor, fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight,
            backgroundImage: cs.backgroundImage && cs.backgroundImage !== 'none' ? cs.backgroundImage.slice(0,500) : '',
            src: tag === 'img' ? abs(el.currentSrc || el.src || el.getAttribute('src') || '') : '',
          });
        }
      }
    });
    const links = [...document.querySelectorAll('a')].map(a => ({ text: (a.innerText || a.textContent || '').replace(/\s+/g,' ').trim(), href: a.href || a.getAttribute('href') || '' })).filter(x => x.text || x.href);
    const headings = [...document.querySelectorAll('h1,h2,h3,h4,[role=heading]')].map(h => ({ tag: h.tagName.toLowerCase(), text: (h.innerText || h.textContent || '').replace(/\s+/g,' ').trim(), y: Math.round(h.getBoundingClientRect().top + window.scrollY) })).filter(h => h.text);
    const meta = [...document.querySelectorAll('meta')].map(m => ({ name: m.getAttribute('name') || m.getAttribute('property') || '', content: m.getAttribute('content') || '' })).filter(m => m.name || m.content);
    const texts = [...document.querySelectorAll('body *')]
      .map(el => (el.innerText || '').replace(/\s+/g, ' ').trim())
      .filter(t => t && t.length > 20 && t.length < 2000)
      .slice(0, 300);
    return {
      url: location.href,
      title: document.title,
      viewport: { w: innerWidth, h: innerHeight },
      pageHeight: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
      bodyTextSample: document.body.innerText.replace(/\s+/g,' ').trim().slice(0,12000),
      headings, links, meta, images: [...imageSet], backgroundImages: [...bgSet], elements, texts,
      computedBody: { background: getComputedStyle(document.body).background, color: getComputedStyle(document.body).color, fontFamily: getComputedStyle(document.body).fontFamily }
    };
  });
  data.networkAssets = unique(responses.map(r => r.url));
  data.responses = responses.slice(-500);
  fs.writeFileSync(path.join(outState, `${slug}-live-inspection.json`), JSON.stringify(data, null, 2));
  // Also save source HTML for direct grep if needed.
  fs.writeFileSync(path.join(outState, `${slug}-source.html`), await page.content());
  await browser.close();
})();
