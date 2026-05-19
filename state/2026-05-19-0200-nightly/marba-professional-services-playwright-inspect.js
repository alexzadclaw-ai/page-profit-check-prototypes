const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

const URL = 'https://marbapros.wixsite.com/lawns';
const ROOT = '/home/claw/.openclaw/workspace/page-profit-check-prototypes';
const batch = '2026-05-19-0200-nightly';
const slug = 'marba-professional-services';
const stateDir = path.join(ROOT, 'state', batch);
const shotDir = path.join(ROOT, 'screenshots', batch);
fs.mkdirSync(stateDir, { recursive: true });
fs.mkdirSync(shotDir, { recursive: true });

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const context = await browser.newContext({ viewport: { width: 1365, height: 1400 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  page.setDefaultTimeout(60000);
  const requests = [];
  page.on('response', async (res) => {
    const req = res.request();
    const type = req.resourceType();
    const u = res.url();
    if (['image','font','stylesheet','script','document'].includes(type)) {
      requests.push({ type, url: u, status: res.status(), contentType: res.headers()['content-type'] || '' });
    }
  });
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForLoadState('networkidle', { timeout: 45000 }).catch(() => {});
  await sleep(3000);
  // Scroll in increments to trigger Wix lazy loading and sticky/animation states.
  const fullHeight = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  for (let y = 0; y <= fullHeight + 1200; y += 450) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await sleep(450);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(1500);
  await page.screenshot({ path: path.join(shotDir, `${slug}-target.png`), fullPage: true });

  const data = await page.evaluate(() => {
    const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
    const toAbs = (u) => {
      try { return new URL(u, location.href).href; } catch { return u; }
    };
    const images = Array.from(document.images).map((img, idx) => ({
      idx,
      tag: 'img',
      src: img.getAttribute('src') ? toAbs(img.getAttribute('src')) : '',
      currentSrc: img.currentSrc || '',
      srcset: img.getAttribute('srcset') || '',
      alt: img.getAttribute('alt') || '',
      title: img.getAttribute('title') || '',
      widthAttr: img.getAttribute('width') || '',
      heightAttr: img.getAttribute('height') || '',
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      clientWidth: Math.round(img.getBoundingClientRect().width),
      clientHeight: Math.round(img.getBoundingClientRect().height),
      classes: img.className || '',
      id: img.id || '',
      parentText: clean(img.closest('section, div, figure, a')?.innerText || '').slice(0, 220),
      rect: (() => { const r = img.getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) }; })()
    })).filter(x => x.src || x.currentSrc || x.srcset);

    const bgElements = [];
    const urlRegex = /url\(["']?([^"')]+)["']?\)/g;
    for (const el of Array.from(document.querySelectorAll('body, body *'))) {
      const cs = getComputedStyle(el);
      const bg = cs.backgroundImage;
      if (bg && bg !== 'none' && bg.includes('url(')) {
        const urls = [];
        let m;
        while ((m = urlRegex.exec(bg)) !== null) urls.push(toAbs(m[1]));
        const r = el.getBoundingClientRect();
        bgElements.push({
          tag: el.tagName.toLowerCase(),
          id: el.id || '',
          classes: typeof el.className === 'string' ? el.className : '',
          text: clean(el.innerText || el.getAttribute('aria-label') || '').slice(0, 180),
          backgroundImage: bg,
          urls,
          backgroundSize: cs.backgroundSize,
          backgroundPosition: cs.backgroundPosition,
          backgroundRepeat: cs.backgroundRepeat,
          rect: { x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) },
          color: cs.color,
          backgroundColor: cs.backgroundColor,
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize
        });
      }
    }

    const textBlocks = Array.from(document.querySelectorAll('h1,h2,h3,h4,p,li,span,a,button')).map((el, idx) => {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        idx,
        tag: el.tagName.toLowerCase(),
        text: clean(el.innerText || el.textContent || ''),
        href: el.href || '',
        aria: el.getAttribute('aria-label') || '',
        rect: { x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) },
        color: cs.color,
        bg: cs.backgroundColor,
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        display: cs.display
      };
    }).filter(x => x.text || x.href || x.aria);

    const allLinks = Array.from(document.querySelectorAll('a[href]')).map((a, idx) => ({ idx, text: clean(a.innerText || a.textContent || a.getAttribute('aria-label') || ''), href: a.href, target: a.target || '' }));
    const sections = Array.from(document.querySelectorAll('section, header, footer, main, [data-testid], [id]')).slice(0, 300).map((el, idx) => {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return { idx, tag: el.tagName.toLowerCase(), id: el.id || '', dataTestid: el.getAttribute('data-testid') || '', className: typeof el.className === 'string' ? el.className : '', text: clean(el.innerText || '').slice(0, 400), rect: { x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) }, bg: cs.backgroundColor, color: cs.color, font: cs.fontFamily };
    });

    return {
      url: location.href,
      title: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      htmlLang: document.documentElement.lang || '',
      viewport: { width: innerWidth, height: innerHeight, scrollHeight: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) },
      images,
      backgrounds: bgElements,
      textBlocks,
      links: allLinks,
      sections,
      bodyText: clean(document.body.innerText || '').slice(0, 12000)
    };
  });
  data.requests = requests;
  fs.writeFileSync(path.join(stateDir, `${slug}-live-inspection.json`), JSON.stringify(data, null, 2));
  await context.close();
  await browser.close();
})();
