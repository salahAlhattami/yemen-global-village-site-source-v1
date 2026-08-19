# القرية اليمنية — Yemeni Village

الموقع التعريفي الرسمي لمبادرة **القرية اليمنية** — وجهة دولية للتبادل الثقافي والحضاري تقدم تجربة يمنية متكاملة حول العالم.

The official marketing site for **Yemeni Village** — an international destination for cultural and civilizational exchange, bringing a complete Yemeni experience to the world.

تطوير وإدارة: **Core Media** · [coremedias.com](https://coremedias.com)

---

## نظرة عامة · Overview

موقع ثابت بتسع لغات، لكل لغة صفحتها المُولَّدة مسبقاً — HTML و CSS و JavaScript خالص، بلا أي إطار عمل.

A static site in nine languages, each pre-rendered to its own page — plain HTML, CSS and JavaScript, no framework.

## التشغيل محلياً · Running locally

يجب تشغيله عبر خادم محلي وليس بفتح الملف مباشرة، لأن المتصفحات تمنع تحميل الخطوط من `file://`.

Serve it over HTTP — opening the file directly breaks `@font-face` loading in most browsers.

```bash
npx -y http-server . -p 8734 -c-1
```

ثم افتح · then open <http://localhost:8734>

## بنية المشروع · Structure

```
index.html          الصفحة العربية (المصدر) · the Arabic page (source of truth)
en/ zh/ ja/ ko/      صفحات مُولَّدة — لا تحرّرها يدوياً
fr/ de/ es/ ru/      generated pages — never edit by hand
css/style.css       التصميم والحركات · design tokens, layout, animations
js/main.js          التفاعل واختيار اللغة · interactions, language wiring
js/i18n/*.json      نصوص كل لغة · copy per language
tools/              مولّد الصفحات وملفات الفهرسة · page + SEO generators
sitemap.xml robots.txt llms.txt
assets/
  fonts/            Thmanyah Sans · Thmanyah Serif · GE Contrast · Didot
  logos/            شعار القرية وشعار كور ميديا · village + Core Media marks
  img/              صور محسّنة للويب · web-optimised imagery
  docs/             الملف التعريفي PDF عربي/إنجليزي · profile PDFs
```

## الهوية البصرية · Design system

الاتجاه البصري **«الأطلس الحي»** — أساس فاتح تحريري مع فاصل داكن واحد.

The **"Living Atlas"** direction — a light editorial base with one dark interlude.

| اللون · Colour | القيمة |
| --- | --- |
| Orange Desert | `#FFA14D` |
| Green Terraces | `#74C177` |
| Turquoise Sea | `#0F3C4A` |
| Purple Highs | `#7C4A6B` |
| Coral | `#FF6268` |
| Warm canvas | `#F6F0E7` |

**الخطوط:** GE Contrast Bold للعناوين العربية، Thmanyah Sans للنصوص والواجهة، Didot للعناوين اللاتينية والأرقام.

> ⚠️ خط GE Contrast يستبدل الأرقام اللاتينية بأرقام عربية، لذلك استُثنيت الأرقام من نطاقه في `@font-face`، وتُعرض الأرقام دائماً لاتينية في اللغتين.
>
> GE Contrast substitutes Arabic-Indic glyphs for ASCII digits, so digits are excluded from its `unicode-range`. Numerals stay Latin in both languages.

## الترجمة · Localisation

الموقع متاح بتسع لغات · The site ships in nine languages:

| | اللغة | Language | الاتجاه · Dir |
| --- | --- | --- | --- |
| `ar` | العربية *(الافتراضية)* | العربية *(default)* | RTL |
| `en` | الإنجليزية | English | LTR |
| `zh` | الصينية المبسطة | 中文 (Simplified) | LTR |
| `ja` | اليابانية | 日本語 | LTR |
| `ko` | الكورية | 한국어 | LTR |
| `fr` | الفرنسية | Français | LTR |
| `de` | الألمانية | Deutsch | LTR |
| `es` | الإسبانية | Español | LTR |
| `ru` | الروسية | Русский | LTR |

كل لغة في ملف مستقل تحت `js/i18n/<code>.json`، ولا يُحمَّل سوى ملف اللغة النشطة. العربية موجودة أصلاً في `index.html` فلا تكلّف أي طلب.

Each language lives in its own `js/i18n/<code>.json`; only the active one is fetched. Arabic is already in `index.html`, so choosing it costs no request.

النصوص ترتبط بالعناصر عبر السمات · Copy is bound through attributes:

- `data-i18n` — نص العنصر · element text
- `data-i18n-ph` — النص البديل في الحقول · input placeholder
- `data-i18n-content` — محتوى وسوم meta · meta tag content

### روابط اللغات · Language URLs

كل لغة صفحة مستقلة: `/` للعربية و `/en/` و `/zh/` وهكذا. مسار الصفحة هو مصدر الحقيقة، وقائمة اللغات روابط `<a>` عادية — يتبعها الزوّار والزواحف على حدّ سواء.

Each language is its own page: `/` for Arabic, then `/en/`, `/zh/` and so on. The path is the source of truth and the picker is plain `<a>` links, so visitors and crawlers follow the same route.

`?lang=` ما زال يعمل على الصفحة الجذر من أجل الروابط المشاركة قبل هذا التغيير.

`?lang=` still works on the root page, for links shared before the move to directories.

### إضافة لغة جديدة · Adding a language

1. انسخ `js/i18n/en.json` إلى `js/i18n/<code>.json` وترجم القيم (لا تغيّر المفاتيح).
2. أضف السطر المقابل في `LANGS` في ثلاثة مواضع: `js/main.js`، والسكربت المبكر في `<head>`، و `tools/build-i18n-pages.js`.
3. أضف `<li>` في `#langMenu`، والسطر المقابل في `LANGS` داخل `tools/build-seo-files.js`.
4. إن كان الخط لا يغطي حروف اللغة، أضف كتلة `html[lang="<code>"]` في `css/style.css` كما هو الحال مع الصينية واليابانية والكورية والروسية.
5. شغّل `npm run build` لتوليد الصفحة الجديدة وتحديث `sitemap.xml` و `hreflang`.

> ⚠️ خطوط الهوية (Thmanyah و GE Contrast و Didot) تغطي الفرنسية والألمانية والإسبانية بالكامل، لكنها **لا تحتوي** حروفاً صينية أو يابانية أو كورية أو سيريلية — فتعتمد هذه اللغات الأربع على خطوط النظام لدى القارئ. الأرقام تبقى بخط Didot في كل اللغات.
>
> The identity fonts fully cover French, German and Spanish, but carry **no** Chinese, Japanese, Korean or Cyrillic glyphs — those four fall back to the reader's system faces. Numerals stay on Didot in every language.

## نموذج التواصل · Contact form

يفتح حالياً برنامج البريد لدى الزائر برسالة جاهزة. لتفعيل الإرسال الحقيقي، ضع رابط الخدمة (Formspree / Web3Forms) في `FORM_ENDPOINT` أعلى معالج النموذج في `js/main.js`.

Currently opens the visitor's mail client with a pre-filled message. To enable real submissions, set `FORM_ENDPOINT` in `js/main.js` to a Formspree / Web3Forms POST URL.

## الوجهات · Destinations

| الحالة · Status | الوجهة · Destination |
| --- | --- |
| سابقة · Past | أوساكا، اليابان — Osaka, Japan · 2024 |
| حالية · Current | شنغهاي، الصين — Shanghai, China · 2026 |
| قادمة · Upcoming | قريباً سيتم الإعلان — To be announced |

## النشر · Deployment

يُنشر عبر **GitHub Pages** من فرع `main` مباشرة (لا خطوة بناء). ملف `CNAME` يثبّت الدومين المخصص.

Deployed via **GitHub Pages** straight from `main` (no build step). The `CNAME` file pins the custom domain.

**الدومين · Domain:** <https://www.yemenglobalvillage.com> (مسجَّل لدى Hostinger · registered with Hostinger)

### إعداد DNS لدى Hostinger · DNS records

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| CNAME | `www` | `salahalhattami.github.io` | 3600 |
| A | `@` | `185.199.108.153` | 3600 |
| A | `@` | `185.199.109.153` | 3600 |
| A | `@` | `185.199.110.153` | 3600 |
| A | `@` | `185.199.111.153` | 3600 |

سجلات `A` تجعل النطاق المجرّد يحوّل تلقائياً إلى `www`. تحقّق من عناوين IP في توثيق GitHub Pages وقت الإعداد.

The `A` records let the apex redirect to `www`. Confirm the IPs against GitHub Pages docs at setup time.

بعد انتشار DNS: `Settings → Pages → Custom domain` ثم فعّل **Enforce HTTPS**.

Once DNS propagates: `Settings → Pages → Custom domain`, then enable **Enforce HTTPS**.

> ⚠️ لا تحذف ملف `CNAME` — حذفه يفصل الدومين المخصص عن الموقع.
>
> Do not delete `CNAME` — removing it unlinks the custom domain.

## الفهرسة وتحسين الظهور · Indexing, SEO & GEO

كل لغة **صفحة ثابتة حقيقية** لها رابطها الخاص، ونصها مكتوب داخل HTML — لا يحتاج JavaScript. هذا ضروري لأن زواحف محركات الإجابة الذكية (GPTBot، ClaudeBot، PerplexityBot، Google-Extended) لا تشغّل السكربتات، فكانت ثماني لغات غير مرئية لها تماماً.

Each language is a **real static page** at its own URL with its copy inside the HTML. This matters because AI answer-engine crawlers do not execute JavaScript — before this, eight of the nine languages were invisible to them.

| الملف · File | الغرض · Purpose |
| --- | --- |
| `<lang>/index.html` | صفحة مُولَّدة لكل لغة · pre-rendered page per language |
| `sitemap.xml` | التسع صفحات مع بدائل hreflang · all nine URLs with hreflang alternates |
| `robots.txt` | يسمح صراحة لزواحف البحث والذكاء الاصطناعي · explicitly allows search + AI crawlers |
| `llms.txt` | ملخّص المشروع لأنظمة الذكاء الاصطناعي ([llmstxt.org](https://llmstxt.org)) |

### إعادة البناء بعد أي تعديل · Rebuilding

**مهم:** أي تعديل على `index.html` أو ملفات `js/i18n/` يتطلّب إعادة توليد الصفحات، وإلا بقيت اللغات الأخرى على النص القديم.

Any edit to `index.html` or `js/i18n/` requires regenerating the pages, otherwise the other languages keep the old copy.

```bash
npm install        # مرة واحدة · once
npm run build      # يولّد صفحات اللغات + ملفات الفهرسة
```

يحتاج المولّد متصفح Chrome أو Edge مثبتاً؛ يبحث عنه تلقائياً، ويمكن تحديده بمتغيّر `CHROME_PATH`.

The generator needs Chrome or Edge installed; it looks in the usual places, or set `CHROME_PATH`.

### البيانات المنظّمة · Structured data

`index.html` يحمل `@graph` واحداً فيه `Organization` و `WebSite` و `ItemList` للعوالم الستة — ويُنسخ تلقائياً لكل اللغات عند البناء.

### بعد أول نشر · After first deploy

1. أضف الموقع في [Google Search Console](https://search.google.com/search-console) وأثبت الملكية بسجل TXT في Hostinger.
2. أرسل `sitemap.xml`.
3. كرّر الخطوتين في [Bing Webmaster Tools](https://www.bing.com/webmasters) — منه تتغذّى Copilot.

## الحقوق · Rights

جميع الحقوق محفوظة © 2026 القرية اليمنية. الصور والخطوط والشعارات ملك لأصحابها ومخصصة لاستخدام المشروع.

All rights reserved © 2026 Yemeni Village. Imagery, fonts and logos belong to their owners and are licensed for this project's use.
