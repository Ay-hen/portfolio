export type Lang = "en" | "fr";

const STORAGE_KEY = "portfolio-lang";

export function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "fr") return stored;

  const browserLang = window.navigator.language || "en";
  return browserLang.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function persistLang(lang: Lang) {
  window.localStorage.setItem(STORAGE_KEY, lang);
}
