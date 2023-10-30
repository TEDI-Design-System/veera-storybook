import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@scss': resolve(__dirname, 'src/scss'),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'index.html'),
      name: 'e-service-design-system',
      // the proper extensions will be added
      fileName: 'veera',
    },
    rollupOptions: {},
  },
});
