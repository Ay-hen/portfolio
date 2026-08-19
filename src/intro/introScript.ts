import type { Lang } from "../i18n/detectLang";

export interface IntroOption {
  labelEn: string;
  labelFr: string;
  next: string;
}

export interface IntroStep {
  id: string;
  textEn: string;
  textFr: string;
  options?: IntroOption[];
  /** For message-only steps: auto-advance to this step after a short pause. */
  next?: string;
  /** Section id to scroll to once the portfolio is revealed. */
  scrollTo?: string;
}

export const INTRO_START = "q1";
export const INTRO_LOADING = "loading";

export const introScript: IntroStep[] = [
  {
    id: "q1",
    textEn: "Are you sure you want to inspect this portfolio?",
    textFr: "Es-tu sûr de vouloir inspecter ce portfolio ?",
    options: [
      { labelEn: "YES", labelFr: "OUI", next: "q2" },
      { labelEn: "NO, exit()", labelFr: "NON, exit()", next: "m_exit" },
    ],
  },
  {
    id: "m_exit",
    textEn: "Fair enough... but maybe give me a chance? 😅",
    textFr: "Je comprends... mais laisse-moi une chance ? 😅",
    next: "q2",
  },
  {
    id: "q2",
    textEn: "Are you here to hire me?",
    textFr: "Es-tu ici pour me recruter ?",
    options: [
      { labelEn: "YES", labelFr: "OUI", next: "m_hireYes" },
      { labelEn: "Not yet", labelFr: "Pas encore", next: "m_hireNo" },
    ],
  },
  {
    id: "m_hireYes",
    textEn: "Excellent decision. Thank you. 😎",
    textFr: "Excellente décision. Merci. 😎",
    next: "q3",
  },
  {
    id: "m_hireNo",
    textEn: "Understood — I'll try to change your mind by the end of this page. 🚀",
    textFr: "Compris — je vais essayer de te convaincre avant la fin de la page. 🚀",
    next: "q3",
  },
  {
    id: "q3",
    textEn: "Warning: this developer runs on excessive coffee and Java code. Continue anyway?",
    textFr: "Attention : ce développeur fonctionne au café et au code Java. Continuer quand même ?",
    options: [
      { labelEn: "Y", labelFr: "O", next: "m_coffeeYes" },
      { labelEn: "N", labelFr: "N", next: "m_coffeeNo" },
    ],
  },
  {
    id: "m_coffeeYes",
    textEn: "Wise choice. Proceeding.",
    textFr: "Sage décision. On continue.",
    next: "q4",
  },
  {
    id: "m_coffeeNo",
    textEn: "Too late — the page already loaded. 😄",
    textFr: "Trop tard — la page a déjà chargé. 😄",
    next: "q4",
  },
  {
    id: "q4",
    textEn: "Do you actually read portfolios?",
    textFr: "Est-ce que tu lis vraiment les portfolios ?",
    options: [
      { labelEn: "Yes, carefully", labelFr: "Oui, attentivement", next: "m_respect" },
      { labelEn: "Skimming, mostly", labelFr: "Plutôt en diagonale", next: "m_skim" },
    ],
  },
  {
    id: "m_respect",
    textEn: "Respect. You're already ahead of most recruiters. 🏆",
    textFr: "Respect. Tu es déjà devant la plupart des recruteurs. 🏆",
    next: "q5",
  },
  {
    id: "m_skim",
    textEn: "No judgment — the good stuff is below anyway. 👇",
    textFr: "Aucun jugement — l'essentiel est juste en dessous. 👇",
    next: "q5",
  },
  {
    id: "q5",
    textEn: "Last question. Will you hire me?",
    textFr: "Dernière question. Vas-tu me recruter ?",
    options: [
      { labelEn: "YES", labelFr: "OUI", next: "m_finalYes" },
      { labelEn: "LET'S TALK", labelFr: "PARLONS-EN", next: "m_finalTalk" },
      { labelEn: "Not yet", labelFr: "Pas encore", next: "m_finalNotYet" },
    ],
  },
  {
    id: "m_finalYes",
    textEn: "Best decision you'll make today. Loading the proof below.",
    textFr: "La meilleure décision de ta journée. Chargement des preuves ci-dessous.",
    next: INTRO_LOADING,
  },
  {
    id: "m_finalTalk",
    textEn: "Let's talk — scrolling you straight to the contact section.",
    textFr: "Parlons-en — direction la section contact.",
    next: INTRO_LOADING,
    scrollTo: "contact",
  },
  {
    id: "m_finalNotYet",
    textEn: "Challenge accepted. Let's see if the projects change your mind.",
    textFr: "Défi accepté. Voyons si les projets te feront changer d'avis.",
    next: INTRO_LOADING,
  },
];

export function getIntroStep(id: string): IntroStep | undefined {
  return introScript.find((s) => s.id === id);
}

export function localizedText(step: IntroStep, lang: Lang): string {
  return lang === "fr" ? step.textFr : step.textEn;
}

export function localizedOption(option: IntroOption, lang: Lang): string {
  return lang === "fr" ? option.labelFr : option.labelEn;
}
