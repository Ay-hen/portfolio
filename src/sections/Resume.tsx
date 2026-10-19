import { Download, ExternalLink, FileText } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { LinkButton } from "../components/ui/Button";
import { useLanguage } from "../i18n/LanguageContext";
import { profileByLang } from "../data/profile";
import { experiencesByLang } from "../data/experience";
import { educationByLang } from "../data/education";
import { skillNodes, extraSkillsByLang } from "../data/skills";
import { cvFiles, cvList } from "../data/cv";

export function Resume() {
  const { lang, t } = useLanguage();
  const profile = profileByLang[lang];
  const experiences = experiencesByLang[lang];
  const education = educationByLang[lang];
  const totalSkills =
    skillNodes.length + extraSkillsByLang[lang].reduce((n, c) => n + c.items.length, 0);

  // The preview follows the selected language; both CVs stay downloadable.
  const activeCv = cvFiles[lang];

  return (
    <section id="resume" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("resume.eyebrow")}
          title={t("resume.title")}
          description={t("resume.description")}
        />

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-col items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--surface-2)] text-[var(--color-primary-light)]">
              <FileText size={20} />
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--text)]">
                {profile.name}
              </p>
              <p className="text-xs text-[var(--muted)]">{profile.title}</p>
            </div>

            <div role="group" aria-label={t("resume.downloads")} className="flex w-full flex-col gap-2">
              {cvList.map((cv) => (
                <LinkButton
                  key={cv.lang}
                  href={cv.href}
                  download={cv.downloadName}
                  variant={cv.lang === lang ? "primary" : "outline"}
                  className="w-full whitespace-normal text-center"
                >
                  <Download size={16} className="shrink-0" />
                  <span lang={cv.lang}>{cv.label}</span>
                </LinkButton>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-primary-light)]">
                {t("resume.stat.experience")}
              </p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text)]">
                {experiences.length}
              </p>
              <p className="text-xs text-[var(--muted)]">{t("resume.stat.experienceSub")}</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-primary-light)]">
                {t("resume.stat.education")}
              </p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text)]">
                {education.length}
              </p>
              <p className="text-xs text-[var(--muted)]">{t("resume.stat.educationSub")}</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-primary-light)]">
                {t("resume.stat.skills")}
              </p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text)]">{totalSkills}</p>
              <p className="text-xs text-[var(--muted)]">{t("resume.stat.skillsSub")}</p>
            </div>

            <div className="sm:col-span-3">
              <iframe
                key={activeCv.href}
                title={`${t("resume.preview")} — ${activeCv.languageName}`}
                src={`${activeCv.href}#view=FitH`}
                className="h-[420px] w-full rounded-lg border border-[var(--border)] bg-[var(--surface)]"
              />
              {/* Many mobile browsers can't render PDFs inside an iframe, so always offer a direct link. */}
              <a
                href={activeCv.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--color-primary-light)]"
              >
                <ExternalLink size={14} className="shrink-0" /> {t("resume.openInTab")}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}