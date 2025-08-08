import React, { useState, useRef, useEffect } from 'react';
import { FaPython, FaDocker, FaLinux, FaGitAlt, FaAws, FaJava, FaCuttlefish, FaCuttlefish as FaCPlusPlus, FaTools } from 'react-icons/fa';
import { SiStreamlit, SiMongodb, SiOpenai } from 'react-icons/si';
import type { IconType } from 'react-icons';
import { Github, Linkedin } from 'lucide-react';

const skillTabs = [
  { key: 'languages', label: 'Languages', icon: '💻' },
  { key: 'devtools', label: 'Dev Tools', icon: '🧰' },
  { key: 'cloud', label: 'Cloud & Backend', icon: '🌩️' },
];

type SkillItem = {
  icon: IconType;
  title: string;
  desc: string;
};

const skillsData: Record<string, SkillItem[]> = {
  languages: [
    { icon: FaCuttlefish, title: 'C', desc: 'Procedural programming language.' },
    { icon: FaCPlusPlus, title: 'C++', desc: 'Object-oriented and systems programming.' },
    { icon: FaJava, title: 'Java', desc: 'Cross-platform, object-oriented language.' },
    { icon: FaPython, title: 'Python', desc: 'Versatile scripting and ML language.' },
  ],
  devtools: [
    { icon: FaGitAlt, title: 'Git', desc: 'Version control and collaboration.' },
    { icon: FaDocker, title: 'Docker', desc: 'Containerization for reproducible environments.' },
    { icon: SiStreamlit, title: 'Streamlit', desc: 'Rapid prototyping for ML/data apps.' },
    { icon: FaLinux, title: 'Linux', desc: 'Preferred OS for development and deployment.' },
  ],
  cloud: [
    { icon: SiMongodb, title: 'MongoDB', desc: 'Backend NoSQL Database.' },
    { icon: FaAws, title: 'AWS', desc: 'Cloud infrastructure and services.' },

    { icon: FaTools, title: 'CI/CD Pipelines', desc: 'Continuous integration and deployment.' },
    { icon: SiOpenai, title: 'OpenAI API', desc: 'Generative AI and NLP capabilities.' },
  ],
};

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('languages');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 relative z-10"
      aria-labelledby="skills-title"
    >
      {/* NSC Monogram/Avatar */}
      <div className="absolute top-4 right-4 opacity-10 pointer-events-none select-none z-0">
        <div className="nsc-logo text-5xl font-extrabold">NSC</div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="skills-title" className="text-3xl sm:text-4xl font-bold mb-10 text-center gradient-text">
          Coding Skills & Tools
        </h2>
        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-2 sm:gap-4">
          {skillTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-base sm:text-lg ${
                activeTab === tab.key
                  ? 'bg-white/30 dark:bg-gray-800/40 shadow text-blue-700 dark:text-blue-300'
                  : 'bg-transparent text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/30'
              }`}
              aria-selected={activeTab === tab.key}
              aria-controls={`skills-panel-${tab.key}`}
              tabIndex={0}
            >
              <span className="mr-2" aria-hidden>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        {/* Cards Grid */}
        <div
          id={`skills-panel-${activeTab}`}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          role="tabpanel"
          aria-labelledby={activeTab}
        >
          {skillsData[activeTab as keyof typeof skillsData].map((item, idx) => (
            <div
              key={item.title}
              className={`glass-card p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-700 ${visible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
              tabIndex={0}
              aria-label={item.title}
            >
              <div
                className="mb-3 p-4 rounded-xl bg-white/30 dark:bg-gray-800/40 shadow-md backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:shadow-xl focus:scale-110 focus:shadow-xl"
                data-tooltip-id={`tooltip-${activeTab}-${idx}`}
                data-tooltip-content={item.desc}
                aria-describedby={`tooltip-${activeTab}-${idx}`}
              >
                {React.createElement(item.icon as unknown as React.FC<{ size: number; 'aria-label': string }>, { size: 32, 'aria-label': item.title })}
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {item.title}
              </span>
              <div className="flex gap-3 mt-2 justify-center w-full">
                <a
                  href="https://github.com/naveen55513"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub"
                  title="View GitHub"
                  className="rounded-full w-7 h-7 flex items-center justify-center bg-white dark:bg-gray-800 shadow hover:scale-110 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <Github size={18} className="text-gray-700 dark:text-gray-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/naveen-chundawat-4300822bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View LinkedIn"
                  title="View LinkedIn"
                  className="rounded-full w-7 h-7 flex items-center justify-center bg-white dark:bg-gray-800 shadow hover:scale-110 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <Linkedin size={18} className="text-blue-700 dark:text-blue-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 