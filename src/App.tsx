// src/App.tsx

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { LanguageProvider } from "./context/languageContext";
import { AboutPage } from "./pages/About";
import { CertificatesPage } from "./pages/Certificates";
import { ContactPage } from "./pages/Contact";
import { ExperiencePage } from "./pages/Experience";
import { HomePage } from "./pages/Home";
import { LiveProjectsPage } from "./pages/LiveProjects";
import { ProjectsPage } from "./pages/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Navbar />
          <main className="transition-all duration-500 ease-in-out">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/certificates" element={<CertificatesPage />} />
              <Route path="/live-projects" element={<LiveProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
