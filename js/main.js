/* ============================================================
   Yemeni Village — القرية اليمنية
   Multilingual (AR · EN · ZH · JA · FR · ES) + interactions
   ------------------------------------------------------------
   Copy lives in js/i18n/<lang>.json — one file per language.
   Only the active language is fetched. Arabic is already in the
   markup, so choosing it costs no request at all.
   ============================================================ */

const LANGS = {
  ar: { name: 'العربية', dir: 'rtl', doc: 'ar' },
  en: { name: 'English', dir: 'ltr', doc: 'en' },
  zh: { name: '中文',     dir: 'ltr', doc: 'zh-Hans' },
  ja: { name: '日本語',   dir: 'ltr', doc: 'ja' },
  ko: { name: '한국어',   dir: 'ltr', doc: 'ko' },
  fr: { name: 'Français', dir: 'ltr', doc: 'fr' },
  de: { name: 'Deutsch',  dir: 'ltr', doc: 'de' },
  es: { name: 'Español',  dir: 'ltr', doc: 'es' },
  ru: { name: 'Русский',  dir: 'ltr', doc: 'ru' }
};
const DEFAULT_LANG = 'ar';

/* Languages with their own profile PDF; the rest fall back to English. */
const PROFILE_LANGS = ['ar', 'en'];

/* ---------------- Language ----------------
   Every language is a real page: / is Arabic, /en/ /zh/ … are pre-rendered
   at build time by tools/build-i18n-pages.js. The path is the single source
   of truth, so crawlers and readers always agree on what a URL contains.
   ?lang= is still honoured for links shared before the move to directories. */
function resolveLang() {
  const seg = location.pathname.split("/").filter(Boolean)[0];
  if (seg && LANGS[seg]) return seg;

  const q = new URLSearchParams(location.search).get("lang");
  if (q && LANGS[q]) return q;

  return DEFAULT_LANG;
}

const lang = resolveLang();
const dictCache = Object.create(null);

async function loadDict(code) {
  if (dictCache[code]) return dictCache[code];
  const res = await fetch(`/js/i18n/${code}.json`, { cache: "no-cache" });
  if (!res.ok) throw new Error(`i18n ${code}: HTTP ${res.status}`);
  dictCache[code] = await res.json();
  return dictCache[code];
}

function paint(dict) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const v = dict[el.getAttribute("data-i18n-ph")];
    if (v !== undefined) el.placeholder = v;
  });
  document.querySelectorAll("[data-i18n-content]").forEach(el => {
    const v = dict[el.getAttribute("data-i18n-content")];
    if (v !== undefined) el.setAttribute("content", v);
  });
  if (dict["meta.title"]) document.title = dict["meta.title"];
}

function paintChrome() {
  const meta = LANGS[lang];
  const root = document.documentElement;
  root.lang = meta.doc;
  root.dir = meta.dir;

  const label = document.getElementById("langLabel");
  if (label) label.textContent = meta.name;

  document.querySelectorAll("#langMenu [data-lang]").forEach(a => {
    const on = a.dataset.lang === lang;
    a.classList.toggle("is-active", on);
    a.setAttribute("aria-selected", on ? "true" : "false");
  });

  const dl = document.getElementById("profileDownload");
  if (dl) {
    const code = PROFILE_LANGS.includes(lang) ? lang : "en";
    dl.href = `/assets/docs/yemeni-village-profile-${code}.pdf`;
  }
}

/* Pre-rendered pages already carry their own copy; only the Arabic source
   page needs a fetch when it is asked for another language via ?lang=. */
async function applyLang() {
  paintChrome();
  const needsPaint = document.documentElement.dataset.prerendered !== lang;
  if (needsPaint && lang !== DEFAULT_LANG) {
    try { paint(await loadDict(lang)); } catch (err) { console.error(err); }
  }
  document.documentElement.removeAttribute("data-i18n-pending");
}

/* ---------------- Language picker ---------------- */
const picker = document.getElementById("langPicker");
const langBtn = document.getElementById("langToggle");

function closeLangMenu() {
  picker.classList.remove("open");
  langBtn.setAttribute("aria-expanded", "false");
}

langBtn.addEventListener("click", e => {
  e.stopPropagation();
  const open = picker.classList.toggle("open");
  langBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

document.addEventListener("click", e => {
  if (picker.classList.contains("open") && !picker.contains(e.target)) closeLangMenu();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLangMenu();
});

/* ---------------- Nav ---------------- */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('navMobile');
burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

/* ---------------- Contact form ----------------
   No backend yet: opens the visitor's mail client pre-filled.
   To switch to a hosted handler (Formspree / Web3Forms), set
   FORM_ENDPOINT below to the POST URL and the fetch path takes over. */
const FORM_ENDPOINT = '';
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(contactForm));
    const sending = lang === 'ar' ? 'جارٍ الإرسال…' : 'Sending…';
    const okMsg = lang === 'ar' ? 'تم استلام رسالتكم، شكراً لكم.' : 'Your message has been received. Thank you.';
    const mailMsg = lang === 'ar'
      ? 'فتحنا برنامج البريد لديكم بالرسالة جاهزة — أرسلوها لإتمام التواصل.'
      : 'Your mail app has opened with the message ready — send it to complete.';
    const errMsg = lang === 'ar' ? 'تعذّر الإرسال. راسلونا على info@yemenglobalvillage.com' : 'Could not send. Please email info@yemenglobalvillage.com';

    if (FORM_ENDPOINT) {
      formStatus.textContent = sending;
      formStatus.className = 'form-status';
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(contactForm)
        });
        if (!res.ok) throw new Error('bad status');
        contactForm.reset();
        formStatus.textContent = okMsg;
        formStatus.className = 'form-status is-ok';
      } catch {
        formStatus.textContent = errMsg;
        formStatus.className = 'form-status is-err';
      }
      return;
    }

    const subject = `[${lang === 'ar' ? 'القرية اليمنية' : 'Yemeni Village'}] ${d.type || ''} — ${d.name || ''}`;
    const body = [
      `${lang === 'ar' ? 'الاسم' : 'Name'}: ${d.name || ''}`,
      `${lang === 'ar' ? 'الجهة' : 'Organization'}: ${d.org || ''}`,
      `${lang === 'ar' ? 'البريد' : 'Email'}: ${d.email || ''}`,
      `${lang === 'ar' ? 'نوع الاهتمام' : 'Interest'}: ${d.type || ''}`,
      '',
      d.message || ''
    ].join('\n');
    window.location.href =
      `mailto:info@yemenglobalvillage.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    formStatus.textContent = mailMsg;
    formStatus.className = 'form-status is-ok';
  });
}

/* ---------------- Back to top ---------------- */
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 700);
}, { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------------- Scrollspy (active nav link) ---------------- */
const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const spyTargets = navLinks
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-30% 0px -55% 0px' });
spyTargets.forEach(t => spy.observe(t));

/* ---------------- Gallery infinite loop ---------------- */
/* The -50% scroll animation needs the strip twice. Guarded so a pre-rendered
   page (which already contains the doubled markup) is not doubled again. */
const galleryTrack = document.querySelector(".gallery-track");
if (galleryTrack && !galleryTrack.dataset.looped) {
  galleryTrack.innerHTML += galleryTrack.innerHTML;
  galleryTrack.dataset.looped = "1";
}

/* ---------------- Scroll reveal ---------------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------------- Init ---------------- */
applyLang();
