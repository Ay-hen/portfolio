import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import { Projects } from "../sections/Projects";
import { TechStack } from "../sections/TechStack";
import { Education } from "../sections/Education";
import { Resume } from "../sections/Resume";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <div className="border-t border-[var(--border)]">
        <About />
      </div>
      <div className="border-t border-[var(--border)]">
        <Experience />
      </div>
      <div className="border-t border-[var(--border)]">
        <Projects />
      </div>
      <div className="border-t border-[var(--border)]">
        <TechStack />
      </div>
      <div className="border-t border-[var(--border)]">
        <Education />
      </div>
      <div className="border-t border-[var(--border)]">
        <Resume />
      </div>
      <div className="border-t border-[var(--border)]">
        <Contact />
      </div>
    </>
  );
}
