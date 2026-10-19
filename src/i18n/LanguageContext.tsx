import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { type Lang, detectInitialLang, persistLang } from "./detectLang";
import { translations } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Height of the sticky navbar (`h-16`). A section above this line is off-screen. */
const HEADER_OFFSET = 64;

interface ScrollAnchor {
  el: Element;
  top: number;
}

/**
 * Remembers which section the visitor is looking at and where it sits in the
 * viewport. French text is usually longer than English, so section heights
 * change on a language switch; this lets us put the same section back where
 * it was instead of leaving the visitor in a different part of the page.
 */
function captureScrollAnchor(): ScrollAnchor | null {
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const el = sections.find((s) => s.getBoundingClientRect().bottom > HEADER_OFFSET);
  return el ? { el, top: el.getBoundingClientRect().top } : null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);
  const anchorRef = useRef<ScrollAnchor | null>(null);

  // Runs before paint, right after the new language has been rendered.
  useLayoutEffect(() => {
    document.documentElement.lang = lang;

    const anchor = anchorRef.current;
    anchorRef.current = null;
    if (!anchor || !anchor.el.isConnected) return;

    const delta = anchor.el.getBoundingClientRect().top - anchor.top;
    // "instant" overrides the page-wide `scroll-behavior: smooth`.
    if (Math.abs(delta) > 1) window.scrollBy({ top: delta, behavior: "instant" });
  }, [lang]);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      anchorRef.current = captureScrollAnchor();
      setLangState(next);
      persistLang(next);
    },
    [lang],
  );

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "fr" : "en");
  }, [lang, setLang]);

  const t = useCallback(
    (key: string): string => translations[lang][key] ?? translations.en[key] ?? key,
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}