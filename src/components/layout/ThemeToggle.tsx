import { Moon, Sun } from "lucide-react";
import type { Theme } from "../../hooks/useTheme";
import { useLanguage } from "../../i18n/LanguageContext";

export function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme;
  onToggle: () => void;
}) {
  const { t } = useLanguage();
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === "dark" ? t("theme.toLight") : t("theme.toDark")}
      aria-pressed={theme === "light"}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
