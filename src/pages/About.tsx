// src/pages/AboutPage.tsx

import {
  Award,
  BookOpen,
  Code2,
  Globe,
  Heart,
  MapPin,
  Target,
  Zap,
} from "lucide-react";
import React from "react";
import { useLanguage } from "../context/languageContext";

export const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Vue.js",
        "Next.js",
        "Nuxt.js",
        "TypeScript",
        "Flutter",
        "Tailwind CSS",
      ],
      color: "blue",
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Python",
        "Django",
        "Express.js",
        "AWS Lambda",
        "REST APIs",
      ],
      color: "green",
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Procedures"],
      color: "purple",
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Firebase", "Vite", "Webpack", "CI/CD"],
      color: "orange",
    },
  ];

  const highlights = [
    {
      icon: Code2,
      title: language === "ko" ? "4년+ 경력" : "4+ Years Experience",
      description:
        language === "ko"
          ? "풀스택 웹 및 모바일 애플리케이션 개발 전문가"
          : "Specializing in full-stack web and mobile application development",
      color: "blue",
    },
    {
      icon: Target,
      title: language === "ko" ? "17개+ 프로젝트" : "17+ Projects",
      description:
        language === "ko"
          ? "성공적으로 완료된 다양한 규모의 프로젝트"
          : "Successfully delivered projects of various scales and complexities",
      color: "green",
    },
    {
      icon: Zap,
      title: language === "ko" ? "성능 최적화" : "Performance Expert",
      description:
        language === "ko"
          ? "로딩 속도 40% 개선 및 코드 효율성 35% 향상"
          : "40% faster load times and 35% improved code efficiency",
      color: "purple",
    },
    {
      icon: Heart,
      title: language === "ko" ? "열정적인 학습자" : "Passionate Learner",
      description:
        language === "ko"
          ? "최신 기술 트렌드를 지속적으로 학습하고 적용"
          : "Continuously learning and adapting to latest tech trends",
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-50",
      green: "text-green-600 bg-green-50",
      purple: "text-purple-600 bg-purple-50",
      orange: "text-orange-600 bg-orange-50",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.about.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            {language === "ko"
              ? "혁신적인 솔루션을 만드는 것에 열정을 가진 풀스택 개발자"
              : "A passionate full-stack developer dedicated to creating innovative solutions"}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${getIconColorClasses(highlight.color)} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* About Text */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "ko" ? "나에 대해" : "About Me"}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t.about.description}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {language === "ko"
                  ? "사용자 중심의 디지털 솔루션을 만드는 것을 전문으로 하며, 복잡한 문제를 우아한 코드로 해결하는 것을 즐깁니다. 프론트엔드부터 백엔드까지 전체 개발 스택을 아우르는 경험을 바탕으로, 혁신적인 제품을 만들어내는 데 기여하고 있습니다."
                  : "I specialize in creating user-centric digital solutions and enjoy solving complex problems with elegant code. With experience spanning the entire development stack from frontend to backend, I contribute to building innovative products that make a real impact."}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === "ko"
                  ? "현재는 새로운 도전을 모색하고 있으며, 빠르게 변화하는 기술 환경에서 지속적으로 성장하고 배우는 것을 목표로 하고 있습니다. 협업과 코드 품질에 대한 강한 신념을 가지고 있으며, 팀과 함께 최고의 결과를 만들어내는 것을 중요하게 생각합니다."
                  : "Currently seeking new opportunities where I can leverage my expertise to build exceptional products. I believe strongly in collaboration, code quality, and continuous learning in this rapidly evolving tech landscape."}
              </p>
            </div>

            {/* Personal Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {t.about.residence}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {t.about.residenceInfo}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  {t.about.languages}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {t.about.languageInfo}
                </p>
              </div>
            </div>

            {/* What I Do Best */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === "ko" ? "나의 강점" : "What I Do Best"}
              </h3>
              <ul className="space-y-3">
                {(language === "ko"
                  ? [
                      "확장 가능하고 유지보수가 용이한 웹 애플리케이션 설계 및 개발",
                      "RESTful API 및 마이크로서비스 아키텍처 구현",
                      "성능 최적화 및 코드 리팩토링을 통한 품질 개선",
                      "크로스 플랫폼 모바일 애플리케이션 개발 (Flutter, React Native)",
                      "팀 협업 및 기술 멘토링으로 프로젝트 성공 주도",
                    ]
                  : [
                      "Building scalable and maintainable web applications",
                      "Implementing RESTful APIs and microservices architecture",
                      "Performance optimization and code refactoring",
                      "Cross-platform mobile app development (Flutter, React Native)",
                      "Leading teams and mentoring developers for project success",
                    ]
                ).map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === "ko" ? "기술 스택" : "Technical Skills"}
            </h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {category.title}
                  </h4>
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

            {/* Soft Skills */}
            <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {language === "ko" ? "소프트 스킬" : "Soft Skills"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(language === "ko"
                  ? [
                      "문제 해결",
                      "팀 협업",
                      "프로젝트 관리",
                      "빠른 학습",
                      "효과적인 커뮤니케이션",
                      "시간 관리",
                    ]
                  : [
                      "Problem Solving",
                      "Team Collaboration",
                      "Project Management",
                      "Quick Learner",
                      "Effective Communication",
                      "Time Management",
                    ]
                ).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            {language === "ko" ? "학력" : "Education"}
          </h3>
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="text-xl font-semibold text-gray-900">
              {language === "ko"
                ? "컴퓨터공학 및 공학 학사"
                : "Bachelor of Computer Science and Engineering"}
            </h4>
            <p className="text-blue-600 font-medium">
              {language === "ko" ? "세종대학교" : "Sejong University"}
            </p>
            <p className="text-gray-600 mt-2">
              {language === "ko" ? "졸업: 2022년" : "Graduated: 2022"}
            </p>
            <p className="text-gray-600 mt-3">
              <strong>
                {language === "ko" ? "주요 과목:" : "Key Subjects:"}
              </strong>{" "}
              {language === "ko"
                ? "소프트웨어 공학, 데이터베이스 시스템, 알고리즘, 웹 프로그래밍, 자료구조"
                : "Software Engineering, Database Systems, Algorithms, Web Programming, Data Structures"}
            </p>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-600" />
            {language === "ko" ? "수상 및 자격증" : "Awards & Certifications"}
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {language === "ko"
                    ? "KIIP 레벨 5 수료"
                    : "KIIP Level 5 Completion"}
                </h4>
                <p className="text-gray-600">
                  {language === "ko"
                    ? "한국 이민 통합 프로그램 - 2023"
                    : "Korean Immigration & Integration Program - 2023"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {language === "ko"
                    ? "우수 프로젝트 성과상"
                    : "Outstanding Project Achievement Award"}
                </h4>
                <p className="text-gray-600">
                  {language === "ko"
                    ? "에브리지 월드 - 2022"
                    : "Ebridge World - 2022"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
