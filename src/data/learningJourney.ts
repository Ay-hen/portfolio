import type { LearningItem, LearningPath, LearningStatus } from "../types";
import type { Lang } from "../i18n/detectLang";

type Localized = Record<Lang, string>;

interface LearningItemDef {
  id: string;
  /**
   * ✏️ UPDATE THIS to reflect your real progress.
   *   "completed"   -> green filled circle
   *   "in-progress" -> empty circle, "In progress"
   *   "planned"     -> empty circle, "Planned"
   * Nothing is marked as completed by default.
   */
  status: LearningStatus;
  label: Localized;
}

interface LearningPathDef {
  id: LearningPath["id"];
  title: Localized;
  description: Localized;
  items: LearningItemDef[];
}

const learningPathDefs: LearningPathDef[] = [
  {
    id: "fullstack-java",
    title: {
      en: "Full Stack Java Development",
      fr: "Développement Full Stack Java",
    },
    description: {
      en: "Building robust back ends and modern interfaces.",
      fr: "Concevoir des back ends robustes et des interfaces modernes.",
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
          en: "SQL and database management",
          fr: "SQL et gestion de bases de données",
        },
      },
      {
        id: "angular",
        status: "completed",
        label: {
          en: "Frontend integration with Angular",
          fr: "Intégration frontend avec Angular",
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
  {
    id: "devops",
    title: {
      en: "DevOps",
      fr: "DevOps",
    },
    description: {
      en: "Shipping and running software reliably.",
      fr: "Livrer et exploiter des logiciels de façon fiable.",
    },
    items: [
      {
        id: "linux",
        status: "planned",
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
          en: "CI/CD pipelines",
          fr: "Pipelines CI/CD",
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
          fr: "Déploiement, monitoring et automatisation de l'infrastructure",
        },
      },
    ],
  },
  {
    id: "ai",
    title: {
      en: "AI Engineering",
      fr: "Ingénierie de l'IA",
    },
    description: {
      en: "Exploring what artificial intelligence makes possible.",
      fr: "Explorer ce que l'intelligence artificielle rend possible.",
    },
    items: [
      {
        id: "python",
        status: "planned",
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
    id: path.id,
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