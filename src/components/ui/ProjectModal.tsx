import { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon } from "./BrandIcons";
import type { ProjectEntry } from "../../types";
import { Tag } from "./Tag";
import { useLanguage } from "../../i18n/LanguageContext";

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectEntry | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:rounded-xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  id="project-modal-title"
                  className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--text)]"
                >
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{project.tagline}</p>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label={t("projects.modal.close")}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wide text-[var(--color-primary-light)]">
                  {t("projects.modal.purpose")}
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--text)]">
                  {project.purpose}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wide text-[var(--color-primary-light)]">
                  {t("projects.modal.features")}
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2 text-[14px] leading-relaxed text-[var(--text)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-primary-light)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wide text-[var(--color-primary-light)]">
                  {t("projects.modal.architecture")}
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted)]">
                  {project.architecture}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wide text-[var(--color-primary-light)]">
                  {t("projects.modal.technologies")}
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 border-t border-[var(--border)] pt-5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--text)] hover:text-[var(--color-primary-light)]"
                  >
                    <GithubIcon size={15} /> {t("projects.modal.code")}
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--text)] hover:text-[var(--color-primary-light)]"
                  >
                    <ExternalLink size={15} /> {t("projects.modal.demo")}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
