/* ============================================================
   Pre-render one static page per language.

   Why: AI crawlers (GPTBot, ClaudeBot, PerplexityBot …) and many
   traditional ones do not execute JavaScript. With client-side
   translation they all saw the same Arabic HTML no matter the URL,
   so eight of nine languages were invisible to search and to AI
   answer engines. These generated pages ship the translated copy
   in the HTML itself.

   Run:  node tools/build-i18n-pages.js
   Then commit the generated <lang>/ directories.
   ============================================================ */
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://www.yemenglobalvillage.com';
/* Chrome path: override with CHROME_PATH, otherwise try the usual spots. */
function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const guesses = [
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium"
  ];
  const hit = guesses.find(p => { try { return fs.statSync(p).isFile(); } catch { return false; } });
  if (!hit) throw new Error("No Chrome found. Set CHROME_PATH to your browser binary.");
  return hit;
}
const PORT = 8791;

const LANGS = {
  ar: { doc: 'ar',      dir: 'rtl', ogLocale: 'ar_AR', path: '/' },
  en: { doc: 'en',      dir: 'ltr', ogLocale: 'en_US', path: '/en/' },
  zh: { doc: 'zh-Hans', dir: 'ltr', ogLocale: 'zh_CN', path: '/zh/' },
  ja: { doc: 'ja',      dir: 'ltr', ogLocale: 'ja_JP', path: '/ja/' },
  ko: { doc: 'ko',      dir: 'ltr', ogLocale: 'ko_KR', path: '/ko/' },
  fr: { doc: 'fr',      dir: 'ltr', ogLocale: 'fr_FR', path: '/fr/' },
  de: { doc: 'de',      dir: 'ltr', ogLocale: 'de_DE', path: '/de/' },
  es: { doc: 'es',      dir: 'ltr', ogLocale: 'es_ES', path: '/es/' },
  ru: { doc: 'ru',      dir: 'ltr', ogLocale: 'ru_RU', path: '/ru/' }
};
const DEFAULT = 'ar';

function hreflangBlock() {
  const rows = Object.entries(LANGS).map(([, m]) =>
    `<link rel="alternate" hreflang="${m.doc}" href="${ORIGIN}${m.path}">`);
  rows.push(`<link rel="alternate" hreflang="x-default" href="${ORIGIN}/">`);
  return rows.join('\n');
}

/* Rewrite the head for one language: canonical, alternates, og:url/locale. */
function fixHead(html, code) {
  const meta = LANGS[code];
  const url = ORIGIN + meta.path;

  html = html.replace(/<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${url}">`);

  // drop every existing alternate, then insert one clean set
  html = html.replace(/\n?[ \t]*<link rel="alternate" hreflang="[^"]*"[^>]*>/g, '');
  html = html.replace(/(<link rel="canonical"[^>]*>)/,
    `$1\n\n<!-- language alternates -->\n${hreflangBlock()}`);

  html = html.replace(/<meta property="og:url"[^>]*>/,
    `<meta property="og:url" content="${url}">`);
  html = html.replace(/<meta property="og:locale"[^>]*>/,
    `<meta property="og:locale" content="${meta.ogLocale}">`);
  html = html.replace(/\n?[ \t]*<meta property="og:locale:alternate"[^>]*>/g, '');
  const alts = Object.entries(LANGS)
    .filter(([c]) => c !== code)
    .map(([, m]) => `<meta property="og:locale:alternate" content="${m.ogLocale}">`)
    .join('\n');
  html = html.replace(/(<meta property="og:locale"[^>]*>)/, `$1\n${alts}`);

  return html;
}

(async () => {
  const http = require('http');
  const serve = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split('?')[0]);
    const file = path.join(ROOT, rel === '/' ? 'index.html' : rel);
    fs.readFile(file, (err, buf) => {
      if (err) { res.writeHead(404); return res.end('404'); }
      const ext = path.extname(file);
      const type = { '.html': 'text/html; charset=utf-8', '.css': 'text/css',
        '.js': 'text/javascript', '.json': 'application/json',
        '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png',
        '.otf': 'font/otf', '.ttf': 'font/ttf', '.pdf': 'application/pdf' }[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type });
      res.end(buf);
    });
  });
  await new Promise(r => serve.listen(PORT, r));

  const browser = await puppeteer.launch({
    executablePath: findChrome(), headless: 'new', args: ['--no-sandbox']
  });

  let built = 0;
  for (const [code, meta] of Object.entries(LANGS)) {
    if (code === DEFAULT) continue;              // the root page is the source

    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}/?lang=${code}`, { waitUntil: 'networkidle0' });
    await page.waitForFunction(
      c => document.documentElement.lang === c && !document.documentElement.hasAttribute('data-i18n-pending'),
      { timeout: 15000 }, meta.doc
    );

    let html = await page.evaluate(code => {
      const root = document.documentElement;
      root.setAttribute('data-prerendered', code);
      root.removeAttribute('data-i18n-pending');
      // strip the transient reveal state so the file is deterministic
      document.querySelectorAll('.reveal.visible').forEach(el => el.classList.remove('visible'));
      return '<!DOCTYPE html>\n' + root.outerHTML;
    }, code);

    html = fixHead(html, code);

    const dir = path.join(ROOT, code);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
    console.log(`  ${code}/index.html  ${(html.length / 1024).toFixed(0)} KB`);
    built++;
    await page.close();
  }

  // keep the Arabic source page's own head consistent with the new URLs
  let root = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  fs.writeFileSync(path.join(ROOT, 'index.html'), fixHead(root, DEFAULT), 'utf8');
  console.log(`  index.html (ar) head refreshed`);

  await browser.close();
  serve.close();
  console.log(`\nbuilt ${built} language pages`);
})().catch(e => { console.error(e); process.exit(1); });
