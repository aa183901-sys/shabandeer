
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { services, clinic } from "@/lib/content";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1];

const timeSlots = [
  "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00", "19:00",
];

export default function Booking() {
  const { lang, t } = useLanguage();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  const steps = lang === "en"
    ? ["Service", "Date & Time", "Your Details"]
    : ["الخدمة", "التاريخ والوقت", "بياناتك"];

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const canNext = () => {
    if (step === 0) return !!form.service;
    if (step === 1) return !!form.date && !!form.time;
    if (step === 2) return !!form.name && !!form.phone;
    return false;
  };

  const today = new Date().toISOString().split("T")[0];

  const buildMessage = () => {
    const svc = services.find((s) => s.id === form.service);
    const lines = lang === "en"
      ? [
          "New Appointment Request — Al-Shabandar Clinic",
          `Service: ${svc ? svc.title.en : form.service}`,
          `Date: ${form.date}`,
          `Time: ${form.time}`,
          `Name: ${form.name}`,
          `Phone: ${form.phone}`,
          form.notes ? `Notes: ${form.notes}` : "",
        ]
      : [
          "طلب حجز موعد جديد — عيادة الشابندر",
          `الخدمة: ${svc ? svc.title.ar : form.service}`,
          `التاريخ: ${form.date}`,
          `الوقت: ${form.time}`,
          `الاسم: ${form.name}`,
          `الهاتف: ${form.phone}`,
          form.notes ? `ملاحظات: ${form.notes}` : "",
        ];
    return lines.filter(Boolean).join("\n");
  };

  const sendWhatsApp = () => {
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${clinic.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(
      lang === "en" ? "Appointment Request — Al-Shabandar Clinic" : "طلب حجز موعد — عيادة الشابندر"
    );
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${clinic.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setStep(0);
    setForm({ service: "", date: "", time: "", name: "", phone: "", notes: "" });
  };

  return (
    <section id="booking" className="relative overflow-hidden bg-gradient-charcoal py-24 md:py-32">
      {/* Decorative */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-champagne-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-rose-gold/10 blur-3xl" />

      <div className="container-lux relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-champagne-300">
            <span className="h-px w-8 bg-champagne-400" />
            {lang === "en" ? "Smart Booking" : "حجز ذكي"}
            <span className="h-px w-8 bg-champagne-400" />
          </span>
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {lang === "en" ? "Book Your Appointment" : "احجزي موعدك"}
          </h2>
          <p className="mt-4 text-white/70">
            {lang === "en"
              ? "Three simple steps. Choose your service, pick a time, and we'll confirm via WhatsApp or email."
              : "ثلاث خطوات بسيطة. اختاري خدمتك، حددي الوقت، وسنؤكد الحجز عبر واتساب أو البريد."}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-6 shadow-card md:p-10">
            {/* Stepper */}
            <div className="mb-8 flex items-center justify-between">
              {steps.map((s, i) => (
                <div key={i} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                        i <= step
                          ? "bg-gradient-gold text-white shadow-glow"
                          : "bg-pearl-200 text-charcoal-light"
                      }`}
                    >
                      {i < step ? (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span
                      className={`mt-2 hidden text-xs font-medium sm:block ${
                        i <= step ? "text-charcoal" : "text-charcoal-light"
                      }`}
                    >
                      {s}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mx-2 h-0.5 flex-1 rounded-full bg-pearl-200">
                      <motion.div
                        className="h-full rounded-full bg-gradient-gold"
                        initial={{ width: "0%" }}
                        animate={{ width: i < step ? "100%" : "0%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Success state */}
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-gold text-white shadow-glow"
                  >
                    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="mt-6 font-serif text-2xl font-bold text-charcoal">
                    {lang === "en" ? "Request Sent!" : "تم إرسال الطلب!"}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal-light">
                    {lang === "en"
                      ? "We'll contact you shortly to confirm your appointment."
                      : "سنتواصل معك قريباً لتأكيد موعدك."}
                  </p>
                  <button onClick={reset} className="btn-outline-gold mt-6">
                    {lang === "en" ? "Book Another" : "حجز آخر"}
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Step 0: Service */}
                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <motion.div
                        key="s0"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4, ease }}
                        className="grid gap-4 sm:grid-cols-3"
                      >
                        {services.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => update("service", s.id)}
                            className={`group rounded-2xl border-2 p-5 text-left transition-all duration-300 ${
                              form.service === s.id
                                ? "border-champagne-500 bg-champagne-50 shadow-glow"
                                : "border-pearl-200 hover:border-champagne-300"
                            }`}
                          >
                            <span
                              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                                form.service === s.id
                                  ? "bg-gradient-gold text-white"
                                  : "bg-pearl-200 text-champagne-600"
                              }`}
                            >
                              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                                <path
                                  d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <h4 className="mt-3 font-semibold text-charcoal">
                              {t(s.title)}
                            </h4>
                            <p className="mt-1 text-xs text-charcoal-light line-clamp-2">
                              {t(s.desc)}
                            </p>
                          </button>
                        ))}
                      </motion.div>
                    )}

                    {/* Step 1: Date & Time */}
                    {step === 1 && (
                      <motion.div
                        key="s1"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4, ease }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-charcoal">
                            {lang === "en" ? "Select Date" : "اختاري التاريخ"}
                          </label>
                          <input
                            type="date"
                            min={today}
                            value={form.date}
                            onChange={(e) => update("date", e.target.value)}
                            className="w-full rounded-xl border border-pearl-200 bg-pearl-50 px-4 py-3 text-charcoal outline-none transition-colors focus:border-champagne-500"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-charcoal">
                            {lang === "en" ? "Select Time" : "اختاري الوقت"}
                          </label>
                          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                            {timeSlots.map((tm) => (
                              <button
                                key={tm}
                                onClick={() => update("time", tm)}
                                className={`rounded-xl border py-2.5 text-sm font-medium transition-all ${
                                  form.time === tm
                                    ? "border-champagne-500 bg-gradient-gold text-white shadow-glow"
                                    : "border-pearl-200 text-charcoal hover:border-champagne-300"
                                }`}
                              >
                                {tm}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Details */}
                    {step === 2 && (
                      <motion.div
                        key="s2"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4, ease }}
                        className="space-y-5"
                      >
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-sm font-semibold text-charcoal">
                              {lang === "en" ? "Full Name" : "الاسم الكامل"}
                            </label>
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) => update("name", e.target.value)}
                              placeholder={lang === "en" ? "Your name" : "اسمك"}
                              className="w-full rounded-xl border border-pearl-200 bg-pearl-50 px-4 py-3 text-charcoal outline-none transition-colors focus:border-champagne-500"
                            />
                          </div>
                          <div>
                            <label className="mb-2 block text-sm font-semibold text-charcoal">
                              {lang === "en" ? "Phone Number" : "رقم الهاتف"}
                            </label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => update("phone", e.target.value)}
                              placeholder="+964 ..."
                              className="w-full rounded-xl border border-pearl-200 bg-pearl-50 px-4 py-3 text-charcoal outline-none transition-colors focus:border-champagne-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-charcoal">
                            {lang === "en" ? "Notes (optional)" : "ملاحظات (اختياري)"}
                          </label>
                          <textarea
                            rows={3}
                            value={form.notes}
                            onChange={(e) => update("notes", e.target.value)}
                            placeholder={lang === "en" ? "Anything we should know?" : "هل من شيء يجب أن نعرفه؟"}
                            className="w-full resize-none rounded-xl border border-pearl-200 bg-pearl-50 px-4 py-3 text-charcoal outline-none transition-colors focus:border-champagne-500"
                          />
                        </div>

                        {/* Summary */}
                        <div className="rounded-2xl bg-pearl-100 p-4 text-sm">
                          <p className="font-semibold text-charcoal">
                            {lang === "en" ? "Summary" : "الملخص"}
                          </p>
                          <ul className="mt-2 space-y-1 text-charcoal-light">
                            <li>
                              <span className="text-champagne-600">●</span>{" "}
                              {t(services.find((s) => s.id === form.service)?.title || { en: "", ar: "" })}
                            </li>
                            <li>
                              <span className="text-champagne-600">●</span> {form.date} — {form.time}
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setStep((s) => Math.max(0, s - 1))}
                      disabled={step === 0}
                      className="rounded-full border border-pearl-200 px-6 py-3 text-sm font-semibold text-charcoal transition-all disabled:opacity-40 enabled:hover:border-champagne-400"
                    >
                      {lang === "en" ? "Back" : "رجوع"}
                    </button>

                    {step < 2 ? (
                      <button
                        onClick={() => canNext() && setStep((s) => s + 1)}
                        disabled={!canNext()}
                        className="btn-gold disabled:opacity-40"
                      >
                        {lang === "en" ? "Continue" : "متابعة"}
                        <svg className="h-4 w-4 rtl:rotate-180" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12h14M13 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    ) : (
                      <div className="flex gap-3">
                        <button
                          onClick={sendWhatsApp}
                          disabled={!canNext()}
                          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105 disabled:opacity-40"
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.1-.3.1-.5 0-.7-.3-1.4-.7-2-1.3-.5-.5-.9-1.1-1.2-1.7-.1-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3.2-.4 0-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.5.5.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.2-.3-.2-.5-.3z" />
                          </svg>
                          WhatsApp
                        </button>
                        <button
                          onClick={sendEmail}
                          disabled={!canNext()}
                          className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105 disabled:opacity-40"
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                            <path
                              d="M4 6h16v12H4zM4 6l8 7 8-7"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Email
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}