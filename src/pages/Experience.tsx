// src/pages/ExperiencePage.tsx

import { Award, Calendar, MapPin, Zap, Users, Target, Code2 } from "lucide-react";
import React from "react";
import { useLanguage } from "../context/languageContext";

export const ExperiencePage: React.FC = () => {
  const { language, t } = useLanguage();

  const experiences = [
    {
      id: 1,
      company: language === "ko" ? "3R 이노베이션 주식회사" : "3R Innovation Inc.",
      position: language === "ko" ? "풀스택 개발자" : "Full-Stack Developer",
      duration:
        language === "ko" ? "2025년 10월 - 현재" : "October 2025 - Present",
      location: language === "ko" ? "서울, 대한민국" : "Seoul, South Korea",
      current: true,
      tech: [
        "React",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "TypeScript",
        "Node.js",
        "Django",
        "Flutter",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "AWS",
        "REST API",
        "Git",
      ],
      achievements:
        language === "ko"
          ? [
              "3R 이노베이션에 풀스택 개발자로 합류하게 되어 기쁩니다. 3R 이노베이션은 센서 기반 디지털 표현형 분석과 AI 분석을 활용하여 학생들의 학습 방식을 이해하고, 집중력과 스트레스를 모니터링하며, 정신 건강을 지원하는 AI 에듀테크 스타트업입니다.",
              "이 역할에서 확장 가능한 웹 애플리케이션을 구축하고, 학습 분석을 위한 데이터 파이프라인을 개발하며, 교육자와 학생들이 AI 기반 인사이트와 상호작용할 수 있는 직관적인 인터페이스를 만들고 있습니다.",
              "학생들의 학습과 웰빙을 강화하는 기술 솔루션을 만들어가는 것을 기대하고 있습니다!",
            ]
          : [
              "I'm excited to share that I've joined 3R Innovation Inc. as a Full-Stack Developer. 3R Innovation is an AI EdTech startup that uses sensor-based digital phenotyping and AI analytics to understand how students learn, monitor attention and stress, and support their mental wellbeing.",
              "In this role, I'll be building scalable web applications, developing data pipelines for learning analytics, and creating intuitive interfaces that help educators and students interact with our AI-powered insights.",
              "Looking forward to crafting technology solutions that strengthen student learning and wellbeing!",
            ],
    },
    {
      id: 2,
      company:
        language === "ko"
          ? "퀸텟시스템즈 주식회사"
          : "Quintet Systems Co., Ltd.",
      position:
        language === "ko" ? "풀스택 웹 개발자" : "Full-Stack Web Developer",
      duration:
        language === "ko"
          ? "2023년 3월 - 2025년 10월"
          : "Mar 2023 - October 2025",
      location: language === "ko" ? "서울, 대한민국" : "Seoul, South Korea",
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
      achievements:
        language === "ko"
          ? [
              "팀 전체가 사용하는 재사용 가능한 컴포넌트 라이브러리를 구축하여 개발 시간을 크게 단축하고 프로젝트 전반에 걸쳐 일관된 디자인을 보장했습니다. 이 라이브러리는 다른 팀에서도 활용하게 되었습니다.",
              "사용자들이 불만을 제기하던 성능 문제를 해결하기 위해 코드 분할과 지연 로딩 전략을 도입했습니다. 느리고 답답했던 사용자 경험을 빠르고 반응성 좋은 애플리케이션으로 변화시켰습니다.",
              "비즈니스 요구사항을 충족하기 위해 다양한 제3자 API와 서비스를 통합하여 애플리케이션의 기능을 확장했습니다. 이를 통해 사용자들에게 더 풍부한 기능을 제공할 수 있게 되었습니다.",
              "여러 기능 팀과 긴밀히 협력하여 비즈니스 요구사항을 이해하고 이를 명확한 기술 사양으로 변환했습니다. 개발자와 비즈니스 팀 간의 소통 다리 역할을 하며 프로젝트의 성공에 기여했습니다.",
              "모든 디바이스에서 일관된 사용자 경험을 제공하기 위해 반응형 디자인과 크로스 플랫폼 호환성에 중점을 두었습니다. 데스크톱, 태블릿, 모바일에서 모두 완벽하게 작동하는 애플리케이션을 만들었습니다.",
            ]
          : [
              "Built a reusable component library that our entire team adopted, significantly cutting down development time and ensuring design consistency across all our applications. This became so valuable that other teams started using it too.",
              "Tackled performance issues that were causing user complaints. By implementing smart code splitting and optimizing asset delivery, I transformed a slow, frustrating experience into a fast, responsive application that users actually enjoyed using.",
              "Extended our application's capabilities by integrating various third-party APIs and services to meet business needs. This allowed us to offer users richer functionality and better experiences.",
              "Worked closely with multiple feature teams to understand business requirements and translate them into clear technical specifications. Acted as a bridge between developers and business teams, contributing to project success.",
              "Focused on responsive design and cross-platform compatibility to ensure a consistent user experience across all devices. Created applications that work seamlessly on desktop, tablet, and mobile.",
            ],
    },
    {
      id: 3,
      company:
        language === "ko"
          ? "에브리지 월드 주식회사"
          : "Ebridge World Co., Ltd.",
      position:
        language === "ko" ? "웹 프론트엔드 개발자" : "Web Frontend Developer",
      duration: language === "ko" ? "2021년 - 2023년" : "2021 - 2023",
      location: language === "ko" ? "서울, 대한민국" : "Seoul, South Korea",
      current: false,
      tech: ["Flutter", "Vue.js", "Django", "Python", "Provider", "Bloc"],
      achievements:
        language === "ko"
          ? [
              "Flutter와 Vue.js를 활용하여 사용자들이 직관적으로 사용할 수 있는 웹 및 모바일 인터페이스를 개발했습니다. 디자이너와 협업하여 사용자 중심의 경험을 만드는 데 집중했습니다.",
              "복잡한 사용자 흐름으로 인해 앱이 느려지기 시작했을 때, 상태 관리 아키텍처를 전면 개편했습니다. 새로운 접근 방식은 앱을 더 빠르게 만들었을 뿐만 아니라 새로운 팀원들이 코드베이스를 이해하고 기여하기 훨씬 쉬워졌습니다.",
              "디자이너의 와이어프레임과 프로토타입을 정확하게 코드로 구현했습니다. 디자인의 의도와 세부사항을 놓치지 않으면서도 확장 가능하고 유지보수하기 쉬운 코드를 작성했습니다.",
              "코드 리뷰에 적극적으로 참여하며 팀원들의 코드에 건설적인 피드백을 제공했습니다. 이를 통해 팀 전체의 코드 품질이 향상되었고, 서로 배우고 성장하는 문화를 만들었습니다.",
              "Django와 Python으로 구축된 백엔드 API와 원활하게 통신하는 프론트엔드를 구현했습니다. 에러 처리와 로딩 상태를 세심하게 관리하여 사용자에게 부드러운 경험을 제공했습니다.",
              "애플리케이션의 기능을 확장하기 위해 다양한 제3자 API와 서비스를 통합했습니다. 결제, 지도, 소셜 로그인 등 다양한 기능을 추가하여 사용자들에게 더 많은 가치를 제공했습니다.",
              "사용자에게 안정적인 경험을 제공하기 위해 철저한 테스트와 디버깅을 수행했습니다. 버그를 사전에 발견하고 수정하여 프로덕션 환경에서의 문제를 최소화했습니다.",
            ]
          : [
              "Created intuitive and responsive user interfaces for web and mobile applications using Flutter and Vue.js. Worked closely with designers to build user-centric experiences that people actually wanted to use.",
              "When the app started struggling with complex user flows, I refactored our entire state management architecture. The new approach not only made the app faster but also made it much easier for new team members to understand and contribute to the codebase.",
              "Transformed UI/UX wireframes and prototypes into high-quality, production-ready code. I paid attention to every design detail while writing code that was scalable and maintainable.",
              "Actively participated in code reviews and provided constructive feedback to team members. This helped improve our overall code quality and fostered a culture of learning and growth within the team.",
              "Built frontend components that seamlessly communicated with Django and Python backend APIs. Carefully handled error states and loading indicators to provide users with a smooth, polished experience.",
              "Extended application functionality by integrating various third-party APIs and services. Added features like payments, maps, and social login to provide users with more value and convenience.",
              "Ensured frontend code quality and stability through thorough testing and debugging. Caught and fixed bugs early, minimizing issues in production and providing users with a reliable experience.",
            ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.experience.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded"></div>
        </div>

        {/* What I Bring Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {language === "ko" ? "제가 가져다 드리는 것" : "What I Bring"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {language === "ko" ? "풀스택 전문성" : "Full-Stack Expertise"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {language === "ko"
                    ? "프론트엔드부터 백엔드까지 전체 개발 프로세스를 이해하고 있습니다."
                    : "I understand the entire development process from frontend to backend."}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {language === "ko" ? "협업 중심" : "Collaboration-Focused"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {language === "ko"
                    ? "팀과 함께 일하며 비즈니스 목표를 달성하는 것을 중요하게 생각합니다."
                    : "I value working with teams to achieve business goals together."}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {language === "ko" ? "빠른 학습자" : "Quick Learner"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {language === "ko"
                    ? "새로운 기술과 도구를 빠르게 습득하고 프로젝트에 적용합니다."
                    : "I quickly learn new technologies and tools and apply them to projects."}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {language === "ko" ? "문제 해결자" : "Problem Solver"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {language === "ko"
                    ? "복잡한 문제를 분석하고 실용적인 해결책을 찾는 것을 즐깁니다."
                    : "I enjoy analyzing complex problems and finding practical solutions."}
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
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-sm font-medium border border-green-200 dark:border-green-800">
                        {t.experience.current}
                      </span>
                    )}
                  </div>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {exp.position}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
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
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-300 font-medium">Career Journey</span>
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
