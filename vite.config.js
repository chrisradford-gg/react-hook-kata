import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    // Enables React Testing Library's automatic cleanup between tests.
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
