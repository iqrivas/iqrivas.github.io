import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      images: resolve(__dirname, 'src/images'),
    },
  },
  plugins: [
    tailwindcss(),
    react()],
  build: {
    outDir: 'build',
  },
});