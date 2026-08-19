import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { skillIconMap } from "./skillIcons";
import { useLanguage } from "../../i18n/LanguageContext";
import type { SkillNode } from "../../types";

export function SkillDetailPanel({
  node,
  onClose,
}: {
  node: SkillNode | null;
  onClose: () => void;
}) {
  const { lang, t } = useLanguage();
  const Icon = node ? skillIconMap[node.icon] : null;

  return (
    <AnimatePresence>
      {node && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="mx-auto mt-6 flex max-w-md items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--surface-2)]">
            {Icon && <Icon size={18} className="text-[var(--color-primary-light)]" />}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--text)]">
                {node.name}
              </h3>
              <button
                onClick={onClose}
                aria-label={t("skills.panel.close")}
                className="text-[var(--muted)] hover:text-[var(--text)]"
              >
                <X size={15} />
              </button>
            </div>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--muted)]">
              {t("skills.panel.category")}: {t(`skills.category.${node.domain}`)}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
              {lang === "fr" ? node.descriptionFr : node.descriptionEn}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
