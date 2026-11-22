// src/data/experience.ts
//
// Career history shown on /experience and summarised on /about. Strings are
// LocaleText maps translated at render, so this module is a plain constant.

import type { ExperienceEntry } from "../types";

export const experiences: ExperienceEntry[] = [
  {
    id: "3r-innovation",
    company: {
      en: "3R Innovation Inc.",
      ko: "3R 이노베이션 주식회사",
      uz: "3R Innovation Inc.",
    },
    position: {
      en: "Full-Stack Developer",
      ko: "풀스택 개발자",
      uz: "Full-stack dasturchi",
    },
    duration: {
      en: "January 2026 - Present",
      ko: "2026년 01월 - 현재",
      uz: "2026-yil Yanvar - Hozirgi",
    },
    location: {
      en: "Seoul, South Korea",
      ko: "서울, 대한민국",
      uz: "Seul, Janubiy Koreya",
    },
    current: true,
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "WebRTC",
      "REST API",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "CI/CD",
      "Git",
    ],
    achievements: [
      {
        en: "Build FocusPang (focuspang.com), an online learning platform: the student and teacher web apps in React and Next.js.",
        ko: "온라인 학습 플랫폼 FocusPang(focuspang.com) 개발 — React·Next.js 기반 학생용·교사용 웹 앱",
        uz: "FocusPang (focuspang.com) onlayn ta'lim platformasini yarataman: React va Next.js asosidagi o'quvchi va o'qituvchi veb ilovalari.",
      },
      {
        en: "Develop the platform's WebRTC media server for real-time audio and video, plus REST APIs (Node.js, Express) for sensor data collection and learning analytics, serving 500+ concurrent users.",
        ko: "WebRTC 기반 실시간 음성·영상 미디어 서버 및 REST API(Node.js, Express) 개발 — 센서 데이터 수집·학습 분석, 동시 접속 500명 이상 처리",
        uz: "Real vaqtdagi audio va video uchun WebRTC media serverini hamda REST API'larni (Node.js, Express) ishlab chiqaman — sensor ma'lumotlarini yig'ish va o'quv tahlili, 500+ bir vaqtdagi foydalanuvchi.",
      },
      {
        en: "Designed PostgreSQL and MongoDB schemas and data pipelines for student behavior data, cutting query response time by 40%.",
        ko: "학생 행동 데이터용 PostgreSQL·MongoDB 스키마 및 데이터 파이프라인 설계 — 쿼리 응답 시간 40% 단축",
        uz: "O'quvchilar xulq-atvori ma'lumotlari uchun PostgreSQL va MongoDB sxemalari hamda ma'lumot oqimlarini loyihaladim — so'rov javob vaqti 40% qisqardi.",
      },
      {
        en: "Set up and run the AWS infrastructure (EC2, S3, CloudFront) with Docker and CI/CD for zero-downtime releases.",
        ko: "AWS 인프라(EC2, S3, CloudFront) 구축·운영, Docker·CI/CD 기반 무중단 배포",
        uz: "AWS infratuzilmasini (EC2, S3, CloudFront) sozlayman va boshqaraman — Docker va CI/CD bilan to'xtovsiz relizlar.",
      },
    ],
  },
  {
    id: "quintet-systems",
    company: {
      en: "Quintet Systems Co., Ltd.",
      ko: "퀸텟시스템즈 주식회사",
      uz: "Quintet Systems Co., Ltd.",
    },
    position: {
      en: "Full-Stack Web Developer",
      ko: "풀스택 웹 개발자",
      uz: "Full-stack veb dasturchi",
    },
    duration: {
      en: "Mar 2023 - October 2025",
      ko: "2023년 3월 - 2025년 10월",
      uz: "2023-yil mart - 2025-yil oktyabr",
    },
    location: {
      en: "Seoul, South Korea",
      ko: "서울, 대한민국",
      uz: "Seul, Janubiy Koreya",
    },
    current: false,
    tech: [
      "Nuxt.js",
      "Vue.js",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Docker",
      "RESTful APIs",
      "JWT",
      "OAuth",
      "Vite",
    ],
    achievements: [
      {
        en: "Built a reusable component library that our entire team adopted, significantly cutting down development time and ensuring design consistency across all our applications.",
        ko: "팀 전체가 사용하는 재사용 가능한 컴포넌트 라이브러리를 구축하여 개발 시간을 크게 단축하고 프로젝트 전반에 걸쳐 일관된 디자인을 보장했습니다. 이 라이브러리는 다른 팀에서도 활용하게 되었습니다.",
        uz: "Butun jamoamiz qabul qilgan qayta foydalanish mumkin bo'lgan komponent kutubxonasini yaratdim, bu ishlab chiqish vaqtini sezilarli darajada qisqartirdi va barcha ilovalarimizda dizayn izchilligini ta'minladi. Bu shunchalik qimmatli bo'ldiki, boshqa jamoalar ham undan foydalanishni boshladi.",
      },
      {
        en: "Tackled performance issues that were causing user complaints. By implementing smart code splitting and optimizing asset delivery, I transformed a slow, frustrating experience into a fast, responsive application.",
        ko: "사용자들이 불만을 제기하던 성능 문제를 해결하기 위해 코드 분할과 지연 로딩 전략을 도입했습니다. 느리고 답답했던 사용자 경험을 빠르고 반응성 좋은 애플리케이션으로 변화시켰습니다.",
        uz: "Foydalanuvchilar shikoyat qilayotgan samaradorlik muammolarini hal qildim. Aqlli kod bo'lish va resurslarni yetkazib berishni optimallashtirishni joriy etish orqali sekin va asabiy tajribani foydalanuvchilar haqiqatan ham yoqtirib ishlatadigan tez va sezgir ilovaga aylantirdim.",
      },
      {
        en: "Extended our application's capabilities by integrating various third-party APIs and services to meet business needs. This allowed us to offer users richer functionality and better experiences.",
        ko: "비즈니스 요구사항을 충족하기 위해 다양한 제3자 API와 서비스를 통합하여 애플리케이션의 기능을 확장했습니다. 이를 통해 사용자들에게 더 풍부한 기능을 제공할 수 있게 되었습니다.",
        uz: "Biznes ehtiyojlarini qondirish uchun turli uchinchi tomon API va xizmatlarini integratsiya qilib, ilovamiz imkoniyatlarini kengaytirdim. Bu foydalanuvchilarga yanada boy funksionallik va yaxshi tajriba taklif qilish imkonini berdi.",
      },
      {
        en: "Worked closely with multiple feature teams to understand business requirements and translate them into clear technical specifications. Acted as a bridge between developers and business teams, contributing to project success.",
        ko: "여러 기능 팀과 긴밀히 협력하여 비즈니스 요구사항을 이해하고 이를 명확한 기술 사양으로 변환했습니다. 개발자와 비즈니스 팀 간의 소통 다리 역할을 하며 프로젝트의 성공에 기여했습니다.",
        uz: "Biznes talablarini tushunish va ularni aniq texnik spetsifikatsiyalarga aylantirish uchun bir nechta funksional jamoalar bilan yaqin hamkorlik qildim. Dasturchilar va biznes jamoalari o'rtasida ko'prik vazifasini bajarib, loyiha muvaffaqiyatiga hissa qo'shdim.",
      },
      {
        en: "Focused on responsive design and cross-platform compatibility to ensure a consistent user experience across all devices. Created applications that work seamlessly on desktop, tablet, and mobile.",
        ko: "모든 디바이스에서 일관된 사용자 경험을 제공하기 위해 반응형 디자인과 크로스 플랫폼 호환성에 중점을 두었습니다. 데스크톱, 태블릿, 모바일에서 안정적으로 동작하는 애플리케이션을 만들었습니다.",
        uz: "Barcha qurilmalarda izchil foydalanuvchi tajribasini ta'minlash uchun moslashuvchan dizayn va kross-platformali muvofiqlikka e'tibor qaratdim. Ish stoli, planshet va mobil qurilmalarda muammosiz ishlaydigan ilovalar yaratdim.",
      },
    ],
  },
  {
    id: "ebridge-world",
    company: {
      en: "Ebridge World Co., Ltd.",
      ko: "에브리지 월드 주식회사",
      uz: "Ebridge World Co., Ltd.",
    },
    position: {
      en: "Web Frontend Developer",
      ko: "웹 프론트엔드 개발자",
      uz: "Veb frontend dasturchi",
    },
    duration: {
      en: "2021 - 2023",
      ko: "2021년 - 2023년",
      uz: "2021 - 2023",
    },
    location: {
      en: "Seoul, South Korea",
      ko: "서울, 대한민국",
      uz: "Seul, Janubiy Koreya",
    },
    current: false,
    tech: ["Flutter", "Vue.js", "Django", "Python", "Provider", "Bloc"],
    achievements: [
      {
        en: "Created intuitive and responsive user interfaces for web and mobile applications using Flutter and Vue.js. Worked closely with designers on user-centered flows.",
        ko: "Flutter와 Vue.js를 활용하여 사용자들이 직관적으로 사용할 수 있는 웹 및 모바일 인터페이스를 개발했습니다. 디자이너와 협업하여 사용자 중심의 경험을 만드는 데 집중했습니다.",
        uz: "Flutter va Vue.js yordamida veb va mobil ilovalar uchun intuitiv va moslashuvchan foydalanuvchi interfeyslarini yaratdim. Dizaynerlar bilan yaqin hamkorlik qilib, odamlar haqiqatan ham foydalanmoqchi bo'lgan foydalanuvchiga yo'naltirilgan tajribalar yaratdim.",
      },
      {
        en: "When the app started struggling with complex user flows, I refactored our entire state management architecture. The new approach not only made the app faster but also made it much easier for new team members to understand and contribute to the codebase.",
        ko: "복잡한 사용자 흐름으로 인해 앱이 느려지기 시작했을 때, 상태 관리 아키텍처를 전면 개편했습니다. 새로운 접근 방식은 앱을 더 빠르게 만들었을 뿐만 아니라 새로운 팀원들이 코드베이스를 이해하고 기여하기 훨씬 쉬워졌습니다.",
        uz: "Ilova murakkab foydalanuvchi oqimlari bilan qiyinchilikka duch kelganda, butun holat boshqaruv arxitekturamizni qayta ishlab chiqdim. Yangi yondashuv nafaqat ilovani tezlashtirdi, balki yangi jamoa a'zolariga kod bazasini tushunish va unga hissa qo'shishni ancha osonlashtirdi.",
      },
      {
        en: "Transformed UI/UX wireframes and prototypes into high-quality, production-ready code. I paid attention to every design detail while writing code that was scalable and maintainable.",
        ko: "디자이너의 와이어프레임과 프로토타입을 정확하게 코드로 구현했습니다. 디자인의 의도와 세부사항을 놓치지 않으면서도 확장 가능하고 유지보수하기 쉬운 코드를 작성했습니다.",
        uz: "UI/UX simli ramkalar va prototiplarni yuqori sifatli, ishlab chiqarishga tayyor kodga aylantirdim. Kengaytiriladigan va texnik xizmat ko'rsatish mumkin bo'lgan kod yozish bilan birga har bir dizayn tafsilotiga e'tibor berdim.",
      },
      {
        en: "Actively participated in code reviews and provided constructive feedback to team members. This helped improve our overall code quality and fostered a culture of learning and growth within the team.",
        ko: "코드 리뷰에 적극적으로 참여하며 팀원들의 코드에 건설적인 피드백을 제공했습니다. 이를 통해 팀 전체의 코드 품질이 향상되었고, 서로 배우고 성장하는 문화를 만들었습니다.",
        uz: "Kod tekshiruvlarida faol ishtirok etdim va jamoa a'zolariga konstruktiv fikr-mulohazalar bildirdim. Bu umumiy kod sifatini yaxshilashga yordam berdi va jamoa ichida o'rganish va o'sish madaniyatini shakllantirdi.",
      },
      {
        en: "Built frontend components that seamlessly communicated with Django and Python backend APIs. Carefully handled error states and loading indicators to provide users with a smooth, polished experience.",
        ko: "Django와 Python으로 구축된 백엔드 API와 원활하게 통신하는 프론트엔드를 구현했습니다. 에러 처리와 로딩 상태를 세심하게 관리하여 사용자에게 부드러운 경험을 제공했습니다.",
        uz: "Django va Python backend API lari bilan muammosiz aloqa qiladigan frontend komponentlarni yaratdim. Foydalanuvchilarga silliq va sayqallangan tajriba taqdim etish uchun xato holatlarini va yuklash ko'rsatkichlarini ehtiyotkorlik bilan boshqardim.",
      },
      {
        en: "Extended application functionality by integrating various third-party APIs and services. Added features like payments, maps, and social login to provide users with more value and convenience.",
        ko: "애플리케이션의 기능을 확장하기 위해 다양한 제3자 API와 서비스를 통합했습니다. 결제, 지도, 소셜 로그인 등 다양한 기능을 추가하여 사용자들에게 더 많은 가치를 제공했습니다.",
        uz: "Turli uchinchi tomon API va xizmatlarini integratsiya qilib, ilova funksionalligini kengaytirdim. To'lovlar, xaritalar va ijtimoiy kirish kabi funksiyalarni qo'shib, foydalanuvchilarga ko'proq qiymat va qulaylik taqdim etdim.",
      },
      {
        en: "Ensured frontend code quality and stability through thorough testing and debugging. Caught and fixed bugs early, minimizing issues in production and providing users with a reliable experience.",
        ko: "사용자에게 안정적인 경험을 제공하기 위해 철저한 테스트와 디버깅을 수행했습니다. 버그를 사전에 발견하고 수정하여 프로덕션 환경에서의 문제를 최소화했습니다.",
        uz: "Sinchkovlik bilan sinov va nosozliklarni tuzatish orqali frontend kod sifati va barqarorligini ta'minladim. Xatolarni erta aniqlab va tuzatib, ishlab chiqarishdagi muammolarni minimallashtirib, foydalanuvchilarga ishonchli tajriba taqdim etdim.",
      },
    ],
  },
];
