// src/components/common/LanguageToggle.tsx

import { Globe, ChevronDown } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/languageContext';
import { Language } from '../../types';

interface LanguageToggleProps {
  variant?: 'default' | 'mobile';
  className?: string;
}

const languageOptions: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
];

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = 'default',
  className = ''
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const current = languageOptions.find(l => l.code === language) || languageOptions[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseClasses = 'flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 font-medium cursor-pointer';

  const variantClasses = {
    default: 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white',
    mobile: 'w-full justify-center bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200'
  };

  if (variant === 'mobile') {
    return (
      <div className={`flex gap-2 ${className}`}>
        {languageOptions.map((option) => (
          <button
            key={option.code}
            onClick={() => setLanguage(option.code)}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              language === option.code
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <span>{option.flag}</span>
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${baseClasses} ${variantClasses[variant]}`}
        aria-label="Select language"
      >
        <span>{current.flag}</span>
        <span className="text-sm">{current.label}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 min-w-[140px] z-50">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              onClick={() => {
                setLanguage(option.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                language === option.code
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span>{option.flag}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
