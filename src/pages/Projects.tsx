// src/pages/ProjectsPage.tsx

import React from "react";
import { ExternalLink, Github, Calendar, User } from "lucide-react";
import { useLanguage } from "../context/languageContext";

export const ProjectsPage: React.FC = () => {
  const { language, t } = useLanguage();

  const projects = [
    {
      id: 1,
      title:
        language === "ko"
          ? "AI Buddy 챗봇 프로젝트"
          : "AI Buddy Chatbot Project",
      description:
        language === "ko"
          ? "AI 기반 대화형 챗봇 웹 애플리케이션으로 실시간 메시징 기능과 지능형 응답 생성 기능을 제공합니다."
          : "AI-powered conversational chatbot web application with real-time messaging capabilities and intelligent response generation.",
      role: language === "ko" ? "풀스택 개발자" : "Full-Stack Developer",
      year: "2024",
      tech: ["TypeScript", "React", "AI API", "WebSocket", "CSS3"],
      url: "https://app-aibuddy.calsplatz.com:8000/gen-bi",
      featured: true,
      status: "completed",
      image: "🤖",
    },
    {
      id: 2,
      title:
        language === "ko"
          ? "BanaTalk 언어교환 플랫폼"
          : "BanaTalk Language Exchange Platform",
      description:
        language === "ko"
          ? "전 세계 언어 학습자들을 연결하여 회화 연습과 문화 교류를 지원하는 국제 언어교환 플랫폼입니다."
          : "International language exchange platform connecting learners worldwide for conversation practice and cultural exchange.",
      role: language === "ko" ? "풀스택 개발자" : "Full-Stack Developer",
      year: "2024",
      tech: [
        "React",
        "TypeScript",
        "Django",
        "PostgreSQL",
        "WebRTC",
        "Socket.io",
      ],
      url: "https://banatalk.com",
      github: "https://github.com/firdavs9777/language_exchange_web_front",
      featured: true,
      status: "completed",
      image: "🌍",
    },
    {
      id: 3,
      title:
        language === "ko"
          ? "TezSell 전자상거래 플랫폼"
          : "TezSell E-commerce Platform",
      description:
        language === "ko"
          ? "한국의 당근마켓과 유사한 우즈베키스탄 현지 마켓플레이스로, 위치 기반 서비스를 통한 개인 간 중고거래 플랫폼입니다."
          : "Local marketplace platform similar to Korea's Carrot Market, enabling peer-to-peer buying and selling in Uzbekistan with location-based services.",
      role: language === "ko" ? "리드 개발자" : "Lead Developer",
      year: "2024-2025",
      tech: [
        "Flutter",
        "Django",
        "PostgreSQL",
        "Redis",
        "REST API",
        "Firebase",
      ],
      url: "https://webtezsell.com",
      github: "https://github.com/firdavs9777/tezsell_app_front",
      featured: true,
      status: "in-progress",
      image: "🛒",
    },
    {
      id: 4,
      title:
        language === "ko"
          ? "LA 국제공항 시스템"
          : "LA International Airport System",
      description:
        language === "ko"
          ? "LA 국제공항 내 금융 서비스 시스템으로 대출 및 보험 신청 처리 기능을 제공합니다."
          : "Financial services system development for LA International Airport with loan and insurance application processing.",
      role: language === "ko" ? "프로젝트 매니저" : "Project Manager",
      year: "2023",
      tech: ["Vue.js", "TypeScript", "Node.js", "AWS Lambda", "MySQL"],
      featured: true,
      status: "completed",
      image: "✈️",
    },
    {
      id: 5,
      title:
        language === "ko"
          ? "보험 및 대출 관리 시스템"
          : "Insurance & Loan Management System",
      description:
        language === "ko"
          ? "필리핀 현지 보험 및 대출 서비스를 위한 종합 관리 시스템으로 자동 수수료 계산 기능을 포함합니다."
          : "Comprehensive management system for insurance and loan services in Philippines with automated fee calculation.",
      role: language === "ko" ? "프로젝트 매니저" : "Project Manager",
      year: "2022",
      tech: ["Vue.js", "TypeScript", "Node.js", "MySQL", "SQL Procedures"],
      featured: false,
      status: "completed",
      image: "🏦",
    },
    {
      id: 6,
      title:
        language === "ko" ? "한국어 학습 웹사이트" : "Korean Learning Website",
      description:
        language === "ko"
          ? "온라인 한국어 학습 플랫폼으로 강의 관리 및 동영상 업로드 기능을 제공합니다."
          : "Online Korean language learning platform with course management and video upload capabilities.",
      role: language === "ko" ? "프론트엔드 팀 리드" : "Frontend Team Lead",
      year: "2021-2022",
      tech: ["Vue.js", "TypeScript", "Django", "HTML5", "CSS3"],
      featured: false,
      status: "completed",
      image: "📚",
    },
    {
      id: 7,
      title:
        language === "ko"
          ? "GitHub 사용자 검색 프로젝트"
          : "GitHub User Search Project",
      description:
        language === "ko"
          ? "GitHub 사용자 프로필 및 저장소 실시간 검색 애플리케이션으로 반응형 디자인을 적용했습니다."
          : "Real-time GitHub user profile and repository search application with responsive design.",
      role: language === "ko" ? "개인 개발" : "Solo Developer",
      year: "2023",
      tech: ["React", "TypeScript", "GitHub API", "CSS3"],
      github: "https://github.com/firdavs9777/github-search",
      featured: false,
      status: "completed",
      image: "🔍",
    },
    {
      id: 8,
      title: language === "ko" ? "코치파인더 플랫폼" : "Coach Finder Platform",
      description:
        language === "ko"
          ? "사용자 친화적인 코칭 서비스 예약 플랫폼으로 검색 및 예약 기능을 제공합니다."
          : "User-friendly coaching service booking platform with search and reservation functionality.",
      role: language === "ko" ? "개인 개발" : "Solo Developer",
      year: "2022",
      tech: ["Vue.js", "TypeScript", "HTML5", "CSS3", "JavaScript"],
      featured: false,
      status: "completed",
      image: "🎯",
    },
    // NEW PROJECTS ADDED BELOW
    {
      id: 9,
      title:
        language === "ko"
          ? "Trello 클론 - 작업 관리"
          : "Trello Clone - Task Management",
      description:
        language === "ko"
          ? "드래그 앤 드롭 기능이 있는 현대적이고 반응형 작업 관리 애플리케이션입니다. 보드, 리스트, 카드로 프로젝트를 구성할 수 있습니다."
          : "A modern, responsive task management application with drag-and-drop functionality. Organize projects with boards, lists, and cards.",
      role: language === "ko" ? "개인 개발" : "Solo Developer",
      year: "2025",
      tech: ["React", "TypeScript", "Drag & Drop API", "CSS3"],
      github: "https://github.com/firdavs9777/trello_clone",
      featured: false,
      status: "completed",
      image: "📋",
    },
    {
      id: 10,
      title:
        language === "ko"
          ? "ProShop 전자상거래 웹사이트"
          : "ProShop E-commerce Website",
      description:
        language === "ko"
          ? "풀스택 전자상거래 플랫폼으로 제품 관리, 장바구니, 결제 처리 및 사용자 인증 기능을 제공합니다."
          : "Full-stack e-commerce platform with product management, shopping cart, payment processing, and user authentication.",
      role: language === "ko" ? "풀스택 개발자" : "Full-Stack Developer",
      year: "2025",
      tech: ["React", "Express.js", "MongoDB", "Redux", "PayPal API"],
      github: "https://github.com/firdavs9777/proshop_website",
      featured: false,
      status: "completed",
      image: "🛍️",
    },
    {
      id: 11,
      title: language === "ko" ? "Django Recipe API" : "Django Recipe App API",
      description:
        language === "ko"
          ? "레시피 관리를 위한 Django 기반 REST API로 사용자 계정, 레시피 CRUD 작업 및 이미지 업로드 기능을 지원합니다."
          : "Django-based REST API for recipe management with user accounts, recipe CRUD operations, and image upload support.",
      role: language === "ko" ? "백엔드 개발자" : "Backend Developer",
      year: "2024",
      tech: ["Django", "Django REST Framework", "PostgreSQL", "Docker"],
      github: "https://github.com/firdavs9777/django-recipe-app-api",
      featured: false,
      status: "completed",
      image: "🍳",
    },
    {
      id: 12,
      title:
        language === "ko" ? "React 투자 계산기" : "React Investment Calculator",
      description:
        language === "ko"
          ? "초기 투자금, 이자율, 기간을 기반으로 투자의 미래 가치를 추정할 수 있는 간단하고 직관적인 투자 계산기입니다."
          : "A simple and intuitive investment calculator to estimate future value of investments based on initial investment, interest rate, and duration.",
      role: language === "ko" ? "개인 개발" : "Solo Developer",
      year: "2024",
      tech: ["React", "JavaScript", "CSS3", "Financial Algorithms"],
      github: "https://github.com/firdavs9777/react_investment_calcutor",
      featured: false,
      status: "completed",
      image: "💰",
    },
    {
      id: 13,
      title:
        language === "ko"
          ? "Django BTRE 부동산 프로젝트"
          : "Django BTRE Real Estate Project",
      description:
        language === "ko"
          ? "부동산 매물 관리, 검색 및 문의 기능을 갖춘 Django 기반 부동산 웹사이트입니다."
          : "Django-based real estate website with property listings, search functionality, and inquiry management.",
      role: language === "ko" ? "풀스택 개발자" : "Full-Stack Developer",
      year: "2024",
      tech: ["Django", "Python", "PostgreSQL", "CSS3", "JavaScript"],
      github: "https://github.com/firdavs9777/django_btre_project",
      featured: false,
      status: "completed",
      image: "🏠",
    },
    {
      id: 14,
      title:
        language === "ko"
          ? "React Native 목표 추적 앱"
          : "React Native Goals App",
      description:
        language === "ko"
          ? "TypeScript가 통합된 크로스 플랫폼 모바일 앱으로 개인 목표를 설정하고 추적할 수 있습니다."
          : "Cross-platform mobile app built with React Native and TypeScript for setting and tracking personal goals.",
      role: language === "ko" ? "모바일 개발자" : "Mobile Developer",
      year: "2024",
      tech: ["React Native", "TypeScript", "JavaScript", "Mobile UI"],
      github: "https://github.com/firdavs9777/goals_app_react_native",
      featured: false,
      status: "completed",
      image: "🎯",
    },
    {
      id: 15,
      title:
        language === "ko"
          ? "Redux Toolkit 실습 프로젝트"
          : "Redux Toolkit Practice",
      description:
        language === "ko"
          ? "Redux Toolkit을 React 프로젝트에 통합하는 간소화된 설정으로 초보자와 학습자를 위한 좋은 연습 프로젝트입니다."
          : "Streamlined setup for integrating Redux Toolkit into React projects, excellent practice for learners and state management.",
      role: language === "ko" ? "개인 개발" : "Solo Developer",
      year: "2024",
      tech: ["React", "Redux Toolkit", "JavaScript", "State Management"],
      github: "https://github.com/firdavs9777/react_redux_toolkit_practice",
      featured: false,
      status: "completed",
      image: "⚛️",
    },
    {
      id: 16,
      title:
        language === "ko"
          ? "React Google 위치 검색"
          : "React Google Search Location",
      description:
        language === "ko"
          ? "Google Maps API를 통합한 위치 검색 애플리케이션으로 실시간 장소 검색 및 지도 표시 기능을 제공합니다."
          : "Location search application integrating Google Maps API with real-time place search and map display functionality.",
      role: language === "ko" ? "프론트엔드 개발자" : "Frontend Developer",
      year: "2024",
      tech: ["React", "TypeScript", "Google Maps API", "Geolocation"],
      github: "https://github.com/firdavs9777/React_Google_Search_Location",
      featured: false,
      status: "completed",
      image: "📍",
    },
    {
      id: 17,
      title:
        language === "ko"
          ? "Django 백엔드 애플리케이션"
          : "Django Backend Application",
      description:
        language === "ko"
          ? "Docker로 구성된 Django 백엔드 애플리케이션으로 REST API 엔드포인트와 데이터베이스 관리 기능을 제공합니다."
          : "Django backend application with Docker setup, featuring REST API endpoints and database management capabilities.",
      role: language === "ko" ? "백엔드 개발자" : "Backend Developer",
      year: "2024",
      tech: ["Django", "Python", "Docker", "PostgreSQL", "REST API"],
      github: "https://github.com/firdavs9777/django_backend_application",
      featured: false,
      status: "completed",
      image: "🐍",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const ProjectCard: React.FC<{
    project: (typeof projects)[0];
    featured?: boolean;
  }> = ({ project, featured = false }) => (
    <div
      className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{project.image}</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h3>
              {featured && (
                <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full border border-yellow-200 mt-1">
                  Featured
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                title={t.projects.viewProject}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors p-2 hover:bg-gray-50 rounded-lg"
                title="View Code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>
              {t.projects.role}: {project.role}
            </span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{project.year}</span>
          </div>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            {t.projects.techStack}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium border border-green-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                project.status === "completed"
                  ? "bg-green-500"
                  : project.status === "in-progress"
                    ? "bg-yellow-500"
                    : "bg-gray-400"
              }`}
            ></span>
            <span className="text-sm text-gray-600 capitalize">
              {project.status === "in-progress" ? "In Progress" : "Completed"}
            </span>
          </div>

          {(project.url || project.github) && (
            <div className="flex gap-2">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                >
                  {t.projects.viewProject}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.projects.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            A showcase of my recent work and contributions to innovative digital
            solutions.
          </p>
        </div>
        {/* Tech Stack Overview Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {language === "ko" ? "기술 스택" : "Tech Stack"}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Frontend */}
              <div className="text-center p-4 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">⚛️</div>
                <p className="text-sm font-semibold text-gray-800">React</p>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">💚</div>
                <p className="text-sm font-semibold text-gray-800">Vue.js</p>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📘</div>
                <p className="text-sm font-semibold text-gray-800">
                  TypeScript
                </p>
              </div>

              <div className="text-center p-4 bg-cyan-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">💎</div>
                <p className="text-sm font-semibold text-gray-800">Flutter</p>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📱</div>
                <p className="text-sm font-semibold text-gray-800">
                  React Native
                </p>
              </div>

              <div className="text-center p-4 bg-teal-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🎨</div>
                <p className="text-sm font-semibold text-gray-800">
                  Tailwind CSS
                </p>
              </div>

              {/* Backend */}
              <div className="text-center p-4 bg-green-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🟢</div>
                <p className="text-sm font-semibold text-gray-800">Node.js</p>
              </div>

              <div className="text-center p-4 bg-emerald-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🐍</div>
                <p className="text-sm font-semibold text-gray-800">Django</p>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">⚡</div>
                <p className="text-sm font-semibold text-gray-800">
                  Express.js
                </p>
              </div>

              {/* Database */}
              <div className="text-center p-4 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🐘</div>
                <p className="text-sm font-semibold text-gray-800">
                  PostgreSQL
                </p>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🍃</div>
                <p className="text-sm font-semibold text-gray-800">MongoDB</p>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🔥</div>
                <p className="text-sm font-semibold text-gray-800">Firebase</p>
              </div>

              <div className="text-center p-4 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🗄️</div>
                <p className="text-sm font-semibold text-gray-800">MySQL</p>
              </div>

              <div className="text-center p-4 bg-red-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📦</div>
                <p className="text-sm font-semibold text-gray-800">Redis</p>
              </div>

              {/* Tools & Others */}
              <div className="text-center p-4 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🐳</div>
                <p className="text-sm font-semibold text-gray-800">Docker</p>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">☁️</div>
                <p className="text-sm font-semibold text-gray-800">AWS</p>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🔌</div>
                <p className="text-sm font-semibold text-gray-800">REST API</p>
              </div>

              <div className="text-center p-4 bg-indigo-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🔗</div>
                <p className="text-sm font-semibold text-gray-800">WebSocket</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={
                  index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                }
              >
                <ProjectCard project={project} featured={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on
              innovative projects.
            </p>
            <a
              href="https://github.com/firdavs9777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
