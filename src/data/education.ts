import type { EducationEntry } from "../types";
import type { Lang } from "../i18n/detectLang";

const SHARED = {
  fstm: { id: "fstm-ingenieur", degreeType: "ingenieur" as const, period: "2022 — 2025" },
  licence: { id: "fpo-licence", degreeType: "licence" as const, period: "2019 — 2022" },
  deug: { id: "fpo-deug", degreeType: "deug" as const, period: "2019 — 2021" },
  bac: { id: "lycee-bac", degreeType: "bac" as const, period: "2018 — 2019" },
};

export const educationByLang: Record<Lang, EducationEntry[]> = {
  fr: [
    {
      ...SHARED.fstm,
      degree: "Diplôme d'Ingénieur — Génie Mathématique et Informatique",
      institution: "Faculté des Sciences et Techniques de Mohammedia (FSTM)",
      location: "Mohammedia, Maroc",
    },
    {
      ...SHARED.licence,
      degree: "Licence — Sciences Mathématiques et Informatique",
      institution: "Faculté Polydisciplinaire de Ouarzazate (FPO)",
      location: "Ouarzazate, Maroc",
    },
    {
      ...SHARED.deug,
      degree: "DEUG — Sciences Mathématiques et Informatique",
      institution: "Faculté Polydisciplinaire de Ouarzazate (FPO)",
      location: "Ouarzazate, Maroc",
    },
    {
      ...SHARED.bac,
      degree: "Baccalauréat — Sciences Mathématiques A",
      institution: "Lycée Salah Eddine Ayoubi",
      location: "Tinghir, Maroc",
    },
  ],
  en: [
    {
      ...SHARED.fstm,
      degree: "Engineering Degree — Mathematics & Computer Science Engineering",
      institution: "Faculté des Sciences et Techniques de Mohammedia (FSTM)",
      location: "Mohammedia, Morocco",
    },
    {
      ...SHARED.licence,
      degree: "Bachelor's Degree — Mathematics & Computer Science",
      institution: "Faculté Polydisciplinaire de Ouarzazate (FPO)",
      location: "Ouarzazate, Morocco",
    },
    {
      ...SHARED.deug,
      degree: "DEUG (Associate Degree) — Mathematics & Computer Science",
      institution: "Faculté Polydisciplinaire de Ouarzazate (FPO)",
      location: "Ouarzazate, Morocco",
    },
    
  ],
};
