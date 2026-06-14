// src/pages/Certificates.tsx

import React from "react";
import { Award, Calendar, ExternalLink, Clock } from "lucide-react";
import { useLanguage } from "../context/languageContext";

export const CertificatesPage: React.FC = () => {
  const { language, tx } = useLanguage();

  const certificates = [
    {
      id: 1,
      title: tx({
        en: "Complete React Developer",
        ko: "React 완전정복",
        uz: "To'liq React dasturchi",
      }),
      issuer: "Udemy",
      date: "2024",
      description: tx({
        en: "Completed comprehensive React developer course including React, Redux, Hooks, Context API, GraphQL, and Firebase.",
        ko: "React, Redux, Hooks, Context API, GraphQL, Firebase를 포함한 완전한 React 개발자 과정을 완료했습니다.",
        uz: "React, Redux, Hooks, Context API, GraphQL va Firebase ni o'z ichiga olgan to'liq React dasturchi kursini tamomladim.",
      }),
      url: "#",
      image: "\uD83C\uDF93",
      status: "completed",
    },
    {
      id: 2,
      title: tx({
        en: "Full Stack Web Development",
        ko: "풀스택 웹 개발",
        uz: "To'liq stekli veb dasturlash",
      }),
      issuer: "Coursera",
      date: "2023",
      description: tx({
        en: "Completed full stack web development course using MERN stack.",
        ko: "MERN 스택을 활용한 풀스택 웹 개발 과정을 완료했습니다.",
        uz: "MERN stekidan foydalangan holda to'liq stekli veb dasturlash kursini tamomladim.",
      }),
      url: "#",
      image: "\uD83D\uDCBB",
      status: "completed",
    },
    {
      id: 3,
      title: tx({
        en: "AWS Cloud Fundamentals",
        ko: "AWS 클라우드 기초",
        uz: "AWS bulut asoslari",
      }),
      issuer: "AWS",
      date: "2023",
      description: tx({
        en: "Acquired foundational knowledge of AWS cloud infrastructure and services.",
        ko: "AWS 클라우드 인프라 및 서비스에 대한 기초 지식을 습득했습니다.",
        uz: "AWS bulut infratuzilmasi va xizmatlari bo'yicha asosiy bilimlarni egalladi.",
      }),
      url: "#",
      image: "\u2601\uFE0F",
      status: "completed",
    },
    {
      id: 4,
      title: "AWS Certified Solutions Architect - Associate (SAA-C03)",
      issuer: "AWS",
      date: tx({ en: "In Progress", ko: "준비 중", uz: "Tayyorlanmoqda" }),
      description: tx({
        en: "Currently preparing for the AWS Certified Solutions Architect Associate certification. Developing comprehensive expertise in cloud computing, infrastructure design, security, cost optimization, and AWS solution architecture.",
        ko: "AWS 클라우드 아키텍처 설계 및 배포에 대한 전문 지식을 습득하기 위해 현재 준비 중입니다. 클라우드 컴퓨팅, 인프라 설계, 보안, 비용 최적화 등 종합적인 AWS 솔루션 아키텍트 역량을 개발하고 있습니다.",
        uz: "AWS Certified Solutions Architect Associate sertifikatiga tayyorlanmoqda. Bulut hisoblash, infratuzilma dizayni, xavfsizlik, xarajatlarni optimallashtirish va AWS yechimlar arxitekturasi bo'yicha keng qamrovli tajribani rivojlantirmoqda.",
      }),
      url: "#",
      image: "\u2601\uFE0F",
      status: "in-progress",
    },
  ];

  const CertificateCard: React.FC<{
    certificate: (typeof certificates)[0];
  }> = ({ certificate }) => {
    const isInProgress = certificate.status === "in-progress";

    return (
      <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
        isInProgress ? "ring-2 ring-orange-400 dark:ring-orange-500" : ""
      }`}>
        <div className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-5xl">{certificate.image}</div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  {certificate.title}
                </h3>
                {isInProgress && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium border border-orange-200 dark:border-orange-800 whitespace-nowrap">
                    <Clock className="w-3 h-3" />
                    {tx({ en: "In Progress", ko: "준비 중", uz: "Tayyorlanmoqda" })}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <Award className="w-4 h-4" />
                <span>{certificate.issuer}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{certificate.date}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {certificate.description}
          </p>

          {certificate.url && certificate.url !== "#" && !isInProgress && (
            <a
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
            >
              {tx({ en: "View Certificate", ko: "인증서 보기", uz: "Sertifikatni ko'rish" })}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {tx({
              en: "Certificates & Certifications",
              ko: "자격증 및 인증서",
              uz: "Sertifikatlar va malaka guvohnomalari",
            })}
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            {tx({
              en: "A collection of certificates and certifications I've earned throughout my career.",
              ko: "제가 획득한 자격증 및 인증서를 소개합니다.",
              uz: "Kasbiy faoliyatim davomida olgan sertifikatlar va malaka guvohnomalarim.",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CertificateCard certificate={certificate} />
            </div>
          ))}
        </div>

        {certificates.length === 0 && (
          <div className="text-center py-16">
            <Award className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {tx({
                en: "Certificate information will be added soon.",
                ko: "자격증 정보가 곧 추가될 예정입니다.",
                uz: "Sertifikat ma'lumotlari tez orada qo'shiladi.",
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
