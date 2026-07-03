"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pearl-100"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Pulsing logo mark */}
          <div className="relative flex h-28 w-28 items-center justify-center">
            <motion.span
              className="absolute inset-0 rounded-full border border-champagne-400"
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border border-rose-gold"
              animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
            />
            <motion.div
              className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-gold shadow-glow"
              animate={{ scale: [0.9, 1.05, 0.9] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" className="h-9 w-9 text-white" fill="none">
                <path
                  d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>

          {/* Brand name */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="font-serif text-xl tracking-[0.25em] text-charcoal">
              AL-SHABANDAR
            </p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.4em] text-champagne-600">
              Aesthetics Clinic
            </p>
          </motion.div>

          {/* Loading bar */}
          <div className="mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-champagne-100">
            <motion.div
              className="h-full bg-gradient-gold"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}