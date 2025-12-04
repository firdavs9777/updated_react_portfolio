// src/components/layout/Navbar.tsx

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Briefcase,
  FolderOpen,
  MessageCircle,
  Home,
  Award,
  Globe,
} from "lucide-react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useLanguage } from "../../context/languageContext";
import { LanguageToggle } from "../common/LanguageToggle";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const { t } = useLanguage();

  const navItems = [
    { path: "/", icon: Home, label: t.nav.home },
    { path: "/about", icon: User, label: t.nav.about },
    { path: "/experience", icon: Briefcase, label: t.nav.experience },
    { path: "/projects", icon: FolderOpen, label: t.nav.projects },
  ];

  const navItemsSecondary = [
    { path: "/certificates", icon: Award, label: t.nav.certificates },
    { path: "/live-projects", icon: Globe, label: t.nav.liveProjects },
    { path: "/contact", icon: MessageCircle, label: t.nav.contact },
  ];

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform inline-block"
            >
              Davis
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                        isActive
                          ? "text-blue-600 bg-blue-50 shadow-md"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </NavLink>
                );
              })}
              <div className="mx-2 h-6 w-px bg-gray-300"></div>
              {navItemsSecondary.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                        isActive
                          ? "text-blue-600 bg-blue-50 shadow-md"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </NavLink>
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
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
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
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleMenuClose}
                    className={({ isActive }) =>
                      `flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </NavLink>
                );
              })}
              <div className="my-2 h-px bg-gray-200"></div>
              {navItemsSecondary.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleMenuClose}
                    className={({ isActive }) =>
                      `flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </NavLink>
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
