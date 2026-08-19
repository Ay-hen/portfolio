import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { type Lang, detectInitialLang, persistLang } from "./detectLang";
import { translations } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
    persistLang(next);
  }

  function toggleLang() {
    setLang(lang === "en" ? "fr" : "en");
  }

  function t(key: string): string {
    return translations[lang][key] ?? translations.en[key] ?? key;
  }

  const value = useMemo(() => ({ lang, setLang, toggleLang, t }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
