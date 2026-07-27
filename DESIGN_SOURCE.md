# Yemen Global Village — Design Source of Truth

This file is the mandatory checkpoint for every design and implementation decision.

> **Repository status.** As of 2026-07-25 this repo holds the rebuilt static site
> (plain HTML/CSS/JS, no build step) — see `README.md`. The earlier React + Vite
> prototype was replaced on `main`; it remains in git history at commit `dff9595`.

## Canonical source files

- Visual identity: `../project_sources/14-Yemen-Village-identity-final.pdf`
- Arabic profile and project imagery: `../project_sources/04-Yemeni-Village-profile-AR-2-.pdf`
- Project content: `../project_sources/03-2-.docx`
- Selected page reference: `../design_review/outputs/yemen-global-village-combined-final.png`
- Supplied imagery: `../project_sources/15-1.png`, `../project_sources/16-11.png`

## Locked typography

- Arabic display headlines: GE Contrast Bold (`GE-Contrast-Bold.otf`)
- Arabic and English body/UI: Thmanyah Sans (Light, Regular, Medium, Bold, Black)
- English editorial/display accents: Didot (`Didot-Regular.ttf`)
- Thmanyah Serif Display may be used only when the source identity calls for a serif Arabic accent.
- Do not replace these fonts with system fonts except as technical fallbacks.

## Locked palette

- Orange Desert: `#FFA14D`
- Green Terraces: `#74C177`
- Turquoise Sea: `#0F3C4A`
- Purple Highs: `#7C4A6B`
- Coral accent: `#FF6268`
- Warm canvas: `#F6F0E7`
- Ink: `#111111`

## Locked identity decisions

- Use the original four-tile Yemen Global Village logo extracted from the identity file. Do not redraw it.
- Use the original regional pattern bands extracted from identity pages 19–24. Do not approximate them in CSS or SVG.
- Arabic is the primary language and page direction is RTL.
- The visual base is the light editorial “Living Atlas” direction with a dramatic dark interlude.
- Main hero copy: `اليمن… حكاية تتنقّل حول العالم`.
- Preserve the section `أربع وجهات، تجربة واحدة` and its four themes:
  - اليمن حكاية حضارة
  - اليمن إبداع وإنسان
  - اليمن عبق وتجارة
  - اليمن مسرح العالم

## Destination truth

Confirmed by Salah on 2026-07-25 — this supersedes the earlier "do not display Shanghai" rule:

- Previous destination: Osaka, Japan — 2024.
- **Current destination: Shanghai, China — 2026.**
- Upcoming destinations: `قريباً سيتم الإعلان`.
- The hero flight strip runs in that order: Osaka → Shanghai → upcoming.
- Do not add any further city without a new explicit confirmation from Salah.

## Numerals

- Digits are always Latin (`0-9`) in **both** languages. Never Arabic-Indic (`٠-٩`).
- GE Contrast Bold silently maps ASCII digits to Arabic-Indic glyphs, so its `@font-face`
  declares a `unicode-range` that excludes `U+0030-0039`, and numeric UI uses the
  `--font-num` (Didot) variable. Do not remove either guard.

## Contact truth

- Phone: `+966 555 015 477`
- Email: `info@yemenglobalvillege.com`
- Site: `www.yemenglobalvillege.com` (the "villege" spelling is theirs — keep it)
- Developer: Core Media — `coremedias.com`

## Image policy

- Prioritize authentic supplied images and imagery embedded in the canonical profile.
- Use the real Yemeni live-performance image from the profile for the dance/performance panel.
- Use the supplied camel caravan and Socotra dragon-blood tree images as documentary visual chapters.
- AI-generated imagery is limited to missing composite slots, such as the editorial hero atlas or a destination visual unavailable in the source files.
- Every generated image must match the palette, crop, density, realism, and cultural accuracy of the approved reference.
