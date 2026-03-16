// src/context/LanguageContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../data/translations';
import { Language, TranslationContent } from '../types';

type LocaleMap<T = string> = { en: T; ko: T; uz: T };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationContent;
  tx: <T = string>(map: LocaleMap<T>) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get from localStorage or default to English
    try {
      const saved = localStorage.getItem('portfolio-language') as Language;
      return saved && (saved === 'en' || saved === 'ko' || saved === 'uz') ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    // Save to localStorage whenever language changes
    try {
      localStorage.setItem('portfolio-language', language);
      // Update document language attribute
      document.documentElement.lang = language;
    } catch {
      // Handle localStorage errors in SSR or restricted environments
      console.warn('Could not access localStorage');
    }
  }, [language]);

  const tx = (map: LocaleMap) => map[language];

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    tx,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
