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
  FileText,
  Video,
  Trophy,
  Globe,
  Smartphone,
  ExternalLink,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/languageContext";
import { SEO } from "../utils/seo";

export const HomePage: React.FC = () => {
  const { t, language, tx } = useLanguage();
  const navigate = useNavigate();

  const highlights = [
    {
      icon: Code2,
      number: "4+",
      label: tx({ en: "Years Experience", ko: "년 경력", uz: "Yillik tajriba" }),
      color: "blue",
    },
    {
      icon: Rocket,
      number: "17+",
      label: tx({ en: "Projects Completed", ko: "완료된 프로젝트", uz: "Tugallangan loyihalar" }),
      color: "purple",
    },
    {
      icon: Users,
      number: "4",
      label: tx({ en: "Languages Spoken", ko: "언어 구사", uz: "Tillar" }),
      color: "green",
    },
    {
      icon: Award,
      number: "100%",
      label: tx({ en: "Dedication", ko: "헌신도", uz: "Fidoyilik" }),
      color: "orange",
    },
  ];

  const specialties = [
    {
      title: tx({ en: "Full-Stack Development", ko: "풀스택 개발", uz: "Full-Stack Dasturlash" }),
      description: tx({
        en: "Complete web solutions using React, Vue.js, Node.js, and Django",
        ko: "React, Vue.js, Node.js, Django를 활용한 완전한 웹 솔루션",
        uz: "React, Vue.js, Node.js va Django yordamida to'liq veb yechimlar",
      }),
      icon: "💻",
    },
    {
      title: tx({ en: "Mobile Apps", ko: "모바일 앱", uz: "Mobil ilovalar" }),
      description: tx({
        en: "Cross-platform applications built with Flutter and React Native",
        ko: "Flutter와 React Native로 구축된 크로스 플랫폼 애플리케이션",
        uz: "Flutter va React Native bilan qurilgan kross-platforma ilovalar",
      }),
      icon: "📱",
    },
    {
      title: tx({ en: "Performance Optimization", ko: "성능 최적화", uz: "Samaradorlikni optimallashtirish" }),
      description: tx({
        en: "40% faster load times and improved code efficiency",
        ko: "로딩 속도 40% 향상 및 코드 효율성 개선",
        uz: "40% tezroq yuklash va kodning samaradorligini oshirish",
      }),
      icon: "⚡",
    },
  ];

  return (
    <>
      <SEO
        title={t.hero.name + " - " + t.hero.title}
        description={t.hero.subtitle}
        url="https://firdavs.dev"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="flex items-center justify-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <div className="mb-12 animate-fade-in-down">
                <div className="relative inline-block">
                  {/* Winner Badge Overlay */}
                  <div className="absolute -top-4 -right-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce-slow">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5" />
                        <span className="font-bold text-sm">
                          {tx({ en: "2nd Prize", ko: "2등상", uz: "2-o'rin" })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Main Image */}
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-400 hover:scale-105 transition-transform duration-300">
                    <img
                      src="/hack_seoul_project.jpg"
                      alt="HackSeoul 2025 Winner Team"
                      className="w-full max-w-sm h-auto object-cover rounded-md"
                    />

                    {/* Image Overlay with Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                      <div className="text-white text-left">
                        <h3 className="text-2xl font-bold mb-2">
                          🏆 HackSeoul 2025
                        </h3>
                        <p className="text-sm font-medium text-yellow-300">
                          {tx({
                          en: "AI for Real-World Impact & Future Ventures - 2nd Prize",
                          ko: "AI for Real-World Impact & Future Ventures - 2등상",
                          uz: "AI kelajak loyihalari musobaqasida faxrli 2-o'rin",
                        })}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative sparkles around image */}
                  <div className="absolute -top-2 -left-2 text-yellow-400 animate-pulse">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div
                    className="absolute -bottom-2 -right-2 text-orange-400 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Sparkles className="w-8 h-8" />
                  </div>
                </div>

                {/* Quick Links Below Image */}
                <div className="flex flex-col items-center gap-5 justify-center mt-8">
                  {/* Links */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href="/hackseoul_2025_project.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
                    >
                      <FileText className="w-4 h-4" />
                      {tx({ en: "Project PDF", ko: "프로젝트 문서", uz: "Loyiha PDF" })}
                    </a>

                    <a
                      href="https://drive.google.com/file/d/1bMCQeOvgk4OuYmLMOd3A29fCpR2FIpwB/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
                    >
                      <Video className="w-4 h-4" />
                      {tx({ en: "Demo Video", ko: "데모 영상", uz: "Demo Video" })}
                    </a>

                    <a
                      href="https://github.com/AkmalMakh/StylerX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg hover:bg-gray-900 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {[
                      "Python",
                      "FastAPI",
                      "Google Gemini AI",
                      "React Native",
                      "Expo",
                      "TypeScript",
                      "Router",
                      "MongoDB",
                      "Firebase",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-gray-200 rounded-full text-xs font-medium shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-gray-500 mt-2 text-center max-w-md">
                    {tx({
                      en: "AI-powered fashion recommendation and style analysis platform — HackSeoul 2025 Winner Project",
                      ko: "AI 기반 패션 추천 및 스타일 분석 플랫폼 – HackSeoul 2025 수상작",
                      uz: "AI asosidagi moda tavsiyasi va stil tahlili platformasi — HackSeoul 2025 g'olib loyihasi",
                    })}
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6 animate-bounce-slow">
                <Sparkles className="w-4 h-4" />
                {tx({
                  en: "Full-Stack Developer @ 3R Innovation",
                  ko: "3R 이노베이션 풀스택 개발자",
                  uz: "Full-Stack Dasturchi @ 3R Innovation",
                })}
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{t.hero.greeting}</p>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 animate-float">
                {t.hero.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {t.hero.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t.hero.subtitle}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-12 px-4 sm:px-0">
                <a
                  href="https://github.com/firdavs9777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 sm:hover:-translate-y-1"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium text-sm sm:text-base">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/firdavs-mutalipov-a630ba185/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 sm:hover:-translate-y-1"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium text-sm sm:text-base">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up mb-16 px-4 sm:px-0">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 sm:hover:-translate-y-1"
              >
                {t.hero.cta}
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>

              <a
                href={tx({
                  en: "/resume_korean.doc",
                  ko: "/resume_english.doc",
                  uz: "/resume_english.doc",
                })}
                download={tx({
                  en: "resume_korean.doc",
                  ko: "resume_english.doc",
                  uz: "resume_english.doc",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 active:scale-95 sm:hover:-translate-y-1"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.hero.resume}
              </a>

              <button
                onClick={() => navigate("/projects")}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 sm:hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                {tx({ en: "View Projects", ko: "프로젝트 보기", uz: "Loyihalarni ko'rish" })}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            {/* Live Projects Showcase */}
            <div className="mb-16 px-2 sm:px-0">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                  <Globe className="w-4 h-4" />
                  {tx({ en: "Live & Serving Users", ko: "실제 운영 중", uz: "Katta loyihalar va foydalanuvchilarga xizmat qilmoqda" })}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {tx({ en: "My Live Products", ko: "나의 라이브 프로젝트", uz: "Mening Katta Loyihalarim" })}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
                  {tx({
                    en: "Production apps with real users. Available on App Store and Google Play.",
                    ko: "실제 사용자들이 사용하고 있는 프로덕션 앱들입니다. App Store와 Google Play에서 다운로드 가능합니다.",
                    uz: "Haqiqiy foydalanuvchilarga ega ishlab chiqarish ilovalari. App Store va Google Play'da mavjud.",
                  })}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* BananaTalk Card */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">🌍</span>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          BananaTalk
                        </h4>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          Live
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                      {tx({ en: "Owner", ko: "오너", uz: "Egasi" })}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {tx({
                      en: "Free language exchange app with 100+ languages. Real conversations with native speakers through instant chat, voice messages, smart translation, and AI study tools. Free forever.",
                      ko: "100개 이상의 언어를 지원하는 무료 언어교환 앱. 실시간 채팅, 음성 메시지, 스마트 번역, AI 학습 도구로 원어민과 실제 대화를 나눌 수 있습니다.",
                      uz: "100+ tilda ona tili so'zlashuvchilar bilan bepul til almashish ilovasi. Tezkor chat, ovozli xabarlar, aqlli tarjimon va AI o'quv vositalari. Abadiy bepul.",
                    })}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["Flutter", "React", "Node.js", "MongoDB", "WebRTC", "Firebase"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-white/70 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://banatalk.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      {tx({ en: "Website", ko: "웹사이트", uz: "Veb-sayt" })}
                    </a>
                    <a
                      href="https://apps.apple.com/kr/app/bananatalk-language-exchange/id6755862146?l=en-GB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors shadow-sm"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      App Store
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.bananatalk.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors shadow-sm"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      Google Play
                    </a>
                  </div>
                </div>

                {/* TezSell Card */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-orange-900/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">🛒</span>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          TezSell
                        </h4>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          Live
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-semibold">
                      {tx({ en: "Owner", ko: "오너", uz: "Egasi" })}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {tx({
                      en: "Neighborhood marketplace for Uzbekistan. Buy & sell items, offer services, and list real estate with your neighbors. Direct chat, secure transactions, completely free.",
                      ko: "우즈베키스탄의 동네 마켓플레이스 앱. 이웃과 물건 사고팔기, 서비스 제공, 부동산 매물 등록이 가능합니다. 직접 채팅, 안전한 거래, 완전 무료.",
                      uz: "O'zbekiston uchun mahalla bozori. Qo'shnilaringiz bilan narsalarni sotib oling va soting, xizmatlar taklif qiling. To'g'ridan-to'g'ri chat, xavfsiz, butunlay bepul.",
                    })}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["Flutter", "Django", "PostgreSQL", "Redis", "Digital Ocean", "Nginx"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-white/70 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://webtezsell.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-colors shadow-sm"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      {tx({ en: "Website", ko: "웹사이트", uz: "Veb-sayt" })}
                    </a>
                    <a
                      href="https://apps.apple.com/kr/app/tezsell/id6755512731?l=en-GB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors shadow-sm"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      App Store
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=uz.tezsell.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors shadow-sm"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      Google Play
                    </a>
                  </div>
                </div>
              </div>

              {/* View All Live Projects Link */}
              <div className="text-center mt-8">
                <button
                  onClick={() => navigate("/live-projects")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  {tx({ en: "View All Live Projects", ko: "모든 라이브 프로젝트 보기", uz: "Barcha Katta Loyihalarni ko'rish" })}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Visa & Work Authorization Section */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border-2 border-green-200 dark:border-gray-700 shadow-lg">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-400"
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
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {tx({
                      en: "Visa & Work Authorization",
                      ko: "비자 및 근무 자격",
                      uz: "Viza va ish ruxsatnomasi",
                    })}
                  </h3>
                </div>

                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md mb-4">
                    <span className="text-3xl">🇰🇷</span>
                    <div className="text-left">
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                        {tx({
                          en: "South Korea Marriage Immigrant Visa",
                          ko: "대한민국 결혼이민 비자",
                          uz: "Janubiy Koreya nikoh migranti vizasi",
                        })}
                      </p>
                      <p className="text-lg font-bold text-green-600 dark:text-green-400">
                        F-6{" "}
                        {tx({
                          en: "(Marriage Immigrant)",
                          ko: "(결혼이민)",
                          uz: "(Nikoh migranti)",
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md text-center active:scale-95 transition-transform">
                    <div className="text-green-600 dark:text-green-400 text-2xl mb-2">✓</div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {tx({
                        en: "Immediate Availability",
                        ko: "즉시 근무 가능",
                        uz: "Darhol tayyor",
                      })}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {tx({
                        en: "No Sponsorship Required",
                        ko: "스폰서십 불필요",
                        uz: "Homiylik kerak emas",
                      })}
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md text-center active:scale-95 transition-transform">
                    <div className="text-green-600 dark:text-green-400 text-2xl mb-2">✓</div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {tx({
                        en: "Unlimited Employment",
                        ko: "무제한 취업 활동",
                        uz: "Cheklanmagan ish",
                      })}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {tx({
                        en: "No Job Type Restrictions",
                        ko: "직종 제한 없음",
                        uz: "Ish turi cheklovlari yo'q",
                      })}
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md text-center active:scale-95 transition-transform">
                    <div className="text-green-600 dark:text-green-400 text-2xl mb-2">✓</div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {tx({
                        en: "Permanent Residence Eligible",
                        ko: "영주권 신청 가능",
                        uz: "Doimiy yashash huquqiga ega",
                      })}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {tx({
                        en: "Long-term Settlement",
                        ko: "장기 정착 가능",
                        uz: "Uzoq muddatli yashash",
                      })}
                    </p>
                  </div>
                </div>

                <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
                  {tx({
                    en: "Legally authorized to work and reside in South Korea with no visa sponsorship required.",
                    ko: "한국에서 합법적으로 취업 및 거주 가능하며, 별도의 비자 스폰서십이 필요하지 않습니다.",
                    uz: "Janubiy Koreyada qonuniy ishlash va yashash huquqiga ega, viza homiyligisiz.",
                  })}
                </p>
              </div>
            </div>
            {/* Language Skills Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {tx({ en: "Language Proficiency", ko: "언어 능력", uz: "Til bilish darajasi" })}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* English */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl mb-4 text-center">🇺🇸</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                    {tx({ en: "English", ko: "영어", uz: "Ingliz tili" })}
                  </h4>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {tx({ en: "Native Level", ko: "원어민 수준", uz: "Ona tili darajasi" })}
                      </span>
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">
                        100%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {tx({
                      en: "Fluent in reading, writing, and speaking",
                      ko: "완벽한 읽기, 쓰기, 말하기 능력",
                      uz: "O'qish, yozish va gapirishda ravon",
                    })}
                  </p>
                </div>

                {/* Korean */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl mb-4 text-center">🇰🇷</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                    {tx({ en: "Korean", ko: "한국어", uz: "Koreys tili" })}
                  </h4>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {tx({ en: "Advanced", ko: "고급", uz: "Yuqori daraja" })}
                      </span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        85%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {tx({
                      en: "Business & daily conversation proficient",
                      ko: "비즈니스 및 일상 대화 가능",
                      uz: "Biznes va kundalik suhbat",
                    })}
                  </p>
                  <div className="mt-3 text-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                      KIIP Level 5
                    </span>
                  </div>
                </div>

                {/* Uzbek */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl mb-4 text-center">🇺🇿</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                    {tx({ en: "Uzbek", ko: "우즈베크어", uz: "O'zbek tili" })}
                  </h4>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {tx({ en: "Native", ko: "원어민", uz: "Ona tili" })}
                      </span>
                      <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                        100%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {tx({
                      en: "Mother tongue - Full proficiency",
                      ko: "모국어 - 완벽한 구사 능력",
                      uz: "Ona tili — to'liq bilim",
                    })}
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {tx({
                    en: "Multilingual capabilities enable seamless collaboration with global teams and appreciation for diverse cultural backgrounds.",
                    ko: "다국어 능력으로 글로벌 팀과 원활하게 협업하며, 다양한 문화적 배경을 이해하고 존중합니다.",
                    uz: "Ko'p tilli qobiliyatlar global jamoalar bilan muammosiz hamkorlik qilish imkonini beradi.",
                  })}
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto mb-16 px-2 sm:px-0">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 sm:hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                  >
                    <Icon
                      className={`w-6 sm:w-8 h-6 sm:h-8 text-${item.color}-600 dark:text-${item.color}-400 mx-auto mb-2 sm:mb-3`}
                    />
                    <div
                      className={`text-2xl sm:text-3xl font-bold text-${item.color}-600 dark:text-${item.color}-400 mb-1 sm:mb-2`}
                    >
                      {item.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Specialties Section */}
            <div className="mb-16 px-2 sm:px-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                {tx({ en: "What I Specialize In", ko: "전문 분야", uz: "Mutaxassislik sohalarim" })}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                {specialties.map((specialty, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 sm:hover:-translate-y-2 text-left"
                  >
                    <div className="text-4xl mb-4">{specialty.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {specialty.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Showcase */}
            <div className="mb-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {tx({ en: "Core Tech Stack", ko: "주요 기술 스택", uz: "Asosiy texnologiyalar" })}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "React",
                  "Vue.js",
                  "TypeScript",
                  "Node.js",
                  "Django",
                  "Java Spring Boot",
                  "Flutter",
                  "PostgreSQL",
                  "MongoDB",
                  "Docker",
                  "AWS",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  {tx({ en: "Professional Resume", ko: "전문 이력서", uz: "Professional rezyume" })}
                </h3>
                <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
                  {tx({
                    en: "Download my complete resume with detailed work experience, skills, and achievements.",
                    ko: "상세한 업무 경험, 기술 스택 및 성과가 포함된 완전한 이력서를 다운로드하세요.",
                    uz: "Batafsil ish tajribasi, ko'nikmalari va yutuqlari bilan to'liq rezyumeni yuklab oling.",
                  })}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={tx({
                      en: "/resume_english.doc",
                      ko: "/resume_korean.doc",
                      uz: "/resume_english.doc",
                    })}
                    download={tx({
                      en: "resume_english.doc",
                      ko: "resume_korean.doc",
                      uz: "resume_english.doc",
                    })}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    {tx({ en: "Download Resume", ko: "이력서 다운로드", uz: "Rezyumeni yuklab olish" })}
                  </a>
                  <a
                    href={tx({
                      en: "/resume_english.doc",
                      ko: "/resume_korean.doc",
                      uz: "/resume_english.doc",
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-1"
                  >
                    {tx({ en: "View Online", ko: "온라인으로 보기", uz: "Onlayn ko'rish" })}
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {tx({
                    en: "Let's Work Together",
                    ko: "함께 일하고 싶으신가요?",
                    uz: "Keling, birga ishlaylik",
                  })}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {tx({
                    en: "I'm always open to discussing new projects and opportunities. Get in touch!",
                    ko: "혁신적인 프로젝트에 대한 새로운 기회를 항상 환영합니다. 연락 주세요!",
                    uz: "Men har doim yangi loyihalar va imkoniyatlarni muhokama qilishga tayyorman.",
                  })}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => navigate("/contact")}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    {tx({ en: "Contact Me", ko: "연락하기", uz: "Menga yozing" })}
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
    </>
  );
};
