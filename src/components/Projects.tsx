import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Terminal, Bot, Workflow } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: '🤖 Python Automation Suite',
      description: 'A comprehensive collection of Python automation scripts for WhatsApp messaging, email automation, SMS sending, Google search, and system monitoring.',
      icon: <Terminal className="w-8 h-8" />,
      technologies: ['Python', 'WhatsApp API', 'SMTP', 'SMS Gateway', 'Google API'],
      githubUrl: '#',
      color: 'from-green-500 to-emerald-500',
      features: [
        'WhatsApp message automation',
        'Email sending automation',
        'SMS automation system',
        'Google search integration',
        'RAM usage monitoring'
      ]
    },
    {
      title: '🔧 Menu-based System Dashboard',
      description: 'A unified terminal-style dashboard to manage Docker containers, execute Linux commands, and access an integrated AI assistant.',
      icon: <Workflow className="w-8 h-8" />,
      technologies: ['Python', 'Docker', 'Linux', 'AI Integration'],
      githubUrl: '#',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Terminal-style interface',
        'Docker container management',
        'Linux command execution',
        'Integrated AI assistant'
      ]
    },
    {
      title: '🤖 AI Chatbot Assistant',
      description: 'A conversational AI bot using OpenAI API, designed for intelligent interactions and command assistance.',
      icon: <Bot className="w-8 h-8" />,
      technologies: ['OpenAI API', 'Python', 'Streamlit', 'NLP'],
      githubUrl: '#',
      color: 'from-purple-500 to-pink-500',
      features: [
        'OpenAI API integration',
        'Intelligent conversations',
        'Command assistance',
        'User-friendly interface'
      ]
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-[#E9967A] to-[#11efef] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            📂 Featured <span className="bg-gradient-to-r from-[#11efef] to-[#E9967A] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend engineering precision with creative problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-500 h-full">
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Project Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#E9967A] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#11efef] to-[#E9967A] mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                  <button className="inline-flex items-center px-4 py-2 border border-[#E9967A] text-[#E9967A] rounded-lg hover:bg-[#E9967A] hover:text-white transition-colors duration-200 text-sm font-medium">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-[#11efef]/10 to-[#E9967A]/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to see more projects?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out my GitHub for a complete collection of projects and contributions.
            </p>
            <a
              href="https://github.com/naveen55513"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#11efef] to-[#E9967A] text-white font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Github size={20} className="mr-2" />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;