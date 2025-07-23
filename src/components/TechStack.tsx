import React, { useEffect, useRef, useState } from 'react';
import { FaPython, FaDocker, FaLinux, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiStreamlit, SiOpenai, SiCloudfoundry } from 'react-icons/si';
import { FaTools } from 'react-icons/fa';
import { Github, Linkedin } from 'lucide-react';

const techGroups = [
  {
    title: 'Languages',
    items: [
      {
        icon: FaPython, title: 'Python', desc: 'Versatile scripting and ML language.'
      }
    ]
  },
  {
    title: 'Tools',
    items: [
      {
        icon: FaDocker, title: 'Docker', desc: 'Containerization for reproducible environments.'
      },
      {
        icon: FaLinux, title: 'Linux', desc: 'Preferred OS for development and deployment.'
      },
      {
        icon: FaGitAlt, title: 'Git', desc: 'Version control and collaboration.'
      },
      {
        icon: SiStreamlit, title: 'Streamlit', desc: 'Rapid prototyping for ML/data apps.'
      }
    ]
  },
  {
    title: 'Cloud / DevOps',
    items: [
      {
        icon: FaAws, title: 'AWS', desc: 'Cloud infrastructure and services.'
      },
      {
        icon: FaTools, title: 'CI/CD', desc: 'Continuous integration and deployment.'
      },
      {
        icon: SiCloudfoundry, title: 'Cloud Platforms', desc: 'Modern cloud platforms for scalable apps.'
      }
    ]
  },
  {
    title: 'AI APIs',
    items: [
      {
        icon: SiOpenai, title: 'OpenAI API', desc: 'Generative AI and NLP capabilities.'
      }
    ]
  }
];

const TechStack: React.FC = () => {
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
      id="tech-stack"
      ref={sectionRef}
      className="py-20 relative z-10"
      aria-labelledby="tech-stack-title"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="tech-stack-title" className="text-3xl sm:text-4xl font-bold mb-10 text-center gradient-text">
          Tech Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {techGroups.map((group, idx) => (
            <div
              key={group.title}
              className={`glass-card p-6 rounded-2xl shadow-lg transition-all duration-700 ${visible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
              tabIndex={0}
              aria-label={group.title}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
                {group.items.map((item, i) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center group focus-within:ring-2 focus-within:ring-blue-400"
                    tabIndex={0}
                    aria-label={item.title}
                  >
                    <div
                      className="mb-2 p-3 rounded-xl bg-white/30 dark:bg-gray-800/40 shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl"
                      data-tooltip-id={`tooltip-${group.title}-${i}`}
                      data-tooltip-content={item.desc}
                      aria-describedby={`tooltip-${group.title}-${i}`}
                    >
                      {(() => {
                        const Icon = item.icon as unknown as React.FC<unknown>;
                        return <Icon {...({ size: 32, 'aria-label': item.title } as any)} />;
                      })()}
                    </div>
                    <span className="text-base font-medium text-gray-800 dark:text-gray-200">
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
          ))}
        </div>
      </div>
      {/* Removed Tooltip component due to type incompatibility */}
    </section>
  );
};

export default TechStack;