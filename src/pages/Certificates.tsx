// src/pages/Certificates.tsx

import React from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/languageContext";

export const CertificatesPage: React.FC = () => {
  const { language, t } = useLanguage();

  const certificates = [
    {
      id: 1,
      title:
        language === "ko"
          ? "React 완전정복"
          : "Complete React Developer",
      issuer:
        language === "ko"
          ? "Udemy"
          : "Udemy",
      date: "2024",
      description:
        language === "ko"
          ? "React, Redux, Hooks, Context API, GraphQL, Firebase를 포함한 완전한 React 개발자 과정을 완료했습니다."
          : "Completed comprehensive React developer course including React, Redux, Hooks, Context API, GraphQL, and Firebase.",
      url: "#",
      image: "🎓",
    },
    {
      id: 2,
      title:
        language === "ko"
          ? "풀스택 웹 개발"
          : "Full Stack Web Development",
      issuer:
        language === "ko"
          ? "Coursera"
          : "Coursera",
      date: "2023",
      description:
        language === "ko"
          ? "MERN 스택을 활용한 풀스택 웹 개발 과정을 완료했습니다."
          : "Completed full stack web development course using MERN stack.",
      url: "#",
      image: "💻",
    },
    {
      id: 3,
      title:
        language === "ko"
          ? "AWS 클라우드 기초"
          : "AWS Cloud Fundamentals",
      issuer:
        language === "ko"
          ? "AWS"
          : "AWS",
      date: "2023",
      description:
        language === "ko"
          ? "AWS 클라우드 인프라 및 서비스에 대한 기초 지식을 습득했습니다."
          : "Acquired foundational knowledge of AWS cloud infrastructure and services.",
      url: "#",
      image: "☁️",
    },
  ];

  const CertificateCard: React.FC<{
    certificate: (typeof certificates)[0];
  }> = ({ certificate }) => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-5xl">{certificate.image}</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2">
              {certificate.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Award className="w-4 h-4" />
              <span>{certificate.issuer}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{certificate.date}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {certificate.description}
        </p>

        {certificate.url && certificate.url !== "#" && (
          <a
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            {language === "ko" ? "인증서 보기" : "View Certificate"}
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === "ko" ? "자격증 및 인증서" : "Certificates & Certifications"}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            {language === "ko"
              ? "제가 획득한 자격증 및 인증서를 소개합니다."
              : "A collection of certificates and certifications I've earned throughout my career."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">
              {language === "ko"
                ? "자격증 정보가 곧 추가될 예정입니다."
                : "Certificate information will be added soon."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

