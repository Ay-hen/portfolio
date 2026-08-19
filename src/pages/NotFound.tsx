import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { useLanguage } from "../i18n/LanguageContext";

export function NotFound() {
  const { t } = useLanguage();
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-[var(--color-signal)]">404</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--text)]">
        {t("notfound.title")}
      </h1>
      <p className="mt-2 max-w-sm text-sm text-[var(--muted)]">{t("notfound.description")}</p>
      <Link to="/" className="mt-6">
        <Button>{t("notfound.cta")}</Button>
      </Link>
    </Container>
  );
}
