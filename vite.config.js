import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',
  publicDir: '../public/',
  base: '/3D-Shoe/',   
  server: {
    host: true,
    open: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true
  }
});
