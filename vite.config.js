// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// Repository name for GitHub Pages
const repoName = 'energyone_alpha' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',  // Set correct base for GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@store': path.resolve(__dirname, './src/store'),
      '@router': path.resolve(__dirname, './src/router'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@apps': path.resolve(__dirname, './src/apps'),
      '@neon': path.resolve(__dirname, './src/apps/neon/src'),
      '@mosaic': path.resolve(__dirname, './src/apps/mosaic/src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})
