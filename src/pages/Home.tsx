// src/pages/Home.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Download,
  Github,
  Globe,
  Linkedin,
  Smartphone,
  Trophy,
  Users,
} from "lucide-react";
import { useLanguage } from "../context/languageContext";
import { SEO } from "../utils/seo";
import { BANANATALK_USERS_DISPLAY, STORE_LINKS } from "../data/site-facts";

const TECH_STACK = [
  "Node.js",
  "Django",
  "REST API",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Java · Spring Boot (learning)",
  "React",
  "Vue.js",
  "Flutter",
  "AWS",
];

export const HomePage: React.FC = () => {
  const { t, tx } = useLanguage();
  const navigate = useNavigate();

  const resumeHref = tx({
    en: "/Firdavs_Mutalipov_CV_EN.pdf",
    ko: "/Firdavs_Mutalipov_CV_KO.pdf",
    uz: "/Firdavs_Mutalipov_CV_UZ.pdf",
  });

  const resumeDownload = tx({
    en: "Firdavs_Mutalipov_CV_EN.pdf",
    ko: "Firdavs_Mutalipov_CV_KO.pdf",
    uz: "Firdavs_Mutalipov_CV_UZ.pdf",
  });

  return (
    <>
      <SEO
        title={`${t.hero.name} — ${t.hero.title}`}
        description={t.hero.subtitle}
        url="https://firdavs.dev"
      />

      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* ============================================================== */}
        {/* HERO                                                            */}
        {/* ============================================================== */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12 sm:pb-16">
          {/* Open-to-work pill */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-xs sm:text-sm font-medium">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {tx({
                  en: "Open to Work",
                  ko: "이직 희망 · 채용 제안 환영",
                  uz: "Yangi takliflarga ochiq",
                })}
              </span>
              <span className="hidden sm:inline opacity-50">·</span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {tx({
                  en: "Authorized to work in Korea, no sponsorship required",
                  ko: "한국 내 합법 취업 가능 · 스폰서십 불필요",
                  uz: "Koreyada qonuniy ishlash huquqiga ega · homiylik talab qilinmaydi",
                })}
              </span>
            </div>
          </div>

          {/* Greeting + Name + Title */}
          <div className="text-center">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-3">
              {t.hero.greeting}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 leading-tight">
              {tx({ en: "Firdavs Mutalipov", ko: "Firdavs Mutalipov", uz: "Firdavs Mutalipov" })}
              <span className="block sm:inline text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-0 sm:ml-3 text-gray-700 dark:text-gray-300 font-semibold">
                ({t.hero.name})
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              {t.hero.title}
            </h2>

            {/* One-liner */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {t.hero.subtitle}
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-10">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-white/80 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-8 max-w-xl mx-auto">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] sm:hover:-translate-y-0.5 min-h-[48px]"
              >
                {t.hero.cta}
                <ChevronRight className="w-5 h-5" />
              </button>

              <a
                href={resumeHref}
                download={resumeDownload}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 active:scale-[0.98] sm:hover:-translate-y-0.5 min-h-[48px]"
              >
                <Download className="w-5 h-5" />
                {t.hero.resume}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://github.com/firdavs9777"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 inline-flex items-center justify-center rounded-lg bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors active:scale-95"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/firdavs-mutalipov-a630ba185/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 inline-flex items-center justify-center rounded-lg bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500 transition-colors active:scale-95"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* FEATURED WORK                                                   */}
        {/* ============================================================== */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs sm:text-sm font-medium mb-3">
              <Globe className="w-3.5 h-3.5" />
              {tx({
                en: "Live products I built and run",
                ko: "직접 만들고 운영 중인 라이브 제품",
                uz: "Men yaratgan va boshqarayotgan faol mahsulotlar",
              })}
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {tx({ en: "Featured Work", ko: "주요 작업", uz: "Asosiy ishlar" })}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* BananaTalk */}
            <FeaturedCard
              emoji="🌍"
              name="BananaTalk"
              tagline={tx({
                en: "Language exchange · 100+ languages",
                ko: "언어 교환 · 100+ 언어",
                uz: "Til almashish · 100+ til",
              })}
              description={tx({
                en: `Real conversations with native speakers — instant chat, voice messages, smart translation, AI study tools. ${BANANATALK_USERS_DISPLAY} users across iOS and Android. Free to use.`,
                ko: `원어민과 실제 대화 — 실시간 채팅, 음성 메시지, 스마트 번역, AI 학습 도구. iOS와 Android에서 ${BANANATALK_USERS_DISPLAY} 유저. 무료로 이용 가능.`,
                uz: `Ona tili so'zlashuvchilar bilan haqiqiy suhbatlar — tezkor chat, ovozli xabarlar, aqlli tarjimon, AI o'quv vositalari. iOS va Android'da ${BANANATALK_USERS_DISPLAY} foydalanuvchi. Bepul foydalanish mumkin.`,
              })}
              metric={BANANATALK_USERS_DISPLAY}
              metricLabel={tx({ en: "users", ko: "유저", uz: "foydalanuvchi" })}
              stack={["Flutter", "Node.js", "MongoDB", "WebRTC", "Firebase", "Socket.io"]}
              website="https://banatalk.com"
              appStore={STORE_LINKS.bananatalk.ios}
              playStore={STORE_LINKS.bananatalk.android}
              accent="blue"
            />

            {/* TezSell */}
            <FeaturedCard
              emoji="🛒"
              name="TezSell"
              tagline={tx({
                en: "Neighborhood marketplace · iOS + Android",
                ko: "동네 마켓플레이스 · iOS + Android",
                uz: "Mahalla bozori · iOS + Android",
              })}
              description={tx({
                en: "Buy and sell items, offer services, and list real estate with neighbors. Direct chat, secure transactions, free to use. Live on App Store and Google Play.",
                ko: "물건 사고팔기, 서비스 제공, 부동산 등록까지. 직접 채팅, 안전한 거래, 무료로 이용 가능. App Store와 Google Play에서 운영 중.",
                uz: "Narsalarni sotib oling va soting, xizmatlar taklif qiling, ko'chmas mulk e'lonlarini joylashtiring. To'g'ridan-to'g'ri chat, xavfsiz, bepul foydalanish mumkin. App Store va Google Play'da faol.",
              })}
              metric={tx({ en: "Live", ko: "라이브", uz: "Faol" })}
              metricLabel={tx({ en: "in production", ko: "운영 중", uz: "ishlamoqda" })}
              stack={["Flutter", "Django", "PostgreSQL", "Redis", "Digital Ocean", "Nginx"]}
              website="https://webtezsell.com"
              appStore={STORE_LINKS.tezsell.ios}
              playStore={STORE_LINKS.tezsell.android}
              accent="orange"
            />
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/live-projects")}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors min-h-[44px]"
            >
              {tx({
                en: "View deep-dive on Live Projects",
                ko: "라이브 프로젝트 상세 보기",
                uz: "Faol loyihalar haqida batafsil",
              })}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PROOF BAND                                                      */}
        {/* ============================================================== */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* BananaTalk user count */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-3">
                <Users className="w-5 h-5" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wide">
                  {tx({ en: "Shipped products", ko: "출시 제품", uz: "Chiqarilgan mahsulotlar" })}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {BANANATALK_USERS_DISPLAY}
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {tx({
                  en: "BananaTalk active users, combined across App Store and Google Play",
                  ko: "App Store와 Google Play 합산 BananaTalk 활성 유저",
                  uz: "App Store va Google Play'da jami faol BananaTalk foydalanuvchilari",
                })}
              </p>
            </div>

            {/* AngelHack HackSeoul 2nd Prize */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-2xl border border-yellow-200 dark:border-yellow-800/50 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400 mb-3">
                <Trophy className="w-5 h-5" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wide">
                  {tx({ en: "Award", ko: "수상", uz: "Mukofot" })}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {tx({ en: "Coupang AngelHack HackSeoul 2025", ko: "쿠팡 주최 AngelHack HackSeoul 2025", uz: "Coupang AngelHack HackSeoul 2025" })}
              </div>
              <p className="text-base sm:text-lg font-semibold text-yellow-700 dark:text-yellow-400 mb-2">
                {tx({ en: "2nd Prize", ko: "2위", uz: "2-o'rin" })}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {tx({
                  en: "AI for Real-World Impact & Future Ventures",
                  ko: "AI for Real-World Impact & Future Ventures",
                  uz: "AI for Real-World Impact & Future Ventures",
                })}
              </p>
            </div>

            {/* 5+ years experience */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-3">
                <Smartphone className="w-5 h-5" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wide">
                  {tx({ en: "Experience", ko: "경력", uz: "Tajriba" })}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {tx({ en: "5+ years", ko: "5년+", uz: "5+ yil" })}
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {tx({
                  en: "backend-focused full-stack · Node · Django · now Spring Boot",
                  ko: "백엔드 중심 풀스택 · Node · Django · Spring Boot 학습 중",
                  uz: "backendga yo'naltirilgan full-stack · Node · Django · hozir Spring Boot",
                })}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* CONTACT CTA                                                     */}
        {/* ============================================================== */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-10 text-white shadow-xl text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              {tx({
                en: "Let's build something together",
                ko: "함께 일하고 싶습니다",
                uz: "Birgalikda yaratamiz",
              })}
            </h3>
            <p className="text-blue-100 text-sm sm:text-base mb-6 max-w-xl mx-auto">
              {tx({
                en: "Open to full-time backend roles in Seoul. I reply within 24–48 hours.",
                ko: "서울 지역 정규직 백엔드 포지션을 찾고 있습니다. 24~48시간 이내에 회신드립니다.",
                uz: "Seuldagi doimiy backend lavozimlariga ochiqman. 24–48 soat ichida javob beraman.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-xl mx-auto">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors active:scale-[0.98] min-h-[44px]"
              >
                {t.hero.cta}
                <ChevronRight className="w-5 h-5" />
              </button>
              <a
                href="mailto:fmutalipov7@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors active:scale-[0.98] min-h-[44px]"
              >
                fmutalipov7@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// ================================================================
// Featured product card subcomponent
// ================================================================

interface FeaturedCardProps {
  emoji: string;
  name: string;
  tagline: string;
  description: string;
  metric: string;
  metricLabel: string;
  stack: string[];
  website?: string;
  appStore?: string;
  playStore?: string;
  accent: "blue" | "orange";
}

const accentStyles = {
  blue: {
    card: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 border-blue-200 dark:border-indigo-800",
    metric: "text-blue-700 dark:text-blue-400",
    cta: "bg-blue-600 hover:bg-blue-700",
  },
  orange: {
    card: "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-orange-900/20 border-orange-200 dark:border-orange-800",
    metric: "text-orange-700 dark:text-orange-400",
    cta: "bg-orange-600 hover:bg-orange-700",
  },
};

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  emoji,
  name,
  tagline,
  description,
  metric,
  metricLabel,
  stack,
  website,
  appStore,
  playStore,
  accent,
}) => {
  const { tx } = useLanguage();
  const styles = accentStyles[accent];

  return (
    <article
      className={`rounded-2xl border ${styles.card} p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col`}
    >
      <header className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-3xl sm:text-4xl flex-shrink-0">{emoji}</span>
          <div className="min-w-0">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">
              {name}
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
              {tagline}
            </p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className={`text-lg sm:text-xl font-bold leading-none ${styles.metric}`}>
            {metric}
          </div>
          <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {metricLabel}
          </div>
        </div>
      </header>

      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {stack.map((s) => (
          <span
            key={s}
            className="px-2 py-0.5 bg-white/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-300 rounded text-[11px] sm:text-xs border border-gray-200 dark:border-gray-600"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 ${styles.cta} text-white text-xs sm:text-sm font-medium rounded-lg transition-colors active:scale-95 min-h-[40px]`}
          >
            <Globe className="w-3.5 h-3.5" />
            {tx({ en: "Website", ko: "웹사이트", uz: "Veb-sayt" })}
          </a>
        )}
        {appStore && (
          <a
            href={appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-medium rounded-lg transition-colors active:scale-95 min-h-[40px]"
          >
            <Smartphone className="w-3.5 h-3.5" />
            App Store
          </a>
        )}
        {playStore && (
          <a
            href={playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors active:scale-95 min-h-[40px]"
          >
            <Smartphone className="w-3.5 h-3.5" />
            Google Play
          </a>
        )}
      </div>
    </article>
  );
};
