const { chromium } = require('playwright');
const fs = require('fs');

const urls = [
  'https://nvhandyman.wixsite.com/a1-handyman-service',
  'https://a1handymanservice.online'
];

(async () => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1400 }, deviceScaleFactor: 1 });
  page.setDefaultTimeout(90000);
  const results = [];
  for (const url of urls) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 }).catch(e => console.error('goto failed', url, e.message));
    await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(2500);
    const safe = url.includes('wixsite') ? 'wixsite' : 'domain';
    await page.screenshot({ path: `screenshots/2026-05-20-0200-nightly/a1-handyman-service-nv-${safe}-target.png`, fullPage: true });
    const html = await page.content();
    fs.writeFileSync(`state/2026-05-20-0200-nightly/a1-handyman-service-nv-${safe}-source.html`, html);
    const info = await page.evaluate(() => {
      const clean = s => (s || '').replace(/\s+/g, ' ').trim();
      const links = [...document.querySelectorAll('a')].map(a => ({ text: clean(a.innerText || a.getAttribute('aria-label') || a.title), href: a.href })).filter(x => x.text || x.href);
      const images = [...document.images].map(img => ({ alt: img.alt || '', src: img.currentSrc || img.src || '', naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight }));
      return {
        url: location.href,
        title: document.title,
        statusText: clean(document.body.innerText).slice(0, 1200),
        page: { scrollHeight: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), scrollWidth: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) },
        links,
        images
      };
    });
    results.push({ requestedUrl: url, ...info });
  }
  fs.writeFileSync('state/2026-05-20-0200-nightly/a1-handyman-service-nv-inspection.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results.map(r => ({ requestedUrl:r.requestedUrl, finalUrl:r.url, title:r.title, text:r.statusText.slice(0,180), images:r.images.length, links:r.links.length })), null, 2));
  await browser.close();
})();
