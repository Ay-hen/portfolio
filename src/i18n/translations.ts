import type { Lang } from "./detectLang";

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.resume": "Resume",
    "nav.contact": "Contact",
    "nav.aria.main": "Main navigation",
    "nav.aria.mobile": "Mobile navigation",
    "nav.menu.open": "Open menu",
    "nav.menu.close": "Close menu",

    "theme.toLight": "Switch to light mode",
    "theme.toDark": "Switch to dark mode",

    "lang.switchTo": "Switch language",

    "hero.eyebrow": "Software Engineer · Full-Stack",
    "hero.cta.projects": "View Projects",
    "hero.cta.cv": "Download CV",
    "hero.cta.contact": "Contact Me",
    "hero.cta.github": "GitHub",

    "about.eyebrow": "Profile",
    "about.title": "About",
    "about.bio2":
      "Trained in Mathematics & Computer Science Engineering at FSTM Mohammedia, I build software products end-to-end — from the data model to the interface, including access security and production deployment.",
    "about.strength1.title": "Secure REST Architectures",
    "about.strength1.body":
      "Design of documented REST APIs, stateless JWT authentication, and role-based access control with Spring Security.",
    "about.strength2.title": "Full-Stack Java & TypeScript",
    "about.strength2.body":
      "Spring Boot / Spring Data JPA on the server side, Angular and React interfaces on the client side, applied to real business domains (banking, e-commerce, booking).",
    "about.strength3.title": "Critical Databases",
    "about.strength3.body":
      "Modeling and optimizing relational data (PostgreSQL, MySQL) and document data (MongoDB) for transactional systems.",
    "about.strength4.title": "Agile Delivery",
    "about.strength4.body":
      "From technical scoping through to production, with Git Flow, Clean Code and SOLID principles as constant references.",

    "experience.eyebrow": "Background",
    "experience.title": "Experience & Projects",
    "experience.description":
      "Work delivered as an intern, as a freelancer and independently, across real business domains.",
    "experience.type.stage": "Internship",
    "experience.type.freelance": "Freelance",
    "experience.type.personnel": "Personal Project",
    "experience.code": "View code",
    "experience.demo": "Live demo",
    

    "projects.eyebrow": "Selection",
    "projects.title": "Projects",
    "projects.description":
      "Four real projects, from secured backend to interface — each with its own GitHub repository.",
    "projects.modal.purpose": "Purpose",
    "projects.modal.features": "Key Features",
    "projects.modal.architecture": "Architecture",
    "projects.modal.technologies": "Technologies",
    "projects.modal.code": "View code",
    "projects.modal.demo": "Live demo",
    "projects.modal.close": "Close",

    "skills.eyebrow": "Tech Universe",
    "skills.title": "Skills",
    "skills.description":
      "An interactive map of the tools I actually use — hover or tap a node to explore.",
    "skills.hint.desktop": "Move your cursor to explore · hover a node · click for details",
    "skills.hint.mobile": "Tap a node to explore",
    "skills.core": "Core",
    "skills.panel.category": "Category",
    "skills.panel.close": "Close",
    "skills.category.languages": "Languages",
    "skills.category.frontend": "Frontend",
    "skills.category.backend": "Backend",
    "skills.category.mobile": "Mobile",
    "skills.category.databases": "Databases",
    "skills.category.devops": "DevOps & Tools",
    "skills.category.methodologies": "Methodologies",

    "education.eyebrow": "Education",
    "education.title": "Education",
    "education.subtitle": "Where curiosity became a craft.",

    "resume.eyebrow": "Document",
    "resume.title": "Resume",
    "resume.description":
      "This page mirrors my actual CV. Download the PDF version to share it.",
    "resume.download": "Download PDF",
    "resume.replaceHint": "Replace",
    "resume.replaceHintEnd": "with your CV exported from the LaTeX file.",
    "resume.stat.experience": "Experience",
    "resume.stat.experienceSub": "roles & projects",
    "resume.stat.education": "Education",
    "resume.stat.educationSub": "degrees",
    "resume.stat.skills": "Skills",
    "resume.stat.skillsSub": "technologies",
    "resume.preview": "CV preview",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your project",
    "contact.description":
      "I'm open to full-stack opportunities, freelance work, and technical conversations.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send message",
    "contact.form.unavailable":
      "Message sending isn't configured on the server yet — feel free to email me directly in the meantime.",

    "footer.builtWith": "built with React & TypeScript.",
    "footer.replayIntro": "Replay intro",

    "notfound.title": "Page not found",
    "notfound.description": "The requested route doesn't exist anymore.",
    "notfound.cta": "Back to home",

    "intro.skip": "Skip intro →",
    "intro.loading": "Loading Ayoub's portfolio...",
    "intro.granted": "Access granted.",
  },
  fr: {
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.resume": "CV",
    "nav.contact": "Contact",
    "nav.aria.main": "Navigation principale",
    "nav.aria.mobile": "Navigation mobile",
    "nav.menu.open": "Ouvrir le menu",
    "nav.menu.close": "Fermer le menu",

    "theme.toLight": "Activer le mode clair",
    "theme.toDark": "Activer le mode sombre",

    "lang.switchTo": "Changer de langue",

    "hero.eyebrow": "Ingénieur logiciel · Full-Stack",
    "hero.cta.projects": "Voir les projets",
    "hero.cta.cv": "Télécharger le CV",
    "hero.cta.contact": "Me contacter",
    "hero.cta.github": "GitHub",

    "about.eyebrow": "Profil",
    "about.title": "À propos",
    "about.bio2":
      "Formé en Génie Mathématique et Informatique à la FSTM de Mohammedia, je construis des produits logiciels de bout en bout — du modèle de données jusqu'à l'interface, en passant par la sécurisation des accès et la mise en production.",
    "about.strength1.title": "Architectures REST sécurisées",
    "about.strength1.body":
      "Conception d'APIs REST documentées, authentification JWT stateless et contrôle d'accès basé sur les rôles avec Spring Security.",
    "about.strength2.title": "Full-stack Java & TypeScript",
    "about.strength2.body":
      "Backend Spring Boot / Spring Data JPA côté serveur, interfaces Angular et React côté client, sur des domaines métier réels (banque, e-commerce, réservation).",
    "about.strength3.title": "Bases de données critiques",
    "about.strength3.body":
      "Modélisation et optimisation de données relationnelles (PostgreSQL, MySQL) et documentaires (MongoDB) au service de systèmes transactionnels.",
    "about.strength4.title": "Livraison en environnement Agile",
    "about.strength4.body":
      "Du cadrage technique jusqu'à la mise en production, avec Git Flow, Clean Code et les principes SOLID comme repères constants.",

    "experience.eyebrow": "Parcours",
    "experience.title": "Expérience & projets",
    "experience.description":
      "Missions réalisées en stage, en freelance et en autonomie, sur des domaines métier réels.",
    "experience.type.stage": "Stage",
    "experience.type.freelance": "Freelance",
    "experience.type.personnel": "Projet personnel",
    "experience.code": "Code source",
    "experience.demo": "Démo",

    "projects.eyebrow": "Sélection",
    "projects.title": "Projets",
    "projects.description":
      "Quatre projets réels, du backend sécurisé à l'interface — chacun avec son dépôt GitHub.",
    "projects.modal.purpose": "Objectif",
    "projects.modal.features": "Fonctionnalités clés",
    "projects.modal.architecture": "Architecture",
    "projects.modal.technologies": "Technologies",
    "projects.modal.code": "Voir le code",
    "projects.modal.demo": "Démo en ligne",
    "projects.modal.close": "Fermer",

    "skills.eyebrow": "Univers technique",
    "skills.title": "Compétences",
    "skills.description":
      "Une carte interactive des outils que j'utilise vraiment — survolez ou touchez un nœud pour explorer.",
    "skills.hint.desktop": "Déplacez le curseur pour explorer · survolez un nœud · cliquez pour les détails",
    "skills.hint.mobile": "Touchez un nœud pour explorer",
    "skills.core": "Moi",
    "skills.panel.category": "Catégorie",
    "skills.panel.close": "Fermer",
    "skills.category.languages": "Langages",
    "skills.category.frontend": "Frontend",
    "skills.category.backend": "Backend",
    "skills.category.mobile": "Mobile",
    "skills.category.databases": "Bases de données",
    "skills.category.devops": "DevOps & Outils",
    "skills.category.methodologies": "Méthodologies",

    "education.eyebrow": "Formation",
    "education.title": "Éducation",
    "education.subtitle": "Là où la curiosité est devenue un métier.",

    "resume.eyebrow": "Document",
    "resume.title": "CV",
    "resume.description":
      "Le contenu de cette page reflète directement mon CV. Téléchargez la version PDF pour la partager.",
    "resume.download": "Télécharger le PDF",
    "resume.replaceHint": "Remplacez",
    "resume.replaceHintEnd": "par votre CV exporté depuis le fichier LaTeX.",
    "resume.stat.experience": "Expérience",
    "resume.stat.experienceSub": "missions & projets",
    "resume.stat.education": "Formation",
    "resume.stat.educationSub": "diplômes",
    "resume.stat.skills": "Compétences",
    "resume.stat.skillsSub": "technologies",
    "resume.preview": "Aperçu du CV",

    "contact.eyebrow": "Contact",
    "contact.title": "Discutons de votre projet",
    "contact.description":
      "Je suis ouvert aux opportunités full-stack, aux missions freelance et aux échanges techniques.",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le message",
    "contact.form.unavailable":
      "L'envoi de message n'est pas encore configuré côté serveur — écrivez-moi directement en attendant.",

    "footer.builtWith": "construit avec React & TypeScript.",
    "footer.replayIntro": "Revoir l'intro",

    "notfound.title": "Page introuvable",
    "notfound.description": "La route demandée n'existe pas ou plus.",
    "notfound.cta": "Retour à l'accueil",

    "intro.skip": "Passer l'intro →",
    "intro.loading": "Chargement du portfolio d'Ayoub...",
    "intro.granted": "Accès autorisé.",
  },
};
