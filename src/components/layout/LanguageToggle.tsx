import { useLanguage } from "../../i18n/LanguageContext";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t("lang.switchTo")}
      title={t("lang.switchTo")}
      className={`flex h-9 items-center justify-center rounded-md border border-[var(--border)] font-mono text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)] ${
        compact ? "w-9" : "gap-1.5 px-3"
      }`}
    >
      <span aria-hidden="true">{lang === "en" ? "🇬🇧" : "🇫🇷"}</span>
      {!compact && <span>{lang.toUpperCase()}</span>}
    </button>
  );
}
