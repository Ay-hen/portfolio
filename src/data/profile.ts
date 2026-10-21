import type { Profile, LanguageEntry } from "../types";
import type { Lang } from "../i18n/detectLang";


const SHARED = {
  name: "Hennani Ayoub Brahim",
  email: "ayoubbrahim.hennanii@gmail.com",
  phone: "+212 7 22 30 79 15",
  github: "https://github.com/Ay-hen",
  linkedin: "https://www.linkedin.com/in/ayoub-hen",
  heroKeywords: [
    "Java",
    "Spring Boot",
    "Angular",
    "React",
    "PostgreSQL",
    "MongoDB",
    "Kotlin / Android",
  ],
};

export const profileByLang: Record<Lang, Profile> = {
  fr: {
    ...SHARED,
    title: "Junior DevOps Engineer | Ingénieur Logiciel | Développeur Full-Stack",
    location: "Maroc",
    cvFile: "/cv_fr/HENNANI_AYOUB_BRAHIM_CV.pdf",
    summary:
      "Ingénieur logiciel Full-Stack avec une solide expertise backend Java/Spring Boot, doublée d'une maîtrise des écosystèmes Angular et ReactJS. Reconnu pour la conception d'architectures REST sécurisées et performantes, l'optimisation de bases de données critiques et la livraison de solutions robustes en environnement Agile, du cadrage technique jusqu'à la mise en production.",
  },
  en: {
    ...SHARED,
    title: "Junior DevOps Engineer | Software Engineer | Full-Stack Developer",
    location: "Morocco",
    cvFile: "/cv_eng/HENNANI_AYOUB_BRAHIM_CV.pdf",
    summary:
      "Full-stack software engineer with strong backend expertise in Java/Spring Boot, combined with solid command of the Angular and ReactJS ecosystems. Known for designing secure, high-performance REST architectures, optimizing critical databases, and delivering robust solutions in Agile environments — from technical scoping through to production.",
  },
};

export const languagesByLang: Record<Lang, LanguageEntry[]> = {
  fr: [
    { language: "Arabe", level: "Langue maternelle" },
    { language: "Français", level: "Professionnel" },
    { language: "Anglais", level: "Professionnel" },
  ],
  en: [
    { language: "Arabic", level: "Native language" },
    { language: "French", level: "Professional" },
    { language: "English", level: "Professional" },
  ],
};
