import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function ShortSplash({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timeout = setTimeout(onComplete, reducedMotion ? 150 : 700);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[var(--bg)]">
      <div className="flex items-center gap-3 font-mono text-sm text-[var(--muted)]">
        <span className="inline-block h-3.5 w-1.5 animate-blink bg-[var(--color-primary-light)]" />
        {t("intro.loading")}
      </div>
    </div>
  );
}
