import { useState } from "react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Tag } from "../components/ui/Tag";
import { SkillConstellation } from "../components/skills/SkillConstellation";
import { SkillDetailPanel } from "../components/skills/SkillDetailPanel";
import { useLanguage } from "../i18n/LanguageContext";
import { extraSkillsByLang } from "../data/skills";
import type { SkillNode } from "../types";

export function TechStack() {
  const { lang, t } = useLanguage();
  const [selected, setSelected] = useState<SkillNode | null>(null);
  const isTouch =
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  const extraGroups = extraSkillsByLang[lang];

  return (
    <section id="skills" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title")}
          description={t("skills.description")}
        />

        <p className="mb-4 text-center font-mono text-xs text-[var(--muted)]">
          {isTouch ? t("skills.hint.mobile") : t("skills.hint.desktop")}
        </p>

        <SkillConstellation
          onSelect={(node) => setSelected((prev) => (prev?.id === node.id ? null : node))}
          selectedId={selected?.id ?? null}
        />

        <SkillDetailPanel node={selected} onClose={() => setSelected(null)} />

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
          {extraGroups.map((group) => (
            <div key={group.domain}>
              <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-primary-light)]">
                {t(`skills.category.${group.domain}`)}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
