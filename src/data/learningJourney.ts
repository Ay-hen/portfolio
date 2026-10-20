import type { LearningItem, LearningPath, LearningStatus } from "../types";
import type { Lang } from "../i18n/detectLang";

type Localized = Record<Lang, string>;

interface LearningItemDef {
  id: string;
  /**
   * Update this to reflect your real progress:
   * "completed"   -> green filled circle
   * "in-progress" -> empty circle, "In progress"
   * "planned"     -> empty circle, "Planned"
   */
  status: LearningStatus;
  label: Localized;
}

interface LearningPathDef {
  id: string;
  title: Localized;
  description: Localized;
  items: LearningItemDef[];
}

const learningPathDefs: LearningPathDef[] = [
  // 1. Full Stack Java Development
  {
    id: "fullstack-java",
    title: {
      en: "Full Stack Java Development",
      fr: "Développement Full Stack Java",
    },
    description: {
      en: "Building robust back ends and modern web interfaces.",
      fr: "Concevoir des back ends robustes et des interfaces web modernes.",
    },
    items: [
      {
        id: "java-fundamentals",
        status: "completed",
        label: {
          en: "Java fundamentals and object-oriented programming",
          fr: "Fondamentaux de Java et programmation orientée objet",
        },
      },
      {
        id: "java-advanced",
        status: "completed",
        label: {
          en: "Advanced Java and clean code principles",
          fr: "Java avancé et principes du clean code",
        },
      },
      {
        id: "spring-boot",
        status: "completed",
        label: {
          en: "Spring Boot and REST API development",
          fr: "Spring Boot et développement d'API REST",
        },
      },
      {
        id: "spring-security",
        status: "completed",
        label: {
          en: "Spring Security and authentication",
          fr: "Spring Security et authentification",
        },
      },
      {
        id: "sql",
        status: "completed",
        label: {
          en: "SQL and relational database management",
          fr: "SQL et gestion des bases de données relationnelles",
        },
      },
      {
        id: "mongodb",
        status: "completed",
        label: {
          en: "NoSQL and MongoDB",
          fr: "NoSQL et MongoDB",
        },
      },
      {
        id: "angular",
        status: "completed",
        label: {
          en: "Frontend development with Angular",
          fr: "Développement frontend avec Angular",
        },
      },
      {
        id: "reactjs",
        status: "completed",
        label: {
          en: "Frontend development with React",
          fr: "Développement frontend avec React",
        },
      },
      {
        id: "testing-architecture",
        status: "completed",
        label: {
          en: "Testing, software architecture, and best practices",
          fr: "Tests, architecture logicielle et bonnes pratiques",
        },
      },
    ],
  },

  // 2. Backend & Distributed Systems
  {
    id: "backend-distributed-systems",
    title: {
      en: "Backend & Distributed Systems",
      fr: "Backend et systèmes distribués",
    },
    description: {
      en: "Building scalable, real-time, and event-driven backend systems.",
      fr: "Concevoir des systèmes backend évolutifs, temps réel et événementiels.",
    },
    items: [
      {
        id: "kafka",
        status: "in-progress",
        label: {
          en: "Apache Kafka and event-driven architecture",
          fr: "Apache Kafka et architecture événementielle",
        },
      },
      {
        id: "websocket",
        status: "in-progress",
        label: {
          en: "WebSocket and real-time communication",
          fr: "WebSocket et communication en temps réel",
        },
      },
      {
        id: "messaging",
        status: "planned",
        label: {
          en: "Asynchronous messaging and message brokers",
          fr: "Messagerie asynchrone et courtiers de messages",
        },
      },
      {
        id: "microservices",
        status: "planned",
        label: {
          en: "Microservices architecture and service communication",
          fr: "Architecture microservices et communication entre services",
        },
      },
      {
        id: "distributed-systems",
        status: "planned",
        label: {
          en: "Distributed systems fundamentals",
          fr: "Fondamentaux des systèmes distribués",
        },
      },
    ],
  },

  // 3. DevOps
  {
    id: "devops",
    title: {
      en: "DevOps & Cloud",
      fr: "DevOps et Cloud",
    },
    description: {
      en: "Automating builds, deployments, and infrastructure operations.",
      fr: "Automatiser les builds, les déploiements et les opérations d'infrastructure.",
    },
    items: [
      {
        id: "linux",
        status: "in-progress",
        label: {
          en: "Linux and command-line fundamentals",
          fr: "Fondamentaux de Linux et de la ligne de commande",
        },
      },
      {
        id: "git",
        status: "completed",
        label: {
          en: "Git and GitHub workflows",
          fr: "Workflows Git et GitHub",
        },
      },
      {
        id: "docker",
        status: "in-progress",
        label: {
          en: "Docker and containerization",
          fr: "Docker et conteneurisation",
        },
      },
      {
        id: "cicd",
        status: "in-progress",
        label: {
          en: "CI/CD pipelines and automation",
          fr: "Pipelines CI/CD et automatisation",
        },
      },
      {
        id: "jenkins",
        status: "planned",
        label: {
          en: "Jenkins and CI/CD pipeline automation",
          fr: "Jenkins et automatisation des pipelines CI/CD",
        },
      },
      {
        id: "cloud",
        status: "planned",
        label: {
          en: "Cloud fundamentals",
          fr: "Fondamentaux du cloud",
        },
      },
      {
        id: "deployment",
        status: "planned",
        label: {
          en: "Deployment, monitoring, and infrastructure automation",
          fr: "Déploiement, supervision et automatisation de l'infrastructure",
        },
      },
    ],
  },

  // 4. AI Engineering
  {
    id: "ai",
    title: {
      en: "AI Engineering",
      fr: "Ingénierie de l'IA",
    },
    description: {
      en: "Learning to build practical applications powered by AI.",
      fr: "Apprendre à concevoir des applications concrètes basées sur l'IA.",
    },
    items: [
      {
        id: "python",
        status: "in-progress",
        label: {
          en: "Python for AI development",
          fr: "Python pour le développement IA",
        },
      },
      {
        id: "math-ml",
        status: "planned",
        label: {
          en: "Mathematics and machine learning fundamentals",
          fr: "Mathématiques et fondamentaux du machine learning",
        },
      },
      {
        id: "deep-learning",
        status: "planned",
        label: {
          en: "Deep learning concepts",
          fr: "Concepts du deep learning",
        },
      },
      {
        id: "llms",
        status: "planned",
        label: {
          en: "Large Language Models (LLMs)",
          fr: "Grands modèles de langage (LLM)",
        },
      },
      {
        id: "ai-apis",
        status: "planned",
        label: {
          en: "AI APIs and application integration",
          fr: "APIs d'IA et intégration dans les applications",
        },
      },
      {
        id: "ai-apps",
        status: "planned",
        label: {
          en: "Building practical AI-powered applications",
          fr: "Création d'applications concrètes basées sur l'IA",
        },
      },
    ],
  },
];

function localize(lang: Lang): LearningPath[] {
  return learningPathDefs.map((path) => ({
    id: path.id as LearningPath["id"],
    title: path.title[lang],
    description: path.description[lang],
    items: path.items.map(
      (item): LearningItem => ({
        id: item.id,
        status: item.status,
        label: item.label[lang],
      }),
    ),
  }));
}

export const learningPathsByLang: Record<Lang, LearningPath[]> = {
  en: localize("en"),
  fr: localize("fr"),
};
