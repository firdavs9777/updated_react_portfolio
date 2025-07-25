// src/pages/ExperiencePage.tsx

import { Award, Calendar, MapPin } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../context/languageContext';

export const ExperiencePage: React.FC = () => {
  const { language, t } = useLanguage();

  const experiences = [
    {
      id: 1,
      company: language === 'ko' ? '퀸텟시스템즈 주식회사' : 'Quintet Systems Co., Ltd.',
      position: language === 'ko' ? '풀스택 웹 개발자' : 'Full-Stack Web Developer',
      duration: language === 'ko' ? '2023년 3월 - 현재' : 'Mar 2023 - Present',
      location: language === 'ko' ? '서울, 대한민국' : 'Seoul, South Korea',
      current: true,
      tech: ['Nuxt.js', 'Vue.js', 'React', 'Node.js', 'TypeScript'],
      achievements: language === 'ko' ? [
        '재사용 가능한 구성 요소와 모듈 개발을 통해 코드 효율성 35% 향상',
        '성능 최적화 기술을 통해 웹 애플리케이션 로딩 속도 40% 개선',
        '제3자 API 및 서비스 통합을 통한 애플리케이션 기능 확장',
        '여러 기능 팀과 협력하여 비즈니스 요구사항을 기술 사양으로 변환',
        '반응형 디자인과 크로스 플랫폼 호환성을 통한 사용자 경험 최적화'
      ] : [
        'Improved code efficiency by 35% through development of reusable components and modules',
        'Enhanced web application loading speed by 40% through performance optimization techniques',
        'Successfully integrated third-party APIs and services to extend application functionality',
        'Collaborated with multiple feature teams to gather business requirements and translate them into technical specifications',
        'Optimized user experience through responsive design and cross-platform compatibility'
      ]
    },
    {
      id: 2,
      company: language === 'ko' ? '에브리지 월드 주식회사' : 'Ebridge World Co., Ltd.',
      position: language === 'ko' ? '웹 프론트엔드 개발자' : 'Web Frontend Developer',
      duration: language === 'ko' ? '2021년 - 2023년' : '2021 - 2023',
      location: language === 'ko' ? '서울, 대한민국' : 'Seoul, South Korea',
      current: false,
      tech: ['Flutter', 'Vue.js', 'Django', 'Python', 'Provider', 'Bloc'],
      achievements: language === 'ko' ? [
        'Flutter와 Vue.js를 활용하여 웹 및 모바일용 직관적이고 반응성 뛰어난 사용자 인터페이스 개발',
        '상태 관리 솔루션(Provider, Bloc, Redux) 구현을 통해 앱 성능 30% 향상',
        'UI/UX 와이어프레임 및 프로토타입을 100% 정확도로 고품질 코드로 변환',
        '코드 리뷰 적극 참여 및 건설적 피드백 제공으로 팀 코드 품질 20% 향상',
        'Django 및 Python을 활용한 백엔드 API 통합으로 원활한 프론트엔드-백엔드 통신 구현',
        '제3자 API 및 서비스 통합을 통한 애플리케이션 기능 확장',
        '프론트엔드 코드 품질과 안정성 확보를 위한 철저한 테스트 및 디버깅 수행'
      ] : [
        'Developed intuitive and responsive user interfaces for web and mobile applications using Flutter and Vue.js',
        'Improved app performance by 30% through implementation of state management solutions (Provider, Bloc, Redux)',
        'Converted UI/UX wireframes and prototypes to high-quality code with 100% design accuracy',
        'Enhanced team code quality by 20% through active participation in code reviews and constructive feedback',
        'Integrated backend APIs using Django and Python for seamless frontend-backend communication',
        'Extended application functionality through integration of third-party APIs and services',
        'Conducted thorough testing and debugging to ensure frontend code quality and stability'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.experience.title}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200">
                        {t.experience.current}
                      </span>
                    )}
                  </div>
                  <p className="text-xl text-blue-600 font-semibold mb-2">{exp.position}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  {t.experience.achievements}
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="text-gray-600 font-medium">Career Journey</span>
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
