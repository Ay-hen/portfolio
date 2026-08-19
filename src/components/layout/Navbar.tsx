import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { Container } from "../ui/Container";
import { useTheme } from "../../hooks/useTheme";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useLanguage } from "../../i18n/LanguageContext";
import { profileByLang } from "../../data/profile";

const NAV_IDS = ["about", "experience", "projects", "skills", "education", "resume", "contact"];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(NAV_IDS);
  const profile = profileByLang[lang];

  const navItems = NAV_IDS.map((id) => ({ id, label: t(`nav.${id}`) }));

  function handleNavClick(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-[var(--text)]"
        >
          <span className="text-[var(--color-primary-light)]">&gt;_</span> Ayoub Hennani
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t("nav.aria.main")}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                activeId === item.id
                  ? "text-[var(--color-primary-light)]"
                  : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            <LinkedinIcon size={18} />
          </a>
          <LanguageToggle />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle compact />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            aria-label={open ? t("nav.menu.close") : t("nav.menu.open")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text)]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          aria-label={t("nav.aria.mobile")}
          className="border-t border-[var(--border)] bg-[var(--bg)] lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`rounded-md px-3 py-2.5 text-left text-sm ${
                  activeId === item.id
                    ? "text-[var(--color-primary-light)]"
                    : "text-[var(--muted)]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-2 flex gap-4 border-t border-[var(--border)] px-3 pt-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-[var(--muted)]">
                <GithubIcon size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[var(--muted)]">
                <LinkedinIcon size={18} />
              </a>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
