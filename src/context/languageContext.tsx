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

// Map country codes to supported languages
const countryToLanguage: Record<string, Language> = {
  KR: 'ko', // South Korea
  KP: 'ko', // North Korea
  UZ: 'uz', // Uzbekistan
};

const detectLanguageByLocation = async (): Promise<Language | null> => {
  try {
    const response = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
    if (!response.ok) return null;
    const data = await response.json();
    const country: string = data.country_code;
    return countryToLanguage[country] ?? null;
  } catch {
    return null;
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const hasSavedLanguage = (() => {
    try {
      return localStorage.getItem('portfolio-language') !== null;
    } catch {
      return false;
    }
  })();

  const [language, setLanguage] = useState<Language>(() => {
    // Get from localStorage or default to English
    try {
      const saved = localStorage.getItem('portfolio-language') as Language;
      return saved && (saved === 'en' || saved === 'ko' || saved === 'uz') ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  // Auto-detect language by geolocation on first visit (no saved preference)
  useEffect(() => {
    if (hasSavedLanguage) return;

    detectLanguageByLocation().then((detectedLang) => {
      if (detectedLang) {
        setLanguage(detectedLang);
      }
      // If no match or error, stays on 'en' (default)
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
