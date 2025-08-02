// App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Only import Routes, Route (no Router)

// Components
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutKrish from './pages/AboutKrish';
import AboutRehan from './pages/AboutRehan';
import AnalysisPage from './pages/AnalysisPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import PostPage from './pages/PostPage';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-krish" element={<AboutKrish />} />
        <Route path="/about-rehan" element={<AboutRehan />} />
        <Route path="/streettalk" element={<AnalysisPage />} />
        <Route path="/analysis/:slug" element={<PostPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
