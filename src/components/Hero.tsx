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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#11efef] to-[#E9967A] rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#E9967A] to-[#11efef] rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                👨‍💻 <span className="bg-gradient-to-r from-[#11efef] to-[#E9967A] bg-clip-text text-transparent">Naveen Singh</span>
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Chundawat
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                ML Engineer | CS Undergrad | ML AND GEN AI
              </p>
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <MapPin size={18} />
                <span>Bhilwara, Rajasthan, India</span>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate Computer Science Engineering student (3rd Year, B.Tech) at{' '}
                <span className="text-[#E9967A] font-semibold">Arya Institute of Engineering Technology, Jaipur</span>.
                With a strong drive for innovation, I specialize in Python automation, Machine Learning, Generative AI, and real-world system integration projects.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                From automating WhatsApp messaging and email systems to developing OpenAI-integrated assistants, I thrive on building practical automation solutions. Recently completed automation scripts for messaging, email, SMS, Google search, and system monitoring using Python.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#11efef] to-[#E9967A] text-white font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl">
                <Download size={18} className="mr-2" />
                Download Resume
              </button>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-[#E9967A] text-[#E9967A] font-semibold rounded-lg hover:bg-[#E9967A] hover:text-white transition-all duration-200"
              >
                <ExternalLink size={18} className="mr-2" />
                Let's Connect
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex justify-center transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-[#11efef] to-[#E9967A] p-1 animate-pulse">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover border-4 border-[#E9967A] shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;