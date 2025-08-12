import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPython, FaDocker, FaLinux, FaGitAlt, FaAws, FaJava, FaCuttlefish, FaTools, FaFileAlt, FaEnvelope, FaCloudDownloadAlt, FaChartBar, FaSearch, FaServer, FaCode } from 'react-icons/fa';
import { SiStreamlit, SiMongodb, SiOpenai, SiCplusplus, SiCloudfoundry } from 'react-icons/si';
import { Github, Linkedin } from 'lucide-react';
import type { IconType } from 'react-icons';

// Menu items for the unified section
const menuItems = [
  { key: 'coding-skills', label: 'Coding Skills', icon: '💻', color: 'blue' },
  { key: 'python-tasks', label: 'Python Tasks', icon: '🐍', color: 'yellow' },
  { key: 'tools', label: 'Tools & Tech', icon: '🧰', color: 'green' },
];

// Coding Skills data
const codingSkills = {
  languages: [
    { icon: FaCuttlefish, title: 'C', desc: 'Procedural programming language.' },
    { icon: SiCplusplus, title: 'C++', desc: 'Object-oriented and systems programming.' },
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

// Python Tasks data
const pythonTasks = [
  {
    icon: '📁',
    title: 'File Handling',
    desc: 'Read, write, and manage files in Python.',
    category: 'System',
    code: `# File Handling Example\nwith open('file.txt', 'r') as f:\n    data = f.read()\nprint(data)`,
    explanation: 'This code opens a file, reads its contents, and prints them.'
  },
  {
    icon: '🌐',
    title: 'Web Scraping',
    desc: 'Extract data from websites using Python.',
    category: 'Web',
    code: `# Web Scraping Example\nimport requests\nfrom bs4 import BeautifulSoup\nresp = requests.get('https://example.com')\nsoup = BeautifulSoup(resp.text, 'html.parser')\nprint(soup.title.text)`,
    explanation: 'This code fetches a webpage and prints its title.'
  },
  {
    icon: '📊',
    title: 'Data Analysis',
    desc: 'Analyze and visualize data with Python.',
    category: 'Data',
    code: `# Data Analysis Example\nimport pandas as pd\nimport matplotlib.pyplot as plt\ndf = pd.read_csv('data.csv')\ndf.plot()\nplt.show()`,
    explanation: 'This code reads CSV data and creates a plot.'
  },
  {
    icon: '📧',
    title: 'Send Emails/WhatsApp/SMS',
    desc: 'Automate communication tasks with Python.',
    category: 'System',
    code: `# Email Example\nimport smtplib\nfrom email.mime.text import MIMEText\nmsg = MIMEText('Hello from Python!')\nmsg['Subject'] = 'Python Email'\nmsg['From'] = 'sender@example.com'\nmsg['To'] = 'recipient@example.com'`,
    explanation: 'This code sets up an email message using Python.'
  },
  {
    icon: '🔍',
    title: 'Google Search with Python',
    desc: 'Perform Google searches programmatically.',
    category: 'Web',
    code: `# Google Search Example\nfrom googlesearch import search\nquery = "Python programming"\nfor url in search(query, num_results=5):\n    print(url)`,
    explanation: 'This code performs a Google search and prints results.'
  },
  {
    icon: '🔌',
    title: 'API Interaction',
    desc: 'Connect and interact with APIs using Python.',
    category: 'Web',
    code: `# API Example\nimport requests\nresponse = requests.get('https://api.example.com/data')\ndata = response.json()\nprint(data)`,
    explanation: 'This code makes an API request and processes the response.'
  },
  {
    icon: '⬇️',
    title: 'Data Download from Web',
    desc: 'Download files and datasets from the internet.',
    category: 'Web',
    code: `# Download Example\nimport requests\nurl = 'https://example.com/file.zip'\nresponse = requests.get(url)\nwith open('file.zip', 'wb') as f:\n    f.write(response.content)`,
    explanation: 'This code downloads a file from a URL.'
  },
  {
    icon: '💾',
    title: 'System Monitoring (RAM usage)',
    desc: 'Monitor system resources and performance.',
    category: 'System',
    code: `# System Monitoring Example\nimport psutil\nram = psutil.virtual_memory()\nprint(f"RAM Usage: {ram.percent}%")\nprint(f"Available: {ram.available / 1024**3:.2f} GB")`,
    explanation: 'This code monitors system RAM usage.'
  }
];

const pythonCategories = [
  { key: 'All', label: 'All' },
  { key: 'System', label: 'System' },
  { key: 'Data', label: 'Data' },
  { key: 'Web', label: 'Web' },
];

// Tools & Tech data
const toolsAndTech = [
  {
    title: 'Languages',
    items: [
      { icon: FaPython, title: 'Python', desc: 'Versatile scripting and ML language.' }
    ]
  },
  {
    title: 'Tools',
    items: [
      { icon: FaDocker, title: 'Docker', desc: 'Containerization for reproducible environments.' },
      { icon: FaLinux, title: 'Linux', desc: 'Preferred OS for development and deployment.' },
      { icon: FaGitAlt, title: 'Git', desc: 'Version control and collaboration.' },
      { icon: SiStreamlit, title: 'Streamlit', desc: 'Rapid prototyping for ML/data apps.' }
    ]
  },
  {
    title: 'Cloud / DevOps',
    items: [
      { icon: FaAws, title: 'AWS', desc: 'Cloud infrastructure and services.' },
      { icon: FaTools, title: 'CI/CD', desc: 'Continuous integration and deployment.' },
      { icon: SiCloudfoundry, title: 'Cloud Platforms', desc: 'Modern cloud platforms for scalable apps.' }
    ]
  },
  {
    title: 'AI APIs',
    items: [
      { icon: SiOpenai, title: 'OpenAI API', desc: 'Generative AI and NLP capabilities.' }
    ]
  }
];

const SkillsAndTechStack: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('coding-skills');
  const [activeSubTab, setActiveSubTab] = useState('languages');
  const [activePythonCategory, setActivePythonCategory] = useState('All');
  const [modalTask, setModalTask] = useState<any>(null);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
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

  const handleBookmark = (title: string) => {
    setBookmarks(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const filteredPythonTasks = activePythonCategory === 'All'
    ? pythonTasks
    : pythonTasks.filter(task => task.category === activePythonCategory);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      yellow: 'from-yellow-400 to-yellow-500',
      green: 'from-green-500 to-green-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-blue-500 to-blue-600';
  };

  const renderCodingSkills = () => (
    <motion.div
      key="coding-skills"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex justify-center mb-8 gap-2 sm:gap-4">
        {Object.keys(codingSkills).map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`px-4 py-2 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-base sm:text-lg ${
              activeSubTab === tab
                ? 'bg-white/30 dark:bg-gray-800/40 shadow text-blue-700 dark:text-blue-300'
                : 'bg-transparent text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/30'
            }`}
          >
            {tab === 'languages' ? '💻' : tab === 'devtools' ? '🧰' : '🌩️'} {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {codingSkills[activeSubTab as keyof typeof codingSkills].map((item, idx) => (
          <motion.div
            key={item.title}
            className="glass-card p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="mb-3 p-4 rounded-xl bg-white/30 dark:bg-gray-800/40 shadow-md backdrop-blur-md transition-transform duration-300 hover:scale-110">
              {React.createElement(item.icon as unknown as React.FC<{ size: number }>, { size: 32 })}
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {item.title}
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {item.desc}
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/naveen55513"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 shadow hover:scale-110 hover:shadow-lg transition-all duration-200"
              >
                <Github size={18} className="text-gray-700 dark:text-gray-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/naveen-chundawat-4300822bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 shadow hover:scale-110 hover:shadow-lg transition-all duration-200"
              >
                <Linkedin size={18} className="text-blue-700 dark:text-blue-300" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderPythonTasks = () => (
    <motion.div
      key="python-tasks"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {pythonCategories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActivePythonCategory(cat.key)}
            className={`px-4 py-2 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 text-base sm:text-lg ${
              activePythonCategory === cat.key
                ? 'bg-yellow-300/30 dark:bg-yellow-900/40 shadow text-yellow-700 dark:text-yellow-200'
                : 'bg-transparent text-gray-700 dark:text-gray-200 hover:bg-yellow-100/20 dark:hover:bg-yellow-700/30'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPythonTasks.map((task, idx) => (
          <motion.div
            key={task.title}
            className="glass-card p-6 rounded-2xl shadow-lg flex flex-col items-center text-center cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setModalTask(task)}
          >
            <div className="text-4xl mb-3">{task.icon}</div>
            <div className="font-semibold text-lg mb-2">{task.title}</div>
            <div className="text-gray-500 dark:text-gray-300 text-sm mb-3">{task.desc}</div>
            <div className="absolute top-3 right-3" onClick={e => { e.stopPropagation(); handleBookmark(task.title); }}>
              {bookmarks.includes(task.title) ? 
                <span className="text-yellow-400">★</span> : 
                <span className="text-gray-400 hover:text-yellow-400">☆</span>
              }
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-blue-700 dark:text-yellow-300">
              Click for code & details
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderToolsAndTech = () => (
    <motion.div
      key="tools"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {toolsAndTech.map((group, idx) => (
          <motion.div
            key={group.title}
            className="glass-card p-6 rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {group.items.map((item, i) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center group"
                >
                  <div className="mb-2 p-3 rounded-xl bg-white/30 dark:bg-gray-800/40 shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    {React.createElement(item.icon as unknown as React.FC<{ size: number }>, { size: 28 })}
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                    {item.title}
                  </span>
                  <div className="flex gap-2 mt-2">
                    <a
                      href="https://github.com/naveen55513"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full w-6 h-6 flex items-center justify-center bg-white dark:bg-gray-800 shadow hover:scale-110 transition-all duration-200"
                    >
                      <Github size={14} className="text-gray-700 dark:text-gray-200" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/naveen-chundawat-4300822bb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full w-6 h-6 flex items-center justify-center bg-white dark:bg-gray-800 shadow hover:scale-110 transition-all duration-200"
                    >
                      <Linkedin size={14} className="text-blue-700 dark:text-blue-300" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills-and-tech"
      ref={sectionRef}
      className="py-20 relative z-10 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center gradient-text">
          Skills & Technology Stack
        </h2>
        
        {/* Main Navigation Menu */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveMenu(item.key)}
              className={`px-6 py-3 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-${item.color}-400 transition-all duration-300 text-lg ${
                activeMenu === item.key
                  ? `bg-gradient-to-r ${getColorClasses(item.color)} text-white shadow-lg transform scale-105`
                  : 'bg-white/20 dark:bg-gray-800/40 text-gray-700 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-gray-700/50 hover:scale-105'
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeMenu === 'coding-skills' && renderCodingSkills()}
            {activeMenu === 'python-tasks' && renderPythonTasks()}
            {activeMenu === 'tools' && renderToolsAndTech()}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal for Python Task Details */}
      {modalTask && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModalTask(null)}
        >
          <motion.div
            className="glass-card p-6 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{modalTask.icon}</span>
                <span className="font-bold text-xl">{modalTask.title}</span>
              </div>
              <button 
                onClick={() => setModalTask(null)}
                className="text-gray-400 hover:text-red-400 text-2xl hover:scale-110 transition-transform"
              >
                ×
              </button>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mb-4">{modalTask.explanation}</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap">{modalTask.code}</pre>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  const blob = new Blob([modalTask.code], { type: 'text/x-python' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `${modalTask.title.replace(/\s+/g, '_').toLowerCase()}.py`;
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors font-medium"
              >
                Download .py
              </button>
              <button 
                onClick={() => handleBookmark(modalTask.title)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {bookmarks.includes(modalTask.title) ? '★ Favorited' : '☆ Favorite'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <style jsx>{`
        .glass-card {
          backdrop-filter: blur(16px) saturate(180%);
          background: rgba(250, 250, 250, 0.6);
          box-shadow: 0 8px 32px 0 rgba(48,105,152,0.12);
        }
        .dark .glass-card {
          background: rgba(35, 39, 47, 0.6);
        }
        .gradient-text {
          background: linear-gradient(90deg, #3B82F6, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default SkillsAndTechStack; 