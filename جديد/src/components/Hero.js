"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { lang, t } = useLanguage();

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-luxury"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease, delay: 2.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pearl-100/95 via-pearl-100/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-pearl-100 via-transparent to-pearl-100/40" />
        <div className="absolute inset-0 bg-noise opacity-60" />
      </div>

      {/* Floating decorative orbs */}
      <motion.div
        className="absolute right-[8%] top-[20%] h-72 w-72 rounded-full bg-rose-gold/30 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[5%] bottom-[15%] h-80 w-80 rounded-full bg-champagne-200/40 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="container-lux relative z-10 pt-28">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 2.4 }}
            className="eyebrow"
          >
            <span className="h-px w-8 bg-champagne-500" />
            {lang === "en" ? "Premium Medical Aesthetics" : "تجميل طبي فاخر"}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 2.55 }}
            className="font-serif text-4xl font-bold leading-[1.1] text-charcoal md:text-6xl lg:text-7xl"
          >
            {lang === "en" ? (
              <>
                Where Beauty Meets
                <br />
                <span className="shimmer-text">Medical Precision</span>
              </>
            ) : (
              <>
                حيث يلتقي الجمال
                <br />
                <span className="shimmer-text">بالإتقان الطبي</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 2.75 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-light md:text-lg"
          >
            {lang === "en"
              ? "At Al-Shabandar Clinic, certified specialists blend artistry with advanced aesthetics — Botox, Fillers, Laser, and bespoke skincare — to reveal your most radiant, natural self."
              : "في عيادة الشابندر، يدمج أخصائيونا المعتمدون الفن مع أحدث تقنيات التجميل — البوتوكس، الفلر، الليزر، والعناية المخصصة بالبشرة — لإبراز أجمل وأكثر إشراقاً لكِ."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 2.95 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("booking")}
              className="btn-gold group"
            >
              <span className="relative z-10">
                {lang === "en" ? "Book Appointment" : "احجزي موعدك"}
              </span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
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
              {/* shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("services")}
              className="btn-outline-gold"
            >
              {lang === "en" ? "Explore Services" : "استكشفي خدماتنا"}
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 3.15 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium text-charcoal-light"
          >
            {[
              { en: "Certified Specialists", ar: "أخصائيون معتمدون" },
              { en: "FDA-approved Technology", ar: "تقنيات معتمدة" },
              { en: "Safety First", ar: "الأمان أولاً" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-champagne-100 text-champagne-600">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {t(b)}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-champagne-400 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-champagne-500"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}