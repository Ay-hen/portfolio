import type { ExperienceEntry } from "../types";
import type { Lang } from "../i18n/detectLang";

const SHARED = {
  nexus: {
    id: "nexus-commerce",
    organization: "Freelance",
    type: "freelance" as const,
    technologies: [
      "Angular",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "REST API",
      "Git/GitHub",
    ],
    githubUrl: "https://github.com/Ay-hen/nexus-commerce",
  },
  bank: {
    id: "web-bank-app",
    organization: "Business IT Solutions",
    type: "stage" as const,
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "PostgreSQL",
      "Angular",
      "Kotlin",
      "Android",
      "JWT",
    ],
    githubUrl: "https://github.com/Ay-hen/Web-Bank-App",
  },
  photography: {
    id: "photography",
    organization: "2MOROCCO",
    type: "stage" as const,
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Angular",
      "MongoDB",
      "JWT",
    ],
    githubUrl: "https://github.com/Ay-hen/Photography",
  },
  expium: {
    id: "expium",
    organization: "Expium",
    type: "personnel" as const,
    technologies: ["Spring Boot", "React.js", "MongoDB", "WebSocket", "JWT"],
    githubUrl: "https://github.com/Ay-hen/MiniProjet-Expium",
  },
};

export const experiencesByLang: Record<Lang, ExperienceEntry[]> = {
  fr: [
    {
      ...SHARED.nexus,
      role: "Développeur Full-Stack",
      location: "À distance",
      period: "Freelance",
      description:
        "Développement d'une plateforme e-commerce pour la gestion des produits, stocks, commandes et clients.",
      highlights: [
        "Développement des modules e-commerce et des APIs REST avec Spring Boot.",
        "Sécurisation par JWT et gestion des rôles avec Spring Security.",
        "Conception d'un dashboard admin avec gestion et analytics.",
      ],
    },
    {
      ...SHARED.bank,
      role: "Développeur Full-Stack — Stage PFE",
      location: "Casablanca, Maroc",
      period: "Fév. — Août 2025",
      description:
        "Conception d'une solution bancaire web/mobile pour la gestion des comptes et transactions financières.",
      highlights: [
        "Développement des transactions bancaires et de 15+ APIs REST documentées.",
        "Implémentation de JWT stateless et sécurisation des accès avec Spring Security.",
        "Extension mobile de la solution avec Kotlin sous Android Studio.",
      ],
    },
    {
      ...SHARED.photography,
      role: "Développeur Full-Stack — Stage PFA",
      location: "Rabat, Maroc",
      period: "Avril — Juin 2024",
      description:
        "Développement d'une plateforme de réservation de photographes avec gestion des utilisateurs, disponibilités et réservations.",
      highlights: [
        "Développement du système de réservation et de gestion des disponibilités.",
        "Mise en place d'une architecture multi-rôles pour clients et photographes.",
        "Automatisation des validations et sécurisation JWT/Spring Security.",
      ],
    },
    {
      ...SHARED.expium,
      role: "Développeur Full-Stack — Projet personnel",
      location: "Maroc",
      period: "Projet personnel",
      description:
        "Développement d'un réseau social permettant le partage de contenu et les échanges en temps réel.",
      highlights: [
        "Implémentation d'une messagerie et de notifications en temps réel avec WebSocket.",
        "Sécurisation des APIs et authentification avec JWT.",
      ],
    },
  ],
  en: [
    {
      ...SHARED.nexus,
      role: "Full-Stack Developer",
      location: "Remote",
      period: "Freelance",
      description:
        "Built an e-commerce platform for managing products, inventory, orders and customers.",
      highlights: [
        "Built e-commerce modules and REST APIs with Spring Boot.",
        "Secured endpoints with JWT and role-based access via Spring Security.",
        "Designed an admin dashboard with management and analytics views.",
      ],
    },
    {
      ...SHARED.bank,
      role: "Full-Stack Developer — Graduation Internship",
      location: "Casablanca, Morocco",
      period: "Feb — Aug 2025",
      description:
        "Designed a web/mobile banking solution for managing accounts and financial transactions.",
      highlights: [
        "Built banking transaction flows and 15+ documented REST APIs.",
        "Implemented stateless JWT authentication and secured access with Spring Security.",
        "Extended the solution to a native Android app built with Kotlin.",
      ],
    },
    {
      ...SHARED.photography,
      role: "Full-Stack Developer — Internship",
      location: "Rabat, Morocco",
      period: "Apr — Jun 2024",
      description:
        "Built a photographer booking platform with user, availability and reservation management.",
      highlights: [
        "Built the booking system and availability management.",
        "Implemented a multi-role architecture for clients and photographers.",
        "Automated booking validation and secured access with JWT/Spring Security.",
      ],
    },
    {
      ...SHARED.expium,
      role: "Full-Stack Developer — Personal Project",
      location: "Morocco",
      period: "Personal project",
      description:
        "Built a social network for sharing content and real-time interactions.",
      highlights: [
        "Implemented real-time messaging and notifications with WebSocket.",
        "Secured the APIs with JWT-based authentication.",
      ],
    },
  ],
};
