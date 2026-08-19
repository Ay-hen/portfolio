import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IntroTerminal } from "./IntroTerminal";
import { ShortSplash } from "./ShortSplash";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function IntroOverlay({
  mode,
  onFinished,
}: {
  mode: "full" | "short";
  /** Called once the fade-out transition has fully completed. */
  onFinished: (scrollTo?: string) => void;
}) {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const scrollTargetRef = useRef<string | undefined>(undefined);

  function finish(scrollTo?: string) {
    scrollTargetRef.current = scrollTo;
    setVisible(false);
  }

  return (
    <AnimatePresence onExitComplete={() => onFinished(scrollTargetRef.current)}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.05 : 0.35 }}
        >
          {mode === "full" ? (
            <IntroTerminal onComplete={(scrollTo) => finish(scrollTo)} />
          ) : (
            <ShortSplash onComplete={() => finish()} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
