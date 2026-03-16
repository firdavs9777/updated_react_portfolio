// src/pages/LiveProjects.tsx

import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  User,
  Globe,
  Smartphone,
  QrCode,
  X,
} from "lucide-react";
import { useLanguage } from "../context/languageContext";

export const LiveProjectsPage: React.FC = () => {
  const { t, tx } = useLanguage();

  const liveProjects = [
    {
      id: 1,
      title: tx({
        en: "BananaTalk Language Exchange App",
        ko: "BananaTalk 언어교환 앱",
        uz: "BananaTalk Til Almashish Ilovasi",
      }),
      description: tx({
        en: "Free language exchange app connecting people with native speakers across 100+ languages — from English and Spanish to Korean, Japanese, Arabic, and beyond. No flashcards or scripted lessons — just real conversations through instant chat, voice messages, smart translation, and AI study tools. Free forever on iOS and Android, with new features every week.",
        ko: "100개 이상의 언어를 지원하는 무료 언어교환 앱입니다. 원어민과 실시간 채팅, 음성 메시지, 스마트 번역, AI 학습 도구를 통해 실제 대화로 언어를 배울 수 있습니다. iOS와 Android에서 영원히 무료로 이용 가능하며, 매주 새로운 기능이 업데이트됩니다.",
        uz: "100 dan ortiq tilda ona tili so'zlashuvchilar bilan bog'laydigan bepul til almashish ilovasi. Tezkor chat, ovozli xabarlar, aqlli tarjimon va AI o'quv vositalari orqali haqiqiy suhbatlar. iOS va Android'da abadiy bepul, har hafta yangi funksiyalar.",
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
        "Flutter Go Router",
        "Firebase Notifications",
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Redis",
        "REST API",
        "WebRTC",
        "Socket.io",
      ],
      url: "https://banatalk.com",
      iosUrl:
        "https://apps.apple.com/kr/app/bananatalk-language-exchange/id6755862146?l=en-GB",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.bananatalk.app",
      github: "https://github.com/firdavs9777/language_exchange_web_front",
      status: "live",
      image: "🌍",
    },
    {
      id: 2,
      title: tx({
        en: "TezSell - Neighborhood Marketplace",
        ko: "TezSell - Mahalla Bozori",
        uz: "TezSell - Mahalla Bozori",
      }),
      description: tx({
        en: "Neighborhood marketplace app for Uzbekistan. Buy and sell items, offer services, and list real estate with your neighbors. Features direct chat, secure transactions, and is completely free. Available on both iOS and Android via App Store and Google Play.",
        ko: "우즈베키스탄의 동네 마켓플레이스 앱입니다. 이웃과 함께 물건을 사고팔고, 서비스를 제공하며, 부동산 매물을 등록할 수 있습니다. 직접 채팅, 안전한 거래, 무료 이용이 가능합니다. Flutter로 개발된 iOS 및 Android 앱이 App Store와 Google Play에서 다운로드 가능합니다.",
        uz: "O'zbekiston uchun mahalla bozori ilovasi. Qo'shnilaringiz bilan narsalarni sotib oling va soting, xizmatlar taklif qiling va ko'chmas mulk e'lonlarini joylashtiring. To'g'ridan-to'g'ri chat, xavfsiz tranzaksiyalar, butunlay bepul. iOS va Android'da App Store va Google Play orqali mavjud.",
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
        "Flutter Go Router",
        "React",
        "Django",
        "PostgreSQL",
        "Digital Ocean",
        "Nginx",
        "Redis",
        "REST API",
      ],
      url: "https://webtezsell.com",
      iosUrl: "https://apps.apple.com/kr/app/tezsell/id6755512731?l=en-GB",
      androidUrl:
        "https://play.google.com/store/apps/details?id=uz.tezsell.app",
      github: "https://github.com/firdavs9777/tezsell_app_front",
      status: "live",
      image: "🛒",
    },
    {
      id: 3,
      title: tx({
        en: "AI Buddy Chatbot Project",
        ko: "AI Buddy 챗봇 프로젝트",
        uz: "AI Buddy Chatbot Loyihasi",
      }),
      description: tx({
        en: "AI-powered conversational chatbot web application with real-time messaging capabilities and intelligent response generation. Username: pinetree, Password: pinetree",
        ko: "AI 기반 대화형 챗봇 웹 애플리케이션으로 실시간 메시징 기능과 지능형 응답 생성 기능을 제공합니다. Username: pinetree, Password: pinetree",
        uz: "Sun'iy intellektga asoslangan suhbat chatbot veb ilovasi. Real vaqtda xabar almashish va aqlli javob yaratish imkoniyatlari. Foydalanuvchi nomi: pinetree, Parol: pinetree",
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
      status: "live",
      image: "🤖",
    },
  ];

  const ProjectCard: React.FC<{
    project: (typeof liveProjects)[0];
    featured?: boolean;
  }> = ({ project, featured = false }) => {
    const [showQRCode, setShowQRCode] = useState(false);

    return (
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
                <div className="flex items-center gap-2 mt-2">
                  {featured && (
                    <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full border border-yellow-200">
                      Featured
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200">
                    <Globe className="w-3 h-3" />
                    {tx({ en: "Live", ko: "라이브", uz: "Katta" })}
                  </span>
                </div>
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
                  className="text-purple-600 hover:text-purple-800 transition-colors p-2 hover:bg-purple-50 rounded-lg"
                  title={tx({
                    en: "Download iOS App",
                    ko: "iOS 앱 다운로드",
                    uz: "iOS ilovasini yuklab olish",
                  })}
                >
                  <Smartphone className="w-5 h-5" />
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
              {project.iosUrl && (
                <button
                  onClick={() => setShowQRCode(!showQRCode)}
                  className="text-green-600 hover:text-green-800 transition-colors p-2 hover:bg-green-50 rounded-lg"
                  title={tx({ en: "Show QR Code", ko: "QR 코드 보기", uz: "QR kodni ko'rsatish" })}
                >
                  <QrCode className="w-5 h-5" />
                </button>
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
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs font-medium border border-green-200 dark:border-green-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

          <div className="flex flex-wrap gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Globe className="w-4 h-4" />
                {tx({ en: "Visit Website", ko: "웹사이트 방문", uz: "Veb-saytga tashrif buyurish" })}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.iosUrl && (
              <a
                href={project.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                <Smartphone className="w-4 h-4" />
                {tx({ en: "Download iOS App", ko: "iOS 앱 다운로드", uz: "iOS ilovasini yuklab olish" })}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.androidUrl && (
              <a
                href={project.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <Smartphone className="w-4 h-4" />
                {tx({ en: "Download Android App", ko: "Android 앱 다운로드", uz: "Android ilovasini yuklab olish" })}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* QR Code Modal */}
          {showQRCode && project.iosUrl && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                onClick={() => setShowQRCode(false)}
              >
                <div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setShowQRCode(false)}
                    className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {tx({
                      en: "Scan QR code to download iOS app",
                      ko: "QR 코드를 스캔하여 iOS 앱을 다운로드하세요",
                      uz: "iOS ilovasini yuklab olish uchun QR kodni skanerlang",
                    })}
                  </p>
                  <div className="bg-white p-4 rounded-lg inline-block mb-4 border-2 border-gray-200">
                    {/* API-based QR Code - No package needed! */}
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(
                        project.iosUrl
                      )}`}
                      alt={`QR Code for ${project.title}`}
                      className="w-64 h-64"
                    />
                  </div>
                    <a
                      href={project.iosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      {tx({
                        en: "Open Link Directly",
                        ko: "직접 링크 열기",
                        uz: "Havolani to'g'ridan-to'g'ri ochish",
                      })}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {tx({ en: "Live Projects", ko: "실제 프로젝트", uz: "Katta Loyihalar" })}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            {tx({
              en: "A showcase of my production projects that are currently live and serving users.",
              ko: "현재 운영 중인 프로덕션 프로젝트들을 소개합니다.",
              uz: "Hozirda ishlayotgan va foydalanuvchilarga xizmat ko'rsatayotgan ishlab chiqarish loyihalarim.",
            })}
          </p>
        </div>

        {liveProjects.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {liveProjects.map((project, index) => (
              <div
                key={project.id}
                className={
                  index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                }
              >
                <ProjectCard
                  project={project}
                  featured={project.featured || false}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Globe className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {tx({
                en: "Live project information will be added soon.",
                ko: "라이브 프로젝트 정보가 곧 추가될 예정입니다.",
                uz: "Katta loyiha ma'lumotlari tez orada qo'shiladi.",
              })}
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-700 dark:to-teal-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {tx({
                en: "Interested in Working Together?",
                ko: "함께 작업하고 싶으신가요?",
                uz: "Birga ishlashni xohlaysizmi?",
              })}
            </h3>
            <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
              {tx({
                en: "I'm always excited to take on new challenges and collaborate on innovative projects.",
                ko: "새로운 도전과 혁신적인 프로젝트에 항상 열려있습니다.",
                uz: "Men har doim yangi qiyinchiliklarni qabul qilish va innovatsion loyihalarda hamkorlik qilishga tayyorman.",
              })}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {tx({ en: "Get In Touch", ko: "연락하기", uz: "Bog'lanish" })}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
