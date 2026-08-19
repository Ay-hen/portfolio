import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/ui/BrandIcons";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Tag } from "../components/ui/Tag";
import { useLanguage } from "../i18n/LanguageContext";
import { experiencesByLang } from "../data/experience";

export function Experience() {
  const { lang, t } = useLanguage();
  const experiences = experiencesByLang[lang];

  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("experience.eyebrow")}
          title={t("experience.title")}
          description={t("experience.description")}
        />

        <ol className="relative space-y-10 border-l border-[var(--border)] pl-8">
          {experiences.map((exp) => (
            <li key={exp.id} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--color-primary-light)] bg-[var(--bg)]" />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-xs uppercase tracking-wide text-[var(--color-primary-light)]">
                  {t(`experience.type.${exp.type}`)}
                </span>
                <span className="text-xs text-[var(--muted)]">{exp.period}</span>
              </div>

              <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--text)]">
                {exp.role}
              </h3>
              <p className="text-sm text-[var(--muted)]">
                {exp.organization} — {exp.location}
              </p>

              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[var(--muted)]">
                {exp.description}
              </p>

              <ul className="mt-3 space-y-1.5">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-[14px] leading-relaxed text-[var(--text)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-primary-light)]" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              {(exp.githubUrl || exp.liveUrl) && (
                <div className="mt-4 flex gap-4">
                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--color-primary-light)]"
                    >
                      <GithubIcon size={14} /> {t("experience.code")}
                    </a>
                  )}
                  {exp.liveUrl && (
                    <a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--color-primary-light)]"
                    >
                      <ExternalLink size={14} /> {t("experience.demo")}
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
