import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react', 'react-icons/fa', 'react-modal', 'framer-motion', 'react-syntax-highlighter'],
  },
  build: {
    rollupOptions: {
      // No need to exclude these dependencies as they should be bundled
    },
  },
});
