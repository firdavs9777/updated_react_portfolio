// src/components/layout/Navbar.tsx

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  MoreHorizontal,
} from "lucide-react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useLanguage } from "../../context/languageContext";
import { LanguageToggle } from "../common/LanguageToggle";
import { DarkModeToggle } from "../common/DarkModeToggle";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const { isScrolled } = useScrollPosition();
  const { t } = useLanguage();
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setShowMoreMenu(false);
  }, [location.pathname]);

  const navItems = [
    { path: "/", icon: Home, label: t.nav.home },
    { path: "/live-projects", icon: Globe, label: t.nav.liveProjects },
    { path: "/projects", icon: FolderOpen, label: t.nav.projects },
    { path: "/experience", icon: Briefcase, label: t.nav.experience },
  ];

  const navItemsSecondary = [
    { path: "/certificates", icon: Award, label: t.nav.certificates },
    { path: "/about", icon: User, label: t.nav.about },
    { path: "/contact", icon: MessageCircle, label: t.nav.contact },
  ];

  // Bottom nav items for mobile (most important pages)
  const bottomNavItems = [
    { path: "/", icon: Home, label: t.nav.home },
    { path: "/projects", icon: FolderOpen, label: t.nav.projects },
    { path: "/experience", icon: Briefcase, label: t.nav.experience },
    { path: "/contact", icon: MessageCircle, label: t.nav.contact },
  ];

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass dark:bg-gray-900/80 shadow-lg border-b border-white/20 dark:border-gray-700"
          : "bg-transparent dark:bg-transparent"
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
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-md"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
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
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-md"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
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

          {/* Right side - Language Toggle, Dark Mode & Mobile Menu */}
          <div className="flex items-center gap-4">
            <DarkModeToggle />
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

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-2 border border-gray-200 dark:border-gray-700">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleMenuClose}
                      className={({ isActive }) =>
                      `flex items-center gap-3 w-full px-4 py-3 rounded-lg text-base font-medium transition-colors active:scale-95 ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </NavLink>
                );
              })}
              <div className="my-2 h-px bg-gray-200 dark:bg-gray-700"></div>
              {navItemsSecondary.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleMenuClose}
                      className={({ isActive }) =>
                      `flex items-center gap-3 w-full px-4 py-3 rounded-lg text-base font-medium transition-colors active:scale-95 ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </NavLink>
                );
              })}
              <div className="pt-3 mt-2 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between px-2">
                <DarkModeToggle />
                <LanguageToggle variant="mobile" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation Bar - Korean app style */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg safe-area-bottom">
        <div className="flex justify-around items-center h-16 px-2">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center flex-1 py-2 px-1 transition-all duration-200 active:scale-90 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "scale-110" : ""}`} />
                <span className={`text-xs mt-1 font-medium truncate max-w-[60px] ${isActive ? "text-blue-600 dark:text-blue-400" : ""}`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute bottom-1 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                )}
              </NavLink>
            );
          })}
          {/* More button */}
          <button
            onClick={() => setShowMoreMenu(!showMoreMenu)}
            className={`flex flex-col items-center justify-center flex-1 py-2 px-1 transition-all duration-200 active:scale-90 ${
              showMoreMenu
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <MoreHorizontal className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">더보기</span>
          </button>
        </div>

        {/* More menu popup */}
        {showMoreMenu && (
          <div className="absolute bottom-full left-0 right-0 mb-2 mx-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-3 animate-fade-in-up">
            <div className="grid grid-cols-3 gap-3">
              {[...navItems.filter(item => !bottomNavItems.find(b => b.path === item.path)), ...navItemsSecondary].map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setShowMoreMenu(false)}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all active:scale-95 ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Icon className="w-6 h-6 mb-1" />
                    <span className="text-xs font-medium text-center">{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <DarkModeToggle />
              <LanguageToggle variant="mobile" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
