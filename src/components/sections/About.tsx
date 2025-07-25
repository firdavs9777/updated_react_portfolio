// src/pages/AboutPage.tsx (Enhanced)

import { Award, BookOpen, Globe, Lightbulb, MapPin, MessageSquare, Target, Users } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();

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
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack'],
      color: 'orange'
    }
  ];

  const softSkills = [
    {
      icon: <Users className="w-6 h-6" />,
      title: language === 'ko' ? '팀워크 & 협업' : 'Teamwork & Collaboration',
      description: language === 'ko' ?
        '다문화 팀에서 효과적으로 협업하며 공동 목표 달성을 위해 노력합니다' :
        'Effectively collaborate in multicultural teams to achieve common goals',
      color: 'blue'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: language === 'ko' ? '의사소통 능력' : 'Communication Skills',
      description: language === 'ko' ?
        '복잡한 기술적 개념을 명확하게 전달하고 팀원들과 원활한 소통을 유지합니다' :
        'Clearly communicate complex technical concepts and maintain smooth team communication',
      color: 'green'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: language === 'ko' ? '문제 해결' : 'Problem Solving',
      description: language === 'ko' ?
        '도전적인 프로젝트에서 창의적이고 효율적인 해결책을 찾아 구현합니다' :
        'Find and implement creative, efficient solutions in challenging projects',
      color: 'purple'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: language === 'ko' ? '적응력 & 학습' : 'Adaptability & Learning',
      description: language === 'ko' ?
        '빠르게 변하는 기술 환경에 적응하고 지속적으로 새로운 기술을 습득합니다' :
        'Adapt to rapidly changing tech environments and continuously learn new technologies',
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

  const getSoftSkillColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      green: 'bg-green-50 border-green-200 text-green-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600',
      orange: 'bg-orange-50 border-orange-200 text-orange-600'
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

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* About Text */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t.about.description}
              </p>

              {/* Extended Description */}
              <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {language === 'ko' ?
                    '경력 전반에 걸쳐 다양한 시간대와 문화적 배경을 가진 팀들과 성공적으로 협업해왔으며, 적응력과 효과적인 다문화 의사소통 능력을 보여주었습니다. 훌륭한 소프트웨어는 강력한 팀워크, 명확한 의사소통, 그리고 공유된 비전을 통해 만들어진다고 믿습니다.' :
                    'Throughout my career, I have successfully collaborated with diverse teams across different time zones and cultural backgrounds, demonstrating adaptability and effective cross-cultural communication. I believe that great software is built through strong teamwork, clear communication, and shared vision.'
                  }
                </p>
              </div>
            </div>

            {/* Personal Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
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

          {/* Technical Skills Section */}
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

        {/* Soft Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'ko' ? '핵심 역량 & 소프트 스킬' : 'Core Competencies & Soft Skills'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${getSoftSkillColorClasses(skill.color)} hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-full ${getColorClasses(skill.color)}`}>
                    {skill.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">{skill.title}</h4>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Education
          </h3>
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="text-xl font-semibold text-gray-900">Bachelor of Computer Science and Engineering</h4>
            <p className="text-blue-600 font-medium">Sejong University</p>
            <p className="text-gray-600 mt-2">Graduated: 2022</p>
            <p className="text-gray-600 mt-2">
              <strong>Key Subjects:</strong> Software Engineering, Database Systems, Algorithms, Web Programming, Team Project Management
            </p>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8">
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
                <p className="text-sm text-gray-500 mt-1">Advanced Korean language and cultural integration certification</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Outstanding Project Achievement Award</h4>
                <p className="text-gray-600">Ebridge World - 2022</p>
                <p className="text-sm text-gray-500 mt-1">Recognition for exceptional teamwork and project delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
