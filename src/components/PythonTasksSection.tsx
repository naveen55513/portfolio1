import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from '../contexts/ThemeContext';
import { FaRegBookmark, FaBookmark, FaDownload } from 'react-icons/fa';

// Task data model
interface PythonTask {
  icon: string;
  title: string;
  desc: string;
  category: string;
  code: string;
  explanation: string;
}

const pythonTasks: PythonTask[] = [
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
  // ... Add all other tasks here ...
];

const categories = [
  { key: 'All', label: 'All' },
  { key: 'System', label: 'System' },
  { key: 'Data', label: 'Data' },
  { key: 'Web', label: 'Web' },
  { key: 'Messaging', label: 'Messaging' },
];

Modal.setAppElement('#root');

const PythonTasksSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalTask, setModalTask] = useState<PythonTask | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const { isDark } = useTheme();

  const filteredTasks = activeCategory === 'All'
    ? pythonTasks
    : pythonTasks.filter(task => task.category === activeCategory);

  const handleBookmark = (title: string) => {
    setBookmarks(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const handleDownload = (task: PythonTask) => {
    const blob = new Blob([task.code], { type: 'text/x-python' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${task.title.replace(/\s+/g, '_').toLowerCase()}.py`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Typing animation header (simple custom)
  const headerText = 'Python Automation Tasks Built with Love 🐍';
  const [typed, setTyped] = useState('');
  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(headerText.slice(0, i + 1));
      i++;
      if (i === headerText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="python-tasks" className="relative py-20 px-4 max-w-6xl mx-auto z-10">
      {/* Typing Animation Header */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 gradient-text font-poppins">
        <span>{typed}</span>
        <span className="blinking-cursor">|</span>
      </h2>
      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 text-base sm:text-lg ${
              activeCategory === cat.key
                ? 'bg-yellow-300/30 dark:bg-blue-900/40 shadow text-yellow-700 dark:text-blue-200'
                : 'bg-transparent text-gray-700 dark:text-gray-200 hover:bg-yellow-100/20 dark:hover:bg-blue-700/30'
            }`}
            aria-selected={activeCategory === cat.key}
            tabIndex={0}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <AnimatePresence>
          {filteredTasks.map((task: PythonTask, idx: number) => (
            <motion.div
              key={task.title}
              className={`glass-card p-6 rounded-2xl shadow-lg flex flex-col items-center text-center cursor-pointer transition-all duration-500 relative group ${isDark ? 'bg-[#23272f]/60' : 'bg-white/60'} hover:scale-105 hover:shadow-2xl`}
              style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(48,105,152,0.2)' }}
              onClick={() => setModalTask(task)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              tabIndex={0}
              aria-label={task.title}
            >
              <div className="text-4xl mb-2">{task.icon}</div>
              <div className="font-semibold text-lg mb-1 font-poppins">{task.title}</div>
              <div className="text-gray-500 dark:text-gray-300 text-sm mb-2">{task.desc}</div>
              <div className="absolute top-3 right-3 z-10" onClick={() => { handleBookmark(task.title); }}>
                {bookmarks.includes(task.title) ? <FaBookmark className="text-yellow-400" /> : <FaRegBookmark className="text-gray-400 hover:text-yellow-400" />}
              </div>
              {/* Fade-in detail on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs mt-2 text-blue-700 dark:text-yellow-300 font-poppins">
                Click for code & details
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {/* Modal for code preview */}
      <Modal
        isOpen={!!modalTask}
        onRequestClose={() => setModalTask(null)}
        className={`modal-content glass-card rounded-2xl p-6 max-w-lg mx-auto mt-24 shadow-2xl ${isDark ? 'bg-[#23272f]/90' : 'bg-white/90'}`}
        overlayClassName="modal-overlay fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
        closeTimeoutMS={300}
      >
        {modalTask && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{modalTask.icon}</span>
                <span className="font-bold text-lg font-poppins">{modalTask.title}</span>
              </div>
              <button onClick={() => setModalTask(null)} className="text-gray-400 hover:text-red-400 text-xl">×</button>
            </div>
            <div className="mb-2 text-gray-700 dark:text-gray-200 text-sm font-poppins">{modalTask.explanation}</div>
            <div className="mb-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <SyntaxHighlighter language="python" showLineNumbers style={isDark ? undefined : undefined} customStyle={{ fontSize: 14, background: 'transparent' }}>
                {modalTask.code}
              </SyntaxHighlighter>
            </div>
            <div className="flex gap-4">
              <button onClick={() => handleDownload(modalTask)} className="flex items-center gap-1 px-3 py-2 rounded-lg bg-yellow-300 text-blue-900 font-semibold hover:bg-yellow-400 transition font-poppins">
                <FaDownload /> Download .py
              </button>
              <button onClick={() => handleBookmark(modalTask.title)} className="flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition font-poppins">
                {bookmarks.includes(modalTask.title) ? <FaBookmark /> : <FaRegBookmark />} Favorite
              </button>
            </div>
          </div>
        )}
      </Modal>
      {/* Particle/FloatingLines background is handled globally */}
      <style>{`
        .glass-card {
          backdrop-filter: blur(16px) saturate(180%);
          background: rgba(250, 250, 250, 0.6);
          box-shadow: 0 8px 32px 0 rgba(48,105,152,0.12);
        }
        .dark .glass-card {
          background: rgba(35, 39, 47, 0.6);
        }
        .gradient-text {
          background: linear-gradient(90deg, #FFD43B, #306998 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .font-poppins {
          font-family: 'Poppins', 'Inter', sans-serif;
        }
        .blinking-cursor {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to { visibility: hidden; }
        }
        .modal-overlay { z-index: 1000; }
        .modal-content { z-index: 1010; outline: none; }
      `}</style>
    </section>
  );
};

export default PythonTasksSection; 