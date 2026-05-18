const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const url = 'https://afrotcdet115.wixsite.com/home-hero';
const outJson = 'state/2026-05-18-0200-nightly/home-hero-live-inspection.json';
const screenshot = 'screenshots/2026-05-18-0200-nightly/home-hero-target.png';

function unique(arr){ return [...new Set(arr.filter(Boolean))]; }

(async () => {
  const browser = await chromium.launch({ executablePath: '/snap/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const context = await browser.newContext({ viewport: { width: 1365, height: 900 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  page.setDefaultTimeout(70000);
  const responses = [];
  page.on('response', async r => {
    const u = r.url();
    if (/\.(png|jpg|jpeg|webp|gif|svg)(\?|$)/i.test(u) || u.includes('static.wixstatic.com') || u.includes('wixstatic')) {
      responses.push({ url: u, status: r.status(), contentType: r.headers()['content-type'] || '' });
    }
  });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(()=>{});
  await page.waitForTimeout(7000);
  // Dismiss any cookie/business overlays if obvious
  for (const text of ['Accept', 'I agree', 'Got it', 'Close']) {
    try { await page.getByText(text, { exact: false }).first().click({ timeout: 1000 }); } catch(e) {}
  }
  // Scroll to trigger lazy content/images, then back to top.
  const height = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  for (let y = 0; y <= height; y += 600) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(350);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1200);

  const data = await page.evaluate(() => {
    const abs = (u) => { try { return new URL(u, location.href).href; } catch { return u; } };
    const cleanBg = (v) => {
      if (!v || v === 'none') return [];
      return Array.from(v.matchAll(/url\(["']?([^"')]+)["']?\)/g)).map(m => abs(m[1]));
    };
    const visible = (el) => {
      const cs = getComputedStyle(el); const r = el.getBoundingClientRect();
      return cs.display !== 'none' && cs.visibility !== 'hidden' && cs.opacity !== '0' && r.width > 1 && r.height > 1;
    };
    const els = Array.from(document.querySelectorAll('body *')).filter(visible);
    const images = [];
    for (const el of els) {
      const cs = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      const srcs = [];
      if (el.currentSrc) srcs.push(el.currentSrc);
      if (el.src) srcs.push(el.src);
      if (el.getAttribute('src')) srcs.push(abs(el.getAttribute('src')));
      if (el.getAttribute('data-src')) srcs.push(abs(el.getAttribute('data-src')));
      if (el.getAttribute('srcset')) srcs.push(...el.getAttribute('srcset').split(',').map(s => s.trim().split(/\s+/)[0]).map(abs));
      srcs.push(...cleanBg(cs.backgroundImage));
      if (srcs.length) images.push({tag: el.tagName, id: el.id, cls: el.className, alt: el.alt || '', rect: {x: Math.round(rect.x), y: Math.round(rect.y+scrollY), w: Math.round(rect.width), h: Math.round(rect.height)}, urls: [...new Set(srcs)]});
    }
    const textBlocks = els.map(el => {
      const txt = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
      const childrenText = Array.from(el.children).map(c => (c.innerText || c.textContent || '').replace(/\s+/g, ' ').trim()).join(' ');
      if (!txt || txt.length < 2) return null;
      // Prefer leaf-ish or meaningful blocks.
      if (txt.length > 320 && childrenText.length > txt.length * 0.75) return null;
      const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
      return { tag: el.tagName, id: el.id, cls: String(el.className || '').slice(0,120), text: txt.slice(0,500), rect: {x: Math.round(r.x), y: Math.round(r.y+scrollY), w: Math.round(r.width), h: Math.round(r.height)}, font: cs.fontFamily, size: cs.fontSize, weight: cs.fontWeight, color: cs.color, bg: cs.backgroundColor };
    }).filter(Boolean);
    const anchors = Array.from(document.querySelectorAll('a')).map(a => ({text:(a.innerText||a.textContent||'').replace(/\s+/g,' ').trim(), href:a.href, id:a.id, cls:a.className}));
    const buttons = Array.from(document.querySelectorAll('button,[role=button],input[type=submit]')).map(b => ({text:(b.innerText||b.value||b.textContent||'').replace(/\s+/g,' ').trim(), id:b.id, cls:b.className}));
    const styles = Array.from(document.querySelectorAll('body *')).slice(0, 700).map(el => {
      if (!visible(el)) return null; const r=el.getBoundingClientRect(); const cs=getComputedStyle(el);
      return {tag:el.tagName,id:el.id,cls:String(el.className||'').slice(0,80),rect:{x:Math.round(r.x),y:Math.round(r.y+scrollY),w:Math.round(r.width),h:Math.round(r.height)}, color:cs.color,bg:cs.backgroundColor,font:cs.fontFamily,size:cs.fontSize,weight:cs.fontWeight,border:cs.border, radius:cs.borderRadius};
    }).filter(Boolean);
    const meta = Array.from(document.querySelectorAll('meta')).map(m => ({name:m.getAttribute('name'), property:m.getAttribute('property'), content:m.getAttribute('content')}));
    return {
      url: location.href,
      title: document.title,
      htmlLang: document.documentElement.lang,
      bodyText: document.body.innerText.replace(/\s+/g, ' ').trim(),
      viewport: {w: innerWidth, h: innerHeight},
      page: {w: document.documentElement.scrollWidth, h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)},
      meta, anchors, buttons, images, textBlocks, styles
    };
  });
  data.networkImages = responses;
  fs.writeFileSync(outJson, JSON.stringify(data, null, 2));
  await page.screenshot({ path: screenshot, fullPage: true });
  console.log(JSON.stringify({ ok:true, title:data.title, url:data.url, screenshot, outJson, page:data.page, images:data.images.length, anchors:data.anchors.length, textBlocks:data.textBlocks.length }, null, 2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
