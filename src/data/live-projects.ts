// src/data/live-projects.ts
//
// The two shipped products featured on /live-projects. Store URLs come from
// site-facts so a changed link is corrected in one place.

import type { LiveProjectEntry } from "../types";
import { BANANATALK_USERS_DISPLAY, STORE_LINKS } from "./site-facts";

export const liveProjects: LiveProjectEntry[] = [
  {
    id: "bananatalk",
    emoji: "🌍",
    name: "BananaTalk",
    tagline: {
      en: "Language exchange app · iOS + Android · 100+ languages",
      ko: "언어 교환 앱 · iOS + Android · 100+ 언어",
      uz: "Til almashish ilovasi · iOS + Android · 100+ til",
    },
    metric: {
      en: `${BANANATALK_USERS_DISPLAY} users`,
      ko: `${BANANATALK_USERS_DISPLAY} 유저`,
      uz: `${BANANATALK_USERS_DISPLAY} foydalanuvchi`,
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
      en: "An app that matches you with native speakers across 100+ languages, with instant chat, voice messages, WebRTC voice/video calls, smart translation, and AI study tools — free to use.",
      ko: "100개 이상의 언어를 지원하는 원어민 매칭 앱. 실시간 채팅, 음성 메시지, WebRTC 음성·영상 통화, 스마트 번역, AI 학습 도구를 제공합니다 — 무료로 이용 가능.",
      uz: "100+ til bo'yicha ona tili so'zlashuvchilar bilan tanishtiruvchi ilova: tezkor chat, ovozli xabarlar, WebRTC ovozli va video qo'ng'iroqlar, aqlli tarjimon, AI o'quv vositalari — bepul foydalanish mumkin.",
    },
    results: {
      en: `${BANANATALK_USERS_DISPLAY} users across App Store and Google Play. Active community. Weekly feature releases. Designed, built, and operated solo end-to-end.`,
      ko: `App Store와 Google Play 합산 ${BANANATALK_USERS_DISPLAY} 유저. 활성 커뮤니티. 매주 새 기능 출시. 기획·개발·운영 전 과정을 직접 담당.`,
      uz: `App Store va Google Play'da jami ${BANANATALK_USERS_DISPLAY} foydalanuvchi. Faol jamoa. Har hafta yangi funksiyalar. Loyiha, ishlab chiqish va boshqaruvni yakka o'zim olib boryapman.`,
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
    iosUrl: STORE_LINKS.bananatalk.ios,
    androidUrl: STORE_LINKS.bananatalk.android,
    github: "https://github.com/firdavs9777/language_exchange_web_front",
    accent: "blue",
  },
  {
    id: "tezsell",
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
      en: "A single neighborhood marketplace app: buy and sell items, offer services, list real estate. Direct chat between users, location-aware listings, secure transactions, free to use.",
      ko: "동네 마켓플레이스 앱: 물건 사고팔기, 서비스 제공, 부동산 등록. 사용자 간 직접 채팅, 위치 기반 검색, 안전한 거래, 무료로 이용 가능.",
      uz: "Yagona mahalla bozori ilovasi: narsalarni sotib oling va soting, xizmatlar taklif qiling, ko'chmas mulkni e'lon qiling. Foydalanuvchilar o'rtasida to'g'ridan-to'g'ri chat, joylashuvga asoslangan e'lonlar, xavfsiz va bepul foydalanish mumkin.",
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
    iosUrl: STORE_LINKS.tezsell.ios,
    androidUrl: STORE_LINKS.tezsell.android,
    github: "https://github.com/firdavs9777/tezsell_app_front",
    accent: "orange",
  },
  {
    id: "ai-buddy-chatbot",
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
      en: "Live demo",
      ko: "라이브 데모",
      uz: "Jonli demo",
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
