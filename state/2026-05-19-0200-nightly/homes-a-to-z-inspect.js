const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const root = '/home/claw/.openclaw/workspace/page-profit-check-prototypes';
const batch = '2026-05-19-0200-nightly';
const slug = 'homes-a-to-z';
const url = 'https://homesatoz1.wixsite.com/mysite';
const stateDir = path.join(root, 'state', batch);
const screenshotDir = path.join(root, 'screenshots', batch);
fs.mkdirSync(stateDir, { recursive: true });
fs.mkdirSync(screenshotDir, { recursive: true });

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

(async () => {
  const browser = await chromium.launch({
    executablePath: '/snap/bin/chromium',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });
  const context = await browser.newContext({
    viewport: { width: 1365, height: 900 },
    deviceScaleFactor: 1,
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  page.setDefaultTimeout(90000);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForLoadState('networkidle', { timeout: 45000 }).catch(() => {});
  await sleep(2500);

  // Scroll through the Wix page to trigger lazy-loaded media.
  const scrollLog = [];
  const bodyHeight = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  for (let y = 0; y <= bodyHeight + 900; y += 450) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await sleep(240);
    scrollLog.push(y);
  }
  await sleep(1000);
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(1200);

  const extraction = await page.evaluate(() => {
    const abs = (u) => {
      try { return new URL(u, location.href).href; } catch { return u; }
    };
    const parseUrls = (value) => {
      if (!value || value === 'none') return [];
      const urls = [];
      const re = /url\((['"]?)(.*?)\1\)/g;
      let m;
      while ((m = re.exec(value))) {
        if (m[2] && !m[2].startsWith('data:')) urls.push(abs(m[2]));
      }
      return urls;
    };
    const rectFor = (el) => {
      const r = el.getBoundingClientRect();
      return {
        x: Math.round(r.x), y: Math.round(r.y + window.scrollY),
        w: Math.round(r.width), h: Math.round(r.height)
      };
    };
    const visible = (el) => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return cs && cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) > 0.01 && r.width > 1 && r.height > 1;
    };
    const images = Array.from(document.images).filter(visible).map((img, i) => ({
      index: i,
      src: abs(img.currentSrc || img.src || ''),
      rawSrc: img.getAttribute('src'),
      alt: img.alt || '',
      rect: rectFor(img),
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      className: img.className || '',
      id: img.id || ''
    })).filter(x => x.src && !x.src.startsWith('data:'));
    const backgroundImages = [];
    const seenBg = new Set();
    Array.from(document.querySelectorAll('*')).forEach((el, i) => {
      if (!visible(el)) return;
      const cs = getComputedStyle(el);
      const values = [cs.backgroundImage, cs.borderImageSource, cs.listStyleImage, cs.content].filter(Boolean);
      const urls = values.flatMap(parseUrls);
      urls.forEach(src => {
        const key = src + JSON.stringify(rectFor(el));
        if (!seenBg.has(key)) {
          seenBg.add(key);
          backgroundImages.push({ index: i, tag: el.tagName.toLowerCase(), id: el.id || '', className: el.className || '', src, rect: rectFor(el), css: cs.backgroundImage });
        }
      });
    });
    const links = Array.from(document.querySelectorAll('a[href]')).filter(visible).map((a, i) => ({
      index: i,
      href: abs(a.getAttribute('href')),
      text: (a.innerText || a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 200),
      rect: rectFor(a)
    }));
    const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,[role="heading"]')).filter(visible).map((h, i) => ({
      index: i,
      tag: h.tagName.toLowerCase(),
      text: (h.innerText || h.textContent || '').trim().replace(/\s+/g, ' '),
      rect: rectFor(h),
      fontSize: getComputedStyle(h).fontSize,
      color: getComputedStyle(h).color,
      fontFamily: getComputedStyle(h).fontFamily
    })).filter(h => h.text);
    const visibleTextBlocks = Array.from(document.querySelectorAll('p,span,div,li,button')).filter(el => visible(el)).map((el, i) => {
      const text = (el.innerText || el.textContent || '').trim().replace(/\s+/g, ' ');
      const r = rectFor(el);
      const cs = getComputedStyle(el);
      return { index: i, tag: el.tagName.toLowerCase(), text, rect: r, fontSize: cs.fontSize, color: cs.color, backgroundColor: cs.backgroundColor, fontFamily: cs.fontFamily };
    }).filter(x => x.text && x.text.length > 1 && x.text.length < 600 && x.rect.w > 5 && x.rect.h > 5)
      .slice(0, 400);
    const colors = {};
    Array.from(document.querySelectorAll('*')).filter(visible).slice(0, 2000).forEach(el => {
      const cs = getComputedStyle(el);
      [cs.color, cs.backgroundColor, cs.borderTopColor].forEach(c => {
        if (c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent') colors[c] = (colors[c] || 0) + 1;
      });
    });
    return {
      url: location.href,
      title: document.title,
      bodyScrollHeight: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
      viewport: { width: innerWidth, height: innerHeight },
      images,
      backgroundImages,
      links,
      headings,
      visibleTextBlocks,
      commonColors: Object.entries(colors).sort((a,b) => b[1]-a[1]).slice(0, 40),
      documentTextSample: document.body.innerText.replace(/\s+/g, ' ').slice(0, 6000)
    };
  });
  extraction.scrollLog = scrollLog;
  fs.writeFileSync(path.join(stateDir, `${slug}-live-inspection.json`), JSON.stringify(extraction, null, 2));
  fs.writeFileSync(path.join(stateDir, `${slug}-source.html`), await page.content());
  await page.screenshot({ path: path.join(screenshotDir, `${slug}-target.png`), fullPage: true });
  await browser.close();
})();
