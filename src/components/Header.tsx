import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = ['about', 'tech-stack', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Tech Stack', id: 'tech-stack' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-card backdrop-blur-xl shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg sm:text-xl">NSC</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-300 hover:text-white transition-all duration-300 font-medium relative group text-sm lg:text-base ${
                  activeSection === item.id ? 'text-white' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a
              href="https://github.com/naveen55513"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github size={20} className="lg:w-6 lg:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/naveen-chundawat-4300822bb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} className="lg:w-6 lg:h-6" />
            </a>
            <a
              href="mailto:naveenchundawat55@gmail.com"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} className="lg:w-6 lg:h-6" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-3 rounded-xl glass-card text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              {isDark ? <Sun size={18} className="lg:w-5 lg:h-5" /> : <Moon size={18} className="lg:w-5 lg:h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-4 mobile-menu-container">
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-3 rounded-xl glass-card text-gray-300"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 p-2 rounded-xl glass-card"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Slide-in Animation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}>
          <div className="glass-card backdrop-blur-xl rounded-2xl mt-2 sm:mt-4 py-4 sm:py-6 shadow-2xl">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 sm:px-6 py-2 sm:py-3 text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-300 font-medium text-sm sm:text-base ${
                  activeSection === item.id ? 'text-white bg-purple-500/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            <div className="flex justify-center space-x-6 sm:space-x-8 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-600">
              <a
                href="https://github.com/naveen55513"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/naveen-chundawat-4300822bb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:naveenchundawat55@gmail.com"
                className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;