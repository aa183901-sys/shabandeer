"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { clinic } from "@/lib/content";

const links = [
  { id: "home", en: "Home", ar: "الرئيسية" },
  { id: "services", en: "Services", ar: "الخدمات" },
  { id: "gallery", en: "Gallery", ar: "المعرض" },
  { id: "about", en: "About", ar: "من نحن" },
  { id: "testimonials", en: "Reviews", ar: "آراء" },
  { id: "booking", en: "Booking", ar: "الحجز" },
  { id: "contact", en: "Contact", ar: "تواصل" },
];

export default function Navbar() {
  const { lang, t, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-pearl-100/90 shadow-soft backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-lux flex items-center justify-between py-4">
        {/* Logo */}
        <button onClick={() => go("home")} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold shadow-glow">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
              <path
                d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-left leading-tight">
            <span className="block font-serif text-lg font-bold text-charcoal">
              {t(clinic.name)}
            </span>
            <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-champagne-600">
              {t(clinic.tagline)}
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="group relative text-sm font-medium text-charcoal-light transition-colors hover:text-champagne-600"
              >
                {t(l)}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-champagne-500 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex h-9 items-center gap-1.5 rounded-full border border-champagne-200 px-3 text-xs font-semibold text-charcoal transition-colors hover:bg-champagne-50"
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "text-champagne-600" : ""}>EN</span>
            <span className="text-champagne-300">/</span>
            <span className={lang === "ar" ? "text-champagne-600" : ""}>ع</span>
          </button>

          <button
            onClick={() => go("booking")}
            className="hidden rounded-full bg-gradient-gold px-5 py-2.5 text-xs font-semibold text-white shadow-glow transition-transform hover:scale-105 sm:block"
          >
            {lang === "en" ? "Book Now" : "احجز الآن"}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne-200 text-charcoal lg:hidden"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-all ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-pearl-100/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-lux flex flex-col gap-1 py-4">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-charcoal-light transition-colors hover:bg-champagne-50 hover:text-champagne-600"
                  >
                    {t(l)}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => go("booking")}
                  className="btn-gold w-full"
                >
                  {lang === "en" ? "Book Appointment" : "احجز موعد"}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}