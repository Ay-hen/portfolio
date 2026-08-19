import type { SkillDomain, SkillNode } from "../types";
import type { Lang } from "../i18n/detectLang";

export const domainOrder: SkillDomain[] = [
  "languages",
  "frontend",
  "backend",
  "databases",
  "mobile",
  "devops",
];

/**
 * Technologies that have a real, recognizable logo, shown as nodes in the
 * interactive skills constellation. Every entry here is a real skill from
 * the CV — none are invented. Skills without a meaningful standalone logo
 * (methodologies, "REST APIs", "CI/CD", etc.) live in `extraSkillsByLang`
 * instead, shown as a supporting tag list under the constellation.
 */
export const skillNodes: SkillNode[] = [
  {
    id: "java",
    name: "Java",
    domain: "languages",
    icon: "java",
    descriptionFr: "Langage principal pour mes backends Spring Boot.",
    descriptionEn: "Primary language for my Spring Boot backends.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    domain: "languages",
    icon: "typescript",
    descriptionFr: "Typage statique pour des interfaces Angular et React fiables.",
    descriptionEn: "Static typing for reliable Angular and React interfaces.",
  },
  {
    id: "python",
    name: "Python",
    domain: "languages",
    icon: "python",
    descriptionFr: "Scripts et backends légers, notamment avec Django.",
    descriptionEn: "Scripting and lightweight backends, notably with Django.",
  },
  {
    id: "php",
    name: "PHP",
    domain: "languages",
    icon: "php",
    descriptionFr: "Développement backend côté serveur.",
    descriptionEn: "Server-side backend development.",
  },
  {
    id: "c",
    name: "C",
    domain: "languages",
    icon: "c",
    descriptionFr: "Bases algorithmiques et systèmes issues de ma formation.",
    descriptionEn: "Algorithmic and systems fundamentals from my studies.",
  },
  {
    id: "r",
    name: "R",
    domain: "languages",
    icon: "r",
    descriptionFr: "Analyse de données issue de mon cursus en mathématiques appliquées.",
    descriptionEn: "Data analysis from my applied mathematics coursework.",
  },
  {
    id: "angular",
    name: "Angular",
    domain: "frontend",
    icon: "angular",
    descriptionFr: "Framework principal pour mes interfaces d'entreprise (banque, e-commerce, réservation).",
    descriptionEn: "Primary framework for my business interfaces (banking, e-commerce, booking).",
  },
  {
    id: "react",
    name: "React",
    domain: "frontend",
    icon: "react",
    descriptionFr: "Utilisé pour Expium et ce portfolio.",
    descriptionEn: "Used for Expium and this portfolio.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    domain: "frontend",
    icon: "javascript",
    descriptionFr: "Fondation de toutes mes interfaces web.",
    descriptionEn: "Foundation of all my web interfaces.",
  },
  {
    id: "html",
    name: "HTML",
    domain: "frontend",
    icon: "html",
    descriptionFr: "Structure sémantique de mes interfaces.",
    descriptionEn: "Semantic structure of my interfaces.",
  },
  {
    id: "css",
    name: "CSS",
    domain: "frontend",
    icon: "css",
    descriptionFr: "Mise en forme et responsive design.",
    descriptionEn: "Styling and responsive design.",
  },
  {
    id: "springboot",
    name: "Spring Boot",
    domain: "backend",
    icon: "springboot",
    descriptionFr: "Cœur de mes APIs REST — avec Spring Security et Spring Data JPA.",
    descriptionEn: "Core of my REST APIs — with Spring Security and Spring Data JPA.",
  },
  {
    id: "jwt",
    name: "JWT",
    domain: "backend",
    icon: "jwt",
    descriptionFr: "Authentification stateless sur tous mes projets bancaires et e-commerce.",
    descriptionEn: "Stateless authentication across my banking and e-commerce projects.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    domain: "backend",
    icon: "nodejs",
    descriptionFr: "Runtime backend JavaScript.",
    descriptionEn: "JavaScript backend runtime.",
  },
  {
    id: "django",
    name: "Django",
    domain: "backend",
    icon: "django",
    descriptionFr: "Framework Python pour prototypage backend rapide.",
    descriptionEn: "Python framework for fast backend prototyping.",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    domain: "mobile",
    icon: "kotlin",
    descriptionFr: "Compagnon mobile natif de Web Bank App.",
    descriptionEn: "Native mobile companion for Web Bank App.",
  },
  {
    id: "android",
    name: "Android",
    domain: "mobile",
    icon: "android",
    descriptionFr: "Développement mobile natif avec Android Studio.",
    descriptionEn: "Native mobile development with Android Studio.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    domain: "databases",
    icon: "postgresql",
    descriptionFr: "Base relationnelle des systèmes transactionnels critiques (Web Bank App).",
    descriptionEn: "Relational database for critical transactional systems (Web Bank App).",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    domain: "databases",
    icon: "mongodb",
    descriptionFr: "Persistance documentaire pour Photography et Expium.",
    descriptionEn: "Document storage for Photography and Expium.",
  },
  {
    id: "mysql",
    name: "MySQL",
    domain: "databases",
    icon: "mysql",
    descriptionFr: "Base relationnelle pour applications web classiques.",
    descriptionEn: "Relational database for classic web applications.",
  },
  {
    id: "git",
    name: "Git",
    domain: "devops",
    icon: "git",
    descriptionFr: "Versioning au quotidien, avec Git Flow.",
    descriptionEn: "Daily version control, with Git Flow.",
  },
  {
    id: "github",
    name: "GitHub",
    domain: "devops",
    icon: "github",
    descriptionFr: "Hébergement de tous mes dépôts de projets.",
    descriptionEn: "Hosting for all my project repositories.",
  },
  {
    id: "docker",
    name: "Docker",
    domain: "devops",
    icon: "docker",
    descriptionFr: "Conteneurisation pour des environnements reproductibles.",
    descriptionEn: "Containerization for reproducible environments.",
  },
  {
    id: "jenkins",
    name: "Jenkins",
    domain: "devops",
    icon: "jenkins",
    descriptionFr: "Automatisation CI/CD.",
    descriptionEn: "CI/CD automation.",
  },
  {
    id: "maven",
    name: "Maven",
    domain: "devops",
    icon: "maven",
    descriptionFr: "Gestion des builds et dépendances Java.",
    descriptionEn: "Java build and dependency management.",
  },
];

/**
 * Real CV skills that don't have a distinct, recognizable brand logo
 * (methodologies, protocol-level concepts, or umbrella terms already
 * represented by a node above). Shown as a supporting tag list.
 */
export const extraSkillsByLang: Record<Lang, { domain: SkillDomain; items: string[] }[]> = {
  fr: [
    { domain: "backend", items: ["Spring Security", "Spring Data JPA", "APIs REST"] },
    { domain: "databases", items: ["SQL", "PL/SQL"] },
    { domain: "devops", items: ["CI/CD"] },
    { domain: "methodologies", items: ["Agile", "Scrum", "Clean Code", "SOLID", "Git Flow"] },
  ],
  en: [
    { domain: "backend", items: ["Spring Security", "Spring Data JPA", "REST APIs"] },
    { domain: "databases", items: ["SQL", "PL/SQL"] },
    { domain: "devops", items: ["CI/CD"] },
    { domain: "methodologies", items: ["Agile", "Scrum", "Clean Code", "SOLID", "Git Flow"] },
  ],
};
