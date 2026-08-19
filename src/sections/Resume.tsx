import { Download, FileText } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { LinkButton } from "../components/ui/Button";
import { useLanguage } from "../i18n/LanguageContext";
import { profileByLang } from "../data/profile";
import { experiencesByLang } from "../data/experience";
import { educationByLang } from "../data/education";
import { skillNodes, extraSkillsByLang } from "../data/skills";

export function Resume() {
  const { lang, t } = useLanguage();
  const profile = profileByLang[lang];
  const experiences = experiencesByLang[lang];
  const education = educationByLang[lang];
  const totalSkills =
    skillNodes.length + extraSkillsByLang[lang].reduce((n, c) => n + c.items.length, 0);

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
            <LinkButton href={profile.cvFile} download className="w-full">
              <Download size={16} /> {t("resume.download")}
            </LinkButton>
            
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
                title={t("resume.preview")}
                src={profile.cvFile}
                className="h-[420px] w-full rounded-lg border border-[var(--border)] bg-[var(--surface)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
