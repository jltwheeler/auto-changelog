import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mdPlugin, { Mode } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ include: [/\.jsx/, /\.tsx/, /\.md$/] }),
    mdPlugin({ mode: [Mode.REACT] }),
  ],
});
