import React from 'react';

const Footer: React.FC = () => (
  <footer className="sticky bottom-0 w-full bg-white dark:bg-gray-900 py-4 flex justify-center items-center gap-6 border-t border-cyan-400/10">
    <span className="text-white font-semibold">Connect with Me:</span>
    {/* Add GitHub/LinkedIn icons here */}
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-[#00FFFF] text-2xl hover:text-white transition">
      {/* GitHub Icon */}
      <i className="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-[#00FFFF] text-2xl hover:text-white transition">
      {/* LinkedIn Icon */}
      <i className="fab fa-linkedin"></i>
    </a>
  </footer>
);

export default Footer;