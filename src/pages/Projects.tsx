// src/pages/ProjectsPage.tsx

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ExternalLink, Github, Calendar, User, Filter, X, ChevronDown, Hash, Link2, Share2, Smartphone } from "lucide-react";
import { useLanguage } from "../context/languageContext";
import { SEO } from "../utils/seo";

export const ProjectsPage: React.FC = () => {
  const { t, tx } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [copied, setCopied] = useState(false);

  // Get selected tech from URL hash
  const selectedTech = useMemo(() => {
    const hash = decodeURIComponent(location.hash.slice(1)); // Remove # and decode
    return hash || null;
  }, [location.hash]);

  // Update URL hash when filter changes
  const setSelectedTech = useCallback((tech: string | null) => {
    if (tech) {
      navigate(`/projects#${encodeURIComponent(tech)}`, { replace: true });
    } else {
      navigate('/projects', { replace: true });
    }
  }, [navigate]);

  // Copy shareable link
  const copyLink = useCallback(() => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const projects = [
    {
      id: 0,
      title: tx({
        en: "HackSeoul 2025 Winner Project - StylerX",
        ko: "HackSeoul 2025 우승 프로젝트 - StylerX",
        uz: "HackSeoul 2025 G'olib Loyiha - StylerX",
      }),
      description: tx({
        en: "AI-powered fashion recommendation and style analysis platform that analyzes your wardrobe and suggests the best outfits. An award-winning project at HackSeoul 2025.",
        ko: "AI 기반 패션 추천 및 스타일 분석 플랫폼으로, 사용자의 옷장을 분석하고 최적의 코디를 제안합니다. HackSeoul 2025에서 수상한 혁신적인 팀 프로젝트입니다.",
        uz: "Sun'iy intellektga asoslangan moda tavsiya va stil tahlil platformasi. Gardrobingizni tahlil qilib, eng yaxshi kiyim kombinatsiyalarini taklif qiladi. HackSeoul 2025 da mukofotlangan loyiha.",
      }),
      role: tx({
        en: "Team Lead & Full-Stack Developer",
        ko: "팀 리드 & 풀스택 개발자",
        uz: "Jamoa Rahbari & Full-Stack Dasturchi",
      }),
      year: "2025",
      tech: [
        "Python",
        "FastAPI",
        "Google Gemini AI",
        "React Native",
        "Expo",
        "TypeScript",
        "Router",
        "MongoDB",
        "Firebase",
      ],
      url: "https://github.com/AkmalMakh/StylerX",
      github: "https://github.com/AkmalMakh/StylerX",
      featured: true,
      status: "completed",
      image: "🏆",
    },
    {
      id: 1,
      title: tx({
        en: "AI Buddy Chatbot Project",
        ko: "AI Buddy 챗봇 프로젝트",
        uz: "AI Buddy Chatbot Loyihasi",
      }),
      description: tx({
        en: "AI-powered conversational chatbot web application with real-time messaging capabilities and intelligent response generation. Username: pinetree, password: pinetree  ",
        ko: `AI 기반 대화형 챗봇 웹 애플리케이션으로 실시간 메시징 기능과 지능형 응답 생성 기능을 제공합니다.  Username: pinetree, Password: pinetree`,
        uz: "Sun'iy intellektga asoslangan suhbat chatbot veb ilovasi. Real vaqtda xabar almashish va aqlli javob yaratish imkoniyatlari. Username: pinetree, Password: pinetree",
      }),
      role: tx({
        en: "Full-Stack Developer",
        ko: "풀스택 개발자",
        uz: "Full-Stack Dasturchi",
      }),
      year: "2024",
      tech: ["TypeScript", "React", "AI API", "WebSocket", "CSS3"],
      url: "https://app-aibuddy.calsplatz.com:8000/gen-bi",
      featured: true,
      status: "completed",
      image: "🤖",
    },
    {
      id: 2,
      title: tx({
        en: "BananaTalk Language Exchange App",
        ko: "BananaTalk 언어교환 플랫폼",
        uz: "BananaTalk Til Almashish Ilovasi",
      }),
      description: tx({
        en: "Free language exchange app connecting people with native speakers across 100+ languages. No flashcards or scripted lessons — just real conversations through instant chat, voice messages, smart translation, and AI study tools. Free forever on iOS and Android.",
        ko: "100개 이상의 언어를 지원하는 무료 언어교환 앱입니다. 원어민과 실시간 채팅, 음성 메시지, 스마트 번역, AI 학습 도구를 통해 실제 대화로 언어를 배울 수 있습니다. iOS와 Android에서 무료로 이용 가능합니다.",
        uz: "100 dan ortiq tilni qo'llab-quvvatlovchi bepul til almashish ilovasi. Ona tilida so'zlashuvchilar bilan real vaqtda suhbat, ovozli xabarlar, aqlli tarjima va AI o'rganish vositalari orqali tillarni o'rganing. iOS va Android'da bepul.",
      }),
      role: tx({
        en: "Owner & Full-Stack Developer",
        ko: "오너 & 풀스택 개발자",
        uz: "Egasi & Full-Stack Dasturchi",
      }),
      year: "2024",
      tech: [
        "Flutter",
        "Flutter Riverpod",
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Redis",
        "WebRTC",
        "Socket.io",
        "Firebase",
      ],
      url: "https://banatalk.com",
      iosUrl: "https://apps.apple.com/kr/app/bananatalk-language-exchange/id6755862146?l=en-GB",
      androidUrl: "https://play.google.com/store/apps/details?id=com.bananatalk.app",
      github: "https://github.com/firdavs9777/language_exchange_web_front",
      featured: true,
      status: "completed",
      image: "🌍",
    },
    {
      id: 3,
      title: tx({
        en: "TezSell - Neighborhood Marketplace",
        ko: "TezSell - Mahalla Bozori",
        uz: "TezSell - Mahalla Bozori",
      }),
      description: tx({
        en: "Neighborhood marketplace app for Uzbekistan. Buy and sell items, offer services, and list real estate with your neighbors. Features direct chat, secure transactions, and is completely free. Available on iOS and Android.",
        ko: "우즈베키스탄의 동네 마켓플레이스 앱입니다. 이웃과 함께 물건을 사고팔고, 서비스를 제공하며, 부동산 매물을 등록할 수 있습니다. 직접 채팅, 안전한 거래, 무료 이용이 가능합니다. iOS와 Android에서 다운로드 가능합니다.",
        uz: "O'zbekiston uchun mahalla bozori ilovasi. Qo'shnilaringiz bilan narsalarni sotib oling va soting, xizmatlar taklif qiling va ko'chmas mulk e'lonlarini joylashtiring. To'g'ridan-to'g'ri suhbat, xavfsiz tranzaksiyalar va butunlay bepul. iOS va Android'da mavjud.",
      }),
      role: tx({
        en: "Owner & Lead Developer",
        ko: "오너 & 리드 개발자",
        uz: "Egasi & Bosh Dasturchi",
      }),
      year: "2024-2025",
      tech: [
        "Flutter",
        "Flutter Riverpod",
        "Django",
        "PostgreSQL",
        "Redis",
        "REST API",
        "Digital Ocean",
        "Nginx",
      ],
      url: "https://webtezsell.com",
      iosUrl: "https://apps.apple.com/kr/app/tezsell/id6755512731?l=en-GB",
      androidUrl: "https://play.google.com/store/apps/details?id=uz.tezsell.app",
      github: "https://github.com/firdavs9777/tezsell_app_front",
      featured: true,
      status: "in-progress",
      image: "🛒",
    },
    {
      id: 4,
      title: tx({
        en: "LA International Airport System",
        ko: "LA 국제공항 시스템",
        uz: "LA Xalqaro Aeroporti Tizimi",
      }),
      description: tx({
        en: "Financial services system development for LA International Airport with loan and insurance application processing.",
        ko: "LA 국제공항 내 금융 서비스 시스템으로 대출 및 보험 신청 처리 기능을 제공합니다.",
        uz: "LA Xalqaro Aeroporti uchun moliyaviy xizmatlar tizimi. Kredit va sug'urta arizalarini qayta ishlash imkoniyatlari.",
      }),
      role: tx({
        en: "Project Manager",
        ko: "프로젝트 매니저",
        uz: "Loyiha Boshqaruvchisi",
      }),
      year: "2023",
      tech: ["Vue.js", "TypeScript", "Node.js", "AWS Lambda", "MySQL"],
      featured: true,
      status: "completed",
      image: "✈️",
    },
    {
      id: 5,
      title: tx({
        en: "Insurance & Loan Management System",
        ko: "보험 및 대출 관리 시스템",
        uz: "Sug'urta va Kredit Boshqaruv Tizimi",
      }),
      description: tx({
        en: "Comprehensive management system for insurance and loan services in Philippines with automated fee calculation.",
        ko: "필리핀 현지 보험 및 대출 서비스를 위한 종합 관리 시스템으로 자동 수수료 계산 기능을 포함합니다.",
        uz: "Filippindagi sug'urta va kredit xizmatlari uchun kompleks boshqaruv tizimi. Avtomatlashtirilgan to'lov hisoblash imkoniyati.",
      }),
      role: tx({
        en: "Project Manager",
        ko: "프로젝트 매니저",
        uz: "Loyiha Boshqaruvchisi",
      }),
      year: "2022",
      tech: ["Vue.js", "TypeScript", "Node.js", "MySQL", "SQL Procedures"],
      featured: false,
      status: "completed",
      image: "🏦",
    },
    {
      id: 6,
      title: tx({
        en: "Korean Learning Website",
        ko: "한국어 학습 웹사이트",
        uz: "Koreys Tilini O'rganish Veb-sayti",
      }),
      description: tx({
        en: "Online Korean language learning platform with course management and video upload capabilities.",
        ko: "온라인 한국어 학습 플랫폼으로 강의 관리 및 동영상 업로드 기능을 제공합니다.",
        uz: "Onlayn koreys tilini o'rganish platformasi. Kurs boshqaruvi va video yuklash imkoniyatlari.",
      }),
      role: tx({
        en: "Frontend Team Lead",
        ko: "프론트엔드 팀 리드",
        uz: "Frontend Jamoa Rahbari",
      }),
      year: "2021-2022",
      tech: ["Vue.js", "TypeScript", "Django", "HTML5", "CSS3"],
      featured: false,
      status: "completed",
      image: "📚",
    },
    {
      id: 7,
      title: tx({
        en: "GitHub User Search Project",
        ko: "GitHub 사용자 검색 프로젝트",
        uz: "GitHub Foydalanuvchi Qidiruv Loyihasi",
      }),
      description: tx({
        en: "Real-time GitHub user profile and repository search application with responsive design.",
        ko: "GitHub 사용자 프로필 및 저장소 실시간 검색 애플리케이션으로 반응형 디자인을 적용했습니다.",
        uz: "GitHub foydalanuvchi profili va repozitoriyalarini real vaqtda qidirish ilovasi. Moslashuvchan dizayn.",
      }),
      role: tx({
        en: "Solo Developer",
        ko: "개인 개발",
        uz: "Yakka Dasturchi",
      }),
      year: "2023",
      tech: ["React", "TypeScript", "GitHub API", "CSS3"],
      github: "https://github.com/firdavs9777/github-search",
      featured: false,
      status: "completed",
      image: "🔍",
    },
    {
      id: 8,
      title: tx({
        en: "Coach Finder Platform",
        ko: "코치파인더 플랫폼",
        uz: "Coach Finder Platformasi",
      }),
      description: tx({
        en: "User-friendly coaching service booking platform with search and reservation functionality.",
        ko: "사용자 친화적인 코칭 서비스 예약 플랫폼으로 검색 및 예약 기능을 제공합니다.",
        uz: "Foydalanuvchilarga qulay murabbiylik xizmati bron qilish platformasi. Qidiruv va bron qilish funksiyalari.",
      }),
      role: tx({
        en: "Solo Developer",
        ko: "개인 개발",
        uz: "Yakka Dasturchi",
      }),
      year: "2022",
      tech: ["Vue.js", "TypeScript", "HTML5", "CSS3", "JavaScript"],
      featured: false,
      status: "completed",
      image: "🎯",
    },
    // NEW PROJECTS ADDED BELOW
    {
      id: 9,
      title: tx({
        en: "Trello Clone - Task Management",
        ko: "Trello 클론 - 작업 관리",
        uz: "Trello Kloni - Vazifalarni Boshqarish",
      }),
      description: tx({
        en: "A modern, responsive task management application with drag-and-drop functionality. Organize projects with boards, lists, and cards.",
        ko: "드래그 앤 드롭 기능이 있는 현대적이고 반응형 작업 관리 애플리케이션입니다. 보드, 리스트, 카드로 프로젝트를 구성할 수 있습니다.",
        uz: "Sudrab tashlash funksiyasiga ega zamonaviy vazifalarni boshqarish ilovasi. Loyihalarni doskalar, ro'yxatlar va kartalar bilan tashkil qiling.",
      }),
      role: tx({
        en: "Solo Developer",
        ko: "개인 개발",
        uz: "Yakka Dasturchi",
      }),
      year: "2025",
      tech: ["React", "TypeScript", "Drag & Drop API", "CSS3"],
      github: "https://github.com/firdavs9777/trello_clone",
      featured: false,
      status: "completed",
      image: "📋",
    },
    {
      id: 10,
      title: tx({
        en: "ProShop E-commerce Website",
        ko: "ProShop 전자상거래 웹사이트",
        uz: "ProShop Elektron Tijorat Veb-sayti",
      }),
      description: tx({
        en: "Full-stack e-commerce platform with product management, shopping cart, payment processing, and user authentication.",
        ko: "풀스택 전자상거래 플랫폼으로 제품 관리, 장바구니, 결제 처리 및 사용자 인증 기능을 제공합니다.",
        uz: "To'liq stekli elektron tijorat platformasi. Mahsulotlarni boshqarish, savatcha, to'lov qayta ishlash va foydalanuvchi autentifikatsiyasi.",
      }),
      role: tx({
        en: "Full-Stack Developer",
        ko: "풀스택 개발자",
        uz: "Full-Stack Dasturchi",
      }),
      year: "2025",
      tech: ["React", "Express.js", "MongoDB", "Redux", "PayPal API"],
      github: "https://github.com/firdavs9777/proshop_website",
      featured: false,
      status: "completed",
      image: "🛍️",
    },
    {
      id: 11,
      title: tx({
        en: "Django Recipe App API",
        ko: "Django Recipe API",
        uz: "Django Retsept Ilovasi API",
      }),
      description: tx({
        en: "Django-based REST API for recipe management with user accounts, recipe CRUD operations, and image upload support.",
        ko: "레시피 관리를 위한 Django 기반 REST API로 사용자 계정, 레시피 CRUD 작업 및 이미지 업로드 기능을 지원합니다.",
        uz: "Retseptlarni boshqarish uchun Django asosidagi REST API. Foydalanuvchi hisoblari, retsept CRUD operatsiyalari va rasm yuklash imkoniyati.",
      }),
      role: tx({
        en: "Backend Developer",
        ko: "백엔드 개발자",
        uz: "Backend Dasturchi",
      }),
      year: "2024",
      tech: ["Django", "Django REST Framework", "PostgreSQL", "Docker"],
      github: "https://github.com/firdavs9777/django-recipe-app-api",
      featured: false,
      status: "completed",
      image: "🍳",
    },
    {
      id: 12,
      title: tx({
        en: "React Investment Calculator",
        ko: "React 투자 계산기",
        uz: "React Investitsiya Kalkulyatori",
      }),
      description: tx({
        en: "A simple and intuitive investment calculator to estimate future value of investments based on initial investment, interest rate, and duration.",
        ko: "초기 투자금, 이자율, 기간을 기반으로 투자의 미래 가치를 추정할 수 있는 간단하고 직관적인 투자 계산기입니다.",
        uz: "Boshlang'ich investitsiya, foiz stavkasi va muddat asosida investitsiyalarning kelajakdagi qiymatini hisoblash uchun oddiy va qulay kalkulyator.",
      }),
      role: tx({
        en: "Solo Developer",
        ko: "개인 개발",
        uz: "Yakka Dasturchi",
      }),
      year: "2024",
      tech: ["React", "JavaScript", "CSS3", "Financial Algorithms"],
      github: "https://github.com/firdavs9777/react_investment_calcutor",
      featured: false,
      status: "completed",
      image: "💰",
    },
    {
      id: 13,
      title: tx({
        en: "Django BTRE Real Estate Project",
        ko: "Django BTRE 부동산 프로젝트",
        uz: "Django BTRE Ko'chmas Mulk Loyihasi",
      }),
      description: tx({
        en: "Django-based real estate website with property listings, search functionality, and inquiry management.",
        ko: "부동산 매물 관리, 검색 및 문의 기능을 갖춘 Django 기반 부동산 웹사이트입니다.",
        uz: "Django asosidagi ko'chmas mulk veb-sayti. Mulk ro'yxatlari, qidiruv funksiyasi va so'rovlarni boshqarish.",
      }),
      role: tx({
        en: "Full-Stack Developer",
        ko: "풀스택 개발자",
        uz: "Full-Stack Dasturchi",
      }),
      year: "2024",
      tech: ["Django", "Python", "PostgreSQL", "CSS3", "JavaScript"],
      github: "https://github.com/firdavs9777/django_btre_project",
      featured: false,
      status: "completed",
      image: "🏠",
    },
    {
      id: 14,
      title: tx({
        en: "React Native Goals App",
        ko: "React Native 목표 추적 앱",
        uz: "React Native Maqsadlar Ilovasi",
      }),
      description: tx({
        en: "Cross-platform mobile app built with React Native and TypeScript for setting and tracking personal goals.",
        ko: "TypeScript가 통합된 크로스 플랫폼 모바일 앱으로 개인 목표를 설정하고 추적할 수 있습니다.",
        uz: "React Native va TypeScript yordamida yaratilgan kross-platformali mobil ilova. Shaxsiy maqsadlarni belgilash va kuzatish.",
      }),
      role: tx({
        en: "Mobile Developer",
        ko: "모바일 개발자",
        uz: "Mobil Dasturchi",
      }),
      year: "2024",
      tech: ["React Native", "TypeScript", "JavaScript", "Mobile UI"],
      github: "https://github.com/firdavs9777/goals_app_react_native",
      featured: false,
      status: "completed",
      image: "🎯",
    },
    {
      id: 15,
      title: tx({
        en: "Redux Toolkit Practice",
        ko: "Redux Toolkit 실습 프로젝트",
        uz: "Redux Toolkit Amaliyot Loyihasi",
      }),
      description: tx({
        en: "Streamlined setup for integrating Redux Toolkit into React projects, excellent practice for learners and state management.",
        ko: "Redux Toolkit을 React 프로젝트에 통합하는 간소화된 설정으로 초보자와 학습자를 위한 좋은 연습 프로젝트입니다.",
        uz: "Redux Toolkit'ni React loyihalariga integratsiya qilish uchun soddalashtirilgan sozlash. O'rganuvchilar va holat boshqaruvi uchun ajoyib amaliyot.",
      }),
      role: tx({
        en: "Solo Developer",
        ko: "개인 개발",
        uz: "Yakka Dasturchi",
      }),
      year: "2024",
      tech: ["React", "Redux Toolkit", "JavaScript", "State Management"],
      github: "https://github.com/firdavs9777/react_redux_toolkit_practice",
      featured: false,
      status: "completed",
      image: "⚛️",
    },
    {
      id: 16,
      title: tx({
        en: "React Google Search Location",
        ko: "React Google 위치 검색",
        uz: "React Google Joylashuv Qidiruvi",
      }),
      description: tx({
        en: "Location search application integrating Google Maps API with real-time place search and map display functionality.",
        ko: "Google Maps API를 통합한 위치 검색 애플리케이션으로 실시간 장소 검색 및 지도 표시 기능을 제공합니다.",
        uz: "Google Maps API integratsiyalangan joylashuv qidiruv ilovasi. Real vaqtda joy qidirish va xarita ko'rsatish funksiyalari.",
      }),
      role: tx({
        en: "Frontend Developer",
        ko: "프론트엔드 개발자",
        uz: "Frontend Dasturchi",
      }),
      year: "2024",
      tech: ["React", "TypeScript", "Google Maps API", "Geolocation"],
      github: "https://github.com/firdavs9777/React_Google_Search_Location",
      featured: false,
      status: "completed",
      image: "📍",
    },
    {
      id: 17,
      title: tx({
        en: "Django Backend Application",
        ko: "Django 백엔드 애플리케이션",
        uz: "Django Backend Ilovasi",
      }),
      description: tx({
        en: "Django backend application with Docker setup, featuring REST API endpoints and database management capabilities.",
        ko: "Docker로 구성된 Django 백엔드 애플리케이션으로 REST API 엔드포인트와 데이터베이스 관리 기능을 제공합니다.",
        uz: "Docker sozlamalari bilan Django backend ilovasi. REST API endpointlari va ma'lumotlar bazasini boshqarish imkoniyatlari.",
      }),
      role: tx({
        en: "Backend Developer",
        ko: "백엔드 개발자",
        uz: "Backend Dasturchi",
      }),
      year: "2024",
      tech: ["Django", "Python", "Docker", "PostgreSQL", "REST API"],
      github: "https://github.com/firdavs9777/django_backend_application",
      featured: false,
      status: "completed",
      image: "🐍",
    },
    {
      id: 18,
      title: tx({
        en: "Spring Boot Backend Application",
        ko: "Spring Boot 백엔드 애플리케이션",
        uz: "Spring Boot Backend Ilovasi",
      }),
      description: tx({
        en: "Spring Boot backend application with PostgreSQL, featuring REST API endpoints and database management capabilities.",
        ko: "Spring Boot와 PostgreSQL을 사용한 백엔드 애플리케이션으로 REST API 엔드포인트와 데이터베이스 관리 기능을 제공합니다.",
        uz: "PostgreSQL bilan Spring Boot backend ilovasi. REST API endpointlari va ma'lumotlar bazasini boshqarish imkoniyatlari.",
      }),
      role: tx({
        en: "Backend Developer",
        ko: "백엔드 개발자",
        uz: "Backend Dasturchi",
      }),
      year: "2025",
      tech: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Hibernate"],
      github: "https://github.com/firdavs9777/spring_boot_backend",
      featured: true,
      status: "in progress",
      image: "☕️",
    },
  ];

  // Extract all unique technologies and count their occurrences
  const techStats = useMemo(() => {
    const stats: Record<string, number> = {};
    projects.forEach(project => {
      project.tech.forEach(tech => {
        stats[tech] = (stats[tech] || 0) + 1;
      });
    });
    // Sort by count (descending) then alphabetically
    return Object.entries(stats)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tech, count]) => ({ tech, count }));
  }, [projects]);

  // Popular techs to show by default (top 8)
  const popularTechs = techStats.slice(0, 8);
  const remainingTechs = techStats.slice(8);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects;
    return projects.filter(p => p.tech.includes(selectedTech));
  }, [projects, selectedTech]);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  const ProjectCard: React.FC<{
    project: (typeof projects)[0];
    featured?: boolean;
  }> = ({ project, featured = false }) => (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{project.image}</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
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
            {project.iosUrl && (
              <a
                href={project.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors p-2 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
                title="App Store"
              >
                <Smartphone className="w-5 h-5" />
              </a>
            )}
            {project.androidUrl && (
              <a
                href={project.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 transition-colors p-2 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg"
                title="Google Play"
              >
                <Smartphone className="w-5 h-5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                title="View Code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
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

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            {t.projects.techStack}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech, techIndex) => (
              <a
                key={techIndex}
                href={`/projects#${encodeURIComponent(tech)}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedTech(selectedTech === tech ? null : tech);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`inline-flex items-center gap-0.5 px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 active:scale-95 cursor-pointer hover:shadow-md ${
                  selectedTech === tech
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300"
                }`}
              >
                <span className="opacity-50">#</span>
                {tech}
              </a>
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
            <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
              {project.status === "in-progress"
                ? tx({ en: "In Progress", ko: "진행 중", uz: "Jarayonda" })
                : tx({ en: "Completed", ko: "완료됨", uz: "Tugallangan" })}
            </span>
          </div>

          {(project.url || project.github || project.iosUrl || project.androidUrl) && (
            <div className="flex flex-wrap gap-3">
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
              {project.iosUrl && (
                <a
                  href={project.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors"
                >
                  App Store
                  <Smartphone className="w-4 h-4" />
                </a>
              )}
              {project.androidUrl && (
                <a
                  href={project.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-600 hover:text-green-800 font-medium text-sm transition-colors"
                >
                  Google Play
                  <Smartphone className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Dynamic SEO based on filter
  const seoTitle = selectedTech
    ? `${selectedTech} ${tx({ en: "Projects", ko: "프로젝트", uz: "Loyihalar" })} - Davis`
    : t.projects.title;

  const seoDescription = selectedTech
    ? tx({
        en: `Explore ${filteredProjects.length} projects built with ${selectedTech}.`,
        ko: `${selectedTech} 기술을 사용한 ${filteredProjects.length}개의 프로젝트를 확인하세요.`,
        uz: `${selectedTech} texnologiyasi bilan yaratilgan ${filteredProjects.length} ta loyihani ko'ring.`,
      })
    : tx({
        en: "A showcase of my recent work and contributions to innovative digital solutions.",
        ko: "혁신적인 디지털 솔루션에 대한 최근 작업과 기여를 소개합니다.",
        uz: "Innovatsion raqamli yechimlar bo'yicha so'nggi ishlarim va hissalarim.",
      });

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url={`https://firdavs.dev/projects${selectedTech ? `#${selectedTech}` : ''}`}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.projects.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            {tx({
              en: "A showcase of my recent work and contributions to innovative digital solutions.",
              ko: "혁신적인 디지털 솔루션에 대한 최근 작업과 기여를 소개합니다.",
              uz: "Innovatsion raqamli yechimlar bo'yicha so'nggi ishlarim va hissalarim.",
            })}
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {tx({ en: "Tech Tags", ko: "기술 태그", uz: "Texnologiya teglari" })}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {selectedTech && (
                <>
                  <button
                    onClick={copyLink}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors active:scale-95"
                    title={tx({ en: "Copy link", ko: "링크 복사", uz: "Havolani nusxalash" })}
                  >
                    {copied ? (
                      <>
                        <span className="text-green-600 dark:text-green-400">✓</span>
                        {tx({ en: "Copied!", ko: "복사됨!", uz: "Nusxalandi!" })}
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        {tx({ en: "Share", ko: "공유", uz: "Ulashish" })}
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors active:scale-95"
                  >
                    <X className="w-4 h-4" />
                    {tx({ en: "Clear", ko: "초기화", uz: "Tozalash" })}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Selected filter indicator with shareable URL */}
          {selectedTech && (
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <span className="font-semibold">#{selectedTech}</span>
                  {" · "}
                  {tx({
                    en: `${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''}`,
                    ko: `${filteredProjects.length}개 프로젝트`,
                    uz: `${filteredProjects.length} ta loyiha`,
                  })}
                </p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900/40 px-2 py-1 rounded text-blue-700 dark:text-blue-300 font-mono truncate max-w-[200px] sm:max-w-none">
                  /projects#{selectedTech}
                </code>
              </div>
            </div>
          )}

          {/* Filter chips - Hashtag style */}
          <div className="flex flex-wrap gap-2">
            {/* All button */}
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 ${
                !selectedTech
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {tx({ en: "All", ko: "전체", uz: "Hammasi" })}
              <span className="ml-1 opacity-70">({projects.length})</span>
            </button>

            {/* Popular tech filters - Hashtag style */}
            {popularTechs.map(({ tech, count }) => (
              <a
                key={tech}
                href={`#${encodeURIComponent(tech)}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTech(selectedTech === tech ? null : tech);
                }}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 inline-flex items-center gap-1 ${
                  selectedTech === tech
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <span className="opacity-60">#</span>
                {tech}
                <span className="ml-1 opacity-60 text-xs">({count})</span>
              </a>
            ))}

            {/* Show more button */}
            {remainingTechs.length > 0 && (
              <button
                onClick={() => setShowAllFilters(!showAllFilters)}
                className="px-3 sm:px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 active:scale-95 flex items-center gap-1"
              >
                {showAllFilters
                  ? tx({ en: "Less", ko: "접기", uz: "Kamroq" })
                  : tx({ en: `+${remainingTechs.length}`, ko: `+${remainingTechs.length}개`, uz: `+${remainingTechs.length}` })}
                <ChevronDown className={`w-4 h-4 transition-transform ${showAllFilters ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>

          {/* Expanded filters */}
          {showAllFilters && remainingTechs.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
              {remainingTechs.map(({ tech, count }) => (
                <a
                  key={tech}
                  href={`#${encodeURIComponent(tech)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedTech(selectedTech === tech ? null : tech);
                  }}
                  className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 inline-flex items-center gap-1 ${
                    selectedTech === tech
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <span className="opacity-60">#</span>
                  {tech}
                  <span className="ml-1 opacity-60 text-xs">({count})</span>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {tx({ en: "Tech Stack", ko: "기술 스택", uz: "Texnologiya Steki" })}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Frontend */}
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">⚛️</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">React</p>
              </div>

              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">💚</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Vue.js</p>
              </div>

              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📘</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  TypeScript
                </p>
              </div>

              {/* Mobile / App */}
              <div className="text-center p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">💎</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Flutter</p>
              </div>

              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📱</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  React Native
                </p>
              </div>

              <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🎨</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Tailwind CSS
                </p>
              </div>

              {/* Backend */}
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🟢</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Node.js</p>
              </div>

              <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">☕️</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Java / Spring Boot
                </p>
              </div>

              <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🐍</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Django</p>
              </div>

              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">⚡</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Express.js
                </p>
              </div>

              {/* Database */}
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🐘</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  PostgreSQL
                </p>
              </div>

              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🍃</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">MongoDB</p>
              </div>

              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🔥</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Firebase</p>
              </div>

              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🗄️</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">MySQL</p>
              </div>

              <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📦</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Redis</p>
              </div>

              {/* Tools & Others */}
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🐳</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Docker</p>
              </div>

              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">☁️</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">AWS</p>
              </div>

              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🔌</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">REST API</p>
              </div>

              <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🔗</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">WebSocket</p>
              </div>
            </div>
          </div>
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {tx({ en: "No projects found", ko: "프로젝트를 찾을 수 없습니다", uz: "Loyihalar topilmadi" })}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {tx({
                en: `No projects found using "${selectedTech}".`,
                ko: `"${selectedTech}" 기술을 사용한 프로젝트가 없습니다.`,
                uz: `"${selectedTech}" texnologiyasidan foydalangan loyihalar topilmadi.`,
              })}
            </p>
            <button
              onClick={() => setSelectedTech(null)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors active:scale-95"
            >
              {tx({ en: "View All Projects", ko: "모든 프로젝트 보기", uz: "Barcha loyihalarni ko'rish" })}
            </button>
          </div>
        )}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              {tx({ en: "Featured Projects", ko: "주요 프로젝트", uz: "Asosiy loyihalar" })}
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                ({featuredProjects.length})
              </span>
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
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {tx({ en: "Other Projects", ko: "기타 프로젝트", uz: "Boshqa loyihalar" })}
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                ({otherProjects.length})
              </span>
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
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              {tx({ en: "Interested in Working Together?", ko: "함께 일하고 싶으신가요?", uz: "Birga ishlashni xohlaysizmi?" })}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              {tx({
                en: "I'm always excited to take on new challenges and collaborate on innovative projects.",
                ko: "새로운 도전과 혁신적인 프로젝트에 항상 열려있습니다.",
                uz: "Men doimo yangi qiyinchiliklarni qabul qilishga va innovatsion loyihalarda hamkorlik qilishga tayyorman.",
              })}
            </p>
            <a
              href="https://github.com/firdavs9777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors active:scale-95"
            >
              <Github className="w-5 h-5" />
              {tx({ en: "View More on GitHub", ko: "GitHub에서 더 보기", uz: "GitHub'da ko'proq ko'rish" })}
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
