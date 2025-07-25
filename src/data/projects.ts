// src/data/projects.ts

import { Project } from '../types';

export const projects: Record<'en' | 'ko', Project[]> = {
  en: [
    {
      id: 'ai-buddy',
      title: 'AI Buddy Chatbot Project',
      description: 'AI-powered conversational chatbot web application with real-time messaging capabilities and intelligent response generation.',
      role: 'Full-Stack Developer',
      year: '2024',
      technologies: ['TypeScript', 'React', 'AI API', 'WebSocket', 'CSS3'],
      url: 'https://app-aibuddy.calsplatz.com:8000/gen-bi',
      featured: true,
      status: 'completed'
    },
    {
      id: 'la-airport',
      title: 'LA International Airport System',
      description: 'Financial services system development for LA International Airport with loan and insurance application processing.',
      role: 'Project Manager',
      year: '2023',
      technologies: ['Vue.js', 'TypeScript', 'Node.js', 'AWS Lambda', 'MySQL'],
      featured: true,
      status: 'completed'
    },
    {
      id: 'insurance-loan',
      title: 'Insurance & Loan Management System',
      description: 'Comprehensive management system for insurance and loan services in Philippines with automated fee calculation.',
      role: 'Project Manager',
      year: '2022',
      technologies: ['Vue.js', 'TypeScript', 'Node.js', 'MySQL', 'SQL Procedures'],
      featured: true,
      status: 'completed'
    },
    {
      id: 'korean-learning',
      title: 'Korean Learning Website',
      description: 'Online Korean language learning platform with course management and video upload capabilities.',
      role: 'Frontend Team Lead',
      year: '2021-2022',
      technologies: ['Vue.js', 'TypeScript', 'Django', 'HTML5', 'CSS3'],
      featured: false,
      status: 'completed'
    },
    {
      id: 'github-search',
      title: 'GitHub User Search Project',
      description: 'Real-time GitHub user profile and repository search application with responsive design.',
      role: 'Solo Developer',
      year: '2023',
      technologies: ['React', 'TypeScript', 'GitHub API', 'CSS3'],
      github: 'https://github.com/firdavs9777/github-search',
      featured: false,
      status: 'completed'
    },
    {
      id: 'coach-finder',
      title: 'Coach Finder Platform',
      description: 'User-friendly coaching service booking platform with search and reservation functionality.',
      role: 'Solo Developer',
      year: '2022',
      technologies: ['Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
      featured: false,
      status: 'completed'
    }
  ],
  ko: [
    {
      id: 'ai-buddy',
      title: 'AI Buddy 챗봇 프로젝트',
      description: 'AI 기반 대화형 챗봇 웹 애플리케이션으로 실시간 메시징 기능과 지능형 응답 생성 기능을 제공합니다.',
      role: '풀스택 개발자',
      year: '2024',
      technologies: ['TypeScript', 'React', 'AI API', 'WebSocket', 'CSS3'],
      url: 'https://app-aibuddy.calsplatz.com:8000/gen-bi',
      featured: true,
      status: 'completed'
    },
    {
      id: 'la-airport',
      title: 'LA 국제공항 시스템',
      description: 'LA 국제공항 내 금융 서비스 시스템으로 대출 및 보험 신청 처리 기능을 제공합니다.',
      role: '프로젝트 매니저',
      year: '2023',
      technologies: ['Vue.js', 'TypeScript', 'Node.js', 'AWS Lambda', 'MySQL'],
      featured: true,
      status: 'completed'
    },
    {
      id: 'insurance-loan',
      title: '보험 및 대출 관리 시스템',
      description: '필리핀 현지 보험 및 대출 서비스를 위한 종합 관리 시스템으로 자동 수수료 계산 기능을 포함합니다.',
      role: '프로젝트 매니저',
      year: '2022',
      technologies: ['Vue.js', 'TypeScript', 'Node.js', 'MySQL', 'SQL Procedures'],
      featured: true,
      status: 'completed'
    },
    {
      id: 'korean-learning',
      title: '한국어 학습 웹사이트',
      description: '온라인 한국어 학습 플랫폼으로 강의 관리 및 동영상 업로드 기능을 제공합니다.',
      role: '프론트엔드 팀 리드',
      year: '2021-2022',
      technologies: ['Vue.js', 'TypeScript', 'Django', 'HTML5', 'CSS3'],
      featured: false,
      status: 'completed'
    },
    {
      id: 'github-search',
      title: 'GitHub 사용자 검색 프로젝트',
      description: 'GitHub 사용자 프로필 및 저장소 실시간 검색 애플리케이션으로 반응형 디자인을 적용했습니다.',
      role: '개인 개발',
      year: '2023',
      technologies: ['React', 'TypeScript', 'GitHub API', 'CSS3'],
      github: 'https://github.com/firdavs9777/github-search',
      featured: false,
      status: 'completed'
    },
    {
      id: 'coach-finder',
      title: '코치파인더 플랫폼',
      description: '사용자 친화적인 코칭 서비스 예약 플랫폼으로 검색 및 예약 기능을 제공합니다.',
      role: '개인 개발',
      year: '2022',
      technologies: ['Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
      featured: false,
      status: 'completed'
    }
  ]
};
