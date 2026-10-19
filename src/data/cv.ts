import type { Lang } from "../i18n/detectLang";

/**
 * One downloadable CV. This describes the CV *document*, so the label is
 * intentionally written in the CV's own language and is NOT translated with
 * the UI: a visitor browsing in English must still be able to recognise
 * "Télécharger le CV (Français)" as the French CV, and vice versa.
 */
export interface CvFile {
  /** Language of the CV document itself (not the UI language). */
  lang: Lang;
  /** Public URL of the PDF, resolved against Vite's base path. */
  href: string;
  /** Filename proposed to the browser when the CV is downloaded. */
  downloadName: string;
  /** Button label, written in the CV's own language. */
  label: string;
  /** Name of the CV language in that language (titles, screen readers). */
  languageName: string;
}

// `BASE_URL` is "/" by default and keeps the links valid if the site is ever
// deployed under a sub-path.
const BASE = import.meta.env.BASE_URL;

/**
 * Files live in `public/`, so Vite serves them as-is at the site root:
 *   public/english_CV/HENNANI_AYOUB_BRAHIM_CV.pdf
 *   public/french_CV/HENNANI_AYOUB_BRAHIM_CV.pdf
 *
 * Both PDFs share the same name on disk, so `downloadName` gives each one a
 * distinct, descriptive name when saved (the files themselves are untouched).
 * Folder names are case-sensitive on most hosts (Linux): keep them exact.
 */
export const cvFiles: Record<Lang, CvFile> = {
  en: {
    lang: "en",
    href: `${BASE}english_CV/HENNANI_AYOUB_BRAHIM_CV.pdf`,
    downloadName: "CV-Ayoub-Hennani-EN.pdf",
    label: "Download CV (English)",
    languageName: "English",
  },
  fr: {
    lang: "fr",
    href: `${BASE}french_CV/HENNANI_AYOUB_BRAHIM_CV.pdf`,
    downloadName: "CV-Ayoub-Hennani-FR.pdf",
    label: "Télécharger le CV (Français)",
    languageName: "Français",
  },
};

export const cvList: CvFile[] = [cvFiles.en, cvFiles.fr];