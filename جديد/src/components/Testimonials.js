"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1];

function Stars({ n }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < n ? "text-champagne-500" : "text-pearl-300"}`}
          fill="currentColor"
        >
          <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 17l-5.5 2.3 1-6.1L3 8.9 9 8l3-6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setActive((a) => (a + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const item = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-pearl-100 py-24 md:py-32"
    >
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-gold/20 blur-3xl" />

      <div className="container-lux relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-champagne-500" />
            {lang === "en" ? "Client Stories" : "قصص عملائنا"}
            <span className="h-px w-8 bg-champagne-500" />
          </span>
          <h2 className="section-title">
            {lang === "en" ? "What Our Clients Say" : "ماذا يقول عملاؤنا"}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="relative mx-auto mt-14 max-w-3xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Quote mark */}
            <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-[8rem] leading-none text-champagne-200">
              &ldquo;
            </div>

            <div className="relative min-h-[280px] rounded-3xl bg-white p-8 shadow-card md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease }}
                  className="text-center"
                >
                  <Stars n={item.rating} />
                  <p className="mt-5 font-serif text-xl leading-relaxed text-charcoal md:text-2xl">
                    {t(item.quote)}
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold font-serif text-lg font-bold text-white">
                      {t(item.name).charAt(0)}
                    </span>
                    <div className="text-left">
                      <p className="font-semibold text-charcoal">{t(item.name)}</p>
                      <p className="text-xs text-champagne-600">{t(item.role)}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne-200 text-charcoal transition-all hover:bg-champagne-50"
                aria-label="Previous"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 rtl:rotate-180" fill="none">
                  <path
                    d="M15 6l-6 6 6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-8 bg-gradient-gold"
                        : "w-2 bg-pearl-300 hover:bg-champagne-300"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne-200 text-charcoal transition-all hover:bg-champagne-50"
                aria-label="Next"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 rtl:rotate-180" fill="none">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}