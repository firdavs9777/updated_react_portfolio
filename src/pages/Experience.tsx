// src/pages/Experience.tsx

import {
  Award,
  Calendar,
  MapPin,
  Zap,
  Users,
  Target,
  Code2,
  Trophy,
} from "lucide-react";
import React from "react";
import { useLanguage } from "../context/languageContext";
import { SEO } from "../utils/seo";
import { experiences } from "../data/experience";
import { BANANATALK_USERS_DISPLAY, TEZSELL_USERS_DISPLAY } from "../data/site-facts";

export const ExperiencePage: React.FC = () => {
  const { t, tx } = useLanguage();

  return (
    <>
      <SEO
        title={`${t.experience.title} — ${t.hero.name}`}
        description={tx({
          en: "5+ years of backend-focused full-stack work across 3R Innovation, Quintet Systems, and Ebridge World — shipped financial platforms, AI EdTech, and consumer apps.",
          ko: "3R Innovation, Quintet Systems, Ebridge World에서 5년 이상의 백엔드 중심 풀스택 경력 — 금융 플랫폼, AI 에듀테크, 소비자 앱 출시.",
          uz: "3R Innovation, Quintet Systems va Ebridge World'da 5+ yillik backendga yo'naltirilgan full-stack tajriba — moliyaviy platformalar, AI EdTech va iste'molchi ilovalari.",
        })}
        url="https://firdavs.dev/experience"
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experience.title}
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded"></div>
        </div>

        {/* Career Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {tx({ en: "Career Highlights", ko: "주요 성과", uz: "Karyera yutuqlari" })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-2xl border border-yellow-200 dark:border-yellow-800/50 p-5 sm:p-6 shadow-sm">
              <Trophy className="w-7 h-7 text-yellow-600 dark:text-yellow-400 mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                {tx({ en: "Coupang AngelHack HackSeoul 2025", ko: "쿠팡 주최 AngelHack HackSeoul 2025", uz: "Coupang AngelHack HackSeoul 2025" })}
              </h3>
              <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-400 mb-2">
                {tx({ en: "2nd Prize", ko: "2위", uz: "2-o'rin" })}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {tx({
                  en: "AI for Real-World Impact & Future Ventures — built an AI clothing color-matching app as team lead.",
                  ko: "AI for Real-World Impact & Future Ventures — 팀 리드로서 AI 의류 색상 매칭 앱 개발.",
                  uz: "AI for Real-World Impact & Future Ventures — jamoa rahbari sifatida AI kiyim rang moslash ilovasini yaratdim.",
                })}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6 shadow-sm">
              <Users className="w-7 h-7 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                {tx({
                  en: `${BANANATALK_USERS_DISPLAY} users`,
                  ko: `${BANANATALK_USERS_DISPLAY} 유저`,
                  uz: `${BANANATALK_USERS_DISPLAY} foydalanuvchi`,
                })}
              </h3>
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">
                {tx({ en: "On BananaTalk", ko: "BananaTalk에서", uz: "BananaTalk'da" })}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {tx({
                  en: `BananaTalk live on iOS + Android — that's where these active users come from. TezSell is also live on iOS + Android with ${TEZSELL_USERS_DISPLAY} users.`,
                  ko: `BananaTalk가 iOS·Android에서 운영 중이며, 이 활성 유저 수치는 BananaTalk 기준입니다. TezSell도 iOS·Android에서 운영 중이며 유저 ${TEZSELL_USERS_DISPLAY}명입니다.`,
                  uz: `BananaTalk iOS va Android'da faol — ushbu faol foydalanuvchilar soni BananaTalk'ga tegishli. TezSell ham iOS va Android'da faol, ${TEZSELL_USERS_DISPLAY} foydalanuvchi.`,
                })}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6 shadow-sm">
              <Code2 className="w-7 h-7 text-purple-600 dark:text-purple-400 mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                {tx({ en: "Team Leadership", ko: "팀 리더십", uz: "Jamoa rahbarligi" })}
              </h3>
              <p className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-2">
                {tx({ en: "4–5-person dev teams · multinational", ko: "4~5명 개발팀 · 다국적", uz: "4-5 kishilik jamoalar · xalqaro" })}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {tx({
                  en: "Led cross-functional teams from planning to deployment — bridging engineering and business.",
                  ko: "기획부터 배포까지 다기능 팀 리딩 — 엔지니어링과 비즈니스의 가교 역할.",
                  uz: "Rejalashtrishdan deployga qadar funksiyalararo jamoalarni boshqardim — muhandislik va biznes o'rtasida ko'prik.",
                })}
              </p>
            </div>
          </div>
        </section>

        {/* What I Bring Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {tx({
                en: "What I Bring",
                ko: "저의 강점",
                uz: "Men nima taklif qilaman",
              })}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {tx({
                    en: "Backend-first, Full-Stack Capable",
                    ko: "백엔드 중심의 풀스택 역량",
                    uz: "Backendga yo'naltirilgan full-stack",
                  })}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {tx({
                    en: "I understand the entire development process from frontend to backend.",
                    ko: "프론트엔드부터 백엔드까지 전체 개발 프로세스를 이해하고 있습니다.",
                    uz: "Frontenddan backendgacha bo'lgan butun ishlab chiqish jarayonini tushunaman.",
                  })}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {tx({
                    en: "Collaboration-Focused",
                    ko: "협업 중심",
                    uz: "Hamkorlikka yo'naltirilgan",
                  })}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {tx({
                    en: "I value working with teams to achieve business goals together.",
                    ko: "팀과 함께 일하며 비즈니스 목표를 달성하는 것을 중요하게 생각합니다.",
                    uz: "Biznes maqsadlariga birgalikda erishish uchun jamoalar bilan ishlashni qadrlayman.",
                  })}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {tx({
                    en: "Quick Learner",
                    ko: "빠른 학습 능력",
                    uz: "Tez o'rganuvchi",
                  })}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {tx({
                    en: "I quickly learn new technologies and tools and apply them to projects.",
                    ko: "새로운 기술과 도구를 빠르게 습득하고 프로젝트에 적용합니다.",
                    uz: "Yangi texnologiya va vositalarni tez o'rganaman va loyihalarga qo'llayman.",
                  })}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {tx({
                    en: "Problem Solver",
                    ko: "문제 해결 능력",
                    uz: "Muammolarni hal qiluvchi",
                  })}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {tx({
                    en: "I enjoy analyzing complex problems and finding practical solutions.",
                    ko: "복잡한 문제를 분석하고 실용적인 해결책을 찾는 것을 즐깁니다.",
                    uz: "Murakkab muammolarni tahlil qilish va amaliy yechimlarni topishdan zavqlanaman.",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 ${
                index % 2 === 0
                  ? "animate-slide-in-left"
                  : "animate-slide-in-right"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {tx(exp.company)}
                    </h3>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-sm font-medium border border-green-200 dark:border-green-800">
                        {t.experience.current}
                      </span>
                    )}
                  </div>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {tx(exp.position)}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{tx(exp.duration)}</span>
                    </div>
                    <span className="hidden sm:inline">&bull;</span>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{tx(exp.location)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {tx({
                    en: "Technologies Used",
                    ko: "사용 기술",
                    uz: "Foydalanilgan texnologiyalar",
                  })}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  {t.experience.achievements}
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{tx(achievement)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Decoration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 px-5 py-2.5 rounded-full shadow-md">
            <div className="w-2.5 h-2.5 bg-purple-600 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
              {tx({
                en: "Career Journey",
                ko: "경력 요약",
                uz: "Karyera sayohati",
              })}
            </span>
            <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
