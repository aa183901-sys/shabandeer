"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { services } from "@/lib/content";
import Reveal from "./Reveal";

const icons = {
  syringe: (
    <path
      d="M18 2l4 4M15 5l4 4M3 21l6-6M11 7l6 6M9 9l-3 3 6 6 3-3M13 3l8 8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  laser: (
    <>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  sparkle: (
    <path
      d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Services() {
  const { lang, t } = useLanguage();
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="relative bg-pearl-100 py-24 md:py-32">
      <div className="container-lux">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-champagne-500" />
            {lang === "en" ? "Our Treatments" : "علاجاتنا"}
            <span className="h-px w-8 bg-champagne-500" />
          </span>
          <h2 className="section-title">
            {lang === "en" ? "Signature Services" : "خدماتنا المميزة"}
          </h2>
          <p className="mt-4 text-charcoal-light">
            {lang === "en"
              ? "Curated aesthetic experiences delivered with medical precision, luxury care, and the latest technology."
              : "تجارب تجميلية منتقاة تُقدَّم بإتقان طبي ورعاية فاخرة وأحدث التقنيات."}
          </p>
        </Reveal>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative h-full overflow-hidden rounded-3xl bg-white shadow-soft transition-shadow duration-500 hover:shadow-card"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${s.image}')` }}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-champagne-600 shadow-soft backdrop-blur">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                      {icons[s.icon]}
                    </svg>
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-champagne-700 backdrop-blur">
                    0{i + 1}
                  </span>
                </div>

                {/* Body */}
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-bold text-charcoal">
                    {t(s.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                    {t(s.desc)}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {s.points[lang].map((p, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-charcoal-light"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-champagne-100 text-champagne-600">
                          <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none">
                            <path
                              d="M5 13l4 4L19 7"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => scrollTo("booking")}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-champagne-600 transition-colors hover:text-champagne-700"
                  >
                    {lang === "en" ? "Book this service" : "احجزي هذه الخدمة"}
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Glow border on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-champagne-400/0 transition-all duration-500 group-hover:ring-champagne-400/40 group-hover:shadow-glow" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}