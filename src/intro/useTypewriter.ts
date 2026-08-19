import { useEffect, useRef, useState } from "react";

export function useTypewriter(text: string, options?: { speedMs?: number; reducedMotion?: boolean }) {
  const speed = options?.speedMs ?? 18;
  const reducedMotion = options?.reducedMotion ?? false;
  const [displayed, setDisplayed] = useState(reducedMotion ? text : "");
  const [done, setDone] = useState(reducedMotion);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;

    if (reducedMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    setDisplayed("");
    setDone(false);

    const interval = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, reducedMotion]);

  return { displayed, done };
}
