// Contract for the portfolio content.
// Forks edit src/config/portfolio.ts — not this file.

export interface Meta {
  /** Browser tab / document title. Also the <title>, og:title and twitter:title. */
  title: string;
  /**
   * Meta description: one sentence, ~150-160 characters. Search engines and
   * social cards both read it, so write it for a human, not for keywords.
   */
  description: string;
  /**
   * Canonical origin of the deployed site, with protocol and no trailing
   * slash (e.g. "https://kaio.voynan.com"). Everything absolute — canonical,
   * og:url, sitemap.xml, robots.txt, JSON-LD @id — is derived from it.
   */
  siteUrl: string;
  /** BCP-47 language tag for <html lang> and og:locale (e.g. "pt-BR"). */
  language: string;
  /**
   * Social preview image: 1200x630, PNG or JPG, either a site-root path
   * ("/og-image.png", file living in public/) or an absolute URL. Omit it and
   * no og:image is emitted at all — better a card with no image than a card
   * pointing at a 404.
   */
  ogImage?: string;
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
  /**
   * Digits only — country code + area code + number, with no "+", spaces or
   * dashes. That's the shape wa.me expects: "5579988853741" is +55 79 98885-3741.
   */
  whatsapp: string;
  /** Full profile URL. */
  x: string;
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
  /** Optional screenshot/thumbnail path or URL. The first project (featured) falls back to a larger text-only treatment when omitted; omit safely rather than using a generic stock image. */
  image?: string;
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
  /** Labels for the navbar's expandable contact menu (desktop). */
  contactMenu: {
    /** Row label for the email channel; GitHub/LinkedIn use their own names. */
    email: string;
    /** Accessible label of the "copy email" button at rest. */
    copy: string;
    /** Accessible label and confirmation text once the email is copied. */
    copied: string;
    /** Link at the bottom of the menu, pointing at the contact section. */
    viewSection: string;
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
    /** Headline of the GitHub call-to-action closing the section. */
    githubCta: string;
  };
  certificates: {
    eyebrow: string;
    heading: string;
    educationSubheading: string;
    certificationsSubheading: string;
    /** Screen-reader-only suffix stating where a certificate row leads. */
    credentialHint: string;
    /** Link under the certificate list, shown only when certificationsRepoUrl is set. */
    repoLink: string;
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
    /** Word set between the email button and the secondary channel links. */
    divider: string;
  };
  footer: {
    /** Rendered after "© <year> <name>." */
    rights: string;
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
  /** Optional link to a fuller archive of certificates (e.g. a Drive folder or GitHub repo). Rendered as its own labeled link below the grid — omit rather than adding a fake "view all" entry to `certifications`. */
  certificationsRepoUrl?: string;
  /** Empty array hides the Skills section and its nav link. */
  skillCategories: SkillCategory[];
  labels: Labels;
}
