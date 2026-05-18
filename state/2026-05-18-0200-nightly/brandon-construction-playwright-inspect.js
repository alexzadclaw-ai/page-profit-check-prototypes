const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

const url = 'https://br4nd0nconstructio.wixsite.com/my-site';
const outDir = 'state/2026-05-18-0200-nightly';
const shotDir = 'screenshots/2026-05-18-0200-nightly';
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(shotDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({
    executablePath: '/snap/bin/chromium',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1700 },
    deviceScaleFactor: 1,
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36'
  });
  const page = await context.newPage();
  page.setDefaultTimeout(45000);
  const responses = [];
  page.on('response', res => {
    const rurl = res.url();
    if (/wixstatic|static\.parastorage|filesusr|br4nd0n|wixsite/i.test(rurl)) {
      responses.push({url: rurl, status: res.status(), type: res.request().resourceType()});
    }
  });
  console.error('Going to', url);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForTimeout(5000);
  try { await page.waitForLoadState('networkidle', { timeout: 20000 }); } catch (e) {}
  // scroll a bit to trigger lazy images, then top again for target screenshot
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < Math.min(height, 5000); y += 800) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(500);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${shotDir}/brandon-construction-target.png`, fullPage: true });

  const data = await page.evaluate(() => {
    const clean = s => (s || '').replace(/\s+/g, ' ').trim();
    const abs = u => { try { return new URL(u, location.href).href; } catch { return u; } };
    const visible = el => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return cs.display !== 'none' && cs.visibility !== 'hidden' && parseFloat(cs.opacity || '1') > 0 && r.width > 0 && r.height > 0;
    };
    const rectObj = el => {
      const r = el.getBoundingClientRect();
      return {x: Math.round(r.x), y: Math.round(r.y + window.scrollY), w: Math.round(r.width), h: Math.round(r.height)};
    };
    const imgs = Array.from(document.images).map(img => ({
      src: abs(img.getAttribute('src') || ''),
      currentSrc: abs(img.currentSrc || ''),
      srcset: img.getAttribute('srcset') || '',
      alt: img.getAttribute('alt') || '',
      title: img.getAttribute('title') || img.closest('[title]')?.getAttribute('title') || '',
      id: img.id || '',
      className: img.className || '',
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      rect: rectObj(img),
      visible: visible(img)
    })).filter(i => i.src || i.currentSrc || i.srcset);

    const bgImages = [];
    const bgColors = [];
    for (const el of Array.from(document.querySelectorAll('*'))) {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) continue;
      const bg = cs.backgroundImage || '';
      if (bg && bg !== 'none' && /url\(/.test(bg)) {
        const urls = Array.from(bg.matchAll(/url\(["']?([^"')]+)["']?\)/g)).map(m => abs(m[1]));
        if (urls.length) bgImages.push({tag: el.tagName.toLowerCase(), id: el.id || '', className: String(el.className || '').slice(0,120), urls, rect: rectObj(el), backgroundSize: cs.backgroundSize, backgroundPosition: cs.backgroundPosition, visible: visible(el)});
      }
      const color = cs.backgroundColor;
      if (color && color !== 'rgba(0, 0, 0, 0)' && r.width > 50 && r.height > 20) {
        bgColors.push({tag: el.tagName.toLowerCase(), id: el.id || '', className: String(el.className || '').slice(0,90), color, rect: rectObj(el)});
      }
    }

    const anchors = Array.from(document.querySelectorAll('a')).map(a => ({
      text: clean(a.innerText || a.getAttribute('aria-label') || ''),
      href: abs(a.getAttribute('href') || ''),
      rect: rectObj(a),
      visible: visible(a)
    })).filter(a => a.text || a.href);

    const textBlocks = Array.from(document.querySelectorAll('h1,h2,h3,h4,p,span,div,li,button')).map(el => {
      const text = clean(el.innerText || el.textContent || '');
      if (!text || text.length < 2 || !visible(el)) return null;
      const childrenText = Array.from(el.children || []).map(c => clean(c.innerText || c.textContent || '')).join(' ');
      // keep leaf-like or headings/buttons; avoid giant duplicated containers
      const tag = el.tagName.toLowerCase();
      if (!/^h[1-4]$|p|span|li|button$/.test(tag) && text.length > 250) return null;
      return {tag, text: text.slice(0, 500), rect: rectObj(el), fontSize: getComputedStyle(el).fontSize, fontFamily: getComputedStyle(el).fontFamily, color: getComputedStyle(el).color, fontWeight: getComputedStyle(el).fontWeight, id: el.id || '', className: String(el.className || '').slice(0, 80)};
    }).filter(Boolean).sort((a,b) => a.rect.y - b.rect.y || a.rect.x - b.rect.x);

    const sections = Array.from(document.querySelectorAll('section,header,footer,[data-testid="mesh-container-content"],main')).map(el => ({
      tag: el.tagName.toLowerCase(), id: el.id || '', className: String(el.className || '').slice(0,120), rect: rectObj(el), text: clean(el.innerText || '').slice(0,1000), visible: visible(el)
    })).filter(s => s.visible).sort((a,b) => a.rect.y - b.rect.y);

    return {
      url: location.href,
      title: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.content || '',
      bodyText: clean(document.body?.innerText || '').slice(0, 12000),
      scroll: {width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight},
      viewport: {width: innerWidth, height: innerHeight},
      imgs, bgImages, anchors, textBlocks, sections,
      bgColors: bgColors.slice(0,300)
    };
  });
  data.responses = responses;
  fs.writeFileSync(`${outDir}/brandon-construction-live-inspection.json`, JSON.stringify(data, null, 2));
  console.log(JSON.stringify({title: data.title, url: data.url, scroll: data.scroll, images: data.imgs.length, bgImages: data.bgImages.length, anchors: data.anchors.length, screenshot: `${shotDir}/brandon-construction-target.png`}, null, 2));
  await browser.close();
})();
