import React from 'react';

const languages = [
  { name: 'Python', color: '#FFD43B' },
  { name: 'C', color: '#00FFFF' },
  { name: 'C++', color: '#00FFFF' },
  { name: 'Java', color: '#00FFFF' },
];
const tools = [
  { name: 'MongoDB', color: '#E9967A' },
  { name: 'Git', color: '#00FFFF' },
  { name: 'Linux', color: '#00FFFF' },
  { name: 'Docker', color: '#00FFFF' },
  { name: 'OpenAI API', color: '#FFD43B' },
  { name: 'Streamlit', color: '#FFD43B' },
  { name: 'AWS', color: '#FFD43B' },
  { name: 'CI/CD', color: '#FFD43B' },
];

const SkillsAndTechStack: React.FC = () => (
  <section className="py-16 bg-[#0D1117]">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#FFD43B] mb-10">🛠️ My Tech Arsenal</h2>
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-4">Programming Languages</h3>
        <div className="flex flex-wrap gap-3">
          {languages.map(lang => (
            <span key={lang.name} className="px-4 py-2 rounded-full font-bold text-white" style={{ background: lang.color }}>
              {lang.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-4">Tools & Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {tools.map(tool => (
            <span key={tool.name} className="px-4 py-2 rounded-full font-bold text-white" style={{ background: tool.color }}>
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsAndTechStack; 