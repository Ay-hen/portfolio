import type { ProjectEntry } from "../types";
import type { Lang } from "../i18n/detectLang";

const SHARED = {
  nexus: {
    id: "nexus-commerce",
    name: "Nexus Commerce",
    technologies: ["Angular", "Spring Boot", "Spring Security", "JWT", "REST API"],
    githubUrl: "https://github.com/Ay-hen/nexus-commerce",
    relatedExperienceId: "nexus-commerce",
  },
  bank: {
    id: "web-bank-app",
    name: "Web Bank App",
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
    relatedExperienceId: "web-bank-app",
  },
  photography: {
    id: "photography",
    name: "Photography",
    technologies: ["Java", "Spring Boot", "Spring Security", "Angular", "MongoDB", "JWT"],
    githubUrl: "https://github.com/Ay-hen/Photography",
    relatedExperienceId: "photography",
  },
  expium: {
    id: "expium",
    name: "Expium",
    technologies: ["Spring Boot", "React.js", "MongoDB", "WebSocket", "JWT"],
    githubUrl: "https://github.com/Ay-hen/MiniProjet-Expium",
    relatedExperienceId: "expium",
  },
};

export const projectsByLang: Record<Lang, ProjectEntry[]> = {
  fr: [
    {
      ...SHARED.nexus,
      tagline: "Plateforme e-commerce — produits, stocks, commandes, clients",
      purpose:
        "Offrir une plateforme e-commerce complète permettant de gérer le catalogue produits, les stocks, les commandes et la relation client, avec un accès administrateur dédié.",
      features: [
        "APIs REST pour la gestion des modules e-commerce",
        "Authentification et autorisation par rôles avec JWT et Spring Security",
        "Dashboard admin avec vues de gestion et d'analytics",
      ],
      architecture:
        "Frontend Angular consommant des APIs REST Spring Boot, sécurisées par JWT avec un contrôle d'accès basé sur les rôles (Spring Security).",
    },
    {
      ...SHARED.bank,
      tagline: "Solution bancaire web & mobile — comptes et transactions",
      purpose:
        "Concevoir une solution bancaire couvrant la gestion des comptes et des transactions financières, développée dans le cadre d'un stage de fin d'études (PFE) chez Business IT Solutions.",
      features: [
        "15+ APIs REST documentées pour les opérations bancaires",
        "Authentification JWT stateless et sécurisation des accès",
        "Compagnon mobile natif Android développé en Kotlin",
      ],
      architecture:
        "Backend Spring Boot / Spring Security / JPA avec persistance PostgreSQL, exposé via des APIs REST documentées et consommé par un client web Angular et une application mobile Android (Kotlin).",
    },
    {
      ...SHARED.photography,
      tagline: "Réservation de photographes — clients & professionnels",
      purpose:
        "Développer une plateforme de réservation mettant en relation clients et photographes, avec gestion des disponibilités et des réservations, réalisée lors d'un stage (PFA) chez 2MOROCCO.",
      features: [
        "Système de réservation et gestion des disponibilités",
        "Architecture multi-rôles pour clients et photographes",
        "Validation automatisée des réservations et sécurisation JWT",
      ],
      architecture:
        "Application Angular côté client, API REST Spring Boot sécurisée par Spring Security/JWT, persistance des données via MongoDB.",
    },
    {
      ...SHARED.expium,
      tagline: "Réseau social — partage de contenu en temps réel",
      purpose:
        "Construire un réseau social permettant à des utilisateurs de partager du contenu et d'échanger en temps réel, en tant que projet personnel.",
      features: [
        "Messagerie et notifications en temps réel via WebSocket",
        "Authentification et sécurisation des APIs par JWT",
      ],
      architecture:
        "Backend Spring Boot exposant des APIs REST et des canaux WebSocket pour la messagerie temps réel, frontend React.js, persistance MongoDB.",
    },
  ],
  en: [
    {
      ...SHARED.nexus,
      tagline: "E-commerce platform — products, inventory, orders, customers",
      purpose:
        "Provide a complete e-commerce platform to manage the product catalog, inventory, orders and customer relationships, with a dedicated admin area.",
      features: [
        "REST APIs for e-commerce module management",
        "Role-based authentication and authorization with JWT and Spring Security",
        "Admin dashboard with management and analytics views",
      ],
      architecture:
        "Angular frontend consuming Spring Boot REST APIs, secured with JWT and role-based access control (Spring Security).",
    },
    {
      ...SHARED.bank,
      tagline: "Web & mobile banking solution — accounts and transactions",
      purpose:
        "Design a banking solution covering account and financial transaction management, built during a graduation internship (PFE) at Business IT Solutions.",
      features: [
        "15+ documented REST APIs for banking operations",
        "Stateless JWT authentication and secured access",
        "Native Android companion app built with Kotlin",
      ],
      architecture:
        "Spring Boot / Spring Security / JPA backend with PostgreSQL persistence, exposed via documented REST APIs and consumed by an Angular web client and a Kotlin Android app.",
    },
    {
      ...SHARED.photography,
      tagline: "Photographer booking — clients & professionals",
      purpose:
        "Build a booking platform connecting clients and photographers, with availability and reservation management, built during an internship (PFA) at 2MOROCCO.",
      features: [
        "Booking system and availability management",
        "Multi-role architecture for clients and photographers",
        "Automated booking validation and JWT security",
      ],
      architecture:
        "Angular client application, Spring Boot REST API secured with Spring Security/JWT, data persisted in MongoDB.",
    },
    {
      ...SHARED.expium,
      tagline: "Social network — real-time content sharing",
      purpose:
        "Build a social network letting users share content and interact in real time, as a personal project.",
      features: [
        "Real-time messaging and notifications via WebSocket",
        "API security and authentication with JWT",
      ],
      architecture:
        "Spring Boot backend exposing REST APIs and WebSocket channels for real-time messaging, React.js frontend, MongoDB persistence.",
    },
  ],
};
