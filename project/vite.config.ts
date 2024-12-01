import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Polyfill for structuredClone


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
