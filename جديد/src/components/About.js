"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { stats } from "@/lib/content";
import Reveal from "./Reveal";

const features = [
  {
    en: "Certified Specialists",
    ar: "أخصائيون معتمدون",
    desc: {
      en: "Our medical team holds international certifications in aesthetic medicine and dermatology.",
      ar: "فريقنا الطبي يحمل شهادات دولية في طب التجميل والأمراض الجلدية.",
    },
    icon: (
      <path
        d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 17l-5.5 2.3 1-6.1L3 8.9 9 8l3-6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    en: "Advanced Safety Protocols",
    ar: "بروتوكولات أمان متقدمة",
    desc: {
      en: "Sterile, hospital-grade environments and strict hygiene standards for every procedure.",
      ar: "بيئة معقمة بمستوى المستشفيات ومعايير نظافة صارمة لكل إجراء.",
    },
    icon: (
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    en: "Latest Technology",
    ar: "أحدث التقنيات",
    desc: {
      en: "FDA-approved laser and injection technologies for safe, effective, lasting results.",
      ar: "تقنيات ليزر وحقن معتمدة من FDA لنتائج آمنة وفعالة ودائمة.",
    },
    icon: (
      <path
        d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ),
  },
  {
    en: "Personalized Care",
    ar: "رعاية مخصصة",
    desc: {
      en: "Every treatment plan is tailored to your unique features, goals, and skin type.",
      ar: "كل خطة علاج مصممة خصيصاً لملامحك وأهدافك ونوع بشرتك.",
    },
    icon: (
      <path
        d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM3 22a9 9 0 0 1 18 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function About() {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden bg-pearl-200 py-24 md:py-32">
      {/* Decorative */}
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-rose-gold/20 blur-3xl" />
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-champagne-200/30 blur-3xl" />

      <div className="container-lux relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image collage */}
          <Reveal>
            <div className="relative">
              <motion.div
                className="overflow-hidden rounded-[2rem] shadow-card"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
                  alt="Al-Shabandar Clinic interior"
                  className="h-[460px] w-full object-cover"
                />
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-card md:-right-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-white">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                      <path
                        d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-serif text-2xl font-bold text-charcoal">8K+</p>
                    <p className="text-xs text-charcoal-light">
                      {lang === "en" ? "Happy Clients" : "عميل سعيد"}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-5 -left-4 rounded-2xl bg-charcoal px-5 py-3 text-white shadow-card md:-left-8"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[0.65rem] uppercase tracking-widest text-champagne-300">
                  {lang === "en" ? "Since" : "منذ"}
                </p>
                <p className="font-serif text-xl font-bold">2012</p>
              </motion.div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-champagne-500" />
                {lang === "en" ? "About the Clinic" : "عن العيادة"}
              </span>
              <h2 className="section-title">
                {lang === "en" ? (
                  <>
                    A Sanctuary of <span className="text-gradient-gold">Elegance</span> & Expertise
                  </>
                ) : (
                  <>
                    ملاذ من <span className="text-gradient-gold">الأناقة</span> والخبرة
                  </>
                )}
              </h2>
              <p className="mt-5 text-charcoal-light">
                {lang === "en"
                  ? "Al-Shabandar Clinic for Aesthetics, Botox, Filler, and Laser is Baghdad's premier destination for refined, medical-grade beauty care. We unite artistry with science to deliver natural, confidence-boosting results in a serene, luxurious setting."
                  : "عيادة الشابندر للتجميل والبوتوكس والفلر والليزر هي الوجهة الأولى في بغداد لرعاية التجميل الراقية بمستوى طبي. نجمع بين الفن والعلم لنقدّم نتائج طبيعية تعزز الثقة في أجواء هادئة وفاخرة."}
              </p>
            </Reveal>

            {/* Features grid */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((f, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group flex gap-4 rounded-2xl bg-white/60 p-5 backdrop-blur transition-all duration-300 hover:bg-white hover:shadow-soft">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-champagne-50 text-champagne-600 transition-colors group-hover:bg-gradient-gold group-hover:text-white">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                        {f.icon}
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-charcoal">{t(f)}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-charcoal-light">
                        {t(f.desc)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <Reveal delay={0.2}>
          <div className="mt-20 grid grid-cols-2 gap-6 rounded-3xl bg-gradient-charcoal p-8 text-white md:grid-cols-4 md:p-10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-serif text-4xl font-bold text-gradient-gold md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/70">
                  {t(s.label)}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}