// src/pages/AboutPage.tsx

import { Award, BookOpen, Globe, MapPin } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../context/languageContext';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Vue.js', 'TypeScript', 'Flutter', 'HTML5', 'CSS3'],
      color: 'blue'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Django', 'AWS Lambda', 'REST APIs'],
      color: 'green'
    },
    {
      title: 'Database',
      skills: ['MySQL', 'MongoDB', 'NoSQL', 'SQL Procedures'],
      color: 'purple'
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.about.title}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* About Text */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.description}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in creating user-friendly digital solutions and leading teams to build innovative applications. My experience spans across multiple technologies and frameworks, allowing me to tackle complex challenges with modern approaches.
            </p>

            {/* Personal Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {t.about.residence}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">{t.about.residenceInfo}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  {t.about.languages}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">{t.about.languageInfo}</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Education
          </h3>
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="text-xl font-semibold text-gray-900">Bachelor of Computer Science and Engineering</h4>
            <p className="text-blue-600 font-medium">Sejong University</p>
            <p className="text-gray-600 mt-2">Graduated: 2022</p>
            <p className="text-gray-600 mt-2">
              <strong>Key Subjects:</strong> Software Engineering, Database Systems, Algorithms, Web Programming
            </p>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-600" />
            Awards & Certifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">KIIP Level 5 Completion</h4>
                <p className="text-gray-600">Korean Immigration & Integration Program - 2023</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Outstanding Project Achievement Award</h4>
                <p className="text-gray-600">Ebridge World - 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
