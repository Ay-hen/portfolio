import { useLanguage } from "../../i18n/LanguageContext";
import type { Lang } from "../../i18n/detectLang";

// Language names are written in their own language on purpose, so they stay
// recognisable whichever language the interface is currently showing.
const OPTIONS: { value: Lang; label: string; name: string }[] = [
  { value: "en", label: "EN", name: "English" },
  { value: "fr", label: "FR", name: "Français" },
];

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("lang.switchTo")}
      className="flex h-9 items-center rounded-md border border-[var(--border)] p-0.5 font-mono text-xs font-medium"
    >
      {OPTIONS.map(({ value, label, name }) => {
        const active = lang === value;
        return (
          <button
            key={value}
            type="button"
            lang={value}
            onClick={() => setLang(value)}
            aria-pressed={active}
            aria-label={name}
            title={name}
            className={`h-full rounded-[5px] transition-colors ${
              compact ? "px-2" : "px-2.5"
            } ${
              active
                ? "bg-[var(--color-primary)] text-white"
                : "text-[var(--muted)] hover:text-[var(--text)]"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}