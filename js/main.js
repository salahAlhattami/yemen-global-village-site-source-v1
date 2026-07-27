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
  fr: { name: 'Français', dir: 'ltr', doc: 'fr' },
  es: { name: 'Español',  dir: 'ltr', doc: 'es' }
};
const DEFAULT_LANG = 'ar';

/* Languages with their own profile PDF; the rest fall back to English. */
const PROFILE_LANGS = ['ar', 'en'];

/* ---------------- Language resolution ----------------
   Priority: ?lang= in the URL  →  saved choice  →  browser  →  Arabic.
   The URL wins so a link can be shared in a specific language. */
function resolveLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl && LANGS[fromUrl]) return fromUrl;

  const saved = localStorage.getItem('yv-lang');
  if (saved && LANGS[saved]) return saved;

  for (const tag of navigator.languages || [navigator.language || '']) {
    const base = String(tag).toLowerCase().split('-')[0];
    if (LANGS[base]) return base;
  }
  return DEFAULT_LANG;
}

let lang = resolveLang();
const dictCache = Object.create(null);

async function loadDict(code) {
  if (dictCache[code]) return dictCache[code];
  const res = await fetch(`js/i18n/${code}.json`, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`i18n ${code}: HTTP ${res.status}`);
  dictCache[code] = await res.json();
  return dictCache[code];
}

function paint(dict) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.getAttribute('data-i18n')];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = dict[el.getAttribute('data-i18n-ph')];
    if (v !== undefined) el.placeholder = v;
  });
  document.querySelectorAll('[data-i18n-content]').forEach(el => {
    const v = dict[el.getAttribute('data-i18n-content')];
    if (v !== undefined) el.setAttribute('content', v);
  });
  if (dict['meta.title']) document.title = dict['meta.title'];
}

function paintChrome() {
  const meta = LANGS[lang];
  const root = document.documentElement;
  root.lang = meta.doc;
  root.dir = meta.dir;

  const label = document.getElementById('langLabel');
  if (label) label.textContent = meta.name;

  document.querySelectorAll('#langMenu [data-lang]').forEach(btn => {
    const on = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', on);
    btn.setAttribute('aria-selected', on ? 'true' : 'false');
  });

  const dl = document.getElementById('profileDownload');
  if (dl) {
    const code = PROFILE_LANGS.includes(lang) ? lang : 'en';
    dl.href = `assets/docs/yemeni-village-profile-${code}.pdf`;
  }

  // keep the URL shareable in the chosen language
  const url = new URL(location.href);
  if (lang === DEFAULT_LANG) url.searchParams.delete('lang');
  else url.searchParams.set('lang', lang);
  history.replaceState(null, '', url);
}

/* The markup ships in Arabic, so the very first paint can be skipped when
   Arabic is the chosen language. Every later switch must fetch — by then the
   DOM holds another language and has to be rewritten. */
let hasPainted = false;

async function applyLang() {
  paintChrome();
  if (lang !== DEFAULT_LANG || hasPainted) {
    try {
      paint(await loadDict(lang));
    } catch (err) {
      console.error(err);
    }
  }
  hasPainted = true;
  document.documentElement.removeAttribute('data-i18n-pending');
}

/* ---------------- Language picker ---------------- */
const picker = document.getElementById('langPicker');
const langBtn = document.getElementById('langToggle');
const langMenu = document.getElementById('langMenu');

function closeLangMenu() {
  picker.classList.remove('open');
  langBtn.setAttribute('aria-expanded', 'false');
}

langBtn.addEventListener('click', e => {
  e.stopPropagation();
  const open = picker.classList.toggle('open');
  langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

langMenu.addEventListener('click', e => {
  const btn = e.target.closest('[data-lang]');
  if (!btn) return;
  const next = btn.dataset.lang;
  closeLangMenu();
  if (next === lang) return;
  lang = next;
  localStorage.setItem('yv-lang', lang);
  applyLang();
});

document.addEventListener('click', e => {
  if (picker.classList.contains('open') && !picker.contains(e.target)) closeLangMenu();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLangMenu();
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
const galleryTrack = document.querySelector('.gallery-track');
if (galleryTrack) {
  galleryTrack.innerHTML += galleryTrack.innerHTML; // duplicate for seamless -50% loop
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
