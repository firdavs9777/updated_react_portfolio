// src/pages/HomePage.tsx

import { ChevronRight, Download } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../context/languageContext';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <p className="text-lg text-gray-600 mb-4">{t.hero.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 animate-float">
              {t.hero.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              {t.hero.title}
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {t.hero.cta}
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>

            {/* Fixed Resume Download Button */}
            <a
              href="/Davis_resume.pdf"
              download="Davis_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              {t.hero.resume}
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <div className="text-3xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-600">Languages</div>
            </div>
          </div>

          {/* Resume Preview Section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Resume</h3>
              <p className="text-gray-600 mb-6">
                Download my complete resume with detailed work experience, skills, and achievements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/Davis_resume.pdf"
                  download="Davis_Resume.pdf"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
                <a
                  href="/Davis_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-1"
                >
                  View Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
