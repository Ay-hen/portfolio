import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";
import { profileByLang, languagesByLang } from "../data/profile";

export function About() {
  const { lang, t } = useLanguage();
  const profile = profileByLang[lang];
  const languages = languagesByLang[lang];

  const strengths = [1, 2, 3, 4].map((n) => ({
    title: t(`about.strength${n}.title`),
    body: t(`about.strength${n}.body`),
  }));

  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} />

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-[var(--muted)]">
            <p>{profile.summary}</p>
            <p>{t("about.bio2")}</p>

            <div className="flex flex-wrap gap-6 pt-2 font-mono text-xs">
              {languages.map((lng) => (
                <div key={lng.language}>
                  <div className="text-[var(--text)]">{lng.language}</div>
                  <div className="text-[var(--muted)]">{lng.level}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
