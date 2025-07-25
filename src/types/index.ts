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
    residence: string;
    languages: string;
    residenceInfo: string;
    languageInfo: string;
    skills: string;
    education: string;
  };
  experience: {
    title: string;
    current: string;
    achievements: string;
    technologies: string;
  };
  projects: {
    title: string;
    viewProject: string;
    viewCode: string;
    techStack: string;
    role: string;
    status: string;
    featured: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    sendMessage: string;
  };
  common: {
    loading: string;
    error: string;
    retry: string;
    comingSoon: string;
  };
}
