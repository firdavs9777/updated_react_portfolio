// src/pages/NotFound.tsx

import React from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/languageContext";

export const NotFoundPage: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "ko"
              ? "페이지를 찾을 수 없습니다"
              : "Page Not Found"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {language === "ko"
              ? "죄송합니다. 요청하신 페이지를 찾을 수 없습니다."
              : "Sorry, the page you're looking for doesn't exist."}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <Search className="w-16 h-16 text-gray-400 dark:text-gray-600" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {language === "ko"
              ? "다음 중 하나를 시도해보세요:"
              : "You might want to try one of these:"}
          </p>
          <div className="space-y-3">
            <Link
              to="/"
              className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              {language === "ko" ? "홈으로 가기" : "Go to Home"}
            </Link>
            <button
              onClick={() => navigate(-1)}
              className="block w-full px-6 py-3 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              {language === "ko" ? "이전 페이지로" : "Go Back"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            to="/about"
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {language === "ko" ? "소개" : "About"}
            </p>
          </Link>
          <Link
            to="/projects"
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {language === "ko" ? "프로젝트" : "Projects"}
            </p>
          </Link>
          <Link
            to="/experience"
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {language === "ko" ? "경험" : "Experience"}
            </p>
          </Link>
          <Link
            to="/contact"
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {language === "ko" ? "연락처" : "Contact"}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

