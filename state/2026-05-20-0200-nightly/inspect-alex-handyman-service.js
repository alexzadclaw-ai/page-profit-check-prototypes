const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const url = 'https://alexhandyman.wixsite.com/home';
const batch = '2026-05-20-0200-nightly';
const slug = 'alex-handyman-service';
const outDir = path.resolve('state', batch);
const shotDir = path.resolve('screenshots', batch);
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(shotDir, { recursive: true });

function uniq(arr) { return [...new Set(arr.filter(Boolean))]; }

(async () => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1400 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  page.setDefaultTimeout(90000);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  // Trigger Wix lazy-load assets.
  for (let i = 0; i < 12; i++) {
    await page.mouse.wheel(0, 900);
    await page.waitForTimeout(500);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(shotDir, `${slug}-target.png`), fullPage: true, animations: 'disabled' });

  const data = await page.evaluate(() => {
    const abs = (u) => { try { return new URL(u, location.href).href; } catch { return u; } };
    const styleInfo = [];
    const bgUrls = [];
    const visibleEls = [...document.querySelectorAll('body *')].filter(el => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return cs.visibility !== 'hidden' && cs.display !== 'none' && r.width > 1 && r.height > 1;
    });
    for (const el of visibleEls) {
      const cs = getComputedStyle(el);
      const bg = cs.backgroundImage;
      if (bg && bg !== 'none') {
        for (const m of bg.matchAll(/url\(["']?([^"')]+)["']?\)/g)) bgUrls.push(abs(m[1]));
      }
      const txt = (el.innerText || el.textContent || '').trim().replace(/\s+/g, ' ');
      if (txt && txt.length < 180 && ['H1','H2','H3','P','A','SPAN','BUTTON','DIV'].includes(el.tagName)) {
        styleInfo.push({ tag: el.tagName, text: txt, color: cs.color, backgroundColor: cs.backgroundColor, fontSize: cs.fontSize, fontFamily: cs.fontFamily, fontWeight: cs.fontWeight, rect: { x: Math.round(el.getBoundingClientRect().x), y: Math.round(el.getBoundingClientRect().y + window.scrollY), w: Math.round(el.getBoundingClientRect().width), h: Math.round(el.getBoundingClientRect().height) } });
      }
    }
    const images = [...document.images].map((img) => ({
      src: abs(img.getAttribute('src') || ''),
      currentSrc: abs(img.currentSrc || ''),
      alt: img.alt || '',
      width: img.naturalWidth || 0,
      height: img.naturalHeight || 0,
      rendered: { w: Math.round(img.getBoundingClientRect().width), h: Math.round(img.getBoundingClientRect().height), x: Math.round(img.getBoundingClientRect().x), y: Math.round(img.getBoundingClientRect().y + window.scrollY) },
      visible: !!(img.offsetWidth || img.offsetHeight || img.getClientRects().length)
    }));
    const links = [...document.querySelectorAll('a[href]')].map(a => ({ text: (a.innerText || a.textContent || '').trim().replace(/\s+/g,' '), href: abs(a.getAttribute('href')) }));
    const visibleText = document.body.innerText.replace(/\n{3,}/g, '\n\n').trim();
    const title = document.title;
    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    return { url: location.href, title, metaDescription, visibleText, links, images, backgroundImages: [...new Set(bgUrls)], styleInfo: styleInfo.slice(0, 400), htmlLang: document.documentElement.lang };
  });
  fs.writeFileSync(path.join(outDir, `${slug}-inspection.json`), JSON.stringify(data, null, 2));
  fs.writeFileSync(path.join(outDir, `${slug}-visible-text.txt`), data.visibleText);
  await browser.close();
})();
