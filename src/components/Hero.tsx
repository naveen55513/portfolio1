import React, { useEffect, useState } from 'react';
import { MapPin, Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../asssets/port.jpg.jpg';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState('');

  const texts = [
    "Hi, I'm Naveen | DevOps & AI Enthusiast",
    "Hi, I'm Naveen | ML Engineer",
    "Hi, I'm Naveen | CS Undergrad"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation with proper cleanup
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;
    
    const typeText = () => {
      const currentText = texts[currentIndex];
      
      if (isDeleting) {
        setTypingText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypingText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }
      
      let typeSpeed = 100;
      
      if (isDeleting) {
        typeSpeed = 50;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        typeSpeed = 500; // Pause before next word
      }
      
      timeoutId = setTimeout(typeText, typeSpeed);
    };
    
    typeText();
    
    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="animated-blob bg-purple-500 w-64 h-64 sm:w-96 sm:h-96 top-20 left-4 sm:left-20"></div>
        <div className="animated-blob bg-blue-500 w-56 h-56 sm:w-80 sm:h-80 top-40 right-4 sm:right-20" style={{ animationDelay: '2s' }}></div>
        <div className="animated-blob bg-pink-500 w-48 h-48 sm:w-72 sm:h-72 bottom-20 left-1/3" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 radial-bg opacity-50"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Typing Animation */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="typing-animation block min-h-[1.2em]">{typingText}</span>
              </h1>
              
              {/* Subheading with fade-in delay */}
              <div className={`transform transition-all duration-1000 delay-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium">
                  Building the future with AI & Automation
                </p>
                <div className="flex items-center space-x-2 text-gray-400 mt-4">
                  <MapPin size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Bhilwara, Rajasthan, India</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className={`prose prose-lg max-w-none transform transition-all duration-1000 delay-1500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I'm a passionate Computer Science Engineering student (3rd Year, B.Tech) at{' '}
                <span className="gradient-text font-semibold">Arya Institute of Engineering Technology, Jaipur</span>.
                With a strong drive for innovation, I specialize in Python automation, Machine Learning, Generative AI, and real-world system integration projects.
              </p>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-2000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button className="btn-modern inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                <Download size={18} className="sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Download Resume
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 text-base sm:text-lg"
              >
                <ExternalLink size={18} className="sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Let's Connect
              </a>
            </div>

            {/* Floating Social Media Buttons */}
            <div className={`flex justify-center sm:justify-start space-x-4 sm:space-x-6 transform transition-all duration-1000 delay-2500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <a
                href="https://github.com/naveen55513"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 animate-float"
                style={{ animationDelay: '0.5s' }}
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://linkedin.com/in/naveen-chundawat-4300822bb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:naveenchundawat55@gmail.com"
                className="w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image with Glassmorphic Card Flip */}
          <div
            className={`flex flex-col items-center transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative group">
              {/* Glassmorphic Card Container */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl glass-card p-3 sm:p-4 transform transition-all duration-500 group-hover:rotate-y-12">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Naveen Singh Chundawat"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Floating Name Below Image */}
              <div className="mt-6 sm:mt-8 animate-float" style={{ animationDelay: '0.5s' }}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                  <span className="gradient-text">Naveen Singh</span>
                  <br />
                  <span className="gradient-text">Chundawat</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;