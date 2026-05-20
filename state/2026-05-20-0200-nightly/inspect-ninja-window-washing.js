const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const slug = 'ninja-window-washing';
const batch = '2026-05-20-0200-nightly';
const url = 'https://ninjawindowwashing.wixsite.com/home';
const outState = path.join('state', batch);
const outShots = path.join('screenshots', batch);
fs.mkdirSync(outState, { recursive: true });
fs.mkdirSync(outShots, { recursive: true });

(async () => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1400 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  page.setDefaultTimeout(60000);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForTimeout(4000);
  // Dismiss common popups if present without failing.
  for (const text of ['Accept', 'Got it', 'Close', 'I Agree']) {
    try { await page.getByText(text, { exact: false }).first().click({ timeout: 1000 }); } catch {}
  }
  // Scroll slowly to force Wix/lazy assets to resolve.
  const height = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  for (let y = 0; y <= height + 1400; y += 500) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(350);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const abs = (u) => {
      try { return new URL(u, location.href).href; } catch { return u; }
    };
    const bgUrls = [];
    const elements = Array.from(document.querySelectorAll('*'));
    for (const el of elements) {
      const cs = getComputedStyle(el);
      const bg = cs.backgroundImage;
      if (bg && bg !== 'none') {
        const matches = [...bg.matchAll(/url\((['\"]?)(.*?)\1\)/g)].map(m => abs(m[2]));
        if (matches.length) bgUrls.push({ tag: el.tagName, id: el.id || '', className: String(el.className || '').slice(0, 180), backgroundImage: bg, urls: matches, rect: el.getBoundingClientRect().toJSON?.() || {} });
      }
    }
    return {
      capturedAt: new Date().toISOString(),
      url: location.href,
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content || '',
      bodyText: document.body.innerText,
      h1: Array.from(document.querySelectorAll('h1')).map(h => h.innerText.trim()),
      h2: Array.from(document.querySelectorAll('h2')).map(h => h.innerText.trim()),
      links: Array.from(document.links).map(a => ({ text: a.innerText.trim(), href: a.href, target: a.target || '' })),
      images: Array.from(document.images).map(img => ({ alt: img.alt || '', src: img.src, currentSrc: img.currentSrc || '', width: img.naturalWidth, height: img.naturalHeight, className: img.className || '', id: img.id || '' })),
      backgrounds: bgUrls,
      colors: (() => {
        const counts = {};
        for (const el of elements) {
          const cs = getComputedStyle(el);
          for (const prop of ['color','backgroundColor','borderTopColor']) {
            const val = cs[prop];
            if (val && val !== 'rgba(0, 0, 0, 0)') counts[val] = (counts[val] || 0) + 1;
          }
        }
        return Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,25);
      })(),
      dimensions: { scrollWidth: document.documentElement.scrollWidth, scrollHeight: document.documentElement.scrollHeight, innerWidth, innerHeight }
    };
  });
  fs.writeFileSync(path.join(outState, `${slug}-inspection.json`), JSON.stringify(data, null, 2));
  fs.writeFileSync(path.join(outState, `${slug}-visible-text.txt`), data.bodyText);
  fs.writeFileSync(path.join(outState, `${slug}-source.html`), await page.content());
  await page.screenshot({ path: path.join(outShots, `${slug}-target.png`), fullPage: true });
  console.log(JSON.stringify({ title: data.title, url: data.url, images: data.images.length, backgrounds: data.backgrounds.length, links: data.links.length, dimensions: data.dimensions }, null, 2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
