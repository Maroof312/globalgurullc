// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/',
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    visualizer({
      filename: 'bundle-analysis.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime', 'scheduler'],
    esbuildOptions: {
      target: 'es2020',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_variables";`,
      },
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',

        // ✅ Manual chunking for Treemap + faster caching
        manualChunks(id) {
          if (!id) return;

          // Vendor chunking
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom')) return 'vendor-router';
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('react-icons')) return 'vendor-icons';
            if (id.includes('swiper')) return 'vendor-swiper';
            if (id.includes('bootstrap')) return 'vendor-bootstrap';
            if (id.includes('react-bootstrap')) return 'vendor-react-bootstrap';
            if (id.includes('react-intersection-observer')) return 'vendor-observer';
            if (id.includes('react-countup')) return 'vendor-countup';
            if (id.includes('react-helmet-async')) return 'vendor-helmet';
            return 'vendor';
          }

          // Optional: split analytics folder
          if (id.includes('/src/components/analytics/')) return 'analytics';
        },
      },
    },
    minify: 'esbuild',
    sourcemap: false,
  },
});
