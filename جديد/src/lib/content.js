// Centralized site content for Al-Shabandar Clinic
// Edit contact details, services, testimonials, and gallery here.

export const clinic = {
  name: { en: "Al-Shabandar Clinic", ar: "عيادة الشابندر" },
  tagline: {
    en: "Aesthetics • Botox • Filler • Laser",
    ar: "التجميل • البوتوكس • الفلر • الليزر",
  },
  phone: "+9647701234567",
  phoneDisplay: "+964 770 123 4567",
  whatsapp: "9647701234567", // no +, no spaces
  email: "info@al-shabandar-clinic.com",
  address: {
    en: "Al-Mansour, Baghdad, Iraq",
    ar: "المنصور، بغداد، العراق",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.6!2d44.36!3d33.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzM2JzAuMCJOIDQ0wrAyMSczNi4wIkU!5e0!3m2!1sen!2siq!4v1700000000000",
  hours: [
    { day: { en: "Saturday – Thursday", ar: "السبت – الخميس" }, time: "10:00 – 20:00" },
    { day: { en: "Friday", ar: "الجمعة" }, time: "14:00 – 20:00" },
  ],
  socials: {
    instagram: "https://instagram.com/alshabandarclinic",
    tiktok: "https://tiktok.com/@alshabandarclinic",
  },
};

export const services = [
  {
    id: "botox-filler",
    icon: "syringe",
    title: { en: "Botox & Fillers", ar: "البوتوكس والفلر" },
    desc: {
      en: "Expert injections to enhance natural beauty, smooth lines, and restore youthful volume.",
      ar: "حقن البوتوكس والفلر لإبراز الجمال الطبيعي ونعومة الخطوط واستعادة نضارة الشباب.",
    },
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    points: {
      en: ["Wrinkle reduction", "Lip & cheek volume", "Natural results"],
      ar: ["تقليل التجاعيد", "نضارة الشفاه والخدود", "نتائج طبيعية"],
    },
  },
  {
    id: "laser",
    icon: "laser",
    title: { en: "Laser Treatments", ar: "علاجات الليزر" },
    desc: {
      en: "Latest laser technology for hair removal and skin rejuvenation with maximum safety.",
      ar: "أحدث تقنيات الليزر لإزالة الشعر وتجديد البشرة بأقصى درجات الأمان.",
    },
    image:
      "https://images.unsplash.com/photo-1629909910184-74f5c2b7f7a2?auto=format&fit=crop&w=900&q=80",
    points: {
      en: ["Hair removal", "Skin rejuvenation", "Pigment correction"],
      ar: ["إزالة الشعر", "تجديد البشرة", "تصحيح التصبغات"],
    },
  },
  {
    id: "aesthetic-care",
    icon: "sparkle",
    title: { en: "Aesthetic Care", ar: "العناية بالبشرة" },
    desc: {
      en: "Professional skincare and glow treatments tailored to your skin's needs.",
      ar: "العناية الاحترافية بالبشرة وعلاجات النضارة المصممة خصيصاً لبشرتك.",
    },
    image:
      "https://images.unsplash.com/photo-1616396608894-ec1f95f9f9b2?auto=format&fit=crop&w=900&q=80",
    points: {
      en: ["Deep hydration", "Glow facials", "Custom protocols"],
      ar: ["ترطيب عميق", "علاجات النضارة", "بروتوكولات مخصصة"],
    },
  },
];

export const gallery = [
  {
    id: 1,
    title: { en: "Botox Results", ar: "نتائج البوتوكس" },
    before:
      "https://images.unsplash.com/photo-1591017403286-fd8493524e1d?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: { en: "Laser Rejuvenation", ar: "تجديد الليزر" },
    before:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1614128476262-60e0fc8f1f1e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: { en: "Skin Glow Treatment", ar: "علاج نضارة البشرة" },
    before:
      "https://images.unsplash.com/photo-1615208947305-6b5e90d1f1c1?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1000&q=80",
  },
];

export const testimonials = [
  {
    id: 1,
    name: { en: "Sarah A.", ar: "سارة أ." },
    role: { en: "Botox Client", ar: "عميلة بوتوكس" },
    quote: {
      en: "The results were incredibly natural. I feel more confident than ever — the team is professional and caring.",
      ar: "النتائج كانت طبيعية بشكل مذهل. أشعر بثقة أكبر من أي وقت مضى — الفريق محترف و مهتم.",
    },
    rating: 5,
  },
  {
    id: 2,
    name: { en: "Noor K.", ar: "نور ك." },
    role: { en: "Laser Client", ar: "عميلة ليزر" },
    quote: {
      en: "Best laser experience in Baghdad. Painless, modern equipment, and visible results after just a few sessions.",
      ar: "أفضل تجربة ليزر في بغداد. بدون ألم، أجهزة حديثة، ونتائج واضحة بعد جلسات قليلة.",
    },
    rating: 5,
  },
  {
    id: 3,
    name: { en: "Lina M.", ar: "لينا م." },
    role: { en: "Filler Client", ar: "عميلة فلر" },
    quote: {
      en: "Al-Shabandar Clinic redefined beauty for me. Elegant space, certified doctors, and stunning results.",
      ar: "عيادة الشابندر أعادت تعريف الجمال بالنسبة لي. مكان أنيق، أطباء معتمدون، ونتائج رائعة.",
    },
    rating: 5,
  },
  {
    id: 4,
    name: { en: "Huda R.", ar: "هدى ر." },
    role: { en: "Aesthetic Care", ar: "عناية بالبشرة" },
    quote: {
      en: "My skin has never looked better. The personalized glow facial was a luxurious, transformative experience.",
      ar: "بشرتي لم تبدو أفضل من قبل. علاج النضارة المخصص كان تجربة فاخرة و مُحوّلة.",
    },
    rating: 5,
  },
];

export const stats = [
  { value: "12+", label: { en: "Years Experience", ar: "سنوات خبرة" } },
  { value: "8K+", label: { en: "Happy Clients", ar: "عميل سعيد" } },
  { value: "15+", label: { en: "Certified Treatments", ar: "علاج معتمد" } },
  { value: "100%", label: { en: "Safety Standards", ar: "معايير الأمان" } },
];