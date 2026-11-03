/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { es } from "./es";
import { en } from "./en";
import { fr } from "./fr";

const TRANSLATIONS = { es, en, fr };
export const LANGUAGES = ['en', 'fr', 'es'];

export const CV_FILES = {
  // No Spanish CV yet: fall back to the English one
  es: '/cv/CV_Jose_Luis_Rativa_Medina_EN.pdf',
  en: '/cv/CV_Jose_Luis_Rativa_Medina_EN.pdf',
  fr: '/cv/CV_Jose_Luis_Rativa_Medina_FR.pdf',
};

const STORAGE_KEY = 'portfolio-lang';

const getInitialLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    // Storage unavailable (private mode, blocked cookies)
  }
  return 'en';
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = TRANSLATIONS[lang].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage errors
    }
  }, [lang]);

  // Formats 'YYYY-MM' as a localized short month + year, e.g. "Mar 2026"
  const formatDate = (value) => {
    const [year, month] = value.split('-').map(Number);
    const formatted = new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric' }).format(new Date(year, month - 1));
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang], formatDate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
