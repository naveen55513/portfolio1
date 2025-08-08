import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingLines from './components/FloatingLines';
import SkillsSection from './components/SkillsSection';
import PythonTasksSection from './components/PythonTasksSection';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  
  // Check if this is the first visit in this session
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
      setContentVisible(true);
    }
  }, []);
  
  const handleIntroComplete = () => {
    // Mark that the user has seen the intro in this session
    sessionStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
    // Small delay to allow exit animation to play
    setTimeout(() => setContentVisible(true), 500);
  };
  
  return (
    <ThemeProvider>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      <div 
        className={`min-h-screen transition-colors duration-300 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <FloatingLines />
        <Header />
        <main>
          <Hero />
          <SkillsSection />
          <TechStack />
          <PythonTasksSection />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;