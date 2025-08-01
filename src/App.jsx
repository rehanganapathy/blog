import React, { useState, useEffect } from 'react';

// Components
import CursorDot from './components/CursorDot';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AnalysisPage from './pages/AnalysisPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';

// Hooks
import useMousePosition from './hooks/useMousePosition';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'streettalk':
        return <AnalysisPage />;
      case 'research':
        return <ResearchPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <CursorDot mousePosition={mousePosition} />
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
