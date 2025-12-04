// src/pages/LiveProjects.tsx

import React, { useState } from "react";
import { ExternalLink, Github, Calendar, User, Globe, Smartphone, QrCode, X } from "lucide-react";
import { QRCodeSVG } from "react-qr-code";
import { useLanguage } from "../context/languageContext";

export const LiveProjectsPage: React.FC = () => {
  const { language, t } = useLanguage();

  const liveProjects = [
    {
      id: 1,
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
      status: "live",
      image: "🌍",
    },
    {
      id: 2,
      title:
        language === "ko"
          ? "TezSell 전자상거래 플랫폼"
          : "TezSell E-commerce Platform",
      description:
        language === "ko"
          ? "한국의 당근마켓과 유사한 우즈베키스탄 현지 마켓플레이스로, 위치 기반 서비스를 통한 개인 간 중고거래 플랫폼입니다. Flutter로 개발된 iOS 및 Android 앱이 App Store와 Google Play에서 다운로드 가능합니다."
          : "Local marketplace platform similar to Korea's Carrot Market, enabling peer-to-peer buying and selling in Uzbekistan with location-based services. Flutter-based iOS and Android app available on App Store and Google Play.",
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
      iosUrl: "https://apps.apple.com/kr/app/tezsell/id6755512731?l=en-GB",
      github: "https://github.com/firdavs9777/tezsell_app_front",
      status: "live",
      image: "🛒",
    },
    {
      id: 3,
      title:
        language === "ko"
          ? "AI Buddy 챗봇 프로젝트"
          : "AI Buddy Chatbot Project",
      description:
        language === "ko"
          ? `AI 기반 대화형 챗봇 웹 애플리케이션으로 실시간 메시징 기능과 지능형 응답 생성 기능을 제공합니다.  Username: pinetree, Password: pinetree`
          : "AI-powered conversational chatbot web application with real-time messaging capabilities and intelligent response generation. Username: pinetree, password: pinetree",
      role: language === "ko" ? "풀스택 개발자" : "Full-Stack Developer",
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
              <div className="flex items-center gap-2 mt-2">
                {featured && (
                  <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full border border-yellow-200">
                    Featured
                  </span>
                )}
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200">
                  <Globe className="w-3 h-3" />
                  {language === "ko" ? "라이브" : "Live"}
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
                title={language === "ko" ? "iOS 앱 다운로드" : "Download iOS App"}
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
                title={language === "ko" ? "QR 코드 보기" : "Show QR Code"}
              >
                <QrCode className="w-5 h-5" />
              </button>
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

        <div className="flex flex-wrap gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language === "ko" ? "웹사이트 방문" : "Visit Website"}
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
              {language === "ko" ? "iOS 앱 다운로드" : "Download iOS App"}
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
              className="bg-white rounded-2xl p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQRCode(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === "ko"
                    ? "QR 코드를 스캔하여 iOS 앱을 다운로드하세요"
                    : "Scan QR code to download iOS app"}
                </p>
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <QRCodeSVG
                    value={project.iosUrl}
                    size={256}
                    level="H"
                    includeMargin={true}
                  />
                </div>
                <a
                  href={project.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  {language === "ko" ? "직접 링크 열기" : "Open Link Directly"}
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === "ko" ? "실제 프로젝트" : "Live Projects"}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            {language === "ko"
              ? "현재 운영 중인 프로덕션 프로젝트들을 소개합니다."
              : "A showcase of my production projects that are currently live and serving users."}
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
            <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">
              {language === "ko"
                ? "라이브 프로젝트 정보가 곧 추가될 예정입니다."
                : "Live project information will be added soon."}
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {language === "ko"
                ? "함께 작업하고 싶으신가요?"
                : "Interested in Working Together?"}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {language === "ko"
                ? "새로운 도전과 혁신적인 프로젝트에 항상 열려있습니다."
                : "I'm always excited to take on new challenges and collaborate on innovative projects."}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {language === "ko" ? "연락하기" : "Get In Touch"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

