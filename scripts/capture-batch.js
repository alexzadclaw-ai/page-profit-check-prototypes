const { chromium } = require('playwright');
const fs = require('fs');
const http = require('http');
const path = require('path');

const root = path.resolve(__dirname, '..');
const batch = process.argv[2];
if (!batch) {
  console.error('Usage: node scripts/capture-batch.js <batch>');
  process.exit(1);
}
const metaPath = path.join(root, 'opportunities', batch, 'batch.json');
if (!fs.existsSync(metaPath)) {
  console.error(`Missing ${metaPath}`);
  process.exit(1);
}
const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
const shotDir = path.join(root, 'screenshots', batch);
fs.mkdirSync(shotDir, { recursive: true });
const baseUrl = process.env.PPC_CAPTURE_BASE_URL || '';
const sleep = ms => new Promise(r => setTimeout(r, ms));

function contentType(file) {
  const ext = path.extname(file).toLowerCase();
  return {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
  }[ext] || 'application/octet-stream';
}

function startStaticServer() {
  const server = http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname);
      const requested = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, '');
      const filePath = path.join(root, requested);
      if (!filePath.startsWith(root) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType(filePath) });
      fs.createReadStream(filePath).pipe(res);
    } catch (err) {
      res.writeHead(500);
      res.end(String(err.message || err));
    }
  });
  return new Promise(resolve => {
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, url: `http://127.0.0.1:${port}` });
    });
  });
}

(async () => {
  const localServer = baseUrl ? null : await startStaticServer();
  const resolvedBaseUrl = baseUrl || localServer.url;
  const browser = await chromium.launch({
    executablePath: '/snap/bin/chromium',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 2200 }, deviceScaleFactor: 1 });
  for (const item of meta.items) {
    const slug = item.slug;
    const targetPath = path.join(shotDir, `${slug}-target.png`);
    const protoPath = path.join(shotDir, `${slug}-prototype.png`);
    const page = await context.newPage();
    try {
      console.log(`TARGET ${slug} -> ${item.url}`);
      await page.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 90000 });
      await sleep(6000);
      await page.screenshot({ path: targetPath, fullPage: true });
      console.log(`TARGET OK ${slug}`);
    } catch (err) {
      console.error(`TARGET FAIL ${slug}: ${err.message}`);
    }
    try {
      const protoUrl = `${resolvedBaseUrl}/prototypes/${batch}/${slug}/index.html`;
      console.log(`PROTO ${slug} -> ${protoUrl}`);
      await page.goto(protoUrl, { waitUntil: 'networkidle', timeout: 30000 });
      await sleep(1200);
      await page.screenshot({ path: protoPath, fullPage: true });
      console.log(`PROTO OK ${slug}`);
    } catch (err) {
      console.error(`PROTO FAIL ${slug}: ${err.message}`);
    }
    await page.close();
  }
  await browser.close();
  if (localServer) localServer.server.close();
})();
