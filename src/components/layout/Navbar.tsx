// src/components/layout/Navbar.tsx

import React, { useState } from 'react';
import { Menu, X, User, Briefcase, FolderOpen, MessageCircle, Home } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useLanguage } from '../../context/languageContext';
import { LanguageToggle } from '../common/LanguageToggle';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const { t } = useLanguage();

  const navItems = [
    { id: 'home', icon: Home, label: t.nav.home },
    { id: 'about', icon: User, label: t.nav.about },
    { id: 'experience', icon: Briefcase, label: t.nav.experience },
    { id: 'projects', icon: FolderOpen, label: t.nav.projects },
    { id: 'contact', icon: MessageCircle, label: t.nav.contact }
  ];

  const handlePageChange = (pageId: string) => {
    onPageChange(pageId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'glass shadow-lg border-b border-white/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handlePageChange('home')}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              Davis
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePageChange(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      currentPage === item.id
                        ? 'text-blue-600 bg-blue-50 shadow-md'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right side - Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageToggle />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2 border border-gray-200">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePageChange(item.id)}
                    className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentPage === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-2 mt-2 border-t border-gray-200">
                <LanguageToggle variant="mobile" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
