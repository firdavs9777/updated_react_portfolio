// src/pages/About.tsx

import {
  Award,
  BookOpen,
  Code2,
  Globe,
  MapPin,
  Smartphone,
  Zap,
} from "lucide-react";
import React from "react";
import { useLanguage } from "../context/languageContext";
import { SEO } from "../utils/seo";

const SKILL_CATEGORIES = [
  {
    title: { en: "Frontend", ko: "프론트엔드", uz: "Frontend" },
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "React Native",
      "Flutter",
      "Tailwind CSS",
    ],
    color: "blue",
  },
  {
    title: { en: "Backend", ko: "백엔드", uz: "Backend" },
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "Java Spring Boot",
      "AWS Lambda",
      "REST APIs",
    ],
    color: "green",
  },
  {
    title: { en: "Database", ko: "데이터베이스", uz: "Ma'lumotlar bazasi" },
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Procedures"],
    color: "purple",
  },
  {
    title: { en: "Tools & DevOps", ko: "도구 & DevOps", uz: "Vositalar & DevOps" },
    skills: ["Git", "Docker", "AWS", "Firebase", "Vite", "Webpack", "CI/CD"],
    color: "orange",
  },
];

const SPECIALTIES = [
  {
    icon: Code2,
    titleMap: {
      en: "Full-Stack Development",
      ko: "풀스택 개발",
      uz: "Full-Stack Dasturlash",
    },
    descMap: {
      en: "End-to-end web solutions using React, Vue.js, Node.js, and Django",
      ko: "React, Vue.js, Node.js, Django를 활용한 엔드투엔드 웹 솔루션",
      uz: "React, Vue.js, Node.js va Django bilan to'liq veb yechimlar",
    },
    color: "blue",
  },
  {
    icon: Smartphone,
    titleMap: {
      en: "Mobile Apps",
      ko: "모바일 앱",
      uz: "Mobil ilovalar",
    },
    descMap: {
      en: "Cross-platform iOS + Android apps shipped to App Store and Google Play with Flutter",
      ko: "Flutter로 App Store와 Google Play에 출시한 크로스 플랫폼 iOS·Android 앱",
      uz: "Flutter bilan App Store va Google Play'da chiqarilgan iOS va Android ilovalar",
    },
    color: "purple",
  },
  {
    icon: Zap,
    titleMap: {
      en: "Performance Optimization",
      ko: "성능 최적화",
      uz: "Samaradorlik optimallashtirish",
    },
    descMap: {
      en: "Query optimization, code splitting, smart caching, and CI/CD for zero-downtime deployments",
      ko: "쿼리 최적화, 코드 분할, 스마트 캐싱, 무중단 배포를 위한 CI/CD",
      uz: "So'rovlarni optimallashtirish, kod bo'lish, aqlli keshlash va uzilishsiz deploy uchun CI/CD",
    },
    color: "orange",
  },
];

const skillColorClass = (color: string) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    green: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  };
  return colors[color] || colors.blue;
};

const iconBgClass = (color: string) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    green: "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    purple: "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    orange: "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  };
  return colors[color] || colors.blue;
};

export const AboutPage: React.FC = () => {
  const { t, tx } = useLanguage();

  return (
    <>
      <SEO
        title={`${t.about.title} — ${t.hero.name}`}
        description={t.about.description}
        url="https://firdavs.dev/about"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
          {/* Header */}
          <header className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.about.title}
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {tx({
                en: "Full-Stack Developer · Available for hire · Based in Seoul",
                ko: "풀스택 개발자 · 즉시 입사 가능 · 서울 거주",
                uz: "Full-Stack Dasturchi · Ishga tayyor · Seulda joylashgan",
              })}
            </p>
          </header>

          {/* Bio */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {tx({ en: "About Me", ko: "나에 대해", uz: "Men haqimda" })}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>{t.about.description}</p>
              <p>{t.about.extendedDescription}</p>
              <p>
                {tx({
                  en: "Long-term resident of Seoul. Currently at 3R Innovation Inc. building AI-powered EdTech solutions. KIIP Level 5 certified — fully capable of business communication in Korean. Seeking stable, long-term opportunities where I can contribute immediately.",
                  ko: "서울에 장기 거주 중이며, 현재 3R Innovation에서 AI 에듀테크 솔루션을 개발하고 있습니다. KIIP 5단계 수료로 한국어 비즈니스 커뮤니케이션이 원활합니다. 안정적이고 즉시 기여할 수 있는 장기 근무 기회를 찾고 있습니다.",
                  uz: "Seulda uzoq muddatli yashayman. Hozirda 3R Innovation da AI EdTech yechimlarini ishlab chiqyapman. KIIP 5-daraja sertifikatiga ega — koreys tilida ishga doir muloqotni to'liq olib bora olaman. Darhol hissa qo'shadigan barqaror va uzoq muddatli ish imkoniyatlarini qidirmoqdaman.",
                })}
              </p>
            </div>
          </section>

          {/* Work Authorization + Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                {t.about.residence}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {t.about.residenceInfo}
              </p>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                {t.about.languages}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {t.about.languageInfo}
              </p>
            </section>
          </div>

          {/* Specialties */}
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {tx({ en: "What I Specialize In", ko: "전문 분야", uz: "Mutaxassislik sohalarim" })}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {SPECIALTIES.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.titleMap.en}
                    className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${iconBgClass(s.color)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {tx(s.titleMap)}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {tx(s.descMap)}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Core Competencies */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {tx({ en: "Core Competencies", ko: "핵심 역량", uz: "Asosiy ko'nikmalar" })}
            </h2>
            <ul className="space-y-3">
              {(tx({
                en: [
                  "Frontend: Vue.js, Nuxt.js, React, Next.js, Flutter — financial platforms, marketplace apps, and learning management systems",
                  "Backend: Node.js, Express, Django, AWS Lambda — RESTful API design, JWT auth, serverless architecture, SQL Stored Procedures",
                  "Database: MySQL, PostgreSQL, MongoDB — schema design, query optimization, location-based search, real-time data processing",
                  "Mobile: Flutter cross-platform apps shipped to App Store + Play Store with real-time chat, payments, and push notifications",
                  "Project Management: led 4-5 dev teams across multinational collaboration, full lifecycle from planning to deployment",
                  "DevOps: Docker, AWS (EC2, S3, CloudFront, Lambda), CI/CD pipelines, production app maintenance and monitoring",
                ],
                ko: [
                  "프론트엔드: Vue.js, Nuxt.js, React, Next.js, Flutter — 금융 플랫폼, 마켓플레이스, LMS 개발",
                  "백엔드: Node.js, Express, Django, AWS Lambda — RESTful API 설계, JWT 인증, 서버리스 아키텍처, SQL Stored Procedures",
                  "데이터베이스: MySQL, PostgreSQL, MongoDB — 스키마 설계, 쿼리 최적화, 위치 기반 검색, 실시간 처리",
                  "모바일: Flutter 크로스플랫폼 앱을 App Store · Play Store에 출시 — 실시간 채팅, 결제, 푸시 알림",
                  "프로젝트 관리: 4~5명 개발팀 리딩, 다국적 협업, 기획부터 배포까지 전 과정",
                  "DevOps: Docker, AWS(EC2, S3, CloudFront, Lambda), CI/CD 파이프라인, 프로덕션 운영 및 모니터링",
                ],
                uz: [
                  "Frontend: Vue.js, Nuxt.js, React, Next.js, Flutter — moliyaviy platformalar, bozor ilovalari va LMS",
                  "Backend: Node.js, Express, Django, AWS Lambda — RESTful API loyihalash, JWT autentifikatsiya, serverless, SQL Stored Procedures",
                  "Ma'lumotlar bazasi: MySQL, PostgreSQL, MongoDB — sxema loyihalash, so'rov optimallashtirish, geolokatsion qidiruv, real-time qayta ishlash",
                  "Mobil: Flutter kross-platforma ilovalar App Store va Play Store'da — real-time chat, to'lov, push bildirishnomalar",
                  "Loyiha boshqaruvi: 4-5 kishilik jamoalarni boshqargan, xalqaro hamkorlik, rejalashtrishdan deployga qadar",
                  "DevOps: Docker, AWS (EC2, S3, CloudFront, Lambda), CI/CD quvurlari, ishlab chiqarish va monitoring",
                ],
              }) as string[]).map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {tx({ en: "Technical Skills", ko: "기술 스택", uz: "Texnik ko'nikmalar" })}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {SKILL_CATEGORIES.map((category) => (
                <div
                  key={category.title.en}
                  className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {tx(category.title)}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${skillColorClass(category.color)}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Soft Skills */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {tx({ en: "Soft Skills", ko: "소프트 스킬", uz: "Yumshoq ko'nikmalar" })}
            </h2>
            <div className="flex flex-wrap gap-2">
              {(tx({
                en: [
                  "Problem Solving",
                  "Team Collaboration",
                  "Project Management",
                  "Quick Learner",
                  "Effective Communication",
                  "Time Management",
                ],
                ko: [
                  "문제 해결",
                  "팀 협업",
                  "프로젝트 관리",
                  "빠른 학습",
                  "효과적인 커뮤니케이션",
                  "시간 관리",
                ],
                uz: [
                  "Muammolarni hal qilish",
                  "Jamoaviy hamkorlik",
                  "Loyihani boshqarish",
                  "Tez o'rganuvchi",
                  "Samarali muloqot",
                  "Vaqtni boshqarish",
                ],
              }) as string[]).map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              {tx({ en: "Education", ko: "학력", uz: "Ta'lim" })}
            </h2>
            <div className="border-l-4 border-blue-600 pl-5 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {tx({
                  en: "Bachelor of Computer Science and Engineering",
                  ko: "컴퓨터공학 학사",
                  uz: "Kompyuter fanlari va muhandislik bakalavri",
                })}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                {tx({ en: "Sejong University", ko: "세종대학교", uz: "Sejong universiteti" })}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
                {tx({ en: "Graduated: 2022", ko: "졸업: 2022년", uz: "Bitirgan: 2022" })}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-3">
                <strong>
                  {tx({ en: "Key Subjects:", ko: "주요 과목:", uz: "Asosiy fanlar:" })}
                </strong>{" "}
                {tx({
                  en: "Software Engineering, Database Systems, Algorithms, Web Programming, Data Structures",
                  ko: "소프트웨어 공학, 데이터베이스 시스템, 알고리즘, 웹 프로그래밍, 자료구조",
                  uz: "Dasturiy ta'minot muhandisligi, Ma'lumotlar bazasi tizimlari, Algoritmlar, Veb dasturlash, Ma'lumotlar tuzilmasi",
                })}
              </p>
            </div>
          </section>

          {/* Awards */}
          <section className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              {tx({ en: "Awards & Certifications", ko: "수상 및 자격증", uz: "Mukofotlar va sertifikatlar" })}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {tx({
                      en: "HackSeoul 2025 — 2nd Prize",
                      ko: "HackSeoul 2025 — 2등상",
                      uz: "HackSeoul 2025 — 2-o'rin",
                    })}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {tx({
                      en: "AI for Real-World Impact & Future Ventures — 2025",
                      ko: "AI for Real-World Impact & Future Ventures — 2025",
                      uz: "AI for Real-World Impact & Future Ventures — 2025",
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {tx({
                      en: "KIIP Level 5 Completion",
                      ko: "KIIP 5단계 수료",
                      uz: "KIIP 5-daraja tugatish",
                    })}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {tx({
                      en: "Korean Immigration & Integration Program — 2023",
                      ko: "한국 사회통합프로그램 — 2023",
                      uz: "Koreya immigratsiya va integratsiya dasturi — 2023",
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {tx({
                      en: "Outstanding Project Achievement Award",
                      ko: "우수 프로젝트 성과상",
                      uz: "Ajoyib loyiha yutuqlari mukofoti",
                    })}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Ebridge World — 2022</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
