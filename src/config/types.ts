// Contract for the portfolio content.
// Forks edit src/config/portfolio.ts — not this file.

export interface Meta {
  /** Browser tab / document title. */
  title: string;
}

export interface Person {
  /** Shown in the hero heading and in the footer copyright. */
  name: string;
  /** Small uppercase line above the hero heading (e.g. your job title). */
  role: string;
  /** Hero paragraph shown under your name. */
  tagline: string;
  /** "About me" paragraphs. Empty array hides the About section. */
  about: string[];
}

export interface SocialLinks {
  /** Plain address, without the "mailto:" prefix. */
  email: string;
  github: string;
  linkedin: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  /** Omit to hide the "Code" button. */
  github?: string;
  /** Omit to hide the "Live" button. */
  live?: string;
  /** Optional footnote rendered at the bottom of the card. */
  detail?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  title: string;
  institution: string;
  year: string;
  description: string;
}

export interface Certification {
  title: string;
  institution: string;
  year: string;
  credentialUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

/** Every user-facing UI string. Translate these to change the site's language. */
export interface Labels {
  nav: {
    /** Brand text on the left side of the navbar. */
    brand: string;
    about: string;
    experience: string;
    projects: string;
    certificates: string;
    skills: string;
    contact: string;
  };
  hero: {
    /** Primary button (scrolls to projects). */
    viewProjects: string;
    /** Secondary button (opens LinkedIn). */
    linkedin: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    /** Small label above the tech-stack badges. */
    stackLabel: string;
  };
  experience: {
    eyebrow: string;
    heading: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    codeButton: string;
    liveButton: string;
  };
  certificates: {
    eyebrow: string;
    heading: string;
    educationSubheading: string;
    certificationsSubheading: string;
  };
  skills: {
    eyebrow: string;
    heading: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    /** Paragraph under the heading. */
    pitch: string;
    /** Text of the email button. */
    emailButton: string;
  };
  footer: {
    /** Rendered after "© <year> <name>." */
    rights: string;
    /** Second footer line. */
    madeWith: string;
  };
}

export interface PortfolioConfig {
  meta: Meta;
  person: Person;
  links: SocialLinks;
  /** Badges in the About section. Empty array hides only the stack column. */
  techStack: string[];
  /** Empty array hides the Projects section and its nav link. */
  projects: Project[];
  /** Empty array hides the Experience section and its nav link. */
  experiences: Experience[];
  /** education AND certifications both empty hides the Certificates section. */
  education: Education[];
  certifications: Certification[];
  /** Empty array hides the Skills section and its nav link. */
  skillCategories: SkillCategory[];
  labels: Labels;
}
