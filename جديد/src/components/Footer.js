"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { clinic } from "@/lib/content";
import Reveal from "./Reveal";

export default function Footer() {
  const { lang, t } = useLanguage();
  const year = new Date().getFullYear();

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer id="contact" className="relative overflow-hidden bg-charcoal text-white">
      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-gold" />

      <div className="container-lux relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold shadow-glow">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none">
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
                <p className="font-serif text-xl font-bold">{t(clinic.name)}</p>
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-champagne-300">
                  {t(clinic.tagline)}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {lang === "en"
                ? "Baghdad's premier destination for premium medical aesthetics, where beauty meets medical precision."
                : "الوجهة الأولى في بغداد للتجميل الطبي الفاخر، حيث يلتقي الجمال بالإتقان الطبي."}
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={clinic.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gradient-gold"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.3-8.3a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={clinic.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gradient-gold"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M19.6 6.3a5.5 5.5 0 0 1-3.3-1.1 5.5 5.5 0 0 1-2.1-3.4h-3v12.2a2.7 2.7 0 1 1-2-2.6V8.4a5.7 5.7 0 1 0 4.9 5.6V9.8a8.4 8.4 0 0 0 5 1.7V8.4c-.5 0-1 0-1.5-.1z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={`https://wa.me/${clinic.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#25D366]"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.1-.3.1-.5 0-.7-.3-1.4-.7-2-1.3-.5-.5-.9-1.1-1.2-1.7-.1-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3.2-.4 0-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.5.5.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.2-.3-.2-.5-.3z" />
                </svg>
              </motion.a>
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal delay={0.1}>
            <h4 className="font-serif text-lg font-semibold">
              {lang === "en" ? "Explore" : "استكشف"}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {[
                { id: "home", en: "Home", ar: "الرئيسية" },
                { id: "services", en: "Services", ar: "الخدمات" },
                { id: "gallery", en: "Gallery", ar: "المعرض" },
                { id: "about", en: "About", ar: "من نحن" },
                { id: "booking", en: "Book Now", ar: "احجز الآن" },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="group flex items-center gap-2 transition-colors hover:text-champagne-300"
                  >
                    <span className="h-px w-0 bg-champagne-400 transition-all duration-300 group-hover:w-4" />
                    {t(l)}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.2}>
            <h4 className="font-serif text-lg font-semibold">
              {lang === "en" ? "Contact" : "تواصل"}
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-none text-champagne-400" fill="none">
                  <path
                    d="M12 21s-7-4.5-7-10a7 7 0 1 1 14 0c0 5.5-7 10-7 10z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                {t(clinic.address)}
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none text-champagne-400" fill="none">
                  <path
                    d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href={`tel:${clinic.phone}`} className="hover:text-champagne-300" dir="ltr">
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none text-champagne-400" fill="none">
                  <path
                    d="M4 6h16v12H4zM4 6l8 7 8-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href={`mailto:${clinic.email}`} className="hover:text-champagne-300">
                  {clinic.email}
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-6 rounded-2xl bg-white/5 p-4">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-champagne-300">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {lang === "en" ? "Opening Hours" : "ساعات العمل"}
              </p>
              {clinic.hours.map((h, i) => (
                <div key={i} className="flex justify-between text-xs text-white/60">
                  <span>{t(h.day)}</span>
                  <span dir="ltr">{h.time}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.3}>
            <h4 className="font-serif text-lg font-semibold">
              {lang === "en" ? "Find Us" : "موقعنا"}
            </h4>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 shadow-card">
              <iframe
                src={clinic.mapEmbed}
                width="100%"
                height="220"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al-Shabandar Clinic Location"
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                t(clinic.address)
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-champagne-300 hover:text-champagne-200"
            >
              {lang === "en" ? "Get Directions" : "احصلي على الاتجاهات"}
              <svg className="h-4 w-4 rtl:rotate-180" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>
            © {year} {t(clinic.name)}.{" "}
            {lang === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
          </p>
          <p className="flex items-center gap-1.5">
            {lang === "en" ? "Crafted with" : "صُنع بـ"}
            <span className="text-rose-gold">♥</span>
            {lang === "en" ? "in Baghdad" : "في بغداد"}
          </p>
        </div>
      </div>
    </footer>
  );
}