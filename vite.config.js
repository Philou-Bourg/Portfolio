import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': '/src' // Définit un alias avec un chemin absolu
    }
  }
})
