// src/pages/AboutPage.tsx (Enhanced)

import {
  Award,
  BookOpen,
  Globe,
  Lightbulb,
  MapPin,
  MessageSquare,
  Target,
  Users,
} from "lucide-react";
import React from "react";
import { useLanguage } from "../../context/languageContext";

export const AboutPage: React.FC = () => {
  const { t, language, tx } = useLanguage();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Vue.js",
        "TypeScript",
        "Flutter",
        "React Native",
        "HTML5",
        "CSS3",
      ],
      color: "blue",
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Python",
        "Django",
        "AWS Lambda",
        "REST APIs",
        "Java Spring Boot",
      ],
      color: "green",
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "NoSQL", "SQL Procedures"],
      color: "purple",
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Vite", "Webpack"],
      color: "orange",
    },
  ];

  const softSkills = [
    {
      icon: <Users className="w-6 h-6" />,
      title: tx({ en: "Teamwork & Collaboration", ko: "팀워크 & 협업", uz: "Jamoaviy ish va hamkorlik" }),
      description: tx({
        en: "Effectively collaborate in multicultural teams to achieve common goals",
        ko: "다문화 팀에서 효과적으로 협업하며 공동 목표 달성을 위해 노력합니다",
        uz: "Umumiy maqsadlarga erishish uchun ko'p madaniyatli jamoalarda samarali hamkorlik qilish",
      }),
      color: "blue",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: tx({ en: "Communication Skills", ko: "의사소통 능력", uz: "Muloqot ko'nikmalari" }),
      description: tx({
        en: "Clearly communicate complex technical concepts and maintain smooth team communication",
        ko: "복잡한 기술적 개념을 명확하게 전달하고 팀원들과 원활한 소통을 유지합니다",
        uz: "Murakkab texnik tushunchalarni aniq ifodalash va jamoa bilan muammosiz muloqotni saqlash",
      }),
      color: "green",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: tx({ en: "Problem Solving", ko: "문제 해결", uz: "Muammolarni hal qilish" }),
      description: tx({
        en: "Find and implement creative, efficient solutions in challenging projects",
        ko: "도전적인 프로젝트에서 창의적이고 효율적인 해결책을 찾아 구현합니다",
        uz: "Qiyin loyihalarda ijodiy va samarali yechimlarni topish va joriy etish",
      }),
      color: "purple",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: tx({ en: "Adaptability & Learning", ko: "적응력 & 학습", uz: "Moslashuvchanlik va o'rganish" }),
      description: tx({
        en: "Adapt to rapidly changing tech environments and continuously learn new technologies",
        ko: "빠르게 변하는 기술 환경에 적응하고 지속적으로 새로운 기술을 습득합니다",
        uz: "Tez o'zgaruvchan texnologiya muhitiga moslashish va doimiy ravishda yangi texnologiyalarni o'rganish",
      }),
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getSoftSkillColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      green: "bg-green-50 border-green-200 text-green-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600",
      orange: "bg-orange-50 border-orange-200 text-orange-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.about.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
        </div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* About Text */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {tx({ en: "Professional Overview", ko: "전문 개요", uz: "Professional sharh" })}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t.about.description}
              </p>

              {/* Extended Description */}
              <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {tx({
                    en: "Throughout my career, I have successfully collaborated with diverse teams across different time zones and cultural backgrounds, demonstrating adaptability and effective cross-cultural communication. I believe that great software is built through strong teamwork, clear communication, and shared vision.",
                    ko: "경력 전반에 걸쳐 다양한 시간대와 문화적 배경을 가진 팀들과 성공적으로 협업해왔으며, 적응력과 효과적인 다문화 의사소통 능력을 보여주었습니다. 훌륭한 소프트웨어는 강력한 팀워크, 명확한 의사소통, 그리고 공유된 비전을 통해 만들어진다고 믿습니다.",
                    uz: "Karyeram davomida turli vaqt zonalari va madaniy kelib chiqishdagi jamoalar bilan muvaffaqiyatli hamkorlik qildim, moslashuvchanlik va samarali madaniyatlararo muloqotni namoyish etdim. Ajoyib dasturiy ta'minot kuchli jamoaviy ish, aniq muloqot va umumiy qarash orqali yaratiladi deb ishonaman.",
                  })}
                </p>
              </div>
            </div>

            {/* Personal Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  {t.about.residence}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {t.about.residenceInfo}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  {t.about.languages}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {t.about.languageInfo}
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {tx({ en: "Technical Skills", ko: "기술 스택", uz: "Texnik ko'nikmalar" })}
            </h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {tx({
              en: "Core Competencies & Soft Skills",
              ko: "핵심 역량 & 소프트 스킬",
              uz: "Asosiy qobiliyatlar va yumshoq ko'nikmalar",
            })}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${getSoftSkillColorClasses(skill.color)} hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`p-3 rounded-full ${getColorClasses(skill.color)}`}
                  >
                    {skill.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {skill.title}
                </h4>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            {tx({ en: "Education", ko: "학력", uz: "Ta'lim" })}
          </h3>
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="text-xl font-semibold text-gray-900">
              {tx({
                en: "Bachelor of Computer Science and Engineering",
                ko: "컴퓨터공학 및 공학 학사",
                uz: "Kompyuter fanlari va muhandislik bakalavri",
              })}
            </h4>
            <p className="text-blue-600 font-medium">
              {tx({ en: "Sejong University", ko: "세종대학교", uz: "Sejong universiteti" })}
            </p>
            <p className="text-gray-600 mt-2">
              {tx({ en: "Graduated: 2022", ko: "졸업: 2022년", uz: "Bitirgan: 2022" })}
            </p>
            <p className="text-gray-600 mt-2">
              <strong>
                {tx({ en: "Key Subjects:", ko: "주요 과목:", uz: "Asosiy fanlar:" })}
              </strong>{" "}
              {tx({
                en: "Software Engineering, Database Systems, Algorithms, Web Programming, Team Project Management",
                ko: "소프트웨어 공학, 데이터베이스 시스템, 알고리즘, 웹 프로그래밍, 팀 프로젝트 관리",
                uz: "Dasturiy ta'minot muhandisligi, Ma'lumotlar bazasi tizimlari, Algoritmlar, Veb dasturlash, Jamoaviy loyiha boshqaruvi",
              })}
            </p>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-600" />
            {tx({ en: "Awards & Certifications", ko: "수상 및 자격증", uz: "Mukofotlar va sertifikatlar" })}
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {tx({
                    en: "KIIP Level 5 Completion",
                    ko: "KIIP 레벨 5 수료",
                    uz: "KIIP 5-daraja tugatish",
                  })}
                </h4>
                <p className="text-gray-600">
                  {tx({
                    en: "Korean Immigration & Integration Program - 2023",
                    ko: "한국 이민 통합 프로그램 - 2023",
                    uz: "Koreya immigratsiya va integratsiya dasturi - 2023",
                  })}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {tx({
                    en: "Advanced Korean language and cultural integration certification",
                    ko: "고급 한국어 및 문화 통합 인증",
                    uz: "Ilg'or koreys tili va madaniy integratsiya sertifikati",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {tx({
                    en: "Outstanding Project Achievement Award",
                    ko: "우수 프로젝트 성과상",
                    uz: "Ajoyib loyiha yutuqlari mukofoti",
                  })}
                </h4>
                <p className="text-gray-600">
                  {tx({ en: "Ebridge World - 2022", ko: "에브리지 월드 - 2022", uz: "Ebridge World - 2022" })}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {tx({
                    en: "Recognition for exceptional teamwork and project delivery",
                    ko: "뛰어난 팀워크와 프로젝트 성과에 대한 인정",
                    uz: "Ajoyib jamoaviy ish va loyiha yetkazib berish uchun e'tirof",
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
