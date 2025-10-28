// src/pages/Home.tsx

import {
  ChevronRight,
  Download,
  Code2,
  Rocket,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/languageContext";

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const highlights = [
    {
      icon: Code2,
      number: "4+",
      label: language === "ko" ? "년 경력" : "Years Experience",
      color: "blue",
    },
    {
      icon: Rocket,
      number: "17+",
      label: language === "ko" ? "완료된 프로젝트" : "Projects Completed",
      color: "purple",
    },
    {
      icon: Users,
      number: "4",
      label: language === "ko" ? "언어 구사" : "Languages Spoken",
      color: "green",
    },
    {
      icon: Award,
      number: "100%",
      label: language === "ko" ? "헌신도" : "Dedication",
      color: "orange",
    },
  ];

  const specialties = [
    {
      title: language === "ko" ? "풀스택 개발" : "Full-Stack Development",
      description:
        language === "ko"
          ? "React, Vue.js, Node.js, Django를 활용한 완전한 웹 솔루션"
          : "Complete web solutions using React, Vue.js, Node.js, and Django",
      icon: "💻",
    },
    {
      title: language === "ko" ? "모바일 앱" : "Mobile Apps",
      description:
        language === "ko"
          ? "Flutter와 React Native로 구축된 크로스 플랫폼 애플리케이션"
          : "Cross-platform applications built with Flutter and React Native",
      icon: "📱",
    },
    {
      title: language === "ko" ? "성능 최적화" : "Performance Optimization",
      description:
        language === "ko"
          ? "로딩 속도 40% 향상 및 코드 효율성 개선"
          : "40% faster load times and improved code efficiency",
      icon: "⚡",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="flex items-center justify-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 animate-bounce-slow">
                <Sparkles className="w-4 h-4" />
                {language === "ko"
                  ? "새로운 기회를 찾고 있습니다"
                  : "Available for New Opportunities"}
              </div>

              <p className="text-lg text-gray-600 mb-4">{t.hero.greeting}</p>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 animate-float">
                {t.hero.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                {t.hero.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t.hero.subtitle}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <a
                  href="https://github.com/firdavs9777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/firdavs-mutalipov-a630ba185/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mb-16">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {t.hero.cta}
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>

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

              <button
                onClick={() => navigate("/projects")}
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1 border border-gray-200"
              >
                {language === "ko" ? "프로젝트 보기" : "View Projects"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            {/* Visa & Work Authorization Section */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === "ko"
                      ? "비자 및 근무 자격"
                      : "Visa & Work Authorization"}
                  </h3>
                </div>

                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md mb-4">
                    <span className="text-3xl">🇰🇷</span>
                    <div className="text-left">
                      <p className="text-sm text-gray-600 font-medium">
                        {language === "ko"
                          ? "대한민국 결혼이민 비자"
                          : "South Korea Marriage Immigrant Visa"}
                      </p>
                      <p className="text-lg font-bold text-green-600">
                        F-6{" "}
                        {language === "ko"
                          ? "(결혼이민)"
                          : "(Marriage Immigrant)"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <div className="text-green-600 text-2xl mb-2">✓</div>
                    <p className="text-sm font-semibold text-gray-900">
                      {language === "ko"
                        ? "즉시 근무 가능"
                        : "Immediate Availability"}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {language === "ko"
                        ? "스폰서십 불필요"
                        : "No Sponsorship Required"}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <div className="text-green-600 text-2xl mb-2">✓</div>
                    <p className="text-sm font-semibold text-gray-900">
                      {language === "ko"
                        ? "무제한 취업 활동"
                        : "Unlimited Employment"}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {language === "ko"
                        ? "직종 제한 없음"
                        : "No Job Type Restrictions"}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <div className="text-green-600 text-2xl mb-2">✓</div>
                    <p className="text-sm font-semibold text-gray-900">
                      {language === "ko"
                        ? "영주권 신청 가능"
                        : "Permanent Residence Eligible"}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {language === "ko"
                        ? "장기 정착 가능"
                        : "Long-term Settlement"}
                    </p>
                  </div>
                </div>

                <p className="text-center text-gray-700 font-medium">
                  {language === "ko"
                    ? "한국에서 합법적으로 취업 및 거주 가능하며, 별도의 비자 스폰서십이 필요하지 않습니다."
                    : "Legally authorized to work and reside in South Korea with no visa sponsorship required."}
                </p>
              </div>
            </div>
            {/* Language Skills Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                {language === "ko" ? "언어 능력" : "Language Proficiency"}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* English */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl mb-4 text-center">🇺🇸</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {language === "ko" ? "영어" : "English"}
                  </h4>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        {language === "ko" ? "원어민 수준" : "Native Level"}
                      </span>
                      <span className="text-sm font-bold text-green-600">
                        100%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    {language === "ko"
                      ? "완벽한 읽기, 쓰기, 말하기 능력"
                      : "Fluent in reading, writing, and speaking"}
                  </p>
                </div>

                {/* Korean */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl mb-4 text-center">🇰🇷</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {language === "ko" ? "한국어" : "Korean"}
                  </h4>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        {language === "ko" ? "고급" : "Advanced"}
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        85%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    {language === "ko"
                      ? "비즈니스 및 일상 대화 가능"
                      : "Business & daily conversation proficient"}
                  </p>
                  <div className="mt-3 text-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      KIIP Level 5
                    </span>
                  </div>
                </div>

                {/* Uzbek */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl mb-4 text-center">🇺🇿</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {language === "ko" ? "우즈베크어" : "Uzbek"}
                  </h4>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        {language === "ko" ? "원어민" : "Native"}
                      </span>
                      <span className="text-sm font-bold text-purple-600">
                        100%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    {language === "ko"
                      ? "모국어 - 완벽한 구사 능력"
                      : "Mother tongue - Full proficiency"}
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {language === "ko"
                    ? "다국어 능력으로 글로벌 팀과 원활하게 협업하며, 다양한 문화적 배경을 이해하고 존중합니다."
                    : "Multilingual capabilities enable seamless collaboration with global teams and appreciation for diverse cultural backgrounds."}
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    <Icon
                      className={`w-8 h-8 text-${item.color}-600 mx-auto mb-3`}
                    />
                    <div
                      className={`text-3xl font-bold text-${item.color}-600 mb-2`}
                    >
                      {item.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Specialties Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                {language === "ko" ? "전문 분야" : "What I Specialize In"}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {specialties.map((specialty, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-left"
                  >
                    <div className="text-4xl mb-4">{specialty.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {specialty.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Showcase */}
            <div className="mb-16 bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {language === "ko" ? "주요 기술 스택" : "Core Tech Stack"}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "React",
                  "Vue.js",
                  "TypeScript",
                  "Node.js",
                  "Django",
                  "Flutter",
                  "PostgreSQL",
                  "MongoDB",
                  "Docker",
                  "AWS",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Section */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  {language === "ko" ? "전문 이력서" : "Professional Resume"}
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  {language === "ko"
                    ? "상세한 업무 경험, 기술 스택 및 성과가 포함된 완전한 이력서를 다운로드하세요."
                    : "Download my complete resume with detailed work experience, skills, and achievements."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/Davis_resume.pdf"
                    download="Davis_Resume.pdf"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    {language === "ko" ? "이력서 다운로드" : "Download Resume"}
                  </a>
                  <a
                    href="/Davis_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-1"
                  >
                    {language === "ko" ? "온라인으로 보기" : "View Online"}
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === "ko"
                    ? "함께 일하고 싶으신가요?"
                    : "Let's Work Together"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === "ko"
                    ? "혁신적인 프로젝트에 대한 새로운 기회를 항상 환영합니다. 연락 주세요!"
                    : "I'm always open to discussing new projects and opportunities. Get in touch!"}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => navigate("/contact")}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    {language === "ko" ? "연락하기" : "Contact Me"}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>

                  {/* Social Links in CTA */}
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/firdavs9777"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
                      title="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/firdavs-mutalipov-a630ba185/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
