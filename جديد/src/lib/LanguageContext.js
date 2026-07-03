"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

const LanguageContext = createContext({
  lang: "en",
  dir: "ltr",
  t: (obj) => obj?.en ?? "",
  toggle: () => {},
  setLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  // Helper: pick the right language string from a {en, ar} object
  const t = useCallback(
    (obj) => {
      if (!obj) return "";
      if (typeof obj === "string") return obj;
      return obj[lang] ?? obj.en ?? "";
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, dir, t, toggle, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}