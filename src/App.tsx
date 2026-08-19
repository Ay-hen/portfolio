import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { IntroOverlay } from "./intro/IntroOverlay";

type IntroMode = "full" | "short" | "hidden";

export default function App() {

  const [introMode, setIntroMode] = useState<IntroMode>("full"); // always start full on load

  const handleIntroFinished = useCallback((scrollTo?: string) => {
    setIntroMode("hidden"); // no longer marks completion in localStorage
    if (scrollTo) {
      requestAnimationFrame(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);


  const handleReplayIntro = useCallback(() => {
    setIntroMode("full");
  }, []);

  return (
    <BrowserRouter>
      {introMode !== "hidden" && (
        <IntroOverlay mode={introMode === "full" ? "full" : "short"} onFinished={handleIntroFinished} />
      )}

      <Routes>
        <Route element={<RootLayout onReplayIntro={handleReplayIntro} />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
