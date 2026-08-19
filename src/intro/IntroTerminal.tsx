import { useEffect, useRef, useState } from "react";
import { useTypewriter } from "./useTypewriter";
import {
  INTRO_START,
  INTRO_LOADING,
  getIntroStep,
  localizedText,
  localizedOption,
} from "./introScript";
import { useLanguage } from "../i18n/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { LoadingBar } from "./LoadingBar";

interface HistoryLine {
  id: string;
  kind: "prompt" | "answer";
  text: string;
}

export function IntroTerminal({ onComplete }: { onComplete: (scrollTo?: string) => void }) {
  const { lang } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [stepId, setStepId] = useState(INTRO_START);
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const scrollTargetRef = useRef<string | undefined>(undefined);
  const scrollRef = useRef<HTMLDivElement>(null);

  const step = getIntroStep(stepId);
  const currentText = step ? localizedText(step, lang) : "";
  const { displayed, done } = useTypewriter(currentText, {
    speedMs: 16,
    reducedMotion,
  });

  useEffect(() => {
    if (step?.scrollTo) scrollTargetRef.current = step.scrollTo;
  }, [step]);

  // auto-advance message-only steps once typing is finished
  useEffect(() => {
    if (!step || !done || step.options) return;
    if (!step.next) return;

    const delay = reducedMotion ? 250 : 750;
    const timeout = setTimeout(() => {
      setHistory((h) => [...h, { id: step.id, kind: "prompt", text: currentText }]);
      setStepId(step.next!);
    }, delay);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step?.id, done, reducedMotion]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history, displayed]);

  function chooseOption(label: string, next: string) {
    setHistory((h) => [
      ...h,
      { id: `${stepId}-q`, kind: "prompt", text: currentText },
      { id: `${stepId}-a`, kind: "answer", text: label },
    ]);
    setStepId(next);
  }

  if (stepId === INTRO_LOADING) {
    return (
      <TerminalChrome onSkip={() => onComplete()} reducedMotion={reducedMotion}>
        <div ref={scrollRef} className="max-h-[50vh] space-y-2 overflow-y-auto pr-1">
          {history.map((line) => (
            <TerminalLine key={line.id} kind={line.kind} text={line.text} />
          ))}
        </div>
        <LoadingBar onDone={() => onComplete(scrollTargetRef.current)} reducedMotion={reducedMotion} />
      </TerminalChrome>
    );
  }

  if (!step) return null;

  return (
    <TerminalChrome onSkip={() => onComplete()} reducedMotion={reducedMotion}>
      <div ref={scrollRef} className="max-h-[50vh] space-y-3 overflow-y-auto pr-1">
        {history.map((line) => (
          <TerminalLine key={line.id} kind={line.kind} text={line.text} />
        ))}

        <TerminalLine kind="prompt" text={displayed} caret={!done} />

        {done && step.options && (
          <div className="flex flex-wrap gap-2 pt-1">
            {step.options.map((opt) => (
              <button
                key={opt.next}
                onClick={() => chooseOption(localizedOption(opt, lang), opt.next)}
                className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 font-mono text-xs text-[var(--text)] transition-colors hover:border-[var(--color-primary-light)] hover:text-[var(--color-primary-light)]"
              >
                [{localizedOption(opt, lang)}]
              </button>
            ))}
          </div>
        )}
      </div>
    </TerminalChrome>
  );
}

function TerminalLine({
  kind,
  text,
  caret,
}: {
  kind: "prompt" | "answer";
  text: string;
  caret?: boolean;
}) {
  if (kind === "answer") {
    return (
      <p className="font-mono text-sm text-[var(--color-signal)]">
        <span className="text-[var(--muted)]">$ </span>
        {text}
      </p>
    );
  }
  return (
    <p className="font-mono text-sm leading-relaxed text-[var(--text)]">
      <span className="text-[var(--color-primary-light)]">{"> "}</span>
      {text}
      {caret && <span className="ml-0.5 inline-block h-4 w-1.5 animate-blink bg-[var(--color-primary-light)] align-middle" />}
    </p>
  );
}

export function TerminalChrome({
  children,
  onSkip,
  reducedMotion,
}: {
  children: React.ReactNode;
  onSkip: () => void;
  reducedMotion: boolean;
}) {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[var(--bg)] px-4 py-10">
      <div className="w-full max-w-xl">
        <div className="mb-3 flex justify-end">
          <button
            onClick={onSkip}
            className="font-mono text-xs text-[var(--muted)] underline-offset-4 hover:text-[var(--text)] hover:underline"
          >
            {t("intro.skip")}
          </button>
        </div>

        <div
          className={`overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/30 ${
            reducedMotion ? "" : "animate-[fade-up_0.4s_ease-out]"
          }`}
        >
          <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e0685f]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-signal)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-mint)]" />
            <span className="ml-3 font-mono text-[11px] text-[var(--muted)]">
              ~/ayoub-portfolio · main
            </span>
          </div>
          <div className="p-5 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
