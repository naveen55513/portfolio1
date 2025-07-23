import React from 'react';

const HeaderBanner: React.FC = () => (
  <header className="relative flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-[#0D1117] to-[#1a2233] overflow-hidden">
    {/* Animated background lines/particles will go here */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-center text-[#FFD43B] drop-shadow-lg mb-4 animate-fade-in">
      🐍 Python Automation Tasks Built with Love ❤️
    </h1>
    <p className="text-lg sm:text-xl text-[#00FFFF] text-center max-w-2xl mx-auto animate-fade-in delay-200">
      Explore smart solutions crafted using Python and modern tooling
    </p>
  </header>
);

export default HeaderBanner; 