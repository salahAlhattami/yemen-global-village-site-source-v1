# القرية اليمنية — Yemeni Village

الموقع التعريفي الرسمي لمبادرة **القرية اليمنية** — وجهة دولية للتبادل الثقافي والحضاري تقدم تجربة يمنية متكاملة حول العالم.

The official marketing site for **Yemeni Village** — an international destination for cultural and civilizational exchange, bringing a complete Yemeni experience to the world.

تطوير وإدارة: **Core Media** · [coremedias.com](https://coremedias.com)

---

## نظرة عامة · Overview

موقع ثابت من صفحة واحدة، ثنائي اللغة (عربي RTL افتراضياً / إنجليزي LTR)، بلا أي إطار عمل أو خطوة بناء — HTML و CSS و JavaScript خالص.

A single-page static site, bilingual (Arabic RTL by default / English LTR), with no framework and no build step — plain HTML, CSS and JavaScript.

## التشغيل محلياً · Running locally

يجب تشغيله عبر خادم محلي وليس بفتح الملف مباشرة، لأن المتصفحات تمنع تحميل الخطوط من `file://`.

Serve it over HTTP — opening the file directly breaks `@font-face` loading in most browsers.

```bash
npx -y http-server . -p 8734 -c-1
```

ثم افتح · then open <http://localhost:8734>

## بنية المشروع · Structure

```
index.html          الصفحة الكاملة · the whole page
css/style.css       التصميم والحركات · design tokens, layout, animations
js/main.js          الترجمة والتفاعل · i18n dictionary, scroll reveal, form
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

الموقع متاح بست لغات · The site ships in six languages:

| | اللغة | Language | الاتجاه |
| --- | --- | --- | --- |
| `ar` | العربية *(الافتراضية)* | Arabic *(default)* | RTL |
| `en` | الإنجليزية | English | LTR |
| `zh` | الصينية المبسطة | 中文 (Simplified) | LTR |
| `ja` | اليابانية | 日本語 | LTR |
| `fr` | الفرنسية | Français | LTR |
| `es` | الإسبانية | Español | LTR |

كل لغة في ملف مستقل تحت `js/i18n/<code>.json`، ولا يُحمَّل سوى ملف اللغة النشطة. العربية موجودة أصلاً في `index.html` فلا تكلّف أي طلب.

Each language lives in its own `js/i18n/<code>.json`; only the active one is fetched. Arabic is already in `index.html`, so choosing it costs no request.

النصوص ترتبط بالعناصر عبر السمات · Copy is bound through attributes:

- `data-i18n` — نص العنصر · element text
- `data-i18n-ph` — النص البديل في الحقول · input placeholder
- `data-i18n-content` — محتوى وسوم meta · meta tag content

### اختيار اللغة · Language resolution

الأولوية · Priority: `?lang=` في الرابط ← الاختيار المحفوظ (`localStorage` بمفتاح `yv-lang`) ← لغة المتصفح ← العربية.

الرابط له الأولوية، فيمكن مشاركة صفحة بلغة محددة مباشرة — مثل `?lang=zh` لشريك صيني.

The URL wins, so a link can be shared in a specific language — e.g. `?lang=zh` for a Chinese partner.

### إضافة لغة جديدة · Adding a language

1. انسخ `js/i18n/en.json` إلى `js/i18n/<code>.json` وترجم القيم (لا تغيّر المفاتيح).
2. أضف السطر المقابل في `LANGS` داخل `js/main.js` وفي `LANGS` داخل السكربت المبكر في `<head>`.
3. أضف `<li>` في `#langMenu` و `<link rel="alternate" hreflang>` في `<head>`.
4. إن كان الخط لا يغطي حروف اللغة، أضف كتلة `html[lang="<code>"]` في `css/style.css` كما هو الحال مع الصينية واليابانية.

> ⚠️ خطوط الهوية (Thmanyah و GE Contrast و Didot) لا تحتوي حروفاً صينية أو يابانية، لذلك تعتمد هاتان اللغتان على خطوط النظام لدى القارئ. الأرقام تبقى بخط Didot في كل اللغات.
>
> The identity fonts carry no CJK glyphs, so Chinese and Japanese fall back to the reader's system faces. Numerals stay on Didot in every language.

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

## الحقوق · Rights

جميع الحقوق محفوظة © 2026 القرية اليمنية. الصور والخطوط والشعارات ملك لأصحابها ومخصصة لاستخدام المشروع.

All rights reserved © 2026 Yemeni Village. Imagery, fonts and logos belong to their owners and are licensed for this project's use.
