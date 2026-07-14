import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Buildings,
  CalendarBlank,
  CheckCircle,
  Circle,
  Coffee,
  GlobeHemisphereEast,
  Handshake,
  List,
  MapPin,
  Megaphone,
  Storefront,
  UsersThree,
  X,
} from "@phosphor-icons/react";

const copy = {
  ar: {
    nav: [["الرئيسية", "home"], ["عن القرية", "about"], ["التجربة", "experience"], ["الوجهات", "destinations"], ["الشراكات", "partners"], ["تواصل معنا", "contact"]],
    partner: "شارك معنا",
    eyebrow: "YEMEN / A LIVING ATLAS",
    hero: "اليمن… حكاية تتنقّل حول العالم",
    heroBody: "منصة دولية تجمع الثقافة والتجربة والمنتج اليمني في وجهة واحدة.",
    discover: "اكتشف القرية",
    explore: "استكشف التجربة",
    coordinates: ["صنعاء", "شبام", "بحر العرب", "حراز"],
    fourTitle: "أربع وجهات، تجربة واحدة",
    fourBody: "ادخل إلى مناطق تعكس تنوع اليمن وثراءه.",
    stories: [
      ["اليمن حكاية حضارة", "عمارةٌ تحفظ الذاكرة وتُطلّ على المستقبل."],
      ["اليمن إبداع وإنسان", "حِرف تتناقلها الأيدي وتروي سيرة المكان."],
      ["اليمن عبق وتجارة", "بنٌ وعسل ومنتجات تحمل نكهة اليمن إلى العالم."],
      ["اليمن مسرح العالم", "فنون حيّة تصنع لقاءً إنسانيًا لا يُنسى."],
    ],
    aboutEyebrow: "من اليمن إلى العالم",
    aboutTitle: "تجربة حيّة تتجاوز حدود المكان",
    aboutBody: "القرية اليمنية العالمية وجهة ثقافية وتجارية متنقلة، تنقل الزائر إلى اليمن عبر العمارة والفنون والتذوق والمنتجات والتجارب التفاعلية. مساحة معاصرة تُظهر اليمن كما يستحق أن يُرى: متنوعًا، مبدعًا ومنفتحًا على العالم.",
    camelTitle: "مسارات تحمل الذاكرة",
    camelBody: "من طرق التجارة القديمة إلى منصات العالم الحديثة، تستمر الحكاية اليمنية في الحركة.",
    socotraTitle: "طبيعة لا تشبه سواها",
    socotraBody: "تنوع جغرافي استثنائي يتحول داخل القرية إلى رحلة بصرية ومعرفية متكاملة.",
    experienceEyebrow: "عوالم القرية",
    experienceTitle: "كل زيارة تفتح بابًا جديدًا",
    experienceBody: "تتكوّن القرية من عوالم مترابطة تُشاهد وتُعاش وتُتذوّق.",
    worlds: [
      { title: "الثقافة والفنون", body: "عروض فلكلورية حيّة، أمسيات، أفلام ومعارض بصرية تقدم اليمن بلغة معاصرة." },
      { title: "الضيافة والمذاقات", body: "رحلة عبر القهوة اليمنية والمطبخ التقليدي وتجارب تذوق مصممة للزائر العالمي." },
      { title: "المنتجات والتجارة", body: "منتجات يمنية مختارة، بيع مباشر وفرص استيراد وتوزيع ولقاءات أعمال نوعية." },
      { title: "التفاعل والمجتمع", body: "ورش حيّة وبرامج للعائلات ومساحات تصنع تبادلًا ثقافيًا بين الزوار والمجتمعات." },
    ],
    destinationsEyebrow: "حول العالم",
    destinationsTitle: "وجهاتنا",
    previous: "وجهات سابقة",
    upcoming: "وجهات قادمة",
    osaka: "أوساكا، اليابان",
    osakaYear: "2024",
    osakaLabel: "محطة سابقة",
    osakaBody: "حضور قدّم الثقافة والمنتج اليمني ضمن تجربة تواصل دولية نابضة بالحياة.",
    upcomingTitle: "الوجهة التالية قيد الإعلان",
    upcomingBody: "نعمل على محطات دولية جديدة. سيتم الكشف عن الوجهات والتواريخ بعد اكتمال الترتيبات الرسمية.",
    notify: "سجّل اهتمامك",
    partnersEyebrow: "نصنع الأثر معًا",
    partnersTitle: "كن جزءًا من الرحلة اليمنية حول العالم",
    partnersBody: "نرحب بالسفارات والجهات الثقافية ومنظمي الفعاليات والرعاة والمستثمرين والعلامات اليمنية لبناء تجربة ذات أثر ثقافي واقتصادي مستدام.",
    host: "استضف القرية",
    partnerCta: "فرص الشراكة",
    footerBody: "وجهة دولية ومنصة ثقافية وتجارية تنقل اليمن إلى العالم عبر تجربة تُعاش.",
    rights: "جميع الحقوق محفوظة للقرية اليمنية العالمية",
    modalTitle: "ابدأ الحديث معنا",
    modalBody: "أخبرنا بنوع اهتمامك، وسيتواصل معك فريق القرية اليمنية العالمية.",
    fields: { name: "الاسم الكامل", email: "البريد الإلكتروني", interest: "نوع الاهتمام", message: "رسالتك", submit: "إرسال الطلب", options: ["شراكة أو رعاية", "استضافة القرية", "مشاركة تجارية", "إعلام وتعاون", "زيارة واستفسار"] },
    successTitle: "تم استلام اهتمامك",
    successBody: "شكرًا لك. سنعود إليك عند تفعيل قناة التواصل الرسمية.",
  },
  en: {
    nav: [["Home", "home"], ["About", "about"], ["Experience", "experience"], ["Destinations", "destinations"], ["Partnerships", "partners"], ["Contact", "contact"]],
    partner: "Join us",
    eyebrow: "YEMEN / A LIVING ATLAS",
    hero: "Yemen… a story traveling the world",
    heroBody: "An international platform bringing Yemeni culture, experience and products into one destination.",
    discover: "Discover the village",
    explore: "Explore the experience",
    coordinates: ["Sana’a", "Shibam", "Arabian Sea", "Haraz"],
    fourTitle: "Four worlds, one experience",
    fourBody: "Enter worlds that reflect Yemen’s depth and diversity.",
    stories: [
      ["A story of civilization", "Architecture that preserves memory and looks to the future."],
      ["Creativity and people", "Crafts passed through hands, carrying the story of place."],
      ["Aroma and trade", "Coffee, honey and products carrying Yemen to the world."],
      ["Yemen on the world stage", "Live arts creating unforgettable human connection."],
    ],
    aboutEyebrow: "From Yemen to the world",
    aboutTitle: "A living experience beyond borders",
    aboutBody: "Yemen Global Village is a traveling cultural and commercial destination. Through architecture, arts, taste, products and interactive encounters, it presents Yemen as it deserves to be seen: diverse, creative and open to the world.",
    camelTitle: "Routes that carry memory",
    camelBody: "From ancient trade routes to modern global stages, Yemen’s story remains in motion.",
    socotraTitle: "Nature unlike anywhere else",
    socotraBody: "Exceptional geography becomes an integrated visual and cultural journey inside the village.",
    experienceEyebrow: "Village worlds",
    experienceTitle: "Every visit opens a new door",
    experienceBody: "The village is built from connected worlds to see, experience and taste.",
    worlds: [
      { title: "Culture & arts", body: "Live folklore, evenings, films and visual exhibitions presenting Yemen in a contemporary language." },
      { title: "Hospitality & taste", body: "A journey through Yemeni coffee, traditional cuisine and tastings designed for global visitors." },
      { title: "Products & trade", body: "Curated Yemeni products, direct sales, import opportunities and focused B2B meetings." },
      { title: "Community exchange", body: "Live workshops, family programs and spaces for meaningful cultural exchange." },
    ],
    destinationsEyebrow: "Around the world",
    destinationsTitle: "Our destinations",
    previous: "Past destinations",
    upcoming: "Upcoming destinations",
    osaka: "Osaka, Japan",
    osakaYear: "2024",
    osakaLabel: "Past destination",
    osakaBody: "A vibrant international encounter presenting Yemeni culture and products to a global audience.",
    upcomingTitle: "Our next destination is to be announced",
    upcomingBody: "New international stops are in development. Destinations and dates will be announced after official arrangements are complete.",
    notify: "Register interest",
    partnersEyebrow: "Creating impact together",
    partnersTitle: "Become part of Yemen’s journey around the world",
    partnersBody: "We welcome embassies, cultural institutions, event organizers, sponsors, investors and Yemeni brands to build lasting cultural and economic impact.",
    host: "Host the village",
    partnerCta: "Partnership opportunities",
    footerBody: "An international cultural and commercial destination bringing Yemen to the world through a living experience.",
    rights: "All rights reserved — Yemen Global Village",
    modalTitle: "Start a conversation",
    modalBody: "Tell us how you would like to connect, and the Yemen Global Village team will follow up.",
    fields: { name: "Full name", email: "Email address", interest: "Area of interest", message: "Your message", submit: "Send request", options: ["Partnership or sponsorship", "Host the village", "Commercial participation", "Media collaboration", "Visit or enquiry"] },
    successTitle: "Your interest has been received",
    successBody: "Thank you. We will follow up once the official contact channel is activated.",
  },
};

const worldIcons = [Buildings, Coffee, Storefront, UsersThree];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function App() {
  const [lang, setLang] = useState("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [destinationTab, setDestinationTab] = useState("previous");
  const [activeWorld, setActiveWorld] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = useMemo(() => copy[lang], [lang]);
  const ArrowForward = lang === "ar" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = lang === "ar" ? "القرية اليمنية العالمية" : "Yemen Global Village";
  }, [lang]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") { setModalOpen(false); setMenuOpen(false); }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openContact = () => { setSubmitted(false); setModalOpen(true); };

  return (
    <div className="site-shell">
      <header className="site-header" aria-label={lang === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
        <a className="brand" href="#home" aria-label={lang === "ar" ? "القرية اليمنية العالمية" : "Yemen Global Village"}>
          <img src="/assets/brand/yemen-global-village-logo.png" alt={lang === "ar" ? "شعار القرية اليمنية العالمية" : "Yemen Global Village logo"} />
        </a>
        <nav className="desktop-nav">
          {t.nav.map(([label, id]) => <button key={id} type="button" onClick={() => scrollToSection(id)}>{label}</button>)}
        </nav>
        <div className="header-actions">
          <button className="language-switch" type="button" onClick={() => setLang(lang === "ar" ? "en" : "ar")} aria-label={lang === "ar" ? "Switch to English" : "التحويل إلى العربية"}>{lang === "ar" ? "EN" : "ع"}</button>
          <button className="button button-small button-orange" type="button" onClick={openContact}><Handshake size={18} />{t.partner}</button>
          <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={25} /> : <List size={25} />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav">{t.nav.map(([label, id]) => <button key={id} type="button" onClick={() => { scrollToSection(id); setMenuOpen(false); }}>{label}</button>)}</nav>}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-visual">
            <img className="hero-atlas" src="/assets/images/hero-living-atlas.png" alt={lang === "ar" ? "مشهد بصري يجمع صنعاء وشبام وسواحل اليمن ومدرجات حراز والبن والعسل" : "A visual atlas of Sana'a, Shibam, Yemen's coast, Haraz terraces, coffee and honey"} />
            <div className="map-labels" aria-hidden="true">{t.coordinates.map((label, index) => <span key={label} className={`map-label map-label-${index + 1}`}><MapPin size={13} weight="fill" />{label}</span>)}</div>
          </div>
          <div className="hero-copy">
            <p className="english-eyebrow">{t.eyebrow}</p>
            <h1>{t.hero}</h1>
            <p className="hero-body">{t.heroBody}</p>
            <div className="hero-actions">
              <button className="button button-orange" type="button" onClick={() => scrollToSection("about")}>{t.discover}<ArrowForward size={20} /></button>
              <button className="button button-outline" type="button" onClick={() => scrollToSection("experience")}>{t.explore}<ArrowDown size={20} /></button>
            </div>
          </div>
        </section>

        <section className="four-worlds" aria-labelledby="four-worlds-title">
          <div className="section-heading section-heading-on-dark"><h2 id="four-worlds-title">{t.fourTitle}</h2><p>{t.fourBody}</p></div>
          <div className="story-grid">
            {[["/assets/images/old-sanaa.jpg", "orange"], ["/assets/images/silver-craft.jpg", "green"], ["/assets/images/yemeni-coffee-honey.jpg", "purple"], ["/assets/images/yemeni-dance-live.jpg", "turquoise"]].map(([src, accent], index) => (
              <article className={`story-panel story-${accent}`} key={src}>
                <img src={src} alt={t.stories[index][0]} />
                <div className="story-caption"><h3>{t.stories[index][0]}</h3><p>{t.stories[index][1]}</p></div>
              </article>
            ))}
          </div>
          <img className="pattern-ribbon" src="/assets/brand/regional-pattern-22.png" alt="" aria-hidden="true" />
        </section>

        <section className="about-section section-pad" id="about">
          <div className="about-copy">
            <p className="section-eyebrow">{t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2><p>{t.aboutBody}</p>
            <button className="text-link" type="button" onClick={() => scrollToSection("experience")}>{t.explore}<ArrowForward size={19} /></button>
          </div>
          <div className="documentary-grid">
            <article className="documentary-card documentary-wide"><img src="/assets/images/yemen-camel-caravan.png" alt={t.camelTitle} /><div className="documentary-caption"><h3>{t.camelTitle}</h3><p>{t.camelBody}</p></div></article>
            <article className="documentary-card"><img src="/assets/images/socotra-dragon-tree.png" alt={t.socotraTitle} /><div className="documentary-caption documentary-caption-green"><h3>{t.socotraTitle}</h3><p>{t.socotraBody}</p></div></article>
          </div>
        </section>

        <section className="experience-section section-pad" id="experience">
          <div className="experience-intro"><p className="section-eyebrow">{t.experienceEyebrow}</p><h2>{t.experienceTitle}</h2><p>{t.experienceBody}</p></div>
          <div className="worlds-layout">
            <div className="world-list" role="tablist" aria-label={t.experienceTitle}>
              {t.worlds.map((world, index) => {
                const Icon = worldIcons[index];
                return <button className={activeWorld === index ? "world-row active" : "world-row"} type="button" role="tab" aria-selected={activeWorld === index} onClick={() => setActiveWorld(index)} key={world.title}><span className="world-index">0{index + 1}</span><span className="world-icon"><Icon size={28} /></span><span className="world-title">{world.title}</span><ArrowForward size={20} /></button>;
              })}
            </div>
            <div className="world-detail" role="tabpanel">
              <p className="world-detail-number">0{activeWorld + 1}</p><h3>{t.worlds[activeWorld].title}</h3><p>{t.worlds[activeWorld].body}</p>
              <img src={["/assets/images/yemeni-dance-live.jpg", "/assets/images/yemeni-coffee-branch.jpg", "/assets/images/yemeni-honey.jpg", "/assets/images/cultural-exchange.jpg"][activeWorld]} alt={t.worlds[activeWorld].title} />
            </div>
          </div>
        </section>

        <section className="destinations-section section-pad" id="destinations">
          <div className="section-heading destinations-heading">
            <p className="section-eyebrow">{t.destinationsEyebrow}</p><h2>{t.destinationsTitle}</h2>
            <div className="destination-tabs" role="tablist"><button type="button" role="tab" aria-selected={destinationTab === "previous"} className={destinationTab === "previous" ? "active" : ""} onClick={() => setDestinationTab("previous")}>{t.previous}</button><button type="button" role="tab" aria-selected={destinationTab === "upcoming"} className={destinationTab === "upcoming" ? "active" : ""} onClick={() => setDestinationTab("upcoming")}>{t.upcoming}</button></div>
          </div>
          <div className="destination-stage" role="tabpanel">
            {destinationTab === "previous" ? (
              <article className="osaka-card"><img src="/assets/images/osaka-2024.jpg" alt={t.osaka} /><div className="osaka-copy"><span className="destination-status"><CalendarBlank size={18} />{t.osakaLabel}</span><h3>{t.osaka}</h3><p className="destination-year">{t.osakaYear}</p><p>{t.osakaBody}</p></div></article>
            ) : (
              <div className="announcement-panel"><div className="announcement-icon"><Megaphone size={42} weight="light" /></div><p className="english-eyebrow">TO BE ANNOUNCED</p><h3>{t.upcomingTitle}</h3><p>{t.upcomingBody}</p><button className="button button-orange" type="button" onClick={openContact}>{t.notify}<ArrowForward size={20} /></button></div>
            )}
          </div>
          <div className="timeline" aria-hidden="true"><MapPin size={26} weight="fill" /><Circle size={15} /><Circle size={15} /><Circle size={15} /></div>
        </section>

        <section className="partners-section" id="partners">
          <div className="partners-copy"><p className="section-eyebrow section-eyebrow-light">{t.partnersEyebrow}</p><h2>{t.partnersTitle}</h2><p>{t.partnersBody}</p><div className="partners-actions"><button className="button button-orange" type="button" onClick={openContact}>{t.partnerCta}<Handshake size={20} /></button><button className="button button-light-outline" type="button" onClick={openContact}>{t.host}<GlobeHemisphereEast size={20} /></button></div></div>
          <img src="/assets/images/cultural-exchange.jpg" alt={t.partnersTitle} /><img className="partners-pattern" src="/assets/brand/regional-pattern-20.png" alt="" aria-hidden="true" />
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-brand"><img src="/assets/brand/yemen-global-village-logo.png" alt={lang === "ar" ? "القرية اليمنية العالمية" : "Yemen Global Village"} /><p>{t.footerBody}</p></div>
        <nav className="footer-nav">{t.nav.slice(1, 5).map(([label, id]) => <button type="button" onClick={() => scrollToSection(id)} key={id}>{label}</button>)}</nav>
        <button className="button button-orange" type="button" onClick={openContact}>{t.modalTitle}<ArrowForward size={20} /></button>
        <p className="copyright">© 2026 — {t.rights}</p>
      </footer>

      {modalOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setModalOpen(false); }}>
          <section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <button className="modal-close" type="button" onClick={() => setModalOpen(false)} aria-label="Close"><X size={24} /></button>
            {!submitted ? <><p className="section-eyebrow">YEMEN GLOBAL VILLAGE</p><h2 id="contact-modal-title">{t.modalTitle}</h2><p>{t.modalBody}</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><label>{t.fields.name}<input name="name" required autoFocus /></label><label>{t.fields.email}<input type="email" name="email" required /></label><label>{t.fields.interest}<select name="interest" defaultValue=""><option value="" disabled>—</option>{t.fields.options.map((option) => <option value={option} key={option}>{option}</option>)}</select></label><label>{t.fields.message}<textarea name="message" rows="4" /></label><button className="button button-orange button-submit" type="submit">{t.fields.submit}<ArrowForward size={20} /></button></form></> : <div className="success-state"><CheckCircle size={64} weight="light" /><h2 id="contact-modal-title">{t.successTitle}</h2><p>{t.successBody}</p><button className="button button-outline" type="button" onClick={() => setModalOpen(false)}>{lang === "ar" ? "إغلاق" : "Close"}</button></div>}
          </section>
        </div>
      )}
    </div>
  );
}
