// src/components/layout/Footer.tsx

import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/languageContext";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: t.nav.home },
    { path: "/about", label: t.nav.about },
    { path: "/experience", label: t.nav.experience },
    { path: "/projects", label: t.nav.projects },
    { path: "/certificates", label: t.nav.certificates },
    { path: "/live-projects", label: t.nav.liveProjects },
    { path: "/contact", label: t.nav.contact },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/firdavs9777",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/firdavs-mutalipov-a630ba185/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      href: "mailto:fmutalipov7@gmail.com",
      label: "Email",
      color: "hover:text-red-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {language === "ko" ? "데이비스" : "Davis"}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {language === "ko"
                ? "풀스택 개발자 및 프로젝트 관리자로, 혁신적인 디지털 솔루션을 만드는 것에 열정을 가지고 있습니다."
                : "Full-Stack Developer & Project Manager passionate about creating innovative digital solutions."}
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Seoul, South Korea</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === "ko" ? "빠른 링크" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === "ko" ? "연락처" : "Contact"}
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:fmutalipov7@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  fmutalipov7@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+82-10-8277-3725"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +82-10-8277-3725
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-all duration-200 ${social.color} hover:bg-gray-700 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {language === "ko" ? "데이비스" : "Davis"}.{" "}
              {language === "ko"
                ? "모든 권리 보유"
                : "All rights reserved."}
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="https://firdavs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {language === "ko" ? "포트폴리오" : "Portfolio"}
              </a>
              <span className="text-gray-600">|</span>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {language === "ko" ? "연락하기" : "Contact"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

