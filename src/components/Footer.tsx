import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-[#11efef] to-[#E9967A] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-[#E9967A] to-[#11efef] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#11efef] to-[#E9967A] flex items-center justify-center">
              <span className="text-white font-bold text-2xl">NSC</span>
            </div>
          </div>

          {/* Name and Title */}
          <h3 className="text-2xl font-bold mb-2">Naveen Singh Chundawat</h3>
          <p className="text-gray-400 mb-8">ML Engineer | CS Undergrad | AI Enthusiast</p>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#11efef] to-[rgb(161,122,233)] mx-auto mb-8 rounded-full"></div>

          {/* Made with Love */}
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using</span>
            <Code size={16} className="text-[#E9967A]" />
            <span>and</span>
            <Coffee size={16} className="text-amber-500" />
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Naveen Singh Chundawat. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-8 p-6 bg-gradient-to-r from-[#11efef]/10 to-[#E9967A]/10 rounded-xl backdrop-blur-sm border border-gray-800">
            <p className="text-gray-300 italic">
              "Innovation distinguishes between a leader and a follower."
            </p>
            <p className="text-gray-500 text-sm mt-2">- Steve Jobs</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;