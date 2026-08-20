# Working on this project

Instructions for anyone — human or agent — picking up the Yemeni Village site.
Read this and `DESIGN_SOURCE.md` before changing anything.

**Live:** <https://www.yemenglobalvillage.com>
**Repo:** `salahAlhattami/yemen-global-village-site-source-v1`, branch `main`
**Hosting:** GitHub Pages, served straight from `main`. Push = deploy (~1 min).
**Owner:** Salah Alhattami. Developer of the initiative: Core Media.

---

## The one rule that breaks things silently

Arabic lives in `index.html`. The other eight languages are **generated files**.

```bash
npm install     # once
npm run build   # after ANY edit to index.html or js/i18n/*.json
```

Skip this and the other eight languages keep the old copy with no error, no
warning, nothing in the diff to notice. Always run it, always commit the
regenerated `<lang>/index.html` files.

Never hand-edit `en/`, `zh/`, `ja/`, `ko/`, `fr/`, `de/`, `es/`, `ru/`.

---

## Why the site is built this way

AI answer-engine crawlers — GPTBot, ClaudeBot, PerplexityBot, Google-Extended —
**do not execute JavaScript**. The site used to translate itself client-side, so
`?lang=zh` returned pure Arabic HTML to every one of them. Eight of nine
languages were invisible to AI search, and Google saw nine URLs of duplicate
Arabic content.

So each language is now pre-rendered to its own static page. If you ever change
how language switching works, **keep the static pages**. Do not go back to
in-place JS switching.

---

## Layout

```
index.html            Arabic page — the source of truth for markup
en/ zh/ ja/ ko/       generated; never edit by hand
fr/ de/ es/ ru/
css/style.css         all styling
js/main.js            interactions + language wiring
js/i18n/<code>.json   the copy, 200 keys per language, identical key sets
tools/
  build-i18n-pages.js  headless Chrome → one static page per language
  build-seo-files.js   robots.txt, sitemap.xml, llms.txt
  dev/seocheck.js      walks all 9 URLs and checks them
assets/               fonts, logos, images, profile PDFs
CNAME                 pins the custom domain — deleting it unlinks the site
```

## Common changes

| Task | Steps |
| --- | --- |
| Change wording | Edit the key in **every** `js/i18n/*.json`, then `npm run build` |
| Change layout/markup | Edit `index.html`, then `npm run build` |
| Change styling | Edit `css/style.css` only — no rebuild needed |
| Add a language | New JSON, add to `LANGS` in `js/main.js`, the `<head>` script, and `tools/build-i18n-pages.js`; add `<li>` to `#langMenu` and a row to `tools/build-seo-files.js`; add a font stack if the identity fonts lack its script; `npm run build` |
| Verify | `npm run serve`, then `node tools/dev/seocheck.js http://localhost:8734` |

---

## Facts that must not be invented

Check the source, never recall from memory:

- **Destinations:** Osaka, Japan 2024 (past) → **Shanghai, China 2026 (current)**
  → upcoming `قريباً سيتم الإعلان`. Adding any other city needs Salah's explicit
  confirmation. No dates have been announced for Shanghai — that is why there is
  deliberately no `Event` schema yet.
- **Contact:** `info@yemenglobalvillage.com` · `+966 555 015 477` ·
  Core Media at `coremedias.com`.
- **Domain spelling:** the printed profile PDF says `yemenglobalvillege` — that is
  a typo. The real domain is **village**.
- **Numerals are always Latin `0-9`**, in every language including Arabic. GE
  Contrast silently maps ASCII digits to Arabic-Indic glyphs, so digits are
  excluded from its `unicode-range` and numeric UI uses `--font-num` (Didot).
  Do not remove either guard.
- **Fonts:** Thmanyah / GE Contrast / Didot cover Arabic, French, German and
  Spanish. They carry **no** Chinese, Japanese, Korean or Cyrillic glyphs — those
  four use system font stacks in `html[lang=…]` blocks.

## Things that broke before

- Inline `style="background-image: url(...)"` paths must be root-absolute
  (`/assets/…`), or they 404 on `/en/`, `/zh/` and the rest.
- The gallery strip is doubled for its scroll loop. The duplication is guarded by
  `data-looped`; without that guard a pre-rendered page doubles an already
  doubled strip.
- Latin runs inside Arabic text (phone, email, URLs) reverse unless isolated —
  that is what `.latin { direction: ltr; unicode-bidi: isolate }` is for.
- Renaming an i18n key once left four footer links pointing at deleted keys,
  untranslated in every language and visible to no one. After any rename, check
  that every `data-i18n` in `index.html` exists in `en.json`.

---

## Still open

**Build work — an agent can do these:**

1. **FAQ section** *(highest value)* — a visible Q&A block plus `FAQPage` schema.
   Question-shaped content is the most-cited format in AI answers. Target the
   real queries: what Yemeni Village is, where it is in 2026, how to host it,
   what products are shown, who operates it. Needs Salah's sign-off on the design
   since it adds a section.
2. **Contact form delivery** — the form currently opens the visitor's mail client.
   Set `FORM_ENDPOINT` in `js/main.js` to a Formspree or Web3Forms POST URL and
   the fetch path takes over. Two minutes once the endpoint exists.
3. **Localised image alt text** — alt attributes are bilingual Arabic—English on
   every page regardless of language. Moving them into the i18n system would help
   image search and AI extraction. ~46 strings × 9 languages.
4. **Event schema** for Osaka and Shanghai — only once real dates are announced.
   Google requires a valid `startDate`; do not fabricate one.

**Account-gated — only Salah can do these. Do not attempt them:**

- Submit the sitemap in Bing Webmaster Tools (feeds Copilot). It can import
  everything from Google Search Console in one click.
- Watch indexing progress in Search Console over the coming weeks.
- Create the `info@yemenglobalvillage.com` mailbox in Hostinger and test it. The
  address is printed in the profile and shown on the site, so it must exist.
- Correct the domain typo in the printed profile PDF.
- Earn inbound links — Core Media's site, social profiles, press coverage of the
  Shanghai participation. This is the single biggest lever on ranking for a new
  domain, and it is a business action, not a code change.

**Do not publish, change hosting, alter the custom domain, or force-push without
asking Salah first.** He treats publishing as his call.

## DNS — do not touch these

Hostinger holds both the site records and the mail records on the same zone:

| Purpose | Records |
| --- | --- |
| Site | four `A` records on `@` → GitHub Pages, `CNAME` on `www` |
| Mail | `MX` ×2, `TXT` SPF, `TXT` DMARC, three DKIM `CNAME`s, autodiscover/autoconfig |
| Google | `TXT` on `@` starting `google-site-verification=` |

Deleting the SPF or MX records breaks email. Deleting `CNAME` from the repo
unlinks the domain. Multiple `TXT` records on `@` are normal — add, never replace.
