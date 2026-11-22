// src/pages/ProjectsPage.tsx

import React, { useState, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ExternalLink, Github, Calendar, User, X, ChevronDown, Hash, Share2, Smartphone } from "lucide-react";
import { useLanguage } from "../context/languageContext";
import { SEO } from "../utils/seo";
import { projects } from "../data/projects";

export const ProjectsPage: React.FC = () => {
  const { t, tx } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [copied, setCopied] = useState(false);

  // Get selected tech from URL hash
  const selectedTech = useMemo(() => {
    const hash = decodeURIComponent(location.hash.slice(1)); // Remove # and decode
    return hash || null;
  }, [location.hash]);

  // Update URL hash when filter changes
  const setSelectedTech = useCallback((tech: string | null) => {
    if (tech) {
      navigate(`/projects#${encodeURIComponent(tech)}`, { replace: true });
    } else {
      navigate('/projects', { replace: true });
    }
  }, [navigate]);

  // Copy shareable link
  const copyLink = useCallback(() => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  // Extract all unique technologies and count their occurrences
  const techStats = useMemo(() => {
    const stats: Record<string, number> = {};
    projects.forEach(project => {
      project.tech.forEach(tech => {
        stats[tech] = (stats[tech] || 0) + 1;
      });
    });
    // Sort by count (descending) then alphabetically
    return Object.entries(stats)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tech, count]) => ({ tech, count }));
  }, []);

  // Popular techs to show by default (top 8)
  const popularTechs = techStats.slice(0, 8);
  const remainingTechs = techStats.slice(8);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects;
    return projects.filter(p => p.tech.includes(selectedTech));
  }, [selectedTech]);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  const ProjectCard: React.FC<{
    project: (typeof projects)[0];
    featured?: boolean;
  }> = ({ project, featured = false }) => (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{project.image}</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                {tx(project.title)}
              </h3>
              {featured && (
                <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full border border-yellow-200 mt-1">
                  {tx({ en: "Featured", ko: "주요", uz: "Asosiy" })}
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                title={t.projects.viewProject}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.iosUrl && (
              <a
                href={project.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors p-2 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg"
                title="App Store"
              >
                <Smartphone className="w-5 h-5" />
              </a>
            )}
            {project.androidUrl && (
              <a
                href={project.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 transition-colors p-2 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg"
                title="Google Play"
              >
                <Smartphone className="w-5 h-5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                title="View Code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            <span>
              {t.projects.role}: {tx(project.role)}
            </span>
          </div>
          <span className="opacity-50">•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.year}</span>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {tx(project.description)}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            {t.projects.techStack}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech, techIndex) => (
              <a
                key={techIndex}
                href={`/projects#${encodeURIComponent(tech)}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedTech(selectedTech === tech ? null : tech);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`inline-flex items-center gap-0.5 px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 active:scale-95 cursor-pointer hover:shadow-md ${
                  selectedTech === tech
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300"
                }`}
              >
                <span className="opacity-50">#</span>
                {tech}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                project.status === "completed"
                  ? "bg-green-500"
                  : project.status === "in-progress"
                    ? "bg-yellow-500"
                    : "bg-gray-400"
              }`}
            ></span>
            <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
              {project.status === "in-progress"
                ? tx({ en: "In Progress", ko: "진행 중", uz: "Jarayonda" })
                : tx({ en: "Completed", ko: "완료", uz: "Tugallangan" })}
            </span>
          </div>

          {(project.url || project.github || project.iosUrl || project.androidUrl) && (
            <div className="flex flex-wrap gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                >
                  {t.projects.viewProject}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.iosUrl && (
                <a
                  href={project.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors"
                >
                  App Store
                  <Smartphone className="w-4 h-4" />
                </a>
              )}
              {project.androidUrl && (
                <a
                  href={project.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-600 hover:text-green-800 font-medium text-sm transition-colors"
                >
                  Google Play
                  <Smartphone className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Dynamic SEO based on filter
  const seoTitle = selectedTech
    ? `${selectedTech} ${tx({ en: "Projects", ko: "프로젝트", uz: "Loyihalar" })} - Davis`
    : t.projects.title;

  const seoDescription = selectedTech
    ? tx({
        en: `Explore ${filteredProjects.length} projects built with ${selectedTech}.`,
        ko: `${selectedTech} 기술을 사용한 ${filteredProjects.length}개의 프로젝트를 확인하세요.`,
        uz: `${selectedTech} texnologiyasi bilan yaratilgan ${filteredProjects.length} ta loyihani ko'ring.`,
      })
    : tx({
        en: "A showcase of my recent work and contributions to innovative digital solutions.",
        ko: "실무 및 개인 프로젝트를 소개합니다.",
        uz: "Innovatsion raqamli yechimlar bo'yicha so'nggi ishlarim va hissalarim.",
      });

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url={`https://firdavs.dev/projects${selectedTech ? `#${selectedTech}` : ''}`}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.title}
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            {tx({
              en: "A showcase of my recent work and contributions to innovative digital solutions.",
              ko: "실무 및 개인 프로젝트를 소개합니다.",
              uz: "Innovatsion raqamli yechimlar bo'yicha so'nggi ishlarim va hissalarim.",
            })}
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {tx({ en: "Tech Tags", ko: "기술 태그", uz: "Texnologiya teglari" })}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {selectedTech && (
                <>
                  <button
                    onClick={copyLink}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors active:scale-95"
                    title={tx({ en: "Copy link", ko: "링크 복사", uz: "Havolani nusxalash" })}
                  >
                    {copied ? (
                      <>
                        <span className="text-green-600 dark:text-green-400">✓</span>
                        {tx({ en: "Copied!", ko: "복사됨!", uz: "Nusxalandi!" })}
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        {tx({ en: "Share", ko: "공유", uz: "Ulashish" })}
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors active:scale-95"
                  >
                    <X className="w-4 h-4" />
                    {tx({ en: "Clear", ko: "초기화", uz: "Tozalash" })}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Selected filter indicator with shareable URL */}
          {selectedTech && (
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <span className="font-semibold">#{selectedTech}</span>
                  {" · "}
                  {tx({
                    en: `${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''}`,
                    ko: `${filteredProjects.length}개 프로젝트`,
                    uz: `${filteredProjects.length} ta loyiha`,
                  })}
                </p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900/40 px-2 py-1 rounded text-blue-700 dark:text-blue-300 font-mono truncate max-w-[200px] sm:max-w-none">
                  /projects#{selectedTech}
                </code>
              </div>
            </div>
          )}

          {/* Filter chips - Hashtag style */}
          <div className="flex flex-wrap gap-2">
            {/* All button */}
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 ${
                !selectedTech
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {tx({ en: "All", ko: "전체", uz: "Hammasi" })}
              <span className="ml-1 opacity-70">({projects.length})</span>
            </button>

            {/* Popular tech filters - Hashtag style */}
            {popularTechs.map(({ tech, count }) => (
              <a
                key={tech}
                href={`#${encodeURIComponent(tech)}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTech(selectedTech === tech ? null : tech);
                }}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 inline-flex items-center gap-1 ${
                  selectedTech === tech
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <span className="opacity-60">#</span>
                {tech}
                <span className="ml-1 opacity-60 text-xs">({count})</span>
              </a>
            ))}

            {/* Show more button */}
            {remainingTechs.length > 0 && (
              <button
                onClick={() => setShowAllFilters(!showAllFilters)}
                className="px-3 sm:px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 active:scale-95 flex items-center gap-1"
              >
                {showAllFilters
                  ? tx({ en: "Less", ko: "접기", uz: "Kamroq" })
                  : tx({ en: `+${remainingTechs.length}`, ko: `+${remainingTechs.length}개`, uz: `+${remainingTechs.length}` })}
                <ChevronDown className={`w-4 h-4 transition-transform ${showAllFilters ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>

          {/* Expanded filters */}
          {showAllFilters && remainingTechs.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
              {remainingTechs.map(({ tech, count }) => (
                <a
                  key={tech}
                  href={`#${encodeURIComponent(tech)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedTech(selectedTech === tech ? null : tech);
                  }}
                  className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 inline-flex items-center gap-1 ${
                    selectedTech === tech
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <span className="opacity-60">#</span>
                  {tech}
                  <span className="ml-1 opacity-60 text-xs">({count})</span>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {tx({ en: "Tech Stack", ko: "기술 스택", uz: "Texnologiya Steki" })}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Frontend */}
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">⚛️</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">React</p>
              </div>

              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">💚</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Vue.js</p>
              </div>

              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📘</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  TypeScript
                </p>
              </div>

              {/* Mobile / App */}
              <div className="text-center p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">💎</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Flutter</p>
              </div>

              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📱</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  React Native
                </p>
              </div>

              <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🎨</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Tailwind CSS
                </p>
              </div>

              {/* Backend */}
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🟢</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Node.js</p>
              </div>

              <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">☕️</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Java / Spring Boot (learning)
                </p>
              </div>

              <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🐍</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Django</p>
              </div>

              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">⚡</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Express.js
                </p>
              </div>

              {/* Database */}
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🐘</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  PostgreSQL
                </p>
              </div>

              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🍃</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">MongoDB</p>
              </div>

              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🔥</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Firebase</p>
              </div>

              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🗄️</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">MySQL</p>
              </div>

              <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">📦</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Redis</p>
              </div>

              {/* Tools & Others */}
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🐳</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Docker</p>
              </div>

              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">☁️</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">AWS</p>
              </div>

              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🔌</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">REST API</p>
              </div>

              <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🔗</div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">WebSocket</p>
              </div>
            </div>
          </div>
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {tx({ en: "No projects found", ko: "프로젝트를 찾을 수 없습니다", uz: "Loyihalar topilmadi" })}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {tx({
                en: `No projects found using "${selectedTech}".`,
                ko: `"${selectedTech}" 기술을 사용한 프로젝트가 없습니다.`,
                uz: `"${selectedTech}" texnologiyasidan foydalangan loyihalar topilmadi.`,
              })}
            </p>
            <button
              onClick={() => setSelectedTech(null)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors active:scale-95"
            >
              {tx({ en: "View All Projects", ko: "모든 프로젝트 보기", uz: "Barcha loyihalarni ko'rish" })}
            </button>
          </div>
        )}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              {tx({ en: "Featured Projects", ko: "주요 프로젝트", uz: "Asosiy loyihalar" })}
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                ({featuredProjects.length})
              </span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={
                    index % 2 === 0
                      ? "animate-slide-in-left"
                      : "animate-slide-in-right"
                  }
                >
                  <ProjectCard project={project} featured={true} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {tx({ en: "Other Projects", ko: "기타 프로젝트", uz: "Boshqa loyihalar" })}
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                ({otherProjects.length})
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              {tx({ en: "Interested in Working Together?", ko: "함께 일하고 싶으신가요?", uz: "Birga ishlashni xohlaysizmi?" })}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              {tx({
                en: "I'm always excited to take on new challenges and collaborate on innovative projects.",
                ko: "새로운 도전과 혁신적인 프로젝트에 항상 열려있습니다.",
                uz: "Men doimo yangi qiyinchiliklarni qabul qilishga va innovatsion loyihalarda hamkorlik qilishga tayyorman.",
              })}
            </p>
            <a
              href="https://github.com/firdavs9777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors active:scale-95"
            >
              <Github className="w-5 h-5" />
              {tx({ en: "View More on GitHub", ko: "GitHub에서 더 보기", uz: "GitHub'da ko'proq ko'rish" })}
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
