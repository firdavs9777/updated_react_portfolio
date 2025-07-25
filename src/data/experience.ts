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
        'Improved code efficiency by 35% through development of reusable components and modules',
        'Enhanced web application loading speed by 40% through performance optimization techniques',
        'Successfully integrated third-party APIs and services to extend application functionality',
        'Collaborated with multiple feature teams to gather business requirements and translate them into technical specifications',
        'Optimized user experience through responsive design and cross-platform compatibility'
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
        'Developed intuitive and responsive user interfaces for web and mobile applications using Flutter and Vue.js',
        'Improved app performance by 30% through implementation of state management solutions (Provider, Bloc, Redux)',
        'Converted UI/UX wireframes and prototypes to high-quality code with 100% design accuracy',
        'Enhanced team code quality by 20% through active participation in code reviews and constructive feedback',
        'Integrated backend APIs using Django and Python for seamless frontend-backend communication',
        'Extended application functionality through integration of third-party APIs and services',
        'Conducted thorough testing and debugging to ensure frontend code quality and stability'
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
        '재사용 가능한 구성 요소와 모듈 개발을 통해 코드 효율성 35% 향상',
        '성능 최적화 기술을 통해 웹 애플리케이션 로딩 속도 40% 개선',
        '제3자 API 및 서비스 통합을 통한 애플리케이션 기능 확장 성공',
        '여러 기능 팀과 협력하여 비즈니스 요구사항을 기술 사양으로 변환',
        '반응형 디자인과 크로스 플랫폼 호환성을 통한 사용자 경험 최적화'
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
        'Flutter와 Vue.js를 활용하여 웹 및 모바일용 직관적이고 반응성 뛰어난 사용자 인터페이스 개발',
        '상태 관리 솔루션(Provider, Bloc, Redux) 구현을 통해 앱 성능 30% 향상',
        'UI/UX 와이어프레임 및 프로토타입을 100% 정확도로 고품질 코드로 변환',
        '코드 리뷰 적극 참여 및 건설적 피드백 제공으로 팀 코드 품질 20% 향상',
        'Django 및 Python을 활용한 백엔드 API 통합으로 원활한 프론트엔드-백엔드 통신 구현',
        '제3자 API 및 서비스 통합을 통한 애플리케이션 기능 확장',
      ]
    }
  ]
}
