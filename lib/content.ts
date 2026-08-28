export const locales = ["ar", "en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

const shared = {
  images: {
    hero: "/images/morocco-hero-optimized.jpg",
    coast: "/images/morocco-coast.webp",
  },
};

const dictionaries = {
  ar: {
    langName: "العربية",
    dir: "rtl" as const,
    metaTitle: "رحلات المغرب الخاصة | صمّم رحلتك مع أخيل",
    metaDescription: "رحلة خاصة إلى المغرب مصممة حول ذوقك وميزانيتك وإيقاعك، من المحيط إلى الأطلس والصحراء والمدن العتيقة.",
    nav: { whatsapp: "واتساب", cta: "صمّم رحلتي", contact: "تواصل معنا" },
    hero: {
      eyebrow: "رحلات المغرب الخاصة — مصممة حولك",
      title: "انضم إلى أكثر من ١٠٠ ألف زائر للمغرب من السعودية",
      body: "لا نبيع مسارات محفوظة، بل نصمم لك رحلتك للمغرب بناءًا على تفضيلاتك المخصصة، ونساعدك في بناء تجربة سفر كاملة لا تُنسى.\nمن المحيط إلى جبال الأطلس والصحراء والمدن العتيقة، نصمم لك رحلة خاصة تناسب ذوقك وميزانيتك وإيقاعك.",
      primary: "صمّم رحلتي",
      trust: "يتواصل معك مختص سفر خلال 24 ساعة.",
      imageAlt: "مسافران يشاهدان مراكش وجبال الأطلس عند الشروق",
    },
    trust: ["رحلة مُصممة لك", "مرشد يتحدث العربية", "دعم متاح حتى العودة", "خبرة محلية موثوقة", "خدمة عملاء 24/7", "وكالة مُرخصة برقم TM-01-00-144441-26"],
    inspirations: {
      title: "رحلة واحدة، عوالم تتبدّل من حولك.",
      intro: "نرسم المسار بين الإيقاع الذي تحبه والتجارب التي تصنع لك ذكريات لا تُنسى، لا بين محطات محفوظة.",
      customize: "شكّل هذه الرحلة",
      duration: "المدة المقترحة",
      items: [
        { title: "الصحراء والمدن الإمبراطورية", copy: "اتبع طاقة مراكش نحو سكون الصحراء، مرورًا بالقصبات العتيقة والضيافة الكريمة وقرون من التاريخ الحي.", locations: "مراكش · فاس · آيت بن حدو · مرزوكة", days: "8–12 يومًا", alt: "ضيافة مغربية وشاي بالنعناع في مخيم قرب كثبان مرزوكة" },
        { title: "جبال الأطلس والحياة الأمازيغية", copy: "سافر بإيقاع أكثر هدوءًا بين الوديان والقرى الجبلية، مع نزهات خلابة ونكهات منزلية ولقاءات أصيلة مع الثقافة الأمازيغية.", locations: "إمليل · توبقال · وادي أوريكا · ورزازات", days: "6–10 أيام", alt: "إطلالة على جبال الأطلس ومدينة مراكش" },
        { title: "المحيط وسحر الشمال الأزرق", copy: "اجمع بين هدوء الساحل الأطلسي وطابع طنجة المتوسطي وأزقة شفشاون الزرقاء الهادئة.", locations: "أكادير · تغازوت · طنجة · شفشاون", days: "7–11 يومًا", alt: "حرفي محلي ومسافران في أحد أزقة شفشاون الزرقاء" },
      ],
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
    reservation: {
      title: "لنبدأ بتصميم رحلتك إلى المغرب.",
      intro: "شاركنا التفاصيل الأساسية، وسيتواصل معك مختص سفر لفهم ما يناسبك وصياغة رحلة على إيقاعك.",
      note: "استشارة أولية مجانية ومن دون التزام.",
      fullName: "الاسم الكامل *",
      phone: "رقم الهاتف *",
      destination: "الوجهة",
      hotelLevel: "مستوى الفندق",
      stars: "نجوم",
      travelStyle: "أسلوب السفر",
      styles: ["عائلية", "شهر عسل", "مغامرة", "استرخاء", "ثقافة", "تسوق"],
      submit: "احصل على استشارتك المجانية الآن",
      submitting: "جارٍ إرسال طلبك…",
      successTitle: "تم استلام طلبك بنجاح.",
      successBody: "شكرًا لك. سيتواصل معك مختص سفر من أخيل لمساعدتك في تصميم رحلتك.",
      error: "تعذر إرسال الطلب الآن. يرجى المحاولة مرة أخرى.",
    },
    faq: {
      title: "قبل أن نبدأ التخطيط.",
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
    nav: { whatsapp: "WhatsApp", cta: "Design my trip", contact: "Contact" },
    hero: { eyebrow: "Private Morocco journeys — built around you", title: "Join more than 100,000 visitors to Morocco from Saudi Arabia", body: "We don’t sell fixed itineraries. We design your Morocco journey around your personal preferences and help you create a complete, unforgettable travel experience.\nFrom the Atlantic to the Atlas Mountains, the Sahara and centuries-old cities, we design a private journey that suits your taste, budget and pace.", primary: "Design my trip", trust: "A travel specialist will contact you within 24 hours.", imageAlt: "Two travellers overlooking Marrakech and the Atlas Mountains at sunrise" },
    trust: ["A journey designed for you", "An Arabic-speaking guide", "Support available until you return", "Trusted local expertise", "24/7 customer service", "Licensed agency no. TM-01-00-144441-26"],
    inspirations: { title: "One journey. Worlds that shift around you.", intro: "We shape the route around the rhythm you love and the experiences that create unforgettable memories—not around a checklist of fixed stops.", customize: "Shape this journey", duration: "Suggested duration", items: [
      { title: "Sahara & Imperial Cities", copy: "Follow Marrakech’s energy into the stillness of the Sahara, with ancient kasbahs, generous hospitality and centuries of living history along the way.", locations: "Marrakech · Fes · Aït Ben Haddou · Merzouga", days: "8–12 days", alt: "Moroccan mint tea hospitality at a camp near Merzouga’s dunes" },
      { title: "Atlas Mountains & Amazigh Life", copy: "Travel at a gentler rhythm through valleys and mountain villages, with scenic walks, home-cooked flavors and meaningful encounters with Amazigh culture.", locations: "Imlil · Toubkal · Ourika Valley · Ouarzazate", days: "6–10 days", alt: "A view over Marrakech towards the Atlas Mountains" },
      { title: "Atlantic & the Blue North", copy: "Pair the calm of Morocco’s Atlantic coast with Tangier’s Mediterranean character and the quiet blue alleyways of Chefchaouen.", locations: "Agadir · Taghazout · Tangier · Chefchaouen", days: "7–11 days", alt: "A local artisan and travellers in a blue Chefchaouen lane" },
    ]},
    process: { eyebrow: "How it works", title: "Three steps. One singular journey.", steps: [{ title: "Share your preferences", copy: "Tell us when, who is travelling and what feels right for your budget." }, { title: "We call within 24 hours", copy: "An Akheel specialist listens and builds the complete picture." }, { title: "We design and organize", copy: "Review the proposal, shape the details and approve your journey." }] },
    reservation: { title: "Let’s begin designing your Morocco journey.", intro: "Share the essentials and a travel specialist will contact you to understand what suits you and shape a journey around your rhythm.", note: "Your initial consultation is free and comes with no obligation.", fullName: "Full name *", phone: "Phone number *", destination: "Destination", hotelLevel: "Hotel level", stars: "stars", travelStyle: "Travel style", styles: ["Family", "Honeymoon", "Adventure", "Relaxation", "Culture", "Shopping"], submit: "Get your free consultation now.", submitting: "Sending your request…", successTitle: "Your request has been received.", successBody: "Thank you. An Akheel travel specialist will contact you to help design your journey.", error: "We couldn’t send your request. Please try again." },
    faq: { title: "Before we begin planning.", items: [["Can the itinerary match my budget?", "Yes. We balance priorities, hotel level, activities and duration around the budget you share."], ["Can I change the hotels, activities and pace?", "Absolutely. Your proposal is flexible and can be refined before approval."], ["What if I don’t know which cities to choose?", "Tell us what you enjoy. Your specialist will suggest a combination that suits your time and interests."], ["How quickly will Akheel contact me?", "A travel specialist will contact you within 24 hours of receiving your request."], ["Can Akheel arrange transport, hotels, guides and activities?", "Your proposal can include these services according to what you select and need."], ["Is the trip private?", "Yes. The foundation is a private itinerary for your party, not a fixed group tour."], ["Can it accommodate families and children?", "Yes. We consider children’s ages, daily balance, transfers and the right accommodation."]] },
    closing: { title: "Your Morocco journey doesn’t begin with a package. It begins with you.", body: "Share the picture in your mind, and we’ll turn it into a thoughtful, coherent route.", imageAlt: "Two travellers watching sunset over Morocco’s Atlantic coast" },
    footer: { note: "Private journeys through Morocco and Saudi Arabia, thoughtfully designed.", copyright: "© 2026 Akheel Travel. All rights reserved." },
  },
  fr: {
    langName: "Français", dir: "ltr" as const,
    metaTitle: "Voyages privés au Maroc | Créez votre voyage avec Akheel", metaDescription: "Un voyage privé au Maroc pensé selon votre style, votre budget et votre rythme, de l’Atlantique à l’Atlas, au Sahara et aux médinas.",
    nav: { whatsapp: "WhatsApp", cta: "Créer mon voyage", contact: "Contact" },
    hero: { eyebrow: "Voyages privés au Maroc — pensés pour vous", title: "Rejoignez plus de 100 000 visiteurs venus d’Arabie saoudite au Maroc", body: "Nous ne vendons pas d’itinéraires tout faits. Nous concevons votre voyage au Maroc selon vos préférences et vous aidons à créer une expérience complète et inoubliable.\nDe l’Atlantique aux montagnes de l’Atlas, du Sahara aux villes séculaires, nous imaginons un voyage privé adapté à vos goûts, votre budget et votre rythme.", primary: "Créer mon voyage", trust: "Un spécialiste voyage vous contacte sous 24 heures.", imageAlt: "Deux voyageurs contemplent Marrakech et l’Atlas au lever du soleil" },
    trust: ["Un voyage conçu pour vous", "Un guide arabophone", "Une assistance jusqu’à votre retour", "Une expertise locale fiable", "Service client 24 h/24, 7 j/7", "Agence agréée n° TM-01-00-144441-26"],
    inspirations: { title: "Un voyage. Des mondes qui se transforment autour de vous.", intro: "Nous dessinons l’itinéraire autour du rythme que vous aimez et des expériences qui créent des souvenirs inoubliables, jamais autour d’une liste d’étapes imposées.", customize: "Façonner ce voyage", duration: "Durée suggérée", items: [{ title: "Sahara & Cités impériales", copy: "Suivez l’énergie de Marrakech jusqu’au silence du Sahara, entre kasbahs anciennes, hospitalité généreuse et siècles d’histoire vivante.", locations: "Marrakech · Fès · Aït-Ben-Haddou · Merzouga", days: "8–12 jours", alt: "Hospitalité et thé à la menthe dans un camp près des dunes de Merzouga" }, { title: "Atlas & Vie amazighe", copy: "Voyagez à un rythme plus doux entre vallées et villages de montagne, avec des balades panoramiques, des saveurs maison et des rencontres authentiques avec la culture amazighe.", locations: "Imlil · Toubkal · vallée de l’Ourika · Ouarzazate", days: "6–10 jours", alt: "Vue sur Marrakech et les montagnes de l’Atlas" }, { title: "Atlantique & Nord bleu", copy: "Associez le calme de la côte atlantique au caractère méditerranéen de Tanger et aux paisibles ruelles bleues de Chefchaouen.", locations: "Agadir · Taghazout · Tanger · Chefchaouen", days: "7–11 jours", alt: "Un artisan et des voyageurs dans une ruelle bleue de Chefchaouen" }] },
    process: { eyebrow: "Comment ça marche", title: "Trois étapes. Un voyage unique.", steps: [{ title: "Partagez vos préférences", copy: "Dites-nous quand vous partez, avec qui et quel budget vous convient." }, { title: "Nous appelons sous 24 h", copy: "Un spécialiste Akheel vous écoute et précise vos envies." }, { title: "Nous créons et organisons", copy: "Vous relisez, ajustez les détails et validez votre voyage." }] },
    reservation: { title: "Commençons à créer votre voyage au Maroc.", intro: "Partagez l’essentiel et un spécialiste voyage vous contactera pour comprendre vos envies et façonner un voyage à votre rythme.", note: "Votre première consultation est gratuite et sans engagement.", fullName: "Nom complet *", phone: "Numéro de téléphone *", destination: "Destination", hotelLevel: "Catégorie d’hôtel", stars: "étoiles", travelStyle: "Style de voyage", styles: ["Famille", "Lune de miel", "Aventure", "Détente", "Culture", "Shopping"], submit: "Obtenez votre consultation gratuite maintenant.", submitting: "Envoi de votre demande…", successTitle: "Votre demande a bien été reçue.", successBody: "Merci. Un spécialiste Akheel vous contactera pour vous aider à créer votre voyage.", error: "Votre demande n’a pas pu être envoyée. Veuillez réessayer." },
    faq: { title: "Avant de commencer.", items: [["L’itinéraire peut-il respecter mon budget ?", "Oui. Nous ajustons les priorités, les hôtels, les activités et la durée au budget communiqué."], ["Puis-je changer les hôtels, activités et le rythme ?", "Bien sûr. La proposition reste souple et peut évoluer avant validation."], ["Et si je ne sais pas quelles villes choisir ?", "Dites-nous simplement ce que vous aimez. Le spécialiste proposera une combinaison adaptée à votre temps et vos envies."], ["Sous quel délai Akheel me contactera-t-il ?", "Un spécialiste voyage vous contactera sous 24 heures après réception de votre demande."], ["Akheel peut-il organiser transports, hôtels, guides et activités ?", "La proposition peut inclure ces services selon vos besoins et vos choix."], ["Le voyage est-il privé ?", "Oui. Il est conçu pour votre groupe, sans programme collectif imposé."], ["Le voyage convient-il aux familles avec enfants ?", "Oui. Nous tenons compte de leur âge, du rythme, des transferts et des hébergements."]] },
    closing: { title: "Votre voyage au Maroc ne commence pas par un forfait. Il commence par vous.", body: "Partagez l’image que vous avez en tête ; nous la transformerons en un itinéraire juste et cohérent.", imageAlt: "Deux voyageurs face au coucher du soleil sur la côte atlantique marocaine" },
    footer: { note: "Des voyages privés au Maroc et en Arabie saoudite, pensés avec soin.", copyright: "© 2026 Akheel Travel. Tous droits réservés." },
  },
};

export type CampaignContent = (typeof dictionaries)[Locale] & typeof shared;
export function getContent(locale: Locale): CampaignContent {
  return { ...shared, ...dictionaries[locale] } as CampaignContent;
}
