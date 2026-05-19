const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const url = 'https://fibretechcarpetcar7.wixsite.com/fibretechcarpetcarel';
const root = process.cwd();
const batch = '2026-05-19-0200-nightly';
const slug = 'fibre-tech-carpet-care';
const stateDir = path.join(root, 'state', batch);
const shotDir = path.join(root, 'screenshots', batch);
fs.mkdirSync(stateDir, { recursive: true });
fs.mkdirSync(shotDir, { recursive: true });
const sleep = ms => new Promise(r => setTimeout(r, ms));

function uniq(arr) {
  return [...new Set(arr.filter(Boolean))];
}

(async () => {
  const browser = await chromium.launch({
    executablePath: '/snap/bin/chromium',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });
  const context = await browser.newContext({
    viewport: { width: 1365, height: 900 },
    deviceScaleFactor: 1,
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36 PageProfitCheckBot/1.0'
  });
  const page = await context.newPage();
  const resources = [];
  page.on('response', async (res) => {
    try {
      const req = res.request();
      const headers = res.headers();
      const ct = headers['content-type'] || '';
      const u = res.url();
      if (/image|font|css|javascript|json/.test(ct) || /wixstatic|static\.parastorage/.test(u)) {
        resources.push({ url: u, status: res.status(), type: req.resourceType(), contentType: ct });
      }
    } catch (e) {}
  });
  console.log('goto', url);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await sleep(7000);
  // Scroll to lazy-load all Wix content.
  const total = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  for (let y = 0; y <= total + 1000; y += 500) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await sleep(350);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(2000);

  const data = await page.evaluate(() => {
    const abs = (u) => { try { return new URL(u, location.href).href; } catch { return u; } };
    const textOf = el => (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
    const imgs = Array.from(document.images).map((img, i) => ({
      i,
      src: img.getAttribute('src'),
      currentSrc: img.currentSrc,
      srcset: img.getAttribute('srcset'),
      alt: img.getAttribute('alt'),
      width: img.naturalWidth,
      height: img.naturalHeight,
      client: { w: Math.round(img.getBoundingClientRect().width), h: Math.round(img.getBoundingClientRect().height), x: Math.round(img.getBoundingClientRect().x), y: Math.round(img.getBoundingClientRect().y) },
      outerHTML: img.outerHTML.slice(0, 500)
    }));
    const bgUrlRe = /url\(["']?([^"')]+)["']?\)/g;
    const backgrounds = [];
    for (const el of Array.from(document.querySelectorAll('*'))) {
      const cs = getComputedStyle(el);
      const props = ['backgroundImage', 'borderImageSource', 'listStyleImage', 'cursor'];
      for (const p of props) {
        const value = cs[p];
        if (value && value !== 'none') {
          let m;
          while ((m = bgUrlRe.exec(value))) {
            const r = el.getBoundingClientRect();
            backgrounds.push({
              url: abs(m[1]),
              prop: p,
              tag: el.tagName,
              id: el.id,
              className: String(el.className || '').slice(0, 180),
              text: textOf(el).slice(0, 180),
              rect: { x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) }
            });
          }
        }
      }
    }
    const links = Array.from(document.querySelectorAll('a')).map((a, i) => ({
      i,
      text: textOf(a),
      href: a.href,
      target: a.target,
      rect: (() => { const r = a.getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) }; })()
    }));
    const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,[role=heading]')).map((h, i) => ({
      i, tag: h.tagName, text: textOf(h),
      rect: (() => { const r = h.getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) }; })(),
      font: getComputedStyle(h).font, color: getComputedStyle(h).color
    }));
    const snippets = Array.from(document.querySelectorAll('section, header, footer, main, [id], [data-testid], div, p')).map((el, i) => {
      const t = textOf(el);
      if (!t || t.length < 8) return null;
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        i, tag: el.tagName, id: el.id, className: String(el.className || '').slice(0, 120), text: t.slice(0, 500),
        rect: { x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) },
        fontFamily: cs.fontFamily, fontSize: cs.fontSize, color: cs.color, backgroundColor: cs.backgroundColor
      };
    }).filter(Boolean).filter((x, idx, arr) => idx < 450);
    const cssText = Array.from(document.styleSheets).slice(0, 30).map((s) => {
      try { return Array.from(s.cssRules || []).slice(0, 200).map(r => r.cssText).join('\n'); } catch { return ''; }
    }).join('\n').slice(0, 100000);
    const html = document.documentElement.outerHTML.slice(0, 120000);
    return {
      url: location.href,
      title: document.title,
      viewport: { w: innerWidth, h: innerHeight },
      scroll: { width: document.documentElement.scrollWidth, height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) },
      bodyText: document.body.innerText.replace(/\s+\n/g, '\n').replace(/\n\s+/g, '\n').slice(0, 30000),
      images: imgs,
      backgrounds,
      links,
      headings,
      snippets,
      cssText,
      html
    };
  });
  data.resources = resources;
  fs.writeFileSync(path.join(stateDir, `${slug}-live-inspection.json`), JSON.stringify(data, null, 2));
  await page.screenshot({ path: path.join(shotDir, `${slug}-target.png`), fullPage: true, animations: 'disabled' });
  await browser.close();
  console.log(JSON.stringify({ title: data.title, url: data.url, height: data.scroll.height, images: data.images.length, backgrounds: data.backgrounds.length, links: data.links.length, resources: resources.length }, null, 2));
})();
