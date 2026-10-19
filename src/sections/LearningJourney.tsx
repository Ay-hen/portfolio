import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Container as ContainerIcon,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { learningPathsByLang } from "../data/learningJourney";
import type { LearningPath, LearningStatus } from "../types";

const PATH_ICONS: Record<LearningPath["id"], LucideIcon> = {
  "fullstack-java": Layers,
  devops: ContainerIcon,
  ai: BrainCircuit,
};

const STATUS_LABEL_KEYS: Record<LearningStatus, string> = {
  completed: "journey.status.completed",
  "in-progress": "journey.status.inProgress",
  planned: "journey.status.planned",
};

/**
 * Green filled circle = completed. Empty circle = anything else.
 * Decorative only (aria-hidden): the status is always also written as text.
 */
function StatusDot({
  completed,
  className = "",
}: {
  completed: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`block h-4 w-4 shrink-0 rounded-full border-2 ${className}`}
      style={
        completed
          ? {
              background: "var(--color-mint)",
              borderColor:
                "color-mix(in srgb, var(--color-mint) 65%, black)",
            }
          : {
              background: "var(--surface)",
              borderColor: "var(--muted)",
            }
      }
    />
  );
}

export function LearningJourney() {
  const { lang, t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const paths = useMemo(() => learningPathsByLang[lang], [lang]);

  return (
    <section id="journey" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("journey.eyebrow")}
          title={t("journey.title")}
          description={t("journey.intro")}
        />

        <ul
          aria-label={t("journey.legend.aria")}
          className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--muted)]"
        >
          <li className="flex items-center gap-2">
            <StatusDot completed />
            {t("journey.status.completed")}
          </li>
          <li className="flex items-center gap-2">
            <StatusDot completed={false} />
            {t("journey.legend.notCompleted")}
          </li>
        </ul>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paths.map((path, index) => {
            const Icon = PATH_ICONS[path.id];
            const done = path.items.filter(
              (item) => item.status === "completed",
            ).length;
            const isLoneLast =
              index === paths.length - 1 && paths.length % 2 === 1;

            return (
              <motion.article
                key={path.id}
                aria-labelledby={`journey-${path.id}`}
                initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: reducedMotion ? 0 : index * 0.08,
                }}
                className={`flex flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 ${
                  isLoneLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <header className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--color-primary-light)]"
                  >
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <h3
                      id={`journey-${path.id}`}
                      className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--text)]"
                    >
                      {path.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[var(--muted)]">
                      {path.description}
                    </p>
                  </div>
                </header>

                <p className="mt-5 font-mono text-xs text-[var(--muted)]">
                  {done} / {path.items.length} {t("journey.completedLabel")}
                </p>

                <ol className="mt-4 flex flex-col gap-4">
                  {path.items.map((item, i) => {
                    const isCompleted = item.status === "completed";
                    const isLast = i === path.items.length - 1;

                    return (
                      <li key={item.id} className="relative flex gap-3">
                        {/* connector from this dot down to the next one */}
                        {!isLast && (
                          <span
                            aria-hidden
                            className="absolute top-[11px] -bottom-[27px] left-2 w-px -translate-x-1/2 bg-[var(--border)]"
                          />
                        )}
                        <StatusDot
                          completed={isCompleted}
                          className="relative z-10 mt-[3px]"
                        />
                        <div className="min-w-0">
                          <p className="text-sm leading-snug text-[var(--text)]">
                            {item.label}
                          </p>
                          <p
                            className={`mt-0.5 font-mono text-[11px] tracking-wide ${
                              isCompleted
                                ? "font-medium text-[var(--text)]"
                                : "text-[var(--muted)]"
                            }`}
                          >
                            {t(STATUS_LABEL_KEYS[item.status])}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}