import React from 'react';
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

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
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