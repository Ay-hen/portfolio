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
  
lenscape: {
  id: "lenscape",
  name: "Lenscape",
  technologies: [
    "Java 17",
    "Spring Boot",
    "Spring Security",
    "Angular",
    "MongoDB",
    "JWT",
    "Apache Kafka",
    "WebSocket/STOMP",
    "Docker",
  ],
  githubUrl: "https://github.com/Ay-hen/lenscape",
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
  ...SHARED.lenscape,
  tagline: "Plateforme de réservation de photographes — clients & professionnels",
  purpose:
    "Concevoir et faire évoluer Lenscape, une plateforme de mise en relation entre clients et photographes professionnels, intégrant un système de réservation et un espace de gestion dédié aux photographes.",
  features: [
    "Moteur de réservation intégrant les disponibilités, les tarifs et les règles métier",
    "Espace photographe pour gérer les réservations, le calendrier et les services",
    "Messagerie en temps réel avec WebSocket/STOMP et notifications via Apache Kafka",
    "Sécurisation des APIs REST avec Spring Security, JWT et authentification OTP",
  ],
  architecture:
    "Backend Java 17 / Spring Boot exposant des APIs REST sécurisées avec Spring Security et JWT, frontend Angular, persistance MongoDB, communication temps réel via WebSocket/STOMP et notifications asynchrones avec Apache Kafka. Conteneurisation avec Docker.",
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
  ...SHARED.lenscape,
  tagline: "Photographer booking platform — clients & professionals",
  purpose:
    "Designed and enhanced Lenscape, a platform connecting customers with professional photographers, featuring a booking system and a dedicated photographer management space.",
  features: [
    "Booking engine handling availability, pricing, and business rules",
    "Photographer dashboard for managing bookings, calendars, and services",
    "Real-time messaging with WebSocket/STOMP and asynchronous notifications using Apache Kafka",
    "Secured REST APIs with Spring Security, JWT, and OTP authentication",
  ],
  architecture:
    "Java 17 / Spring Boot backend exposing REST APIs secured with Spring Security and JWT, Angular frontend, MongoDB persistence, real-time communication through WebSocket/STOMP, and asynchronous notifications using Apache Kafka. Containerized with Docker.",
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
