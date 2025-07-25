// src/components/common/LanguageToggle.tsx

import { Globe } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../../context/languageContext';

interface LanguageToggleProps {
  variant?: 'default' | 'mobile';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = 'default',
  className = ''
}) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  const baseClasses = 'flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 font-medium';

  const variantClasses = {
    default: 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900',
    mobile: 'w-full justify-center bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800'
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={`Switch to ${language === 'en' ? 'Korean' : 'English'}`}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm">
        {language === 'en' ? '한국어' : 'English'}
      </span>
    </button>
  );
};
