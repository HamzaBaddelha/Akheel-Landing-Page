export const locales = ["ar", "en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

const shared = {
  route: "/campaign/morocco",
  images: {
    hero: "/images/morocco-hero.png",
    desert: "/images/morocco-desert.png",
    north: "/images/morocco-blue-north.png",
    coast: "/images/morocco-coast.png",
  },
};

const dictionaries = {
  ar: {
    langName: "العربية",
    dir: "rtl" as const,
    metaTitle: "رحلات المغرب الخاصة | صمّم رحلتك مع أخيل",
    metaDescription: "رحلة خاصة إلى المغرب مصممة حول ذوقك وميزانيتك وإيقاعك، من المحيط إلى الأطلس والصحراء والمدن العتيقة.",
    nav: { whatsapp: "واتساب", cta: "صمّم رحلتي", main: "الموقع الرئيسي", privacy: "الخصوصية", terms: "الشروط", contact: "تواصل معنا" },
    hero: {
      eyebrow: "رحلات المغرب الخاصة — مصممة حولك",
      title: "المغرب، برحلة تشبهك.",
      body: "من المحيط إلى جبال الأطلس والصحراء والمدن العتيقة، نصمم لك رحلة خاصة تناسب ذوقك وميزانيتك وإيقاعك.",
      primary: "صمّم رحلتي",
      secondary: "تواصل عبر واتساب",
      trust: "يتواصل معك مختص سفر خلال 24 ساعة.",
      imageAlt: "مسافران يشاهدان مراكش وجبال الأطلس عند الشروق",
    },
    trust: ["مسار خاص بالكامل", "خبرة محلية موثوقة", "تخطيط مرن", "رد خلال 24 ساعة"],
    story: {
      eyebrow: "فصول المغرب",
      title: "رحلة واحدة، عوالم تتبدّل أمامك.",
      body: "ننسج المسار بين الإيقاع الذي تحبه والتجارب التي تعني لك شيئًا — لا بين محطات محفوظة.",
      stops: [
        { n: "01", title: "المحيط", place: "أكادير وتغازوت", copy: "صباحات هادئة على الأطلسي ومذاق البحر في قرى الساحل." },
        { n: "02", title: "الجبال", place: "الأطلس ووادي أوريكا", copy: "دروب القرى الأمازيغية، موائد منزلية وهواء القمم." },
        { n: "03", title: "الصحراء", place: "مرزوكة وعرق الشبي", copy: "امتداد الرمال، شاي عند الغروب وليل صافٍ في مخيم خاص." },
        { n: "04", title: "المدن الإمبراطورية", place: "مراكش وفاس", copy: "رياضات حميمة، حرف عريقة وأزقة تنبض بالحياة." },
        { n: "05", title: "الشمال الأزرق", place: "طنجة وشفشاون", copy: "ضوء المتوسط وعمارة زرقاء وحكايات بين قارتين." },
      ],
    },
    inspirations: {
      eyebrow: "إلهام، لا باقات جاهزة",
      title: "ثلاث بدايات لرحلتك الخاصة.",
      customize: "خصّص هذه الرحلة",
      duration: "المدة المقترحة",
      items: [
        { title: "الصحراء والمدن الإمبراطورية", copy: "بين صخب مراكش وهدوء الكثبان، رحلة غنية بالقصص والضيافة والعمارة.", locations: "مراكش · فاس · آيت بن حدو · مرزوكة", days: "8–12 يومًا", image: "desert" as const, alt: "ضيافة مغربية وشاي بالنعناع في مخيم قرب كثبان مرزوكة" },
        { title: "جبال الأطلس والحياة الأمازيغية", copy: "إيقاع أبطأ بين القرى والوديان، مع مسارات تناسب قدرتك وتجارب طعام محلية.", locations: "إمليل · توبقال · وادي أوريكا · ورزازات", days: "6–10 أيام", image: "hero" as const, alt: "إطلالة على جبال الأطلس ومدينة مراكش" },
        { title: "المحيط وسحر الشمال الأزرق", copy: "سواحل مترفة ومدينة متوسطية وأزقة شفشاون الهادئة في مسار واحد مرن.", locations: "أكادير · تغازوت · طنجة · شفشاون", days: "7–11 يومًا", image: "north" as const, alt: "حرفي محلي ومسافران في أحد أزقة شفشاون الزرقاء" },
      ],
    },
    why: {
      eyebrow: "لماذا أخيل",
      title: "الرفاهية هنا تعني أن تُصمَّم الرحلة لك.",
      body: "نبدأ بما يهمك: من تسافر معه، كيف تحب أن تقضي يومك، ومستوى الفنادق الذي ترتاح إليه. ثم نوصل التفاصيل ببعضها بخبرة محلية وحضور مستمر قبل الرحلة وأثناءها.",
      points: ["فنادق وإيقاع يومي باختيارك", "خبرة محلية بتفاصيل المكان", "تجارب راقية من دون فقدان الأصالة", "دعم قبل الرحلة وخلالها"],
    },
    process: {
      eyebrow: "كيف تبدأ",
      title: "ثلاث خطوات، ومسار لا يشبه سواك.",
      steps: [
        { title: "شاركنا تفضيلاتك", copy: "أخبرنا بموعدك، ميزانيتك، ومن يرافقك." },
        { title: "نتواصل خلال 24 ساعة", copy: "يتحدث معك مختص سفر لفهم الصورة كاملة." },
        { title: "نصمم وننظم الرحلة", copy: "تراجع المقترح وتختار ما يناسبك قبل اعتماد المسار." },
      ],
    },
    form: {
      eyebrow: "لنبدأ من تفاصيلك",
      title: "صمّم رحلتك إلى المغرب",
      intro: "الخطوة الأولى لا تستغرق أكثر من دقيقة.",
      step: "الخطوة",
      of: "من",
      next: "متابعة التفاصيل",
      back: "رجوع",
      submit: "إرسال طلب الرحلة",
      submitting: "جارٍ إرسال الطلب…",
      privacy: "أوافق على استخدام بياناتي للتواصل معي بخصوص هذا الطلب.",
      successTitle: "وصلتنا تفاصيل رحلتك.",
      successBody: "شكرًا لك. سيتواصل معك مختص سفر من أخيل خلال 24 ساعة.",
      error: "تعذر إرسال الطلب الآن. لم تُفقد بياناتك؛ حاول مرة أخرى أو تواصل عبر واتساب.",
      errors: { required: "هذا الحقل مطلوب", phone: "أدخل رقم جوال صحيحًا", consent: "يلزم الموافقة للمتابعة" },
      labels: {
        name: "الاسم الكامل", phone: "رقم الجوال / واتساب مع رمز الدولة", countryCode: "الدولة ورمز الاتصال", destination: "الوجهة", month: "شهر أو تاريخ السفر المتوقع", travelers: "عدد المسافرين", budget: "الميزانية التقريبية", duration: "مدة الرحلة", adults: "البالغون", children: "الأطفال", styles: "أسلوب الرحلة", hotel: "مستوى الفندق", services: "الخدمات المطلوبة", notes: "تفاصيل إضافية", language: "لغة التواصل المفضلة",
      },
      options: {
        select: "اختر", budget: ["أقل من 10,000 ر.س", "10,000–20,000 ر.س", "20,000–35,000 ر.س", "35,000–60,000 ر.س", "أكثر من 60,000 ر.س", "أفضل مناقشة الميزانية"],
        duration: ["4–6 أيام", "7–9 أيام", "10–14 يومًا", "أكثر من 14 يومًا", "غير محدد بعد"],
        styles: ["عائلية", "شهر عسل", "مغامرة", "استرخاء", "ثقافة", "تسوق"], hotel: ["3 نجوم", "4 نجوم", "5 نجوم", "فاخر"], services: ["رحلات جوية", "فنادق", "تنقلات", "جولات", "دليل خاص"], languages: ["العربية", "English", "Français"],
      },
    },
    experiences: { eyebrow: "ما يمكن أن تتضمنه رحلتك", title: "تفاصيل صغيرة تصنع ذاكرة كبيرة.", items: ["رياض خاص وسط المدينة العتيقة", "مائدة أمازيغية في قرية جبلية", "دليل خاص يفتح أبواب الحرف والثقافة", "غروب هادئ في الصحراء", "تنقلات خاصة بإيقاع مريح"] },
    faq: {
      eyebrow: "أسئلة شائعة", title: "قبل أن نبدأ التخطيط.",
      items: [
        ["هل يمكن تصميم الرحلة حسب ميزانيتي؟", "نعم. نرتب الأولويات ومستوى الفنادق والأنشطة والمدة بما يلائم الميزانية التي تشاركها معنا."],
        ["هل أستطيع تغيير الفنادق والأنشطة وإيقاع الرحلة؟", "بالتأكيد. المسار مقترح لك وقابل للتعديل قبل اعتماده."],
        ["ماذا لو لم أعرف أي مدن أختار؟", "يكفي أن تخبرنا بما تحب. سيقترح المختص توليفة مدن وتجارب مناسبة لوقتك واهتماماتك."],
        ["متى ستتواصلون معي؟", "يتواصل معك مختص سفر خلال 24 ساعة من استلام الطلب."],
        ["هل تنظم أخيل التنقلات والفنادق والأدلاء والأنشطة؟", "يمكن أن يشمل المقترح هذه الخدمات حسب احتياجك وما تختاره في الطلب."],
        ["هل الرحلة خاصة؟", "نعم، الفكرة الأساسية هي مسار خاص بمجموعتك، وليس برنامجًا جماعيًا ثابتًا."],
        ["هل تناسب الرحلة العائلات والأطفال؟", "نعم. نراعي أعمار الأطفال، وتوازن الأيام، والتنقلات، ونوع الإقامة عند التصميم."],
      ],
    },
    closing: { title: "رحلتك إلى المغرب لا تبدأ بباقة جاهزة، بل بتفاصيلك أنت.", body: "شاركنا الصورة التي تتخيلها، ودعنا نحوّلها إلى مسار واضح ومدروس.", imageAlt: "مسافران يشاهدان غروب الشمس على ساحل المغرب" },
    footer: { note: "رحلات خاصة إلى المغرب والسعودية، مصممة بعناية.", copyright: "© 2026 أخيل للسفر. جميع الحقوق محفوظة." },
  },
  en: {
    langName: "English", dir: "ltr" as const,
    metaTitle: "Private Morocco Journeys | Design Your Trip with Akheel", metaDescription: "A private Morocco journey shaped around your style, budget and pace — from the Atlantic to the Atlas, Sahara and medinas.",
    nav: { whatsapp: "WhatsApp", cta: "Design my trip", main: "Main website", privacy: "Privacy", terms: "Terms", contact: "Contact" },
    hero: { eyebrow: "Private Morocco journeys — built around you", title: "Morocco, designed around you.", body: "From the Atlantic and Atlas Mountains to the Sahara and timeless medinas, we shape a private journey around your style, budget and pace.", primary: "Design my trip", secondary: "Chat on WhatsApp", trust: "A travel specialist will contact you within 24 hours.", imageAlt: "Two travellers overlooking Marrakech and the Atlas Mountains at sunrise" },
    trust: ["A completely private itinerary", "Trusted local expertise", "Flexible planning", "A reply within 24 hours"],
    story: { eyebrow: "Morocco, chapter by chapter", title: "One journey. Worlds that shift around you.", body: "We join the places that speak to you at the pace that feels right — never a checklist of prescribed stops.", stops: [
      { n: "01", title: "Ocean", place: "Agadir & Taghazout", copy: "Slow Atlantic mornings and the taste of the coast." }, { n: "02", title: "Mountains", place: "Atlas & Ourika Valley", copy: "Amazigh villages, home cooking and high-country air." }, { n: "03", title: "Desert", place: "Merzouga & Erg Chebbi", copy: "Open dunes, sunset tea and clear nights in a private camp." }, { n: "04", title: "Imperial cities", place: "Marrakech & Fes", copy: "Intimate riads, living craft and richly layered medinas." }, { n: "05", title: "Blue North", place: "Tangier & Chefchaouen", copy: "Mediterranean light and stories between two continents." },
    ]},
    inspirations: { eyebrow: "Inspiration, never fixed packages", title: "Three beginnings for a journey of your own.", customize: "Customize this journey", duration: "Suggested duration", items: [
      { title: "Sahara & Imperial Cities", copy: "From Marrakech’s energy to the hush of the dunes, rich in story, hospitality and architecture.", locations: "Marrakech · Fes · Aït Ben Haddou · Merzouga", days: "8–12 days", image: "desert" as const, alt: "Moroccan mint tea hospitality at a camp near Merzouga’s dunes" },
      { title: "Atlas Mountains & Amazigh Life", copy: "A slower rhythm through villages and valleys, with walks to suit you and generous local tables.", locations: "Imlil · Toubkal · Ourika Valley · Ouarzazate", days: "6–10 days", image: "hero" as const, alt: "A view over Marrakech towards the Atlas Mountains" },
      { title: "Atlantic & the Blue North", copy: "Refined coast, Mediterranean Tangier and quiet Chefchaouen in one flexible arc.", locations: "Agadir · Taghazout · Tangier · Chefchaouen", days: "7–11 days", image: "north" as const, alt: "A local artisan and travellers in a blue Chefchaouen lane" },
    ]},
    why: { eyebrow: "Why Akheel", title: "Luxury means the journey is truly yours.", body: "We start with what matters to you: who you travel with, how you like to spend a day and the hotels where you feel at home. Local knowledge and thoughtful support connect every detail before and during your journey.", points: ["Your choice of hotels and daily pace", "Local knowledge, down to the details", "Refined experiences that stay authentic", "Support before and throughout the journey"] },
    process: { eyebrow: "How it works", title: "Three steps. One singular journey.", steps: [{ title: "Share your preferences", copy: "Tell us when, who is travelling and what feels right for your budget." }, { title: "We call within 24 hours", copy: "An Akheel specialist listens and builds the complete picture." }, { title: "We design and organize", copy: "Review the proposal, shape the details and approve your journey." }] },
    form: {
      eyebrow: "Begin with your details", title: "Design your Morocco journey", intro: "The first step takes less than a minute.", step: "Step", of: "of", next: "Continue to details", back: "Back", submit: "Send trip request", submitting: "Sending your request…", privacy: "I agree that my information may be used to contact me about this request.", successTitle: "We have your journey details.", successBody: "Thank you. An Akheel travel specialist will contact you within 24 hours.", error: "We couldn’t send your request. Your details are still here — try again or use WhatsApp.", errors: { required: "This field is required", phone: "Enter a valid mobile number", consent: "Consent is required to continue" },
      labels: { name: "Full name", phone: "Mobile / WhatsApp number with country code", countryCode: "Country and calling code", destination: "Destination", month: "Expected travel month or date", travelers: "Number of travellers", budget: "Approximate budget", duration: "Trip duration", adults: "Adults", children: "Children", styles: "Travel style", hotel: "Hotel level", services: "Services required", notes: "Anything else we should know?", language: "Preferred contact language" },
      options: { select: "Select", budget: ["Under SAR 10,000", "SAR 10,000–20,000", "SAR 20,000–35,000", "SAR 35,000–60,000", "Above SAR 60,000", "I prefer to discuss"], duration: ["4–6 days", "7–9 days", "10–14 days", "More than 14 days", "Not sure yet"], styles: ["Family", "Honeymoon", "Adventure", "Relaxation", "Culture", "Shopping"], hotel: ["3-star", "4-star", "5-star", "Luxury"], services: ["Flights", "Hotels", "Transfers", "Tours", "Private guide"], languages: ["العربية", "English", "Français"] },
    },
    experiences: { eyebrow: "What your journey can include", title: "Small details. Lasting memories.", items: ["A private riad inside the medina", "An Amazigh table in a mountain village", "A private guide into living craft and culture", "A still Sahara sunset", "Private transfers at an easy pace"] },
    faq: { eyebrow: "Frequently asked", title: "Before we begin planning.", items: [["Can the itinerary match my budget?", "Yes. We balance priorities, hotel level, activities and duration around the budget you share."], ["Can I change the hotels, activities and pace?", "Absolutely. Your proposal is flexible and can be refined before approval."], ["What if I don’t know which cities to choose?", "Tell us what you enjoy. Your specialist will suggest a combination that suits your time and interests."], ["How quickly will Akheel contact me?", "A travel specialist will contact you within 24 hours of receiving your request."], ["Can Akheel arrange transport, hotels, guides and activities?", "Your proposal can include these services according to what you select and need."], ["Is the trip private?", "Yes. The foundation is a private itinerary for your party, not a fixed group tour."], ["Can it accommodate families and children?", "Yes. We consider children’s ages, daily balance, transfers and the right accommodation."]] },
    closing: { title: "Your Morocco journey doesn’t begin with a package. It begins with you.", body: "Share the picture in your mind, and we’ll turn it into a thoughtful, coherent route.", imageAlt: "Two travellers watching sunset over Morocco’s Atlantic coast" },
    footer: { note: "Private journeys through Morocco and Saudi Arabia, thoughtfully designed.", copyright: "© 2026 Akheel Travel. All rights reserved." },
  },
  fr: {
    langName: "Français", dir: "ltr" as const,
    metaTitle: "Voyages privés au Maroc | Créez votre voyage avec Akheel", metaDescription: "Un voyage privé au Maroc pensé selon votre style, votre budget et votre rythme, de l’Atlantique à l’Atlas, au Sahara et aux médinas.",
    nav: { whatsapp: "WhatsApp", cta: "Créer mon voyage", main: "Site principal", privacy: "Confidentialité", terms: "Conditions", contact: "Contact" },
    hero: { eyebrow: "Voyages privés au Maroc — pensés pour vous", title: "Le Maroc, imaginé autour de vous.", body: "De l’Atlantique aux montagnes de l’Atlas, du Sahara aux médinas éternelles, nous dessinons un voyage privé selon vos envies, votre budget et votre rythme.", primary: "Créer mon voyage", secondary: "Écrire sur WhatsApp", trust: "Un spécialiste voyage vous contacte sous 24 heures.", imageAlt: "Deux voyageurs contemplent Marrakech et l’Atlas au lever du soleil" },
    trust: ["Un itinéraire entièrement privé", "Une expertise locale fiable", "Une organisation flexible", "Une réponse sous 24 heures"],
    story: { eyebrow: "Le Maroc en chapitres", title: "Un voyage, des mondes qui se transforment.", body: "Nous relions les lieux qui vous parlent, au rythme qui vous convient — loin des étapes imposées.", stops: [{ n: "01", title: "Océan", place: "Agadir & Taghazout", copy: "Des matins atlantiques paisibles et les saveurs du littoral." }, { n: "02", title: "Montagnes", place: "Atlas & vallée de l’Ourika", copy: "Villages amazighs, cuisine familiale et grand air." }, { n: "03", title: "Désert", place: "Merzouga & Erg Chebbi", copy: "Dunes ouvertes, thé au couchant et nuit claire en camp privé." }, { n: "04", title: "Cités impériales", place: "Marrakech & Fès", copy: "Riads intimes, gestes d’artisans et médinas vivantes." }, { n: "05", title: "Nord bleu", place: "Tanger & Chefchaouen", copy: "Lumière méditerranéenne et récits entre deux continents." }] },
    inspirations: { eyebrow: "Des inspirations, jamais des forfaits figés", title: "Trois points de départ pour votre voyage.", customize: "Personnaliser ce voyage", duration: "Durée suggérée", items: [{ title: "Sahara & Cités impériales", copy: "De l’élan de Marrakech au silence des dunes, entre récits, hospitalité et architecture.", locations: "Marrakech · Fès · Aït-Ben-Haddou · Merzouga", days: "8–12 jours", image: "desert" as const, alt: "Hospitalité et thé à la menthe dans un camp près des dunes de Merzouga" }, { title: "Atlas & Vie amazighe", copy: "Un rythme plus doux entre villages et vallées, avec des marches adaptées et des tables locales.", locations: "Imlil · Toubkal · vallée de l’Ourika · Ouarzazate", days: "6–10 jours", image: "hero" as const, alt: "Vue sur Marrakech et les montagnes de l’Atlas" }, { title: "Atlantique & Nord bleu", copy: "Littoral raffiné, Tanger la méditerranéenne et Chefchaouen paisible dans un même voyage souple.", locations: "Agadir · Taghazout · Tanger · Chefchaouen", days: "7–11 jours", image: "north" as const, alt: "Un artisan et des voyageurs dans une ruelle bleue de Chefchaouen" }] },
    why: { eyebrow: "Pourquoi Akheel", title: "Le luxe, c’est un voyage réellement à vous.", body: "Nous partons de l’essentiel : avec qui vous voyagez, votre façon de vivre une journée et les hôtels où vous vous sentez bien. Notre connaissance locale relie chaque détail, avec un accompagnement avant et pendant le voyage.", points: ["Hôtels et rythme quotidien à votre choix", "Connaissance locale jusque dans les détails", "Des expériences raffinées et authentiques", "Un accompagnement avant et pendant le voyage"] },
    process: { eyebrow: "Comment ça marche", title: "Trois étapes. Un voyage unique.", steps: [{ title: "Partagez vos préférences", copy: "Dites-nous quand vous partez, avec qui et quel budget vous convient." }, { title: "Nous appelons sous 24 h", copy: "Un spécialiste Akheel vous écoute et précise vos envies." }, { title: "Nous créons et organisons", copy: "Vous relisez, ajustez les détails et validez votre voyage." }] },
    form: { eyebrow: "Commençons par vos envies", title: "Créez votre voyage au Maroc", intro: "La première étape prend moins d’une minute.", step: "Étape", of: "sur", next: "Continuer", back: "Retour", submit: "Envoyer ma demande", submitting: "Envoi en cours…", privacy: "J’accepte que mes informations soient utilisées pour me contacter au sujet de cette demande.", successTitle: "Nous avons reçu vos envies.", successBody: "Merci. Un spécialiste Akheel vous contactera sous 24 heures.", error: "Votre demande n’a pas pu être envoyée. Vos données sont conservées — réessayez ou contactez-nous sur WhatsApp.", errors: { required: "Ce champ est obligatoire", phone: "Saisissez un numéro mobile valide", consent: "Votre accord est nécessaire" }, labels: { name: "Nom complet", phone: "Mobile / WhatsApp avec indicatif pays", countryCode: "Pays et indicatif", destination: "Destination", month: "Mois ou date de voyage envisagé", travelers: "Nombre de voyageurs", budget: "Budget approximatif", duration: "Durée du voyage", adults: "Adultes", children: "Enfants", styles: "Style de voyage", hotel: "Catégorie d’hôtel", services: "Services souhaités", notes: "Autres précisions", language: "Langue de contact préférée" }, options: { select: "Choisir", budget: ["Moins de 10 000 SAR", "10 000–20 000 SAR", "20 000–35 000 SAR", "35 000–60 000 SAR", "Plus de 60 000 SAR", "Je préfère en discuter"], duration: ["4–6 jours", "7–9 jours", "10–14 jours", "Plus de 14 jours", "Je ne sais pas encore"], styles: ["Famille", "Lune de miel", "Aventure", "Détente", "Culture", "Shopping"], hotel: ["3 étoiles", "4 étoiles", "5 étoiles", "Luxe"], services: ["Vols", "Hôtels", "Transferts", "Excursions", "Guide privé"], languages: ["العربية", "English", "Français"] } },
    experiences: { eyebrow: "Ce que votre voyage peut inclure", title: "De petits détails, de grands souvenirs.", items: ["Un riad privé au cœur de la médina", "Une table amazighe dans un village de montagne", "Un guide privé au plus près des savoir-faire", "Un coucher de soleil silencieux au Sahara", "Des transferts privés à votre rythme"] },
    faq: { eyebrow: "Questions fréquentes", title: "Avant de commencer.", items: [["L’itinéraire peut-il respecter mon budget ?", "Oui. Nous ajustons les priorités, les hôtels, les activités et la durée au budget communiqué."], ["Puis-je changer les hôtels, activités et le rythme ?", "Bien sûr. La proposition reste souple et peut évoluer avant validation."], ["Et si je ne sais pas quelles villes choisir ?", "Dites-nous simplement ce que vous aimez. Le spécialiste proposera une combinaison adaptée à votre temps et vos envies."], ["Sous quel délai Akheel me contactera-t-il ?", "Un spécialiste voyage vous contactera sous 24 heures après réception de votre demande."], ["Akheel peut-il organiser transports, hôtels, guides et activités ?", "La proposition peut inclure ces services selon vos besoins et vos choix."], ["Le voyage est-il privé ?", "Oui. Il est conçu pour votre groupe, sans programme collectif imposé."], ["Le voyage convient-il aux familles avec enfants ?", "Oui. Nous tenons compte de leur âge, du rythme, des transferts et des hébergements."]] },
    closing: { title: "Votre voyage au Maroc ne commence pas par un forfait. Il commence par vous.", body: "Partagez l’image que vous avez en tête ; nous la transformerons en un itinéraire juste et cohérent.", imageAlt: "Deux voyageurs face au coucher du soleil sur la côte atlantique marocaine" },
    footer: { note: "Des voyages privés au Maroc et en Arabie saoudite, pensés avec soin.", copyright: "© 2026 Akheel Travel. Tous droits réservés." },
  },
};

export type CampaignContent = (typeof dictionaries)[Locale] & typeof shared;
export function getContent(locale: Locale): CampaignContent {
  return { ...shared, ...dictionaries[locale] } as CampaignContent;
}
