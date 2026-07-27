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

كل النصوص في قاموس `I18N` داخل `js/main.js`، وترتبط بالعناصر عبر السمات:

All copy lives in the `I18N` dictionary in `js/main.js`, bound through attributes:

- `data-i18n` — نص العنصر · element text
- `data-i18n-ph` — النص البديل في الحقول · input placeholder
- `data-i18n-content` — محتوى وسوم meta · meta tag content

اللغة المختارة تُحفظ في `localStorage` تحت المفتاح `yv-lang`.

## نموذج التواصل · Contact form

يفتح حالياً برنامج البريد لدى الزائر برسالة جاهزة. لتفعيل الإرسال الحقيقي، ضع رابط الخدمة (Formspree / Web3Forms) في `FORM_ENDPOINT` أعلى معالج النموذج في `js/main.js`.

Currently opens the visitor's mail client with a pre-filled message. To enable real submissions, set `FORM_ENDPOINT` in `js/main.js` to a Formspree / Web3Forms POST URL.

## الوجهات · Destinations

| الحالة · Status | الوجهة · Destination |
| --- | --- |
| سابقة · Past | أوساكا، اليابان — Osaka, Japan · 2024 |
| حالية · Current | شنغهاي، الصين — Shanghai, China · 2026 |
| قادمة · Upcoming | قريباً سيتم الإعلان — To be announced |

## الحقوق · Rights

جميع الحقوق محفوظة © 2026 القرية اليمنية. الصور والخطوط والشعارات ملك لأصحابها ومخصصة لاستخدام المشروع.

All rights reserved © 2026 Yemeni Village. Imagery, fonts and logos belong to their owners and are licensed for this project's use.
