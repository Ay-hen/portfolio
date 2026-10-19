export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone";
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  summary: string;
  heroKeywords: string[];
  cvFile: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "stage" | "freelance" | "personnel";
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export type EducationDegree = "ingenieur" | "licence" | "deug" | "bac";

export interface EducationEntry {
  id: string;
  degree: string;
  degreeType: EducationDegree;
  institution: string;
  location: string;
  period: string;
}

export interface ProjectEntry {
  id: string;
  name: string;
  tagline: string;
  purpose: string;
  features: string[];
  architecture: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  relatedExperienceId?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export interface LanguageEntry {
  language: string;
  level: string;
}

/** Categories used to group nodes in the interactive skills constellation. */
export type SkillDomain =
  | "languages"
  | "frontend"
  | "backend"
  | "mobile"
  | "databases"
  | "devops"
  | "methodologies";

/** A single technology node in the interactive skills constellation. */
export interface SkillNode {
  id: string;
  name: string;
  domain: SkillDomain;
  /** Icon identifier resolved to a react-icons component. */
  icon: string;
  descriptionEn: string;
  descriptionFr: string;
}

/**
 * Status of a single learning topic.
 * Only `completed` renders as a filled green circle; `in-progress` and
 * `planned` both render as an empty circle (they differ by their status text).
 */
export type LearningStatus = "completed" | "in-progress" | "planned";

export interface LearningItem {
  id: string;
  label: string;
  status: LearningStatus;
}

export interface LearningPath {
  id: "fullstack-java" | "devops" | "ai";
  title: string;
  description: string;
  items: LearningItem[];
}