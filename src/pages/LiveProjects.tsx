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
  Users,
  Target,
  Zap,
  Layers,
} from "lucide-react";
import { useLanguage } from "../context/languageContext";
import { SEO } from "../utils/seo";

type LocaleString = { en: string; ko: string; uz: string };

interface LiveProject {
  id: number;
  emoji: string;
  name: string;
  tagline: LocaleString;
  metric: LocaleString;
  metricLabel: LocaleString;
  problem: LocaleString;
  solution: LocaleString;
  results: LocaleString;
  role: LocaleString;
  year: string;
  myStack: string[];
  backendStack: string[];
  website?: string;
  iosUrl?: string;
  androidUrl?: string;
  github?: string;
  accent: "blue" | "orange" | "cyan";
}

const PROJECTS: LiveProject[] = [
  {
    id: 1,
    emoji: "🌍",
    name: "BananaTalk",
    tagline: {
      en: "Language exchange app · iOS + Android · 100+ languages",
      ko: "언어 교환 앱 · iOS + Android · 100+ 언어",
      uz: "Til almashish ilovasi · iOS + Android · 100+ til",
    },
    metric: {
      en: "1,200+ users",
      ko: "1,200+ 유저",
      uz: "1,200+ foydalanuvchi",
    },
    metricLabel: {
      en: "across iOS (1,000+) and Android (200+)",
      ko: "iOS (1,000+) 및 Android (200+) 합산",
      uz: "iOS (1,000+) va Android (200+)",
    },
    problem: {
      en: "Language learners can't find real native speakers to talk to. Flashcards and scripted lessons don't build conversational fluency — only real conversations do.",
      ko: "언어 학습자들은 실제로 대화할 원어민을 찾기 어렵습니다. 플래시카드나 정형화된 수업으로는 회화 실력이 늘지 않습니다 — 실제 대화만이 답입니다.",
      uz: "Til o'rganuvchilar suhbat quradigan ona tili so'zlashuvchilarni topa olmaydi. Flesh-kartalar va tayyor darslar suhbatda ravonlikka olib kelmaydi — faqat haqiqiy suhbatlar olib keladi.",
    },
    solution: {
      en: "An app that matches you with native speakers across 100+ languages, with instant chat, voice messages, WebRTC voice/video calls, smart translation, and AI study tools — all free forever.",
      ko: "100개 이상의 언어를 지원하는 원어민 매칭 앱. 실시간 채팅, 음성 메시지, WebRTC 음성·영상 통화, 스마트 번역, AI 학습 도구를 제공합니다 — 영구 무료.",
      uz: "100+ til bo'yicha ona tili so'zlashuvchilar bilan tanishtiruvchi ilova: tezkor chat, ovozli xabarlar, WebRTC ovozli va video qo'ng'iroqlar, aqlli tarjimon, AI o'quv vositalari — abadiy bepul.",
    },
    results: {
      en: "1,200+ users across App Store and Google Play. Active community. Weekly feature releases. Designed, built, and operated solo end-to-end.",
      ko: "App Store와 Google Play 합산 1,200+ 유저. 활성 커뮤니티. 매주 새 기능 출시. 기획·개발·운영 전 과정을 직접 담당.",
      uz: "App Store va Google Play'da jami 1,200+ foydalanuvchi. Faol jamoa. Har hafta yangi funksiyalar. Loyiha, ishlab chiqish va boshqaruvni yakka o'zim olib boryapman.",
    },
    role: {
      en: "Owner · Full-Stack Developer",
      ko: "오너 · 풀스택 개발자",
      uz: "Egasi · Full-Stack Dasturchi",
    },
    year: "2024-Present",
    myStack: ["Flutter", "Riverpod", "go_router", "LiveKit / WebRTC", "Socket.io", "Firebase"],
    backendStack: ["Node.js", "Express", "MongoDB", "Redis", "REST API"],
    website: "https://banatalk.com",
    iosUrl: "https://apps.apple.com/kr/app/bananatalk-language-exchange/id6755862146?l=en-GB",
    androidUrl: "https://play.google.com/store/apps/details?id=com.bananatalk.app",
    github: "https://github.com/firdavs9777/language_exchange_web_front",
    accent: "blue",
  },
  {
    id: 2,
    emoji: "🛒",
    name: "TezSell",
    tagline: {
      en: "Neighborhood marketplace app · iOS + Android",
      ko: "동네 마켓플레이스 앱 · iOS + Android",
      uz: "Mahalla bozori ilovasi · iOS + Android",
    },
    metric: {
      en: "Live in production",
      ko: "프로덕션 운영 중",
      uz: "Ishlab chiqarishda faol",
    },
    metricLabel: {
      en: "iOS + Android · Live in App Store + Google Play",
      ko: "iOS + Android · App Store와 Google Play에서 운영 중",
      uz: "iOS + Android · App Store va Google Play'da faol",
    },
    problem: {
      en: "Neighborhood buy-and-sell happens in fragmented chat groups and ads — no trust signals, no chat, no location filtering, lots of friction.",
      ko: "동네 중고거래가 단편적인 채팅방과 광고에 분산되어 있어 신뢰 신호도, 채팅도, 위치 필터링도 없고 거래 마찰이 큽니다.",
      uz: "Mahalla bozori bo'lingan chat guruhlari va e'lonlarda kechadi — ishonch signallari, chat, joylashuv filtri yo'q, ishqalanish katta.",
    },
    solution: {
      en: "A single neighborhood marketplace app: buy and sell items, offer services, list real estate. Direct chat between users, location-aware listings, secure transactions, completely free.",
      ko: "동네 마켓플레이스 앱: 물건 사고팔기, 서비스 제공, 부동산 등록. 사용자 간 직접 채팅, 위치 기반 검색, 안전한 거래, 무료.",
      uz: "Yagona mahalla bozori ilovasi: narsalarni sotib oling va soting, xizmatlar taklif qiling, ko'chmas mulkni e'lon qiling. Foydalanuvchilar o'rtasida to'g'ridan-to'g'ri chat, joylashuvga asoslangan e'lonlar, xavfsiz va bepul.",
    },
    results: {
      en: "Live on App Store + Google Play. Ongoing growth and active users. Built and operated solo, from API and database design to mobile UI and DevOps.",
      ko: "App Store와 Google Play에서 운영 중. 사용자 지속 증가. API·데이터베이스·모바일 UI·DevOps까지 1인 개발 및 운영.",
      uz: "App Store va Google Play'da faol. Foydalanuvchilar soni o'sib bormoqda. API, ma'lumotlar bazasi, mobil UI va DevOps — barchasini yakka o'zim olib boryapman.",
    },
    role: {
      en: "Owner · Lead Developer",
      ko: "오너 · 리드 개발자",
      uz: "Egasi · Bosh Dasturchi",
    },
    year: "2024-Present",
    myStack: ["Flutter", "Riverpod", "go_router", "Dio", "Socket.io", "flutter_map"],
    backendStack: ["Django", "PostgreSQL", "Redis", "Nginx", "Digital Ocean", "REST API"],
    website: "https://webtezsell.com",
    iosUrl: "https://apps.apple.com/kr/app/tezsell/id6755512731?l=en-GB",
    androidUrl: "https://play.google.com/store/apps/details?id=uz.tezsell.app",
    github: "https://github.com/firdavs9777/tezsell_app_front",
    accent: "orange",
  },
  {
    id: 3,
    emoji: "🤖",
    name: "AI Buddy Chatbot",
    tagline: {
      en: "AI conversational web app · WebSocket realtime",
      ko: "AI 대화형 웹 앱 · WebSocket 실시간",
      uz: "AI suhbat veb ilovasi · WebSocket real vaqtda",
    },
    metric: {
      en: "Production deployment",
      ko: "프로덕션 배포",
      uz: "Ishlab chiqarish",
    },
    metricLabel: {
      en: "Live demo · login: pinetree / pinetree",
      ko: "라이브 데모 · 로그인: pinetree / pinetree",
      uz: "Jonli demo · login: pinetree / pinetree",
    },
    problem: {
      en: "Customer-support style chat experiences need both intelligent responses and real-time UX. Most demos are slow and clunky.",
      ko: "고객 지원형 채팅 경험은 지능형 응답과 실시간 UX 모두가 필요합니다. 대부분의 데모는 느리고 어색합니다.",
      uz: "Mijozlarni qo'llab-quvvatlash uslubidagi chat tajribasi aqlli javoblarni va real vaqtdagi UXni talab qiladi. Aksariyat demolar sekin va noqulay.",
    },
    solution: {
      en: "AI-powered conversational web app with real-time WebSocket messaging and intelligent response generation. Clean, responsive UI.",
      ko: "AI 기반 대화형 웹 앱. WebSocket 실시간 메시징과 지능형 응답 생성. 깔끔하고 반응형인 UI.",
      uz: "AI asosidagi suhbat veb ilovasi. Real vaqtda WebSocket xabar almashinuvi va aqlli javob yaratish. Toza va moslashuvchan UI.",
    },
    results: {
      en: "Deployed and accessible publicly. Demo credentials provided for evaluation. Showcases real-time architecture skills.",
      ko: "공개 배포 완료. 데모 계정 제공. 실시간 아키텍처 역량을 보여주는 프로젝트.",
      uz: "Ommaviy ravishda deploy qilingan. Baholash uchun demo hisob ma'lumotlari taqdim etilgan. Real vaqtdagi arxitektura mahoratini namoyish etadi.",
    },
    role: {
      en: "Full-Stack Developer",
      ko: "풀스택 개발자",
      uz: "Full-Stack Dasturchi",
    },
    year: "2024",
    myStack: ["React", "TypeScript", "WebSocket", "CSS3"],
    backendStack: ["AI API"],
    website: "https://app-aibuddy.calsplatz.com:8000/gen-bi",
    accent: "cyan",
  },
];

const ACCENT = {
  blue: {
    metric: "text-blue-700 dark:text-blue-400",
    metricBg: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    cta: "bg-blue-600 hover:bg-blue-700",
    ring: "ring-blue-200 dark:ring-blue-900/40",
  },
  orange: {
    metric: "text-orange-700 dark:text-orange-400",
    metricBg: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
    cta: "bg-orange-600 hover:bg-orange-700",
    ring: "ring-orange-200 dark:ring-orange-900/40",
  },
  cyan: {
    metric: "text-cyan-700 dark:text-cyan-400",
    metricBg: "bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800",
    cta: "bg-cyan-600 hover:bg-cyan-700",
    ring: "ring-cyan-200 dark:ring-cyan-900/40",
  },
};

export const LiveProjectsPage: React.FC = () => {
  const { tx } = useLanguage();
  const [qrProject, setQrProject] = useState<LiveProject | null>(null);

  return (
    <>
      <SEO
        title={tx({
          en: "Live Projects — BananaTalk · TezSell · AI Buddy",
          ko: "라이브 프로젝트 — BananaTalk · TezSell · AI Buddy",
          uz: "Faol loyihalar — BananaTalk · TezSell · AI Buddy",
        })}
        description={tx({
          en: "Deep-dive into the production apps I've shipped — BananaTalk (1,200+ users), TezSell (live on iOS + Android), and AI Buddy chatbot.",
          ko: "직접 출시한 프로덕션 앱 상세 — BananaTalk (1,200+ 유저), TezSell (iOS·Android 운영 중), AI Buddy 챗봇.",
          uz: "Men chiqargan ishlab chiqarish ilovalari haqida batafsil — BananaTalk (1,200+ foydalanuvchi), TezSell (iOS va Android'da faol), AI Buddy chatbot.",
        })}
        url="https://firdavs.dev/live-projects"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {tx({ en: "Live Projects", ko: "라이브 프로젝트", uz: "Faol loyihalar" })}
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {tx({
                en: "Production apps I've shipped — running in real app stores with real users.",
                ko: "직접 출시하여 실제 앱 스토어에서 실제 사용자에게 서비스 중인 프로덕션 앱들.",
                uz: "Men chiqargan ishlab chiqarish ilovalari — haqiqiy ilova do'konlarida faol va foydalanuvchilarga xizmat qilmoqda.",
              })}
            </p>
          </header>

          {/* Project deep-dives */}
          <div className="space-y-10 sm:space-y-12">
            {PROJECTS.map((project) => (
              <ProjectDeepDive
                key={project.id}
                project={project}
                onShowQr={() => setQrProject(project)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-6 sm:p-10 text-white shadow-xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                {tx({
                  en: "Want to ship something like this together?",
                  ko: "이런 프로젝트를 함께 만들어보고 싶으신가요?",
                  uz: "Shu kabi loyihani birgalikda chiqarmoqchimisiz?",
                })}
              </h2>
              <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                {tx({
                  en: "Open to full-time roles and freelance projects. Let's talk.",
                  ko: "정규직 및 프리랜서 프로젝트에 열려 있습니다. 이야기해봐요.",
                  uz: "Doimiy ish va freelance loyihalarga ochiqman. Gaplashaylik.",
                })}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors active:scale-[0.98] min-h-[44px]"
              >
                {tx({ en: "Get In Touch", ko: "연락하기", uz: "Bog'lanish" })}
              </a>
            </div>
          </div>
        </div>

        {/* QR Modal */}
        {qrProject?.iosUrl && (
          <QrModal project={qrProject} onClose={() => setQrProject(null)} />
        )}
      </div>
    </>
  );
};

// ================================================================
// ProjectDeepDive
// ================================================================

const ProjectDeepDive: React.FC<{
  project: LiveProject;
  onShowQr: () => void;
}> = ({ project, onShowQr }) => {
  const { tx } = useLanguage();
  const styles = ACCENT[project.accent];

  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
      <div className="p-5 sm:p-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div className="flex items-start gap-3 sm:gap-4 min-w-0">
            <span className="text-4xl sm:text-5xl flex-shrink-0">{project.emoji}</span>
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {project.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                {tx(project.tagline)}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  {tx(project.role)}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.year}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-[10px] sm:text-xs font-medium border border-green-200 dark:border-green-800">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  {tx({ en: "Live", ko: "라이브", uz: "Faol" })}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Metric */}
        <div className={`rounded-xl border ${styles.metricBg} p-4 sm:p-5 mb-6`}>
          <div className={`text-2xl sm:text-3xl font-bold ${styles.metric} mb-1`}>
            {tx(project.metric)}
          </div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            {tx(project.metricLabel)}
          </div>
        </div>

        {/* Problem · Solution · Results */}
        <div className="space-y-5 mb-6">
          <DeepDiveBlock
            icon={Target}
            label={tx({ en: "Problem", ko: "문제", uz: "Muammo" })}
            body={tx(project.problem)}
          />
          <DeepDiveBlock
            icon={Zap}
            label={tx({ en: "Solution", ko: "해결책", uz: "Yechim" })}
            body={tx(project.solution)}
          />
          <DeepDiveBlock
            icon={Users}
            label={tx({ en: "Results", ko: "결과", uz: "Natijalar" })}
            body={tx(project.results)}
          />
        </div>

        {/* Stack */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-3">
            <Layers className="w-4 h-4" />
            {tx({ en: "Stack", ko: "기술 스택", uz: "Texnologiyalar" })}
          </div>
          <div className="space-y-3">
            <StackRow
              label={tx({ en: "Mobile / Frontend", ko: "모바일 / 프론트엔드", uz: "Mobil / Frontend" })}
              items={project.myStack}
            />
            {project.backendStack.length > 0 && (
              <StackRow
                label={tx({ en: "Backend", ko: "백엔드", uz: "Backend" })}
                items={project.backendStack}
              />
            )}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 ${styles.cta} text-white text-sm font-medium rounded-lg transition-colors active:scale-95 min-h-[44px]`}
            >
              <Globe className="w-4 h-4" />
              {tx({ en: "Website", ko: "웹사이트", uz: "Veb-sayt" })}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.iosUrl && (
            <a
              href={project.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gray-900 hover:bg-black text-white text-sm font-medium rounded-lg transition-colors active:scale-95 min-h-[44px]"
            >
              <Smartphone className="w-4 h-4" />
              App Store
            </a>
          )}
          {project.androidUrl && (
            <a
              href={project.androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors active:scale-95 min-h-[44px]"
            >
              <Smartphone className="w-4 h-4" />
              Google Play
            </a>
          )}
          {project.iosUrl && (
            <button
              onClick={onShowQr}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-600 transition-colors active:scale-95 min-h-[44px]"
            >
              <QrCode className="w-4 h-4" />
              {tx({ en: "QR Code", ko: "QR 코드", uz: "QR kod" })}
            </button>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-600 transition-colors active:scale-95 min-h-[44px]"
            >
              <Github className="w-4 h-4" />
              {tx({ en: "Code", ko: "코드", uz: "Kod" })}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const DeepDiveBlock: React.FC<{
  icon: React.ElementType;
  label: string;
  body: string;
}> = ({ icon: Icon, label, body }) => (
  <div>
    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
      <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      {label}
    </div>
    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
      {body}
    </p>
  </div>
);

const StackRow: React.FC<{ label: string; items: string[] }> = ({ label, items }) => (
  <div>
    <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1.5">
      {label}
    </div>
    <div className="flex flex-wrap gap-1.5">
      {items.map((it) => (
        <span
          key={it}
          className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded text-xs font-medium border border-gray-200 dark:border-gray-600"
        >
          {it}
        </span>
      ))}
    </div>
  </div>
);

// ================================================================
// QR Modal
// ================================================================

const QrModal: React.FC<{ project: LiveProject; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  const { tx } = useLanguage();
  if (!project.iosUrl) return null;
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 inline-flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {project.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-5">
            {tx({
              en: "Scan QR code to download iOS app",
              ko: "QR 코드를 스캔하여 iOS 앱을 다운로드하세요",
              uz: "iOS ilovasini yuklab olish uchun QR kodni skanerlang",
            })}
          </p>
          <div className="bg-white p-3 rounded-xl inline-block mb-4 border-2 border-gray-200">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(project.iosUrl)}`}
              alt={`QR Code for ${project.name}`}
              className="w-48 h-48 sm:w-64 sm:h-64"
            />
          </div>
          <a
            href={project.iosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
          >
            {tx({ en: "Open Link", ko: "링크 열기", uz: "Havolani ochish" })}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
