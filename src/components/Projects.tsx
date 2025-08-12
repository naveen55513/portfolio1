import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import { SiPython, SiReact, SiJavascript, SiTypescript, SiMongodb, SiDocker, SiAws } from 'react-icons/si';

// Project data structure
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'backend' | 'ai' | 'automation' | 'data';
  githubUrl: string;
  linkedinUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 'ml-automation',
    title: 'ML Automation Pipeline',
    description: 'End-to-end machine learning pipeline with automated data processing and model deployment.',
    longDescription: 'A comprehensive machine learning automation system that handles data preprocessing, feature engineering, model training, and deployment using CI/CD pipelines. Includes automated hyperparameter tuning and model versioning.',
    technologies: ['Python', 'Docker', 'AWS', 'MLflow', 'Scikit-learn'],
    category: 'ai',
    githubUrl: 'https://github.com/naveen55513',
    linkedinUrl: 'https://www.linkedin.com/in/naveen-chundawat-4300822bb/',
    featured: true
  },
  {
    id: 'web-scraper',
    title: 'Intelligent Web Scraper',
    description: 'Advanced web scraping tool with data extraction and analysis capabilities.',
    longDescription: 'A sophisticated web scraping solution that can handle dynamic content, anti-bot measures, and extract structured data. Includes data cleaning, validation, and export to multiple formats.',
    technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas', 'PostgreSQL'],
    category: 'automation',
    githubUrl: 'https://github.com/naveen55513',
    linkedinUrl: 'https://www.linkedin.com/in/naveen-chundawat-4300822bb/',
    featured: true
  },
  {
    id: 'data-analytics',
    title: 'Real-time Data Analytics Dashboard',
    description: 'Interactive dashboard for real-time data visualization and business intelligence.',
    longDescription: 'A real-time analytics platform that processes streaming data and provides interactive visualizations. Features include real-time charts, alerts, and customizable dashboards for different business metrics.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB'],
    category: 'data',
    githubUrl: 'https://github.com/naveen55513',
    linkedinUrl: 'https://www.linkedin.com/in/naveen-chundawat-4300822bb/',
    featured: true
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation Suite',
    description: 'Complete DevOps automation with CI/CD, monitoring, and infrastructure management.',
    longDescription: 'A comprehensive DevOps automation platform that includes automated testing, deployment, monitoring, and infrastructure provisioning. Supports multiple cloud providers and includes disaster recovery features.',
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Prometheus'],
    category: 'automation',
    githubUrl: 'https://github.com/naveen55513',
    linkedinUrl: 'https://www.linkedin.com/in/naveen-chundawat-4300822bb/',
    featured: false
  },
  {
    id: 'ai-chatbot',
    title: 'AI-Powered Chatbot',
    description: 'Intelligent chatbot with natural language processing and context awareness.',
    longDescription: 'An AI chatbot that uses advanced NLP techniques to understand user intent and provide contextual responses. Includes sentiment analysis, multi-language support, and integration with various platforms.',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'Redis', 'Docker'],
    category: 'ai',
    githubUrl: 'https://github.com/naveen55513',
    linkedinUrl: 'https://www.linkedin.com/in/naveen-chundawat-4300822bb/',
    featured: false
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile App',
    description: 'React Native app with offline capabilities and real-time synchronization.',
    longDescription: 'A cross-platform mobile application built with React Native that works seamlessly on both iOS and Android. Features include offline-first architecture, real-time data sync, and push notifications.',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Jest'],
    category: 'mobile',
    githubUrl: 'https://github.com/naveen55513',
    linkedinUrl: 'https://www.linkedin.com/in/naveen-chundawat-4300822bb/',
    featured: false
  },
  {
    id: 'api-gateway',
    title: 'Microservices API Gateway',
    description: 'High-performance API gateway with authentication, rate limiting, and monitoring.',
    longDescription: 'A robust API gateway that handles authentication, authorization, rate limiting, and request routing for microservices architecture. Includes comprehensive monitoring, logging, and analytics.',
    technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Prometheus'],
    category: 'backend',
    githubUrl: 'https://github.com/naveen55513',
    linkedinUrl: 'https://www.linkedin.com/in/naveen-chundawat-4300822bb/',
    featured: false
  },
  {
    id: 'data-pipeline',
    title: 'ETL Data Pipeline',
    description: 'Scalable ETL pipeline for processing large datasets with data quality checks.',
    longDescription: 'An enterprise-grade ETL pipeline that processes terabytes of data daily. Includes data validation, quality checks, error handling, and automated retry mechanisms with comprehensive monitoring.',
    technologies: ['Python', 'Apache Airflow', 'Apache Spark', 'PostgreSQL', 'AWS S3'],
    category: 'data',
    githubUrl: 'https://github.com/naveen55513',
    linkedinUrl: 'https://www.linkedin.com/in/naveen-chundawat-4300822bb/',
    featured: false
  }
];

const categories = [
  { key: 'all', label: 'All Projects', icon: FaCode, color: 'blue' },
  { key: 'web', label: 'Web Apps', icon: FaLaptopCode, color: 'green' },
  { key: 'mobile', label: 'Mobile Apps', icon: FaMobileAlt, color: 'purple' },
  { key: 'backend', label: 'Backend', icon: FaServer, color: 'red' },
  { key: 'ai', label: 'AI/ML', icon: FaRobot, color: 'yellow' },
  { key: 'automation', label: 'Automation', icon: FaCode, color: 'indigo' },
  { key: 'data', label: 'Data', icon: FaDatabase, color: 'teal' }
];

const getCategoryIcon = (category: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    web: FaLaptopCode,
    mobile: FaMobileAlt,
    backend: FaServer,
    ai: FaRobot,
    automation: FaCode,
    data: FaDatabase
  };
  return iconMap[category] || FaCode;
};

const getCategoryColor = (category: string) => {
  const colorMap: Record<string, string> = {
    web: 'from-green-500 to-green-600',
    mobile: 'from-purple-500 to-purple-600',
    backend: 'from-red-500 to-red-600',
    ai: 'from-yellow-500 to-yellow-600',
    automation: 'from-indigo-500 to-indigo-600',
    data: 'from-teal-500 to-teal-600'
  };
  return colorMap[category] || 'from-blue-500 to-blue-600';
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showFeatured, setShowFeatured] = useState(true);
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

  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'all') return true;
    if (showFeatured && !project.featured) return false;
    return project.category === activeCategory;
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 relative z-10 bg-white dark:bg-gray-900"
      aria-labelledby="projects-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="projects-title" className="text-3xl sm:text-4xl font-bold mb-4 text-center gradient-text">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Explore my portfolio of innovative projects showcasing expertise in machine learning, 
          automation, web development, and cutting-edge technologies.
        </p>

        {/* Category Filter and Featured Toggle */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-4 py-2 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-${category.color}-400 transition-all duration-200 text-sm sm:text-base flex items-center gap-2 ${
                    activeCategory === category.key
                      ? `bg-gradient-to-r ${getCategoryColor(category.key)} text-white shadow-lg`
                      : 'bg-white/20 dark:bg-gray-800/40 text-gray-700 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <Icon size={16} />
                  {category.label}
                </button>
              );
            })}
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured-toggle"
              checked={showFeatured}
              onChange={(e) => setShowFeatured(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="featured-toggle" className="text-sm text-gray-700 dark:text-gray-300">
              Featured Only
            </label>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="glass-card p-6 rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                        {React.createElement(getCategoryIcon(project.category), { size: 20 })}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                            ⭐ Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors group-hover:scale-105"
                    >
                      <FaGithub size={16} />
                      <span className="text-sm">GitHub</span>
                    </a>
                    {project.linkedinUrl && (
                      <a
                        href={project.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group-hover:scale-105"
                      >
                        <FaLinkedin size={16} />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/30 transition-colors duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your filters or check back later for new projects.
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-card p-8 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${getCategoryColor(selectedProject.category)} text-white`}>
                    {React.createElement(getCategoryIcon(selectedProject.category), { size: 32 })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {categories.find(c => c.key === selectedProject.category)?.label}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-red-400 text-2xl hover:scale-110 transition-transform"
                >
                  ×
                </button>
              </div>

              {/* Project Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Description
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub size={18} />
                    View on GitHub
                  </a>
                  {selectedProject.linkedinUrl && (
                    <a
                      href={selectedProject.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FaLinkedin size={18} />
                      View on LinkedIn
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default Projects;