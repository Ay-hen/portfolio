import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "../components/ui/BrandIcons";
import { Container } from "../components/ui/Container";
import { Button, LinkButton } from "../components/ui/Button";
import { ApiConsole } from "../components/ui/ApiConsole";
import { useLanguage } from "../i18n/LanguageContext";
import { profileByLang } from "../data/profile";

export function Hero() {
  const { lang, t } = useLanguage();
  const profile = profileByLang[lang];

  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--muted) 1px, transparent 1px), linear-gradient(90deg, var(--muted) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--color-primary-light)] uppercase">
            {t("hero.eyebrow")}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] sm:text-5xl lg:text-[3.4rem]">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.heroKeywords.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--muted)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("hero.cta.projects")} <ArrowRight size={16} />
            </Button>
            <LinkButton href={profile.cvFile} download variant="outline">
              <Download size={16} /> {t("hero.cta.cv")}
            </LinkButton>
            <LinkButton href="#contact" variant="ghost">
              <Mail size={16} /> {t("hero.cta.contact")}
            </LinkButton>
            <LinkButton href={profile.github} target="_blank" rel="noreferrer" variant="ghost">
              <GithubIcon size={16} /> {t("hero.cta.github")}
            </LinkButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <ApiConsole />
        </motion.div>
      </Container>
    </section>
  );
}
