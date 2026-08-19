import { Outlet } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export function RootLayout({ onReplayIntro }: { onReplayIntro?: () => void }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer onReplayIntro={onReplayIntro} />
    </div>
  );
}
