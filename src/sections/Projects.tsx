import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../components/ui/BrandIcons";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Tag } from "../components/ui/Tag";
import { ProjectModal } from "../components/ui/ProjectModal";
import { useLanguage } from "../i18n/LanguageContext";
import { projectsByLang } from "../data/projects";
import type { ProjectEntry } from "../types";

export function Projects() {
  const { lang, t } = useLanguage();
  const projects = projectsByLang[lang];
  const [selected, setSelected] = useState<ProjectEntry | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          description={t("projects.description")}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              className="group flex flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 text-left transition-colors hover:border-[var(--color-primary-light)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--text)]">
                  {project.name}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-primary-light)]"
                />
              </div>
              <p className="mt-1.5 text-sm text-[var(--muted)]">{project.tagline}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
                {project.technologies.length > 4 && (
                  <Tag>{`+${project.technologies.length - 4}`}</Tag>
                )}
              </div>

              {project.githubUrl && (
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-[var(--muted)]">
                  <GithubIcon size={13} />
                  {project.githubUrl.replace("https://github.com/", "")}
                </span>
              )}
            </button>
          ))}
        </div>
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
