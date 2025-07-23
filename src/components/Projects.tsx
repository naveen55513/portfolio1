import React, { useEffect, useRef, useState } from 'react';
import { FaFileAlt, FaEnvelope, FaCloudDownloadAlt, FaChartBar, FaSearch, FaServer, FaCode } from 'react-icons/fa';
import { Github, Linkedin } from 'lucide-react';

// Define a type for the icon
import type { IconType } from 'react-icons/lib';

interface PythonTask {
  name: string;
  icon: IconType;
  desc: string;
  tags: string[];
}

const pythonTasks: PythonTask[] = [
  {
    name: 'File Handling',
    icon: FaFileAlt,
    desc: 'Read, write, and manage files with Python.',
    tags: ['Data', 'Scripts']
  },
  {
    name: 'Web Scraping',
    icon: FaSearch,
    desc: 'Extract data from websites using Python libraries.',
    tags: ['Web', 'Data']
  },
  {
    name: 'Data Analysis',
    icon: FaChartBar,
    desc: 'Analyze and visualize data with Python.',
    tags: ['Data']
  },
  {
    name: 'Send Emails/WhatsApp/SMS',
    icon: FaEnvelope,
    desc: 'Automate communication tasks with Python.',
    tags: ['Scripts', 'System']
  },
  {
    name: 'Google Search with Python',
    icon: FaSearch,
    desc: 'Perform Google searches programmatically.',
    tags: ['Web', 'Scripts']
  },
  {
    name: 'API Interaction',
    icon: FaCode,
    desc: 'Connect and interact with APIs using Python.',
    tags: ['Web', 'Scripts']
  },
  {
    name: 'Data Download from Web',
    icon: FaCloudDownloadAlt,
    desc: 'Download files and datasets from the internet.',
    tags: ['Web', 'Data']
  },
  {
    name: 'System Monitoring (RAM usage)',
    icon: FaServer,
    desc: 'Monitor system resources and performance.',
    tags: ['System']
  }
];

const allTags = ['All', 'Data', 'Web', 'System', 'Scripts'];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTag, setActiveTag] = useState('All');

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredTasks = activeTag === 'All'
    ? pythonTasks
    : pythonTasks.filter(task => task.tags.includes(activeTag));

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 relative z-10"
      aria-labelledby="python-tasks-title"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="python-tasks-title" className="text-3xl sm:text-4xl font-bold mb-10 text-center gradient-text">
          Python Tasks
        </h2>
        {/* Filter Bar */}
        <div className="flex justify-center mb-8 gap-2 sm:gap-4 flex-wrap">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-base sm:text-lg ${
                activeTag === tag
                  ? 'bg-white/30 dark:bg-gray-800/40 shadow text-blue-700 dark:text-blue-300'
                  : 'bg-transparent text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/30'
              }`}
              aria-selected={activeTag === tag}
              tabIndex={0}
            >
              {tag}
            </button>
          ))}
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredTasks.map((task: PythonTask, idx: number) => {
            const Icon = task.icon;
            return (
              <div
                key={task.name}
                className={`glass-card p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-700 ${visible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
                tabIndex={0}
                aria-label={task.name}
              >
                <div
                  className="mb-3 p-4 rounded-xl bg-white/30 dark:bg-gray-800/40 shadow-md backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:shadow-xl focus:scale-110 focus:shadow-xl"
                  data-tooltip-id={`tooltip-task-${idx}`}
                  data-tooltip-content={task.desc}
                  aria-describedby={`tooltip-task-${idx}`}
                >
                  {Icon && (
                    React.createElement(Icon as unknown as React.FC<unknown>, {
                      size: 36,
                      className: "mb-2 text-blue-500 dark:text-blue-300",
                      "aria-label": task.name
                    } as any)
                  )}
                </div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {task.name}
                </span>
                <div className="flex gap-3 mt-2 justify-center sm:justify-end w-full">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;