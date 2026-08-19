import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export function LoadingBar({
  onDone,
  reducedMotion,
}: {
  onDone: () => void;
  reducedMotion: boolean;
}) {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(reducedMotion ? 100 : 0);
  const [granted, setGranted] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      const timeout = setTimeout(onDone, 300);
      return () => clearTimeout(timeout);
    }

    const start = performance.now();
    const duration = 1100;
    let frame: number;

    function tick(now: number) {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setGranted(true);
        setTimeout(onDone, 550);
      }
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  return (
    <div className="mt-4 space-y-2 font-mono text-sm">
      <p className="text-[var(--text)]">
        <span className="text-[var(--color-primary-light)]">{"> "}</span>
        {t("intro.loading")}
      </p>
      <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--surface-2)]">
        <div
          className="h-full rounded-full bg-[var(--color-primary)]"
          style={{ width: `${progress}%`, transition: reducedMotion ? "none" : "width 60ms linear" }}
        />
      </div>
      <p className="text-xs text-[var(--muted)]">{Math.round(progress)}%</p>
      {granted && (
        <p className="text-[var(--color-mint)]">
          <span className="text-[var(--muted)]">{"> "}</span>
          {t("intro.granted")}
        </p>
      )}
    </div>
  );
}
