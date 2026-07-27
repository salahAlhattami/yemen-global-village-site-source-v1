/* ============================================================
   Yemeni Village — القرية اليمنية
   Bilingual (AR/EN) + interactions
   ============================================================ */

const I18N = {
  ar: {
    'meta.title': 'القرية اليمنية — وجهة دولية للتبادل الثقافي والحضاري',
    'meta.desc': 'القرية اليمنية: مبادرة ثقافية دولية تقدم تجربة يمنية متكاملة — الثقافة، الفنون، الحرف، الضيافة، والمنتجات الأصيلة — حول العالم.',

    'nav.home': 'الرئيسية',
    'nav.about': 'عن القرية',
    'nav.experience': 'التجربة',
    'nav.destinations': 'الوجهات',
    'nav.products': 'المنتجات',
    'nav.partners': 'الشراكات',
    'nav.contact': 'تواصل معنا',
    'nav.cta': 'شارك معنا ◆',

    'hero.l1': 'اليمن…',
    'hero.l2': 'حكاية تتنقّل',
    'hero.l3': 'حول العـالـم',
    'hero.tagline': 'منصة دولية تجمع الثقافة والتجربة والمنتج اليمني في وجهة واحدة.',
    'hero.cta1': 'ابدأ الرحلة',
    'hero.cta2': 'اكتشف الوجهات',
    'hero.st1': 'صنعاء',
    'hero.st2': 'شبـام',
    'hero.st3': 'حـراز',
    'hero.st4': 'سقطرى',
    'hero.prevDest': 'أوساكا، اليابان',
    'hero.currDest': 'شنغهاي، الصين',
    'hero.nextDest': 'الوجهات القادمة',
    'hero.nextTba': 'قريباً سيتم الإعلان —',

    'prod.kicker': 'المنتجات اليمنية',
    'prod.title': 'كنوز تحمل نكهة اليمن إلى العالم',
    'prod.lead': 'منتجات أصيلة تُقدَّم ضمن سياق ثقافي يعكس قيمتها وهويتها — من البن والعسل إلى العقيق والفضة والمنسوجات والحرف اليدوية.',
    'prod.p1': 'البن اليمني', 'prod.p1t': 'من مدرجات حراز — أصل القهوة في العالم.',
    'prod.p2': 'العسل الجبلي', 'prod.p2t': 'عسل السدر والسمر بجودة عالمية نادرة.',
    'prod.p3': 'تجربة الضيافة', 'prod.p3t': 'طقوس القهوة اليمنية كما تُقدَّم في بيوتها.',
    'prod.p4': 'العقيق والفضة', 'prod.p4t': 'حرفة يدوية توارثتها الأجيال في صنعاء.',
    'prod.p5': 'حرف الخوص', 'prod.p5t': 'ألوان وأنماط تحكي جغرافيا اليمن.',
    'prod.p6': 'المنسوجات', 'prod.p6t': 'زخارف يمنية تتحول إلى قطع فنية.',
    'prod.p7': 'ورش حيّة', 'prod.p7t': 'الحرفي يصنع أمامك، لا خلف زجاج.',
    'prod.p8': 'المطبخ اليمني', 'prod.p8t': 'مذاقات تُخبز وتُقدَّم في الموقع.',
    'prod.ctaText': 'تبحثون عن فرص استيراد أو توزيع للمنتجات اليمنية؟',
    'prod.ctaBtn': 'تواصل للأعمال',

    'dest.kicker': 'حول العالم',
    'dest.title': 'حكاية تتنقل من محطة إلى محطة',
    'dest.pastBadge': 'محطة سابقة',
    'dest.osaka': 'أوساكا، اليابان',
    'dest.osakaText': 'حضور قدّم الثقافة والمنتج اليمني ضمن تجربة تواصل دولية نابضة بالحياة في إكسبو أوساكا.',
    'dest.currBadge': 'المحطة الحالية',
    'dest.shanghai': 'شنغهاي، الصين',
    'dest.shanghaiText': 'المحطة الدولية الجديدة للقرية اليمنية — تجربة يمنية متكاملة تفتح جسراً ثقافياً وتجارياً نحو الصين.',
    'dest.nextBadge': 'الوجهات القادمة',
    'dest.tba': 'قريباً سيتم الإعلان',
    'dest.tbaText': 'نعمل على محطات دولية جديدة، وسيتم الكشف عن الوجهات والتواريخ بعد اكتمال الترتيبات الرسمية.',
    'dest.notify': 'سجّل اهتمامك',

    'next.kicker': 'الفصل التالي',
    'next.l1': 'أربع وجهات…',
    'next.l2': 'تجربـة واحـدة',
    'next.sub': 'اكتشف اليمن من زواياه الأربع',
    'next.a1': 'الثقافة',
    'next.a2': 'التجربة',
    'next.a3': 'المنتجات',
    'next.a4': 'الشراكات',

    'culture.kicker': 'الثقافة',
    'culture.title': 'لغة الشعوب المشتركة',
    'culture.quote': 'يمتلك اليمن إرثاً حضارياً وثقافياً يمتد لآلاف السنين؛ ملتقىً للحضارات، ومحطةً على طرق التجارة العالمية، وموطناً لتقاليد أصيلة في الضيافة والفنون والحرف والعمارة.',
    'culture.p1': 'في عالمٍ تتقارب فيه الشعوب من خلال الثقافة والمعرفة والتجارب الإنسانية، تبرز الحاجة إلى مبادرات تفتح آفاقاً جديدة للحوار، وتعزز التفاهم بين المجتمعات، وتُعرّف بالهويات الوطنية من خلال تجارب حيّة تتجاوز أساليب العرض التقليدية.',
    'culture.p2': 'من هذه الرؤية انطلقت القرية اليمنية بوصفها وجهة دولية للتبادل الثقافي والحضاري، تنقل الزائر من المشاهدة إلى التفاعل، ومن التعرف على الموروث الثقافي إلى معايشة تفاصيله.',
    'culture.tag1': 'الضيافة', 'culture.tag2': 'الفنون', 'culture.tag3': 'الحِرف',
    'culture.tag4': 'العمارة', 'culture.tag5': 'المنتجات الأصيلة', 'culture.tag6': 'الموروث الحي',

    'banner.quote': 'اليمن.. ملتقى الحضارات، ومحطة على طرق التجارة العالمية، وموطن تقاليد أصيلة ما زالت تحكي هوية المكان وروح الإنسان.',
    'gallery.kicker': 'مشاهد من اليمن',
    'gallery.title': 'أرض تحكي قصتها بنفسها',

    'about.kicker': 'عن القرية اليمنية',
    'about.title': 'وجهة تنبض بالحياة',
    'about.lead': 'تقوم فلسفة القرية على صناعة وجهة حيّة تحتضن الفنون والتراث والضيافة والحرف والمنتجات الأصيلة، ضمن بيئة تفاعلية تجمع بين الأصالة وروح العصر — تجربة مستمرة تتجدد بالفعاليات والبرامج في كل زيارة.',
    'about.pillar1.title': 'تجربة يمنية متكاملة',
    'about.pillar1.text': 'تبدأ منذ لحظة الوصول؛ حيث تلتقي الثقافة بالضيافة، والفنون بالحرف، والتراث بالتجربة الحية — تفاعل مباشر لا مشاهدة فقط.',
    'about.pillar2.title': 'جسور مستدامة',
    'about.pillar2.text': 'تواصل حقيقي بين اليمن وشعوب العالم من خلال الثقافة والفنون والضيافة والمنتجات الأصيلة، وشراكات يمتد أثرها بعد الزيارة.',
    'about.pillar3.title': 'نموذج مرن',
    'about.pillar3.text': 'يتكيف مع طبيعة كل دولة ورؤيتها — ضمن المعارض الدولية، أو المواسم الثقافية، أو كوجهة ثقافية دائمة على مدار العام.',

    'worlds.kicker': 'عوالم القرية',
    'worlds.title': 'ستة عوالم.. هوية واحدة',
    'worlds.lead': 'تتكون القرية اليمنية من مجموعة من العوالم المتكاملة، يجسّد كل منها جانباً من الهوية اليمنية، لتشكل معاً تجربة ثقافية متكاملة تتجدد بتنوع الأنشطة والفعاليات والمحتوى.',
    'worlds.w1.title': 'عالم الثقافة والفن',
    'worlds.w1.i1': 'عروض فلكلورية يمنية حية',
    'worlds.w1.i2': 'أمسيات موسيقية وثقافية',
    'worlds.w1.i3': 'معارض تراثية وفنية',
    'worlds.w1.i4': 'أفلام ووثائقيات عن اليمن',
    'worlds.w1.i5': 'احتفاء بالمناسبات الوطنية والثقافية',
    'worlds.w2.title': 'عالم الضيافة والمذاقات',
    'worlds.w2.i1': 'تجربة القهوة اليمنية',
    'worlds.w2.i2': 'المطبخ اليمني والأطباق التقليدية',
    'worlds.w2.i3': 'العسل والمنتجات الغذائية الأصيلة',
    'worlds.w2.i4': 'جلسات ضيافة مستوحاة من البيئة اليمنية',
    'worlds.w3.title': 'عالم الحِرف والإبداع',
    'worlds.w3.i1': 'ورش حيّة للحرف التقليدية',
    'worlds.w3.i2': 'صناعة العقيق والفضة',
    'worlds.w3.i3': 'الخط العربي والفنون اليدوية',
    'worlds.w3.i4': 'تجارب تفاعلية مع الحرفيين',
    'worlds.w4.title': 'عالم المنتجات اليمنية',
    'worlds.w4.i1': 'البن والعسل',
    'worlds.w4.i2': 'العقيق والمشغولات الفضية',
    'worlds.w4.i3': 'البخور واللبان',
    'worlds.w4.i4': 'الأزياء والمنتجات الحرفية',
    'worlds.w4.i5': 'الصناعات الإبداعية والهدايا',
    'worlds.w5.title': 'عالم الأعمال والشراكات',
    'worlds.w5.i1': 'لقاءات الأعمال (B2B)',
    'worlds.w5.i2': 'التعريف بالمنتجات اليمنية',
    'worlds.w5.i3': 'فرص الاستيراد والتوزيع',
    'worlds.w5.i4': 'الشراكات التجارية والاستثمارية',
    'worlds.w6.title': 'عالم العائلة والتجارب التفاعلية',
    'worlds.w6.i1': 'برامج الأطفال',
    'worlds.w6.i2': 'ورش تعليمية وثقافية',
    'worlds.w6.i3': 'مسابقات وأنشطة تفاعلية',
    'worlds.w6.i4': 'أيام مفتوحة للجاليات والزوار',
    'worlds.w6.i5': 'فعاليات موسمية متجددة',

    'exp.kicker': 'رحلة الزائر',
    'exp.title': 'من المشاهدة إلى المعايشة',
    'exp.lead': 'صُممت القرية اليمنية لتمنح الزائر تجربة متكاملة تبدأ منذ لحظة الوصول — في كل ركن من أركانها تتحول تفاصيل الهوية اليمنية إلى تجربة إنسانية تثري المعرفة وتترك أثراً يدوم في الذاكرة.',
    'exp.s1.title': 'الوصول',
    'exp.s1.text': 'استقبال تلتقي فيه الثقافة بالضيافة؛ بوابة تنقلك مباشرة إلى روح اليمن بأسلوب معاصر.',
    'exp.s2.title': 'الاكتشاف',
    'exp.s2.text': 'تجول بين العوالم الستة: عروض فنية، حرف تقليدية، مذاقات يمنية، ومنتجات أصيلة.',
    'exp.s3.title': 'التفاعل',
    'exp.s3.text': 'شارك الحرفيين ورش العمل، وتذوق القهوة اليمنية، وعش الموروث بالتجربة المباشرة لا بالمشاهدة.',
    'exp.s4.title': 'الأثر',
    'exp.s4.text': 'تجربة إنسانية تثري المعرفة وتعزز التواصل، وتترك أثراً يدوم في ذاكرة الزائر.',

    'formats.kicker': 'حلول مرنة',
    'formats.title': 'صيغة لكل وجهة',
    'formats.lead': 'صُممت القرية اليمنية كنموذج مرن يتيح مواءمة التجربة مع طبيعة كل دولة ورؤيتها الثقافية ومساحاتها وبرامجها السنوية — ويمكن تطويرها بعدة صيغ:',
    'formats.f1.title': 'وجهة ثقافية دائمة',
    'formats.f1.text': 'تعمل على مدار العام كمعلم ثقافي مستدام.',
    'formats.f2.title': 'قرية موسمية',
    'formats.f2.text': 'ضمن المواسم والفعاليات الوطنية للدولة المستضيفة.',
    'formats.f3.title': 'مشاركة دولية',
    'formats.f3.text': 'ضمن المعارض الدولية ومعارض إكسبو العالمية.',
    'formats.f4.title': 'تجربة مصاحبة',
    'formats.f4.text': 'للمهرجانات والفعاليات الكبرى كقيمة ثقافية مضافة.',
    'formats.f5.title': 'مساحة ثقافية',
    'formats.f5.text': 'داخل المجمعات التجارية أو الوجهات السياحية.',
    'formats.f6.title': 'نموذج متنقل',
    'formats.f6.text': 'يقام في أكثر من مدينة داخل الدولة الواحدة.',
    'formats.note': 'تمنح هذه المرونة الجهات المستضيفة فرصة اختيار النموذج الأنسب، مع إمكانية تطويره وتوسعته مستقبلاً بما يحقق الأهداف الثقافية والسياحية والمجتمعية والاقتصادية.',

    'impact.kicker': 'الأثر',
    'impact.title': 'أثر يتجاوز حدود المكان',
    'impact.i1.title': 'حراك ثقافي وسياحي',
    'impact.i1.text': 'دعم الحراك الثقافي في الدول المستضيفة وإثراء مشهدها السياحي بتجربة نوعية تجمع الأصالة بالمعاصرة.',
    'impact.i2.title': 'تمكين الحرف والصناعات الإبداعية',
    'impact.i2.text': 'فتح آفاق جديدة أمام المنتجات اليمنية للوصول إلى الأسواق العالمية ضمن سياق ثقافي يعكس قيمتها وهويتها.',
    'impact.i3.title': 'حوار بين الشعوب',
    'impact.i3.text': 'تحويل الثقافة إلى مساحة للحوار والتفاهم والتعاون، وتعزيز التقارب بين اليمن وشعوب العالم.',
    'impact.i4.title': 'منصة شراكات مستدامة',
    'impact.i4.text': 'بناء شراكات بين المؤسسات الثقافية والقطاع الخاص ورواد الأعمال، بقيمة مشتركة تمتد إلى ما بعد الزيارة.',

    'partner.title': 'شراكة تصنع الأثر',
    'partner.text': 'نؤمن بأن نجاح أي تجربة ثقافية يبدأ من فهم خصوصية الدولة المستضيفة واحترام هويتها. تُطوَّر كل تجربة بالشراكة مع الجهات المعنية — بما يراعي طبيعة الموقع والبرامج الثقافية والمواسم الوطنية — لتصبح القرية اليمنية امتداداً للمشهد الثقافي المحلي، لا عنصراً منفصلاً عنه.',
    'partner.cta1': 'ابدأ حوار الشراكة',
    'partner.cta2': 'حمّل الملف التعريفي',

    'dev.kicker': 'الجهة المطورة',
    'dev.markSub': 'تطوير وإدارة التجارب الثقافية',
    'dev.p1': 'تقف كور ميديا خلف تطوير وإدارة مبادرة القرية اليمنية، انطلاقاً من خبرتها في تصميم وإدارة المشاريع الثقافية، وتنظيم الفعاليات، وبناء التجارب التي تجمع بين الهوية والإبداع والتفاعل المجتمعي.',
    'dev.p2': 'تتبنى كور ميديا منهجية تقوم على تحويل الأفكار إلى تجارب حيّة قابلة للتنفيذ والتطوير، من خلال التكامل بين التخطيط والتصميم والتشغيل وبناء الشراكات.',
    'dev.li1': 'خبرة عملية في تنظيم وإدارة المشاركات الثقافية والأجنحة الدولية',
    'dev.li2': 'جاهزية للتنفيذ ضمن بيئات عالمية تتطلب الاحتراف والانضباط التشغيلي',
    'dev.li3': 'تجربة تمثيلية تليق بالمنصات الدولية وتحافظ على أصالة الهوية اليمنية',

    'vision.q1': 'من كل وجهة.. مساحة نابضة بالحياة،',
    'vision.q2': 'ومن كل زيارة.. تجربة تُعاش.',
    'vision.sub': 'تطمح القرية اليمنية إلى أن تصبح شبكة من الوجهات الثقافية التي تعكس الهوية اليمنية في عدد من دول العالم — مساحات مستدامة للتبادل الثقافي والحوار الحضاري والتجارب الإنسانية التي تجمع بين الشعوب.',

    'contact.title': 'تواصل معنا',
    'contact.text': 'سواء كنتم جهة حكومية، أو مؤسسة ثقافية، أو مستثمراً، أو منظّم فعاليات — يسعدنا أن نبني معكم الحوار حول استضافة القرية اليمنية في وجهتكم.',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.web': 'الموقع الإلكتروني',
    'contact.developer': 'الجهة المطورة',

    'form.name': 'الاسم', 'form.namePh': 'الاسم الكامل',
    'form.org': 'الجهة', 'form.orgPh': 'اسم المؤسسة أو الجهة',
    'form.email': 'البريد الإلكتروني',
    'form.type': 'نوع الاهتمام',
    'form.type1': 'استضافة القرية',
    'form.type2': 'شراكة تجارية أو استثمارية',
    'form.type3': 'تعاون ثقافي أو مؤسسي',
    'form.type4': 'أخرى',
    'form.msg': 'الرسالة', 'form.msgPh': 'حدثونا عن اهتمامكم بالقرية اليمنية..',
    'form.send': 'إرسال الرسالة',
    'form.note': 'سنعود إليكم خلال أيام عمل قليلة.',

    'footer.about': 'القرية اليمنية — وجهة دولية للتبادل الثقافي والحضاري، تقدم تجربة يمنية متكاملة وتبني جسوراً مستدامة بين اليمن وشعوب العالم. مبادرة تطورها وتديرها كور ميديا.',
    'footer.explore': 'استكشف',
    'footer.contact': 'تواصل',
    'footer.rights': '© 2026 القرية اليمنية — جميع الحقوق محفوظة',
    'footer.by': 'تطوير وإدارة'
  },

  en: {
    'meta.title': 'Yemeni Village — An International Destination for Cultural Exchange',
    'meta.desc': 'Yemeni Village: an international cultural initiative offering a complete Yemeni experience — culture, arts, crafts, hospitality, and authentic products — around the world.',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.destinations': 'Destinations',
    'nav.products': 'Products',
    'nav.partners': 'Partnerships',
    'nav.contact': 'Contact',
    'nav.cta': 'Join Us ◆',

    'hero.l1': 'Yemen…',
    'hero.l2': 'a story traveling',
    'hero.l3': 'the world',
    'hero.tagline': 'An international platform bringing Yemeni culture, experience and products into one destination.',
    'hero.cta1': 'Start the Journey',
    'hero.cta2': 'Explore Destinations',
    'hero.st1': "Sana'a",
    'hero.st2': 'Shibam',
    'hero.st3': 'Haraz',
    'hero.st4': 'Soqotra',
    'hero.prevDest': 'Osaka, Japan',
    'hero.currDest': 'Shanghai, China',
    'hero.nextDest': 'Upcoming destinations',
    'hero.nextTba': 'To be announced soon —',

    'prod.kicker': 'Yemeni Products',
    'prod.title': 'Treasures Carrying Yemen to the World',
    'prod.lead': 'Authentic products presented within a cultural context that reflects their value and identity — from coffee and honey to agate, silver, textiles and handcrafts.',
    'prod.p1': 'Yemeni Coffee', 'prod.p1t': 'From the Haraz terraces — the origin of coffee.',
    'prod.p2': 'Mountain Honey', 'prod.p2t': 'Sidr and Sumar honey of rare global quality.',
    'prod.p3': 'Hospitality Ritual', 'prod.p3t': 'Yemeni coffee served as it is at home.',
    'prod.p4': 'Agate & Silver', 'prod.p4t': 'A handcraft passed down through generations.',
    'prod.p5': 'Palm Weaving', 'prod.p5t': 'Colors and patterns telling Yemen’s geography.',
    'prod.p6': 'Textiles', 'prod.p6t': 'Yemeni motifs turned into works of art.',
    'prod.p7': 'Live Workshops', 'prod.p7t': 'The artisan works before you, not behind glass.',
    'prod.p8': 'Yemeni Cuisine', 'prod.p8t': 'Flavors baked and served on site.',
    'prod.ctaText': 'Looking for import or distribution opportunities for Yemeni products?',
    'prod.ctaBtn': 'Contact for Business',

    'dest.kicker': 'Around the World',
    'dest.title': 'A Story Traveling from Stop to Stop',
    'dest.pastBadge': 'Past destination',
    'dest.osaka': 'Osaka, Japan',
    'dest.osakaText': 'A vibrant international encounter presenting Yemeni culture and products to a global audience at Expo Osaka.',
    'dest.currBadge': 'Current destination',
    'dest.shanghai': 'Shanghai, China',
    'dest.shanghaiText': "Yemeni Village's new international stop — a complete Yemeni experience opening a cultural and commercial bridge toward China.",
    'dest.nextBadge': 'Upcoming destinations',
    'dest.tba': 'To Be Announced Soon',
    'dest.tbaText': 'New international stops are in development. Destinations and dates will be announced once official arrangements are complete.',
    'dest.notify': 'Register your interest',

    'next.kicker': 'Next Chapter',
    'next.l1': 'Four worlds…',
    'next.l2': 'one experience',
    'next.sub': 'Discover Yemen from its four corners',
    'next.a1': 'Culture',
    'next.a2': 'Experience',
    'next.a3': 'Products',
    'next.a4': 'Partnerships',

    'culture.kicker': 'Culture',
    'culture.title': 'A Shared Language Among Nations',
    'culture.quote': 'Yemen carries a civilizational and cultural legacy spanning thousands of years — a meeting point for civilizations, a station along the ancient trade routes, and a homeland of deep-rooted traditions in hospitality, arts, crafts, and architecture.',
    'culture.p1': 'In a world drawn closer together through culture, knowledge, and shared human experience, there is a growing need for initiatives that open new horizons for dialogue, strengthen understanding between communities, and introduce national identities through living experiences that go beyond conventional forms of display.',
    'culture.p2': 'From this vision, Yemeni Village was born as an international destination for cultural and civilizational exchange — taking visitors beyond observation into interaction, and from learning about cultural heritage to experiencing its details firsthand.',
    'culture.tag1': 'Hospitality', 'culture.tag2': 'The Arts', 'culture.tag3': 'Crafts',
    'culture.tag4': 'Architecture', 'culture.tag5': 'Authentic Products', 'culture.tag6': 'Living Heritage',

    'banner.quote': 'Yemen — a meeting point of civilizations, a station on the ancient world trade routes, and a homeland of deep-rooted traditions that still carry the identity of the land and the spirit of its people.',
    'gallery.kicker': 'Scenes from Yemen',
    'gallery.title': 'A Land That Tells Its Own Story',

    'about.kicker': 'About Yemeni Village',
    'about.title': 'A Destination Alive with Experience',
    'about.lead': 'The Village is built on the idea of creating a living destination that embraces the arts, heritage, hospitality, crafts, and authentic products within an interactive environment blending originality with the spirit of the present — a continuous experience renewed with every visit.',
    'about.pillar1.title': 'A Complete Yemeni Experience',
    'about.pillar1.text': 'It begins the moment visitors arrive — where culture meets hospitality, arts meet crafts, and heritage becomes a living experience through direct interaction, not passive observation.',
    'about.pillar2.title': 'Sustainable Bridges',
    'about.pillar2.text': 'Genuine connection between Yemen and the peoples of the world through culture, the arts, hospitality, and authentic products — partnerships whose impact extends beyond the visit.',
    'about.pillar3.title': 'A Flexible Model',
    'about.pillar3.text': 'It adapts to the nature and vision of each host country — within international exhibitions, cultural seasons, or as a permanent cultural destination operating year-round.',

    'worlds.kicker': 'The Worlds of the Village',
    'worlds.title': 'Six Worlds. One Identity.',
    'worlds.lead': 'Yemeni Village consists of a set of integrated worlds, each representing a different facet of Yemeni identity. Together they form a comprehensive cultural experience, continuously renewed through the diversity of activities, events, and content.',
    'worlds.w1.title': 'The World of Culture and Arts',
    'worlds.w1.i1': 'Live Yemeni folkloric performances',
    'worlds.w1.i2': 'Musical and cultural evenings',
    'worlds.w1.i3': 'Heritage and art exhibitions',
    'worlds.w1.i4': 'Films and documentaries about Yemen',
    'worlds.w1.i5': 'Celebrations of national and cultural occasions',
    'worlds.w2.title': 'The World of Hospitality and Flavors',
    'worlds.w2.i1': 'The Yemeni coffee experience',
    'worlds.w2.i2': 'Yemeni cuisine and traditional dishes',
    'worlds.w2.i3': 'Honey and authentic food products',
    'worlds.w2.i4': 'Hospitality settings inspired by the Yemeni environment',
    'worlds.w3.title': 'The World of Crafts and Creativity',
    'worlds.w3.i1': 'Live workshops in traditional crafts',
    'worlds.w3.i2': 'Agate and silver craftsmanship',
    'worlds.w3.i3': 'Arabic calligraphy and handmade arts',
    'worlds.w3.i4': 'Interactive experiences with artisans',
    'worlds.w4.title': 'The World of Yemeni Products',
    'worlds.w4.i1': 'Coffee and honey',
    'worlds.w4.i2': 'Agate and silver jewelry',
    'worlds.w4.i3': 'Incense and frankincense',
    'worlds.w4.i4': 'Traditional fashion and handcrafted products',
    'worlds.w4.i5': 'Creative industries and gifts',
    'worlds.w5.title': 'The World of Business and Partnerships',
    'worlds.w5.i1': 'B2B meetings',
    'worlds.w5.i2': 'Showcasing Yemeni products',
    'worlds.w5.i3': 'Import and distribution opportunities',
    'worlds.w5.i4': 'Commercial and investment partnerships',
    'worlds.w6.title': 'The World of Family and Interactive Experiences',
    'worlds.w6.i1': "Children's programs",
    'worlds.w6.i2': 'Educational and cultural workshops',
    'worlds.w6.i3': 'Competitions and interactive activities',
    'worlds.w6.i4': 'Open days for diaspora communities and visitors',
    'worlds.w6.i5': 'Recurring seasonal events',

    'exp.kicker': "The Visitor's Journey",
    'exp.title': 'From Observation to Experience',
    'exp.lead': 'Yemeni Village is designed to give visitors a complete experience from the moment they arrive — in every corner, the details of Yemeni identity become a human experience that enriches knowledge and leaves a lasting impression.',
    'exp.s1.title': 'Arrive',
    'exp.s1.text': 'A welcome where culture meets hospitality — a gateway carrying you straight into the spirit of Yemen, in a contemporary way.',
    'exp.s2.title': 'Explore',
    'exp.s2.text': 'Wander through the six worlds: artistic performances, traditional crafts, Yemeni flavors, and authentic products.',
    'exp.s3.title': 'Engage',
    'exp.s3.text': 'Join artisans in live workshops, taste Yemeni coffee, and live the heritage through direct interaction — not observation.',
    'exp.s4.title': 'Remember',
    'exp.s4.text': 'A human experience that enriches knowledge, strengthens connection, and leaves a lasting impression in memory.',

    'formats.kicker': 'Flexible Solutions',
    'formats.title': 'A Format for Every Destination',
    'formats.lead': 'Yemeni Village is designed as a flexible model that adapts the experience to the nature of each country — its cultural vision, spaces, and annual programs. It can be developed in several formats:',
    'formats.f1.title': 'Permanent Cultural Destination',
    'formats.f1.text': 'Operating year-round as a sustainable cultural landmark.',
    'formats.f2.title': 'Seasonal Village',
    'formats.f2.text': "Within the host country's national seasons and events.",
    'formats.f3.title': 'International Participation',
    'formats.f3.text': 'Within international exhibitions and world Expos.',
    'formats.f4.title': 'Companion Experience',
    'formats.f4.text': 'For major festivals and events, as added cultural value.',
    'formats.f5.title': 'Cultural Space',
    'formats.f5.text': 'Within commercial complexes or tourism destinations.',
    'formats.f6.title': 'Mobile Model',
    'formats.f6.text': 'Implemented in more than one city within the same country.',
    'formats.note': 'This flexibility gives host entities the freedom to choose the model best suited to them, with the option to develop and expand it in the future to achieve cultural, tourism, community, and economic goals.',

    'impact.kicker': 'Impact',
    'impact.title': 'Impact Beyond Place',
    'impact.i1.title': 'Cultural and Tourism Activity',
    'impact.i1.text': 'Supporting cultural activity in host countries and enriching their tourism landscape with a distinctive experience blending authenticity and modernity.',
    'impact.i2.title': 'Empowering Crafts and Creative Industries',
    'impact.i2.text': 'Opening new horizons for Yemeni products to reach global markets within a cultural context that reflects their value and identity.',
    'impact.i3.title': 'Dialogue Between Peoples',
    'impact.i3.text': 'Turning culture into a space for dialogue, understanding, and cooperation — strengthening ties between Yemen and the peoples of the world.',
    'impact.i4.title': 'A Platform for Sustainable Partnerships',
    'impact.i4.text': 'Building partnerships between cultural institutions, the private sector, and entrepreneurs — creating shared value that extends beyond the visit.',

    'partner.title': 'A Partnership That Creates Impact',
    'partner.text': 'We believe the success of any cultural experience begins with understanding the uniqueness of the host country and respecting its identity. Each experience is developed in partnership with the relevant entities — taking into account the location, cultural programs, and national seasons — so that Yemeni Village becomes an extension of the local cultural landscape, not a separate element within it.',
    'partner.cta1': 'Start the Partnership Dialogue',
    'partner.cta2': 'Download the Profile',

    'dev.kicker': 'The Developer',
    'dev.markSub': 'Developing & Managing Cultural Experiences',
    'dev.p1': 'Core Media leads the development and management of the Yemeni Village initiative, drawing on its experience in designing and managing cultural projects, organizing events, and building experiences that bring together identity, creativity, and community engagement.',
    'dev.p2': 'Core Media follows a methodology built on turning ideas into living experiences ready for implementation and growth — through an integrated approach combining planning, design, operations, and partnership-building.',
    'dev.li1': 'Practical experience in organizing and managing cultural participations and international pavilions',
    'dev.li2': 'Ready for implementation in global environments demanding professionalism and operational discipline',
    'dev.li3': 'A representative experience worthy of international platforms, preserving the authenticity of Yemeni identity',

    'vision.q1': 'Every destination… a space alive with energy,',
    'vision.q2': 'and every visit… an experience to be lived.',
    'vision.sub': 'Yemeni Village aspires to become a network of cultural destinations reflecting Yemeni identity across countries around the world — sustainable spaces for cultural exchange, civilizational dialogue, and human experiences that bring peoples together.',

    'contact.title': 'Contact Us',
    'contact.text': 'Whether you are a government entity, a cultural institution, an investor, or an event organizer — we would be glad to open the dialogue on hosting Yemeni Village at your destination.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.web': 'Website',
    'contact.developer': 'Developed by',

    'form.name': 'Name', 'form.namePh': 'Full name',
    'form.org': 'Organization', 'form.orgPh': 'Organization or entity name',
    'form.email': 'Email',
    'form.type': 'Area of Interest',
    'form.type1': 'Hosting the Village',
    'form.type2': 'Commercial or investment partnership',
    'form.type3': 'Cultural or institutional cooperation',
    'form.type4': 'Other',
    'form.msg': 'Message', 'form.msgPh': 'Tell us about your interest in Yemeni Village…',
    'form.send': 'Send Message',
    'form.note': 'We will get back to you within a few business days.',

    'footer.about': 'Yemeni Village — an international destination for cultural and civilizational exchange, offering a complete Yemeni experience and building sustainable bridges between Yemen and the peoples of the world. An initiative developed and managed by Core Media.',
    'footer.explore': 'Explore',
    'footer.contact': 'Contact',
    'footer.rights': '© 2026 Yemeni Village — All rights reserved',
    'footer.by': 'Developed & managed by'
  }
};

/* ---------------- Language ---------------- */
let lang = localStorage.getItem('yv-lang') || 'ar';

function applyLang() {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  document.querySelectorAll('[data-i18n-content]').forEach(el => {
    const key = el.getAttribute('data-i18n-content');
    if (dict[key] !== undefined) el.setAttribute('content', dict[key]);
  });

  document.title = dict['meta.title'];
  document.getElementById('langLabel').textContent = lang === 'ar' ? 'EN' : 'عربي';

  const dl = document.getElementById('profileDownload');
  if (dl) dl.href = `assets/docs/yemeni-village-profile-${lang}.pdf`;
}

document.getElementById('langToggle').addEventListener('click', () => {
  lang = lang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('yv-lang', lang);
  applyLang();
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
