import React, { useEffect, useState } from 'react';
import { MapPin, Download, ExternalLink } from 'lucide-react';
import profileImg from '../asssets/port.jpg.jpg';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="gradient-text">Naveen Singh</span>
                <br />
                <span className="gradient-text-alt">Chundawat</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                ML Engineer | CS Undergrad | ML AND GEN AI
              </p>
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <MapPin size={20} />
                <span>Bhilwara, Rajasthan, India</span>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I'm a passionate Computer Science Engineering student (3rd Year, B.Tech) at{' '}
                <span className="gradient-text font-semibold">Arya Institute of Engineering Technology, Jaipur</span>.
                With a strong drive for innovation, I specialize in Python automation, Machine Learning, Generative AI, and real-world system integration projects.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                From automating WhatsApp messaging and email systems to developing OpenAI-integrated assistants, I thrive on building practical automation solutions. Recently completed automation scripts for messaging, email, SMS, Google search, and system monitoring using Python.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-modern inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                <Download size={20} className="mr-3" />
                Download Resume
              </button>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg"
              >
                <ExternalLink size={20} className="mr-3" />
                Let's Connect
              </a>
            </div>
          </div>

          {/* Profile Image with Glassmorphism */}
          <div
            className={`flex justify-center transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-2 animate-pulse-slow">
                <div className="w-full h-full rounded-full glass-card p-1">
                  <img
                    src={profileImg}
                    alt="Naveen Singh Chundawat"
                    className="w-full h-full rounded-full object-cover shadow-2xl"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl animate-float">
                🚀
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-xl animate-float" style={{ animationDelay: '1s' }}>
                💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;