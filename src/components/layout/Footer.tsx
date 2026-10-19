import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { Container } from "../ui/Container";
import { useLanguage } from "../../i18n/LanguageContext";
import { profileByLang } from "../../data/profile";

export function Footer() {
  const { lang, t } = useLanguage();
  const profile = profileByLang[lang];

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-[var(--muted)] sm:flex-row">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {profile.name} — {t("footer.builtWith")}
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--text)]">
            <GithubIcon size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--text)]">
            <LinkedinIcon size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-[var(--text)]">
            <Mail size={16} />
          </a>
        </div>
      </Container>
    </footer>
  );
}