import React from 'react';

const tasks = [
  { title: 'Web Scraper', tech: 'BeautifulSoup', desc: 'Extract data from websites easily.' },
  { title: 'WhatsApp Message Sender', tech: 'pywhatkit', desc: 'Send WhatsApp messages automatically.' },
  { title: 'Email Automation', tech: 'smtplib', desc: 'Automate email sending and management.' },
  { title: 'Google Search Bot', tech: 'requests, bs4', desc: 'Automate Google searches and scrape results.' },
  { title: 'RAM/CPU Monitor', tech: 'psutil', desc: 'Monitor system resources in real time.' },
  { title: 'File Organizer', tech: 'os, shutil', desc: 'Organize files in folders automatically.' },
  { title: 'PDF Converter', tech: 'PyPDF2', desc: 'Convert and merge PDF files.' },
  { title: 'Website Data Downloader', tech: 'requests', desc: 'Download data from websites.' },
];

const AutomationTasksGrid: React.FC = () => (
  <section className="py-16 bg-[#0D1117]">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#FFD43B] mb-10">🚀 Automation Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {tasks.map((task) => (
        <div key={task.title} className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/60 cursor-pointer">
          <h3 className="text-xl font-semibold text-white mb-2">{task.title}</h3>
          <span className="inline-block bg-[#FFD43B] text-[#0D1117] text-xs font-bold px-3 py-1 rounded-full mb-2">{task.tech}</span>
          <p className="text-gray-300 text-sm">{task.desc}</p>
        </div>
      ))}
    </div>
    {/* Modal logic will be added here */}
  </section>
);

export default AutomationTasksGrid; 