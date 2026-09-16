// src/data/certificates.ts
//
// Certificates shown on /certificates. Strings are LocaleText maps
// translated at render, so this module is a plain constant.
//
// `date` is LocaleText rather than a plain string: three of the four source
// entries carry the same year in every locale, but the in-progress
// certification's date is a translated status ("In Progress" / "준비 중" /
// "Tayyorlanmoqda"), so the field has to support both without dropping data.
// `issuer` and the last entry's `title` were plain, untranslated strings in
// the page; they are duplicated across en/ko/uz here so the page can call
// tx() uniformly, with no change in rendered output.

import type { CertificateEntry } from "../types";

export const certificates: CertificateEntry[] = [
  {
    id: "complete-react-developer",
    title: {
      en: "Complete React Developer",
      ko: "React 완전정복",
      uz: "To'liq React dasturchi",
    },
    issuer: { en: "Udemy", ko: "Udemy", uz: "Udemy" },
    date: { en: "2024", ko: "2024", uz: "2024" },
    description: {
      en: "Completed comprehensive React developer course including React, Redux, Hooks, Context API, GraphQL, and Firebase.",
      ko: "React, Redux, Hooks, Context API, GraphQL, Firebase를 포함한 완전한 React 개발자 과정을 완료했습니다.",
      uz: "React, Redux, Hooks, Context API, GraphQL va Firebase ni o'z ichiga olgan to'liq React dasturchi kursini tamomladim.",
    },
    url: "#",
    image: "🎓",
    status: "completed",
  },
  {
    id: "full-stack-web-development",
    title: {
      en: "Full Stack Web Development",
      ko: "풀스택 웹 개발",
      uz: "To'liq stekli veb dasturlash",
    },
    issuer: { en: "Coursera", ko: "Coursera", uz: "Coursera" },
    date: { en: "2023", ko: "2023", uz: "2023" },
    description: {
      en: "Completed full stack web development course using MERN stack.",
      ko: "MERN 스택을 활용한 풀스택 웹 개발 과정을 완료했습니다.",
      uz: "MERN stekidan foydalangan holda to'liq stekli veb dasturlash kursini tamomladim.",
    },
    url: "#",
    image: "💻",
    status: "completed",
  },
  {
    id: "aws-cloud-fundamentals",
    title: {
      en: "AWS Cloud Fundamentals",
      ko: "AWS 클라우드 기초",
      uz: "AWS bulut asoslari",
    },
    issuer: { en: "AWS", ko: "AWS", uz: "AWS" },
    date: { en: "2023", ko: "2023", uz: "2023" },
    description: {
      en: "Acquired foundational knowledge of AWS cloud infrastructure and services.",
      ko: "AWS 클라우드 인프라 및 서비스에 대한 기초 지식을 습득했습니다.",
      uz: "AWS bulut infratuzilmasi va xizmatlari bo'yicha asosiy bilimlarni egalladi.",
    },
    url: "#",
    image: "☁️",
    status: "completed",
  },
  {
    id: "aws-certified-solutions-architect-associate-saa-c03",
    title: {
      en: "AWS Certified Solutions Architect - Associate (SAA-C03)",
      ko: "AWS Certified Solutions Architect - Associate (SAA-C03)",
      uz: "AWS Certified Solutions Architect - Associate (SAA-C03)",
    },
    issuer: { en: "AWS", ko: "AWS", uz: "AWS" },
    date: { en: "In Progress", ko: "준비 중", uz: "Tayyorlanmoqda" },
    description: {
      en: "Currently preparing for the AWS Certified Solutions Architect Associate certification. Developing comprehensive expertise in cloud computing, infrastructure design, security, cost optimization, and AWS solution architecture.",
      ko: "AWS 클라우드 아키텍처 설계 및 배포에 대한 전문 지식을 습득하기 위해 현재 준비 중입니다. 클라우드 컴퓨팅, 인프라 설계, 보안, 비용 최적화 등 종합적인 AWS 솔루션 아키텍트 역량을 개발하고 있습니다.",
      uz: "AWS Certified Solutions Architect Associate sertifikatiga tayyorlanmoqda. Bulut hisoblash, infratuzilma dizayni, xavfsizlik, xarajatlarni optimallashtirish va AWS yechimlar arxitekturasi bo'yicha keng qamrovli tajribani rivojlantirmoqda.",
    },
    url: "#",
    image: "☁️",
    status: "in-progress",
  },
];
