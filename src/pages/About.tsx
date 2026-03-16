// src/pages/AboutPage.tsx

import {
  Award,
  BookOpen,
  Code2,
  Globe,
  Heart,
  MapPin,
  Target,
  Zap,
} from "lucide-react";
import React from "react";
import { useLanguage } from "../context/languageContext";

export const AboutPage: React.FC = () => {
  const { t, language, tx } = useLanguage();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Vue.js",
        "Next.js",
        "Nuxt.js",
        "TypeScript",
        "React Native",
        "Flutter",
        "Tailwind CSS",
      ],
      color: "blue",
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Python",
        "Django",
        "Java Spring Boot",
        "Express.js",
        "AWS Lambda",
        "REST APIs",
      ],
      color: "green",
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Procedures"],
      color: "purple",
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Firebase", "Vite", "Webpack", "CI/CD"],
      color: "orange",
    },
  ];

  const highlights = [
    {
      icon: Code2,
      title: tx({ en: "4+ Years Experience", ko: "4년+ 경력", uz: "4+ yillik tajriba" }),
      description: tx({
        en: "Specializing in full-stack web and mobile application development",
        ko: "풀스택 웹 및 모바일 애플리케이션 개발 전문가",
        uz: "To'liq stekli veb va mobil ilovalar ishlab chiqishga ixtisoslashgan",
      }),
      color: "blue",
    },
    {
      icon: Target,
      title: tx({ en: "17+ Projects", ko: "17개+ 프로젝트", uz: "17+ loyihalar" }),
      description: tx({
        en: "Successfully delivered projects of various scales and complexities",
        ko: "성공적으로 완료된 다양한 규모의 프로젝트",
        uz: "Turli ko'lam va murakkablikdagi loyihalar muvaffaqiyatli yakunlangan",
      }),
      color: "green",
    },
    {
      icon: Zap,
      title: tx({ en: "Performance Expert", ko: "성능 최적화", uz: "Samaradorlik mutaxassisi" }),
      description: tx({
        en: "40% faster load times and 35% improved code efficiency",
        ko: "로딩 속도 40% 개선 및 코드 효율성 35% 향상",
        uz: "Yuklash tezligi 40% va kod samaradorligi 35% yaxshilangan",
      }),
      color: "purple",
    },
    {
      icon: Heart,
      title: tx({ en: "Passionate Learner", ko: "열정적인 학습자", uz: "Ishtiyoqli o'rganuvchi" }),
      description: tx({
        en: "Continuously learning and adapting to latest tech trends",
        ko: "최신 기술 트렌드를 지속적으로 학습하고 적용",
        uz: "Eng so'nggi texnologiya tendentsiyalarini doimiy o'rganish va qo'llash",
      }),
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      green: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30",
      green: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30",
      purple: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30",
      orange: "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.about.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            {tx({
              en: "A passionate full-stack developer dedicated to creating innovative solutions",
              ko: "혁신적인 솔루션을 만드는 것에 열정을 가진 풀스택 개발자",
              uz: "Innovatsion yechimlar yaratishga bag'ishlangan ishtiyoqli to'liq stekli dasturchi",
            })}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${getIconColorClasses(highlight.color)} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* About Text */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {tx({ en: "About Me", ko: "나에 대해", uz: "Men haqimda" })}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t.about.description}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {tx({
                  en: "I specialize in creating user-centric digital solutions and enjoy solving complex problems with elegant code. With experience spanning the entire development stack from frontend to backend, I contribute to building innovative products that make a real impact.",
                  ko: "사용자 중심의 디지털 솔루션을 만드는 것을 전문으로 하며, 복잡한 문제를 우아한 코드로 해결하는 것을 즐깁니다. 프론트엔드부터 백엔드까지 전체 개발 스택을 아우르는 경험을 바탕으로, 혁신적인 제품을 만들어내는 데 기여하고 있습니다.",
                  uz: "Foydalanuvchiga yo'naltirilgan raqamli yechimlar yaratishga ixtisoslashganman va murakkab muammolarni nafis kod bilan hal qilishdan zavqlanaman. Frontend dan backend gacha bo'lgan butun ishlab chiqish stekidagi tajribam asosida, haqiqiy ta'sir ko'rsatadigan innovatsion mahsulotlarni yaratishga hissa qo'shaman.",
                })}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {tx({
                  en: "Currently working at 3R Innovation Inc. as a Full-Stack Developer, building technology solutions that support student learning and wellbeing in the AI EdTech space. I believe strongly in collaboration, code quality, and continuous learning in this rapidly evolving tech landscape.",
                  ko: "현재 3R 이노베이션에서 풀스택 개발자로 일하며, AI 에듀테크 분야에서 학생들의 학습과 웰빙을 지원하는 기술 솔루션을 개발하고 있습니다. 협업과 코드 품질에 대한 강한 신념을 가지고 있으며, 팀과 함께 최고의 결과를 만들어내는 것을 중요하게 생각합니다.",
                  uz: "Hozirda 3R Innovation Inc. da to'liq stekli dasturchi sifatida ishlayman, AI EdTech sohasida talabalarning o'qishi va farovonligini qo'llab-quvvatlaydigan texnologik yechimlar yarataman. Tez rivojlanayotgan texnologiya landshaftida hamkorlik, kod sifati va doimiy o'rganishga qat'iy ishonaman.",
                })}
              </p>
            </div>

            {/* Personal Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {t.about.residence}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {t.about.residenceInfo}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  {t.about.languages}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {t.about.languageInfo}
                </p>
              </div>
            </div>

            {/* What I Do Best */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {tx({ en: "What I Do Best", ko: "나의 강점", uz: "Eng yaxshi qiladigan ishlarim" })}
              </h3>
              <ul className="space-y-3">
                {(tx({
                  en: [
                    "Building scalable and maintainable web applications",
                    "Implementing RESTful APIs and microservices architecture",
                    "Performance optimization and code refactoring",
                    "Cross-platform mobile app development (Flutter, React Native)",
                    "Leading teams and mentoring developers for project success",
                  ],
                  ko: [
                    "확장 가능하고 유지보수가 용이한 웹 애플리케이션 설계 및 개발",
                    "RESTful API 및 마이크로서비스 아키텍처 구현",
                    "성능 최적화 및 코드 리팩토링을 통한 품질 개선",
                    "크로스 플랫폼 모바일 애플리케이션 개발 (Flutter, React Native)",
                    "팀 협업 및 기술 멘토링으로 프로젝트 성공 주도",
                  ],
                  uz: [
                    "Kengaytiriladigan va texnik xizmat ko'rsatish oson bo'lgan veb ilovalarni loyihalash va ishlab chiqish",
                    "RESTful API va mikroservislar arxitekturasini joriy etish",
                    "Samaradorlikni optimallashtirish va kodni qayta ishlash orqali sifatni yaxshilash",
                    "Kross-platformali mobil ilovalarni ishlab chiqish (Flutter, React Native)",
                    "Jamoaviy hamkorlik va texnik mentorlik orqali loyiha muvaffaqiyatini ta'minlash",
                  ],
                }) as string[]).map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {tx({ en: "Technical Skills", ko: "기술 스택", uz: "Texnik ko'nikmalar" })}
            </h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)} dark:bg-opacity-20 dark:border-opacity-30`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {tx({ en: "Soft Skills", ko: "소프트 스킬", uz: "Yumshoq ko'nikmalar" })}
              </h4>
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
                }) as string[]).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            {tx({ en: "Education", ko: "학력", uz: "Ta'lim" })}
          </h3>
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              {tx({
                en: "Bachelor of Computer Science and Engineering",
                ko: "컴퓨터공학 및 공학 학사",
                uz: "Kompyuter fanlari va muhandislik bakalavri",
              })}
            </h4>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {tx({ en: "Sejong University", ko: "세종대학교", uz: "Sejong universiteti" })}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {tx({ en: "Graduated: 2022", ko: "졸업: 2022년", uz: "Bitirgan: 2022" })}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
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
        </div>

        {/* Awards Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-600" />
            {tx({ en: "Awards & Certifications", ko: "수상 및 자격증", uz: "Mukofotlar va sertifikatlar" })}
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {tx({
                    en: "KIIP Level 5 Completion",
                    ko: "KIIP 레벨 5 수료",
                    uz: "KIIP 5-daraja tugatish",
                  })}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {tx({
                    en: "Korean Immigration & Integration Program - 2023",
                    ko: "한국 이민 통합 프로그램 - 2023",
                    uz: "Koreya immigratsiya va integratsiya dasturi - 2023",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {tx({
                    en: "Outstanding Project Achievement Award",
                    ko: "우수 프로젝트 성과상",
                    uz: "Ajoyib loyiha yutuqlari mukofoti",
                  })}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {tx({
                    en: "Ebridge World - 2022",
                    ko: "에브리지 월드 - 2022",
                    uz: "Ebridge World - 2022",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
