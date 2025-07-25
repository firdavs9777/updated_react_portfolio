// src/App.tsx

import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { LanguageProvider } from './context/languageContext';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { ExperiencePage } from './pages/Experience';
import { HomePage } from './pages/Home';
import { ProjectsPage } from './pages/Projects';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

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
      <div className="min-h-screen">
        <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="transition-all duration-500 ease-in-out">
          {renderPage()}
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
