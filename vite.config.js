import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'; // <-- ADD FOR ANALYSIS
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    visualizer({ // <-- ADD THIS PLUGIN
      filename: 'bundle-analysis.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_variables";`
      }
    }
  },
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
    // REMOVE the old rollupOptions and REPLACE with this:
    rollupOptions: {
      output: {
        // This creates a separate vendor chunk for third-party libraries
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Group React and related packages together
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            // Group utility libraries together
            if (id.includes('framer-motion')) {
              return 'vendor-animations';
            }
            if (id.includes('bootstrap') || id.includes('react-bootstrap')) {
              return 'vendor-bootstrap';
            }
            // All other npm packages go into a generic vendor chunk
            return 'vendor';
          }
        },
        // Optimized file naming for better caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    // Enable minification for smaller bundles
    minify: 'esbuild',
    // Generate sourcemaps for debugging (disable for production if needed)
    sourcemap: true
  }
})