// src/types/index.ts

export type Language = 'en' | 'ko' | 'uz';

/** A string in every supported locale. Every user-facing string in src/data uses this. */
export interface LocaleText {
  en: string;
  ko: string;
  uz: string;
}

export interface NavItem {
  id: string;
  icon: React.ReactNode;
  href: string;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  portfolio: string;
  linkedin?: string;
}

export interface SoftSkill {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

export interface ProjectEntry {
  /** Stable identifier. Kebab-case slug, not an array index. */
  id: string;
  title: LocaleText;
  description: LocaleText;
  role: LocaleText;
  year: string;
  tech: string[];
  url?: string;
  github?: string;
  featured: boolean;
  /** Card status indicator, e.g. "completed" or "in-progress". */
  status: string;
  /** Emoji shown on the project card. */
  image: string;
  iosUrl?: string;
  androidUrl?: string;
}

export interface ExperienceEntry {
  /** Stable identifier. Kebab-case slug, not an array index. */
  id: string;
  company: LocaleText;
  position: LocaleText;
  duration: LocaleText;
  location: LocaleText;
  current: boolean;
  tech: string[];
  achievements: LocaleText[];
}

export interface CertificateEntry {
  /** Stable identifier. Kebab-case slug derived from the English title. */
  id: string;
  title: LocaleText;
  issuer: LocaleText;
  /**
   * Certification date. Usually the same year string in every locale, but a
   * translated status (e.g. "In Progress") for in-flight certifications, so
   * this is LocaleText rather than a plain string.
   */
  date: LocaleText;
  description: LocaleText;
  url: string;
  /** Emoji shown on the certificate card. */
  image: string;
  /** Card status indicator, e.g. "completed" or "in-progress". */
  status: string;
}

export interface Translations {
  en: TranslationContent;
  ko: TranslationContent;
  uz: TranslationContent;
}

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    certificates: string;
    liveProjects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
    resume: string;
  };
  about: {
    title: string;
    description: string;
    extendedDescription?: string; // Made optional since not used in current implementation
    residence: string;
    languages: string;
    residenceInfo: string;
    languageInfo: string;
  };
  experience: {
    title: string;
    current: string;
    achievements: string;
  };
  projects: {
    title: string;
    viewProject: string;
    techStack: string;
    role: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
  };
}

// Additional interfaces for enhanced functionality
export interface ResumeDownloadHook {
  downloadResume: () => void;
  isDownloading: boolean;
  error: string | null;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export interface PageProps {
  onNavigate?: (page: string) => void;
}

export interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

// Environment variables interface
export interface EnvVars {
  VITE_APP_NAME?: string;
  VITE_APP_VERSION?: string;
  VITE_CONTACT_EMAIL?: string;
  VITE_CONTACT_PHONE?: string;
  VITE_GITHUB_URL?: string;
  VITE_PORTFOLIO_URL?: string;
  VITE_RESUME_URL?: string;
  VITE_RESUME_FILENAME?: string;
}
