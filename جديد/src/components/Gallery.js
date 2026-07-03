"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { gallery } from "@/lib/content";
import Reveal from "./Reveal";

function ComparisonSlider({ item, lang, t }) {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);

  const update = (clientX) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl shadow-card"
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => update(e.touches[0].clientX)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
    >
      {/* After (base) */}
      <img
        src={item.after}
        alt="after"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <span className="absolute bottom-4 right-4 rounded-full bg-champagne-500 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
        {lang === "en" ? "After" : "بعد"}
      </span>

      {/* Before (clipped via inset so image keeps full width) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={item.before}
          alt="before"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <span className="absolute bottom-4 left-4 rounded-full bg-charcoal/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
          {lang === "en" ? "Before" : "قبل"}
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-1 bg-white shadow-glow"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-champagne-600 shadow-card">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M9 7l-5 5 5 5M15 7l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-charcoal backdrop-blur">
        {t(item.title)}
      </div>
    </div>
  );
}

export default function Gallery() {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState(0);

  return (
    <section id="gallery" className="relative bg-gradient-luxury py-24 md:py-32">
      <div className="container-lux">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-champagne-500" />
            {lang === "en" ? "Real Results" : "نتائج حقيقية"}
            <span className="h-px w-8 bg-champagne-500" />
          </span>
          <h2 className="section-title">
            {lang === "en" ? "Before & After Gallery" : "معرض قبل وبعد"}
          </h2>
          <p className="mt-4 text-charcoal-light">
            {lang === "en"
              ? "Drag the slider to reveal the transformation. Real clients, real results."
              : "اسحبي الشريط لكشف التحول. عملاء حقيقيون، نتائج حقيقية."}
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_320px]">
          {/* Slider */}
          <Reveal>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <ComparisonSlider item={gallery[active]} lang={lang} t={t} />
              </motion.div>
            </AnimatePresence>
          </Reveal>

          {/* Thumbnails / selector */}
          <Reveal delay={0.15}>
            <div className="flex flex-row gap-4 lg:flex-col">
              {gallery.map((g, i) => (
                <button
                  key={g.id}
                  onClick={() => setActive(i)}
                  className={`group relative flex-1 overflow-hidden rounded-2xl transition-all duration-300 lg:flex-none ${
                    active === i
                      ? "ring-2 ring-champagne-500 ring-offset-2 ring-offset-pearl-100"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="relative h-24 w-full lg:h-20">
                    <img
                      src={g.after}
                      alt={t(g.title)}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    <span className="absolute bottom-1.5 left-2 text-[0.65rem] font-semibold text-white">
                      {t(g.title)}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}