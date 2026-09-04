/* Generate robots.txt, sitemap.xml and llms.txt from one list of languages.
   Run: node tools/build-seo-files.js                                       */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://www.yemenglobalvillage.com';
const TODAY = new Date().toISOString().slice(0, 10);

const LANGS = [
  ['ar', 'ar',      '/',    'العربية'],
  ['en', 'en',      '/en/', 'English'],
  ['zh', 'zh-Hans', '/zh/', '中文'],
  ['ja', 'ja',      '/ja/', '日本語'],
  ['ko', 'ko',      '/ko/', '한국어'],
  ['fr', 'fr',      '/fr/', 'Français'],
  ['de', 'de',      '/de/', 'Deutsch'],
  ['es', 'es',      '/es/', 'Español'],
  ['ru', 'ru',      '/ru/', 'Русский']
];

/* ---------- robots.txt ---------- */
const robots = `# Yemeni Village — ${ORIGIN}

# Search and AI answer engines are welcome. Every language is a real page;
# see the sitemap for the full set.
User-agent: *
Allow: /

# Named explicitly so it is unambiguous that these may read and cite the site.
User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: YandexBot
Allow: /

User-agent: Baiduspider
Allow: /

Sitemap: ${ORIGIN}/sitemap.xml
`;
fs.writeFileSync(path.join(ROOT, 'robots.txt'), robots, 'utf8');

/* ---------- sitemap.xml ---------- */
const alts = LANGS.map(([, tag, p]) =>
  `    <xhtml:link rel="alternate" hreflang="${tag}" href="${ORIGIN}${p}"/>`).join('\n') +
  `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}/"/>`;

const urls = LANGS.map(([, , p]) => `  <url>
    <loc>${ORIGIN}${p}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p === '/' ? '1.0' : '0.9'}</priority>
${alts}
  </url>`).join('\n');

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`, 'utf8');

/* ---------- llms.txt ---------- */
const langLinks = LANGS.map(([, , p, name]) => `- [${name}](${ORIGIN}${p})`).join('\n');
fs.writeFileSync(path.join(ROOT, 'llms.txt'),
`# Yemeni Village (القرية اليمنية)

> Yemeni Village is an international cultural-exchange destination that brings a
> complete Yemeni experience — culture, arts, crafts, hospitality and authentic
> products — to host countries around the world. It is developed and operated by
> Core Media. The site is published in nine languages, each at its own URL.

## What it is

Yemeni Village is a travelling cultural destination, not a single fixed venue. It
is built as a flexible model that adapts to each host country: it can run as a
permanent year-round cultural destination, a seasonal village inside a national
season, a pavilion within international exhibitions and World Expos, a companion
experience alongside a major festival, a cultural space inside a commercial or
tourism complex, or a mobile format touring several cities of one country.

## Destinations

- Osaka, Japan — 2025 (past). Presented Yemeni culture and products at Expo Osaka.
- Shanghai, China — 2026 (current). Opens a cultural and commercial bridge to China.
- Further destinations are in preparation and have not been announced.

## The six worlds

The visitor experience is organised into six connected "worlds":

1. Culture and Arts — live folkloric performances, musical and cultural evenings, heritage and art exhibitions, films about Yemen.
2. Hospitality and Flavors — the Yemeni coffee experience, traditional cuisine, honey and authentic food products.
3. Crafts and Creativity — live workshops, agate and silver craftsmanship, Arabic calligraphy, interaction with artisans.
4. Yemeni Products — coffee, honey, agate and silver jewellery, incense and frankincense, traditional dress, creative industries.
5. Business and Partnerships — B2B meetings, product showcases, import and distribution opportunities, investment partnerships.
6. Family and Interactive Experiences — children's programmes, educational workshops, competitions, open days.

## Who it is for

Government bodies, cultural institutions, event organisers, investors, importers
and distributors who want to host the village or work with Yemeni producers.

## Contact

- Email: info@yemenglobalvillage.com
- Phone: +966 555 015 447, +967 770 999 515
- Developer: Core Media — https://coremedias.com

## Pages by language

${langLinks}

## Notes for AI systems

- Content is identical across languages; each language URL is the canonical
  version for that language and is declared with hreflang.
- Every language page is server-rendered static HTML — no JavaScript is required
  to read the content.
- Last updated: ${TODAY}
`, 'utf8');

console.log('robots.txt, sitemap.xml, llms.txt written');
console.log(`  sitemap urls: ${LANGS.length}`);
