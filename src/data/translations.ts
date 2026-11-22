// src/data/translations.ts

import { Translations } from "../types";
import { BANANATALK_USERS_DISPLAY } from "./site-facts";

export const translations: Translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      certificates: "Certificates",
      liveProjects: "Live Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Davis",
      title: "Backend-focused Full-Stack Developer · Seoul",
      subtitle:
        `I build the backends behind production web & mobile apps: REST APIs, data models, and business logic. 5+ years shipping products with Node.js, Django, React, and Flutter — now adding Java & Spring Boot. ${BANANATALK_USERS_DISPLAY} active users on BananaTalk.`,
      cta: "Contact Me",
      resume: "Download Resume",
    },
    about: {
      title: "About Me",
      description:
        "Backend-focused full-stack developer with 5+ years of experience building web and mobile applications end to end — Node.js, Express, Django, and REST APIs on the server, with React, Vue.js, Next.js, Nuxt.js, and Flutter on the client. Currently learning Java and Spring Boot. I have shipped financial service platforms, insurance/loan management systems, and consumer marketplace apps — acting as both developer and project manager across the full lifecycle from planning to deployment.",
      extendedDescription:
        `Strong with REST API design, schema modeling, and complex business logic (commission calculations, workflow automation, multi-role permissions). I've led 4-5 person teams across multinational projects. Currently shipping TezSell (Flutter marketplace, live on App Store + Play Store) and BananaTalk (language exchange app, ${BANANATALK_USERS_DISPLAY} users across iOS and Android). 2nd prize at Coupang AngelHack HackSeoul 2025 for an AI clothing color-matching app.`,
      residence: "Work Authorization",
      languages: "Languages",
      residenceInfo:
        "Authorized to work in South Korea\nNo visa sponsorship required\nLong-term residence status",
      languageInfo: "Uzbek: Native\nEnglish: Fluent (business)\nKorean: Advanced (KIIP Level 5)\nRussian: Intermediate",
    },
    experience: {
      title: "Work Experience",
      current: "Current",
      achievements: "Key Achievements",
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      techStack: "Tech Stack",
      role: "Role",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Hiring for a backend role? I'd love to hear from you.",
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
  },
  ko: {
    nav: {
      home: "홈",
      about: "소개",
      experience: "경력",
      projects: "프로젝트",
      certificates: "교육·수료",
      liveProjects: "운영 중인 서비스",
      contact: "연락처",
    },
    hero: {
      greeting: "안녕하세요, 저는",
      name: "데이비스",
      title: "백엔드 중심 풀스택 개발자 · 서울",
      subtitle:
        `실서비스 웹·모바일 앱의 백엔드를 만듭니다 — REST API, 데이터 모델링, 비즈니스 로직. Node.js·Django·React·Flutter로 5년 이상 서비스 개발, 현재 Java·Spring Boot 학습 중. BananaTalk 활성 유저 ${BANANATALK_USERS_DISPLAY}.`,
      cta: "연락하기",
      resume: "이력서 다운로드",
    },
    about: {
      title: "자기소개",
      description:
        "프론트엔드부터 백엔드까지 End-to-End 개발 경험을 보유한 백엔드 중심 풀스택 개발자입니다. 5년 이상 Node.js, Express, Django 기반 REST API와 React, Vue.js, Next.js, Nuxt.js, Flutter 클라이언트를 개발해 왔으며, 현재 Java와 Spring Boot를 학습하고 있습니다. 금융 서비스 플랫폼, 보험·대출 관리 시스템, 일반 소비자용 마켓플레이스 앱을 출시하며 개발과 프로젝트 매니저 역할을 모두 수행했습니다.",
      extendedDescription:
        `REST API 설계, 스키마 모델링, 복잡한 비즈니스 로직 구현(수수료 자동 계산, 워크플로우 자동화, 다중 권한 관리)에 강점이 있습니다. 다국적 프로젝트에서 4~5명 규모의 팀을 리드한 경험이 있으며, 현재 TezSell(Flutter, App Store·Play Store 출시)과 BananaTalk(언어 교환 앱, iOS·Android 합산 ${BANANATALK_USERS_DISPLAY} 유저)를 운영 중입니다. 쿠팡 주최 AngelHack HackSeoul 2025에서 AI 의류 색상 매칭 앱으로 2위를 수상했습니다.`,
      residence: "근무 가능 자격",
      languages: "언어 능력",
      residenceInfo:
        "한국 내 합법 취업 가능\n스폰서십 불필요\n장기 거주 자격 보유",
      languageInfo: "우즈베크어: 모국어\n영어: 비즈니스 유창\n한국어: 고급 (KIIP 5단계 수료)\n러시아어: 중급",
    },
    experience: {
      title: "경력 사항",
      current: "현재",
      achievements: "주요 성과",
    },
    projects: {
      title: "주요 프로젝트",
      viewProject: "프로젝트 보기",
      techStack: "기술 스택",
      role: "역할",
    },
    contact: {
      title: "연락하기",
      subtitle: "백엔드 채용 관련 연락을 기다립니다.",
      email: "이메일",
      phone: "전화",
      location: "위치",
    },
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      experience: "Tajriba",
      projects: "Loyihalar",
      certificates: "Sertifikatlar",
      liveProjects: "Faol loyihalar",
      contact: "Aloqa",
    },
    hero: {
      greeting: "Assalomu alaykum, men",
      name: "Davis",
      title: "Backendga yo'naltirilgan Full-Stack Dasturchi · Seul",
      subtitle:
        `Ishlab chiqarishdagi veb va mobil ilovalar uchun backend quraman: REST API, ma'lumotlar modeli va biznes mantiqi. Node.js, Django, React va Flutter bilan 5+ yil mahsulot yaratish tajribasi, hozir Java va Spring Boot'ni o'rganyapman. BananaTalk'da ${BANANATALK_USERS_DISPLAY} faol foydalanuvchi.`,
      cta: "Bog'lanish",
      resume: "Rezyumeni yuklab olish",
    },
    about: {
      title: "Men haqimda",
      description:
        "5 yildan ortiq tajribaga ega, backendga yo'naltirilgan full-stack dasturchi: serverda Node.js, Express, Django va REST API, klientda React, Vue.js, Next.js, Nuxt.js va Flutter. Hozirda Java va Spring Boot'ni o'rganyapman. Moliyaviy xizmat platformalari, sug'urta/kredit boshqaruv tizimlari va iste'molchi bozor ilovalarini ishga tushirganman — rejalashtirishdan deployga qadar dasturchi va loyiha menejeri sifatida ishladim.",
      extendedDescription:
        `REST API loyihalash, sxema modellashtirish va murakkab biznes mantiqi (komissiya hisoblash, ish oqimini avtomatlashtirish, ko'p rolli ruxsatlar) sohalarida kuchli tajribaga egaman. Xalqaro loyihalarda 4-5 kishilik jamoalarni boshqarganman. Hozirda TezSell (Flutter bozor ilovasi, App Store va Play Store'da faol) va BananaTalk (til almashish ilovasi, iOS va Android'da jami ${BANANATALK_USERS_DISPLAY} foydalanuvchi) loyihalarini olib boryapman. Coupang AngelHack HackSeoul 2025 da AI kiyim rang moslash ilovasi bilan 2-o'rin sovrindori.`,
      residence: "Ish ruxsati",
      languages: "Tillar",
      residenceInfo:
        "Janubiy Koreyada qonuniy ishlash huquqiga ega\nViza homiyligi talab qilinmaydi\nUzoq muddatli yashash maqomi",
      languageInfo: "O'zbek tili: Ona tili\nIngliz tili: Erkin (ish darajasida)\nKoreys tili: Yuqori daraja (KIIP 5-daraja)\nRus tili: O'rta daraja",
    },
    experience: {
      title: "Ish tajribasi",
      current: "Hozirgi",
      achievements: "Asosiy yutuqlar",
    },
    projects: {
      title: "Asosiy loyihalar",
      viewProject: "Loyihani ko'rish",
      techStack: "Texnologiyalar",
      role: "Rol",
    },
    contact: {
      title: "Bog'lanish",
      subtitle: "Backend lavozimi bo'yicha takliflaringizni kutaman.",
      email: "Elektron pochta",
      phone: "Telefon",
      location: "Manzil",
    },
  },
};
