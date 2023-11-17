import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@scss': resolve(__dirname, 'src/scss'),
    },
  },
  build: {
    rollupOptions: {},
  },
});
