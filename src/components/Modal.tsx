import React from 'react';

const Modal: React.FC<{ open: boolean; onClose: () => void; children: React.ReactNode }> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white dark:bg-[#1a2233] rounded-2xl p-8 shadow-2xl max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-red-400">×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 