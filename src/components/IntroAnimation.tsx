import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Show skip button after a short delay
    const timer = setTimeout(() => setShowSkip(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling during animation
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Name animation */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.5, 
            duration: 0.8,
            type: "spring",
            stiffness: 100 
          }}
        >
          <span className="relative inline-block">
            <motion.span 
              className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              style={{ 
                filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.5))",
                WebkitBackgroundClip: "text"
              }}
              animate={{
                filter: [
                  "drop-shadow(0 0 4px rgba(96, 165, 250, 0.3))",
                  "drop-shadow(0 0 8px rgba(96, 165, 250, 0.6))",
                  "drop-shadow(0 0 4px rgba(96, 165, 250, 0.3))"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Naveen Singh Chundawat
            </motion.span>
            <motion.span 
              className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-blue-400 to-teal-300 z-0" 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.3, duration: 0.8 }}
            />
          </span>
        </motion.h1>
        
        {/* Tagline animation */}
        <motion.div
          className="text-xl md:text-2xl text-cyan-100 mb-8 flex flex-wrap justify-center gap-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          {['Machine Learning', '|', 'DevOps', '|', 'Generative AI'].map((text, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.5 + (index * 0.1),
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              className={text === '|' ? 'text-blue-400' : ''}
              style={text !== '|' ? { 
                textShadow: "0 0 8px rgba(6, 182, 212, 0.5)"
              } : {}}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Particle/line animation */}
        <motion.div 
          className="relative w-80 h-40 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          {/* Wave animation */}
          <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 0 200 Q 200 100 400 200 Q 600 300 800 200"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
              transition={{ 
                delay: 2.3, 
                duration: 1.5,
                times: [0, 0.5, 1],
                ease: "easeInOut" 
              }}
            />
            <motion.path
              d="M 0 220 Q 200 320 400 220 Q 600 120 800 220"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
              transition={{ 
                delay: 2.5, 
                duration: 1.5,
                times: [0, 0.5, 1],
                ease: "easeInOut" 
              }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
              <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Animated lines */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-blue-400 to-cyan-300 h-[2px] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 50 + 20}px`,
                opacity: 0.6 + Math.random() * 0.4,
                rotate: `${Math.random() * 360}deg`,
                filter: "blur(0.5px)"
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 1, 0],
                opacity: [0, 0.8, 0.8, 0],
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * 40 - 20]
              }}
              transition={{ 
                delay: 2.2 + (i * 0.05),
                duration: 1.5,
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-cyan-300 to-blue-300"
              style={{
                left: '50%',
                top: '50%',
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                filter: "blur(0.5px)"
              }}
              initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0.5, 0],
                opacity: [0, 1, 0.7, 0],
                x: [0, (Math.random() * 120 - 60)],
                y: [0, (Math.random() * 120 - 60)]
              }}
              transition={{ 
                delay: 2.3 + (i * 0.03),
                duration: 1.2,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
        
        {/* Built with love */}
        <motion.div
          className="text-sm text-cyan-100 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.5 }}
          >
            Built with Love{' '}
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                filter: [
                  "drop-shadow(0 0 0px rgba(239, 68, 68, 0))",
                  "drop-shadow(0 0 5px rgba(239, 68, 68, 0.8))",
                  "drop-shadow(0 0 0px rgba(239, 68, 68, 0))"
                ]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatDelay: 0.5
              }}
              className="inline-block"
            >
              ❤️
            </motion.span>
          </motion.span>
        </motion.div>
        
        {/* Skip button */}
        {showSkip && (
          <motion.button
            className="absolute bottom-8 right-8 text-sm text-cyan-100 hover:text-white px-4 py-2 rounded-full border border-cyan-400/30 hover:border-cyan-400 transition-colors backdrop-blur-sm"
            onClick={onComplete}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(6, 182, 212, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Skip introduction animation"
          >
            Skip Intro
          </motion.button>
        )}
        
        {/* Auto-complete after animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          onAnimationComplete={onComplete}
          transition={{ delay: 4.5 }} // Total animation duration before auto-completing
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;