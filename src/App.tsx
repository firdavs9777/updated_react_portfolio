// src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { LanguageProvider } from "./context/languageContext";
import { AboutPage } from "./pages/About";
import { CertificatesPage } from "./pages/Certificates";
import { ContactPage } from "./pages/Contact";
import { ExperiencePage } from "./pages/Experience";
import { HomePage } from "./pages/Home";
import { LiveProjectsPage } from "./pages/LiveProjects";
import { ProjectsPage } from "./pages/Projects";
import { NotFoundPage } from "./pages/NotFound";

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <LanguageProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
              <Navbar />
              <main className="pt-16 pb-20 md:pb-0 transition-all duration-300 ease-in-out">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/experience" element={<ExperiencePage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/certificates" element={<CertificatesPage />} />
                  <Route path="/live-projects" element={<LiveProjectsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/404" element={<NotFoundPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
              <ScrollToTop />
            </div>
          </BrowserRouter>
        </LanguageProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
