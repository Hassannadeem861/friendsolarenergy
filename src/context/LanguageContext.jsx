"use client";

import { createContext, useState, useMemo, useEffect } from "react";
import en from "@/lib/translations/en";
import ur from "@/lib/translations/ur";

const dictionaries = { en, ur };

export const LanguageContext = createContext({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState("en");

  // Persist choice across visits (safe: not sensitive data).
  useEffect(() => {
    const saved = window.localStorage.getItem("fse_locale");
    if (saved && dictionaries[saved]) setLocaleState(saved);
  }, []);

  const setLocale = (next) => {
    if (!dictionaries[next]) return;
    setLocaleState(next);
    window.localStorage.setItem("fse_locale", next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ur" ? "rtl" : "ltr";
  };

  const value = useMemo(
    () => ({ locale, t: dictionaries[locale], setLocale }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
