// src/data/experience.ts

import { Experience } from '../types';

export const experiences: Record<'en' | 'ko', Experience[]> = {
  en: [
    {
      id: 'quintet-systems',
      company: 'Quintet Systems Co., Ltd.',
      position: 'Full-Stack Web Developer',
      duration: 'Mar 2023 - Present',
      location: 'Seoul, South Korea',
      current: true,
      description: 'Leading full-stack development initiatives using modern web technologies and frameworks.',
      technologies: ['Nuxt.js', 'Vue.js', 'React', 'Node.js', 'TypeScript', 'REST APIs'],
      achievements: [
        'Built a reusable component library that our entire team adopted, significantly cutting down development time and ensuring design consistency across all our applications. This became so valuable that other teams started using it too.',
        'Tackled performance issues that were causing user complaints. By implementing smart code splitting and optimizing asset delivery, I transformed a slow, frustrating experience into a fast, responsive application that users actually enjoyed using.',
        'Extended our application\'s capabilities by integrating various third-party APIs and services to meet business needs. This allowed us to offer users richer functionality and better experiences.',
        'Worked closely with multiple feature teams to understand business requirements and translate them into clear technical specifications. Acted as a bridge between developers and business teams, contributing to project success.',
        'Focused on responsive design and cross-platform compatibility to ensure a consistent user experience across all devices. Created applications that work seamlessly on desktop, tablet, and mobile.'
      ]
    },
    {
      id: 'ebridge-world',
      company: 'Ebridge World Co., Ltd.',
      position: 'Web Frontend Developer',
      duration: '2021 - 2023',
      location: 'Seoul, South Korea',
      current: false,
      description: 'Specialized in frontend development for web and mobile applications with focus on user experience.',
      technologies: ['Flutter', 'Vue.js', 'Django', 'Python', 'Provider', 'Bloc', 'Redux'],
      achievements: [
        'Created intuitive and responsive user interfaces for web and mobile applications using Flutter and Vue.js. Worked closely with designers to build user-centric experiences that people actually wanted to use.',
        'When the app started struggling with complex user flows, I refactored our entire state management architecture. The new approach not only made the app faster but also made it much easier for new team members to understand and contribute to the codebase.',
        'Transformed UI/UX wireframes and prototypes into high-quality, production-ready code. I paid attention to every design detail while writing code that was scalable and maintainable.',
        'Actively participated in code reviews and provided constructive feedback to team members. This helped improve our overall code quality and fostered a culture of learning and growth within the team.',
        'Built frontend components that seamlessly communicated with Django and Python backend APIs. Carefully handled error states and loading indicators to provide users with a smooth, polished experience.',
        'Extended application functionality by integrating various third-party APIs and services. Added features like payments, maps, and social login to provide users with more value and convenience.',
        'Ensured frontend code quality and stability through thorough testing and debugging. Caught and fixed bugs early, minimizing issues in production and providing users with a reliable experience.'
      ]
    }
  ],
  ko: [
    {
      id: 'quintet-systems',
      company: '퀸텟시스템즈 주식회사',
      position: '풀스택 웹 개발자',
      duration: '2023년 3월 - 현재',
      location: '서울, 대한민국',
      current: true,
      description: '최신 웹 기술과 프레임워크를 활용한 풀스택 개발 업무를 주도하고 있습니다.',
      technologies: ['Nuxt.js', 'Vue.js', 'React', 'Node.js', 'TypeScript', 'REST APIs'],
      achievements: [
        '팀 전체가 사용하는 재사용 가능한 컴포넌트 라이브러리를 구축하여 개발 시간을 크게 단축하고 프로젝트 전반에 걸쳐 일관된 디자인을 보장했습니다. 이 라이브러리는 다른 팀에서도 활용하게 되었습니다.',
        '사용자들이 불만을 제기하던 성능 문제를 해결하기 위해 코드 분할과 지연 로딩 전략을 도입했습니다. 느리고 답답했던 사용자 경험을 빠르고 반응성 좋은 애플리케이션으로 변화시켰습니다.',
        '비즈니스 요구사항을 충족하기 위해 다양한 제3자 API와 서비스를 통합하여 애플리케이션의 기능을 확장했습니다. 이를 통해 사용자들에게 더 풍부한 기능을 제공할 수 있게 되었습니다.',
        '여러 기능 팀과 긴밀히 협력하여 비즈니스 요구사항을 이해하고 이를 명확한 기술 사양으로 변환했습니다. 개발자와 비즈니스 팀 간의 소통 다리 역할을 하며 프로젝트의 성공에 기여했습니다.',
        '모든 디바이스에서 일관된 사용자 경험을 제공하기 위해 반응형 디자인과 크로스 플랫폼 호환성에 중점을 두었습니다. 데스크톱, 태블릿, 모바일에서 모두 완벽하게 작동하는 애플리케이션을 만들었습니다.'
      ]
    },
    {
      id: 'ebridge-world',
      company: '에브리지 월드 주식회사',
      position: '웹 프론트엔드 개발자',
      duration: '2021년 - 2023년',
      location: '서울, 대한민국',
      current: false,
      description: '사용자 경험에 중점을 둔 웹 및 모바일 애플리케이션의 프론트엔드 개발을 전문으로 했습니다.',
      technologies: ['Flutter', 'Vue.js', 'Django', 'Python', 'Provider', 'Bloc', 'Redux'],
      achievements: [
        'Flutter와 Vue.js를 활용하여 사용자들이 직관적으로 사용할 수 있는 웹 및 모바일 인터페이스를 개발했습니다. 디자이너와 협업하여 사용자 중심의 경험을 만드는 데 집중했습니다.',
        '복잡한 사용자 흐름으로 인해 앱이 느려지기 시작했을 때, 상태 관리 아키텍처를 전면 개편했습니다. 새로운 접근 방식은 앱을 더 빠르게 만들었을 뿐만 아니라 새로운 팀원들이 코드베이스를 이해하고 기여하기 훨씬 쉬워졌습니다.',
        '디자이너의 와이어프레임과 프로토타입을 정확하게 코드로 구현했습니다. 디자인의 의도와 세부사항을 놓치지 않으면서도 확장 가능하고 유지보수하기 쉬운 코드를 작성했습니다.',
        '코드 리뷰에 적극적으로 참여하며 팀원들의 코드에 건설적인 피드백을 제공했습니다. 이를 통해 팀 전체의 코드 품질이 향상되었고, 서로 배우고 성장하는 문화를 만들었습니다.',
        'Django와 Python으로 구축된 백엔드 API와 원활하게 통신하는 프론트엔드를 구현했습니다. 에러 처리와 로딩 상태를 세심하게 관리하여 사용자에게 부드러운 경험을 제공했습니다.',
        '애플리케이션의 기능을 확장하기 위해 다양한 제3자 API와 서비스를 통합했습니다. 결제, 지도, 소셜 로그인 등 다양한 기능을 추가하여 사용자들에게 더 많은 가치를 제공했습니다.',
        '사용자에게 안정적인 경험을 제공하기 위해 철저한 테스트와 디버깅을 수행했습니다. 버그를 사전에 발견하고 수정하여 프로덕션 환경에서의 문제를 최소화했습니다.'
      ]
    }
  ]
}
