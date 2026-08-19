import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { useLanguage } from "../i18n/LanguageContext";
import { profileByLang } from "../data/profile";

export function Contact() {
  const { lang, t } = useLanguage();
  const profile = profileByLang[lang];
  const [status, setStatus] = useState<"idle" | "unavailable">("idle");

  const contactItems = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: LinkedinIcon, label: "linkedin.com/in/ayoub-hen", href: profile.linkedin },
    { icon: GithubIcon, label: "github.com/Ay-hen", href: profile.github },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // NOTE: no email backend is configured yet. Wire this to a real
    // endpoint (e.g. a Spring Boot /api/contact route or a form service)
    // before relying on it — see README "Contact form" section.
    setStatus("unavailable");
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          description={t("contact.description")}
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <ul className="space-y-3">
            {contactItems.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm text-[var(--text)] transition-colors hover:border-[var(--color-primary-light)]"
                >
                  <Icon size={17} className="text-[var(--color-primary-light)]" />
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs text-[var(--muted)]">
                  {t("contact.form.name")}
                </label>
                <input
                  id="name"
                  required
                  className="mt-1.5 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-[var(--muted)]">
                  {t("contact.form.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xs text-[var(--muted)]">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="mt-1.5 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--text)] outline-none"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              {t("contact.form.submit")}
            </Button>

            {status === "unavailable" && (
              <p role="status" className="text-xs text-[var(--color-signal)]">
                {t("contact.form.unavailable")}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
