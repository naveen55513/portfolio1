import React, { useEffect, useRef, useState } from 'react';
import { Code, Server, Cloud, Bot, Terminal, GitBranch } from 'lucide-react';

const TechStack: React.FC = () => {
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

  const techCategories = [
    {
      title: 'Core Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Docker', 'Linux', 'Git', 'CI/CD', 'AWS'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Frameworks & Tools',
      icon: <Server className="w-6 h-6" />,
      skills: ['Streamlit', 'OpenAI API', 'GitHub Actions', 'React', 'Node.js'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Specialties',
      icon: <Bot className="w-6 h-6" />,
      skills: ['WhatsApp Automation', 'Email Automation', 'SMS Automation', 'Google Search API', 'RAM Monitoring'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Development Tools',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Terminal Dashboards', 'Chatbot Integrations', 'ML Models', 'System Monitoring', 'API Integration'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'GitLab', 'Version Control', 'Collaboration'],
      color: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-10 w-64 h-64 bg-gradient-to-r from-[#11efef] to-[#E9967A] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🧠 <span className="bg-gradient-to-r from-[#11efef] to-[#E9967A] bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning multiple domains of modern software development
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className={`transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`transform transition-all duration-500 ${
                        isVisible 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#11efef] to-[#E9967A]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-[#11efef]/10 to-[#E9967A]/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🚀 Recent Automation Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              {[
                { icon: '📱', title: 'WhatsApp Automation', desc: 'Python messaging bot' },
                { icon: '📧', title: 'Email Automation', desc: 'SMTP integration' },
                { icon: '💬', title: 'SMS Automation', desc: 'Gateway integration' },
                { icon: '🔍', title: 'Google Search API', desc: 'Automated searches' },
                { icon: '💾', title: 'RAM Monitoring', desc: 'System analytics' }
              ].map((project, index) => (
                <div
                  key={project.title}
                  className={`transform transition-all duration-500 ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + (index * 100)}ms` }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-200 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl mb-2">{project.icon}</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {project.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="text-[#E9967A] font-semibold">Constantly evolving</span> with the latest technologies and best practices in software development, 
              automation scripting, machine learning, and system integration to deliver practical, real-world solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;