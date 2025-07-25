// src/types/index.ts

export type Language = 'en' | 'ko';

export interface NavItem {
  id: string;
  icon: React.ReactNode;
  href: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  current?: boolean;
  achievements: string[];
  technologies: string[];
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  year: string;
  technologies: string[];
  url?: string;
  github?: string;
  image?: string;
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'planned';
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

export interface Translations {
  en: TranslationContent;
  ko: TranslationContent;
}

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
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
