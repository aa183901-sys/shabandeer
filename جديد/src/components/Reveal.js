"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  x = 0,
  className = "",
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}