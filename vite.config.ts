import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Vue-Tree-Navigation/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./dev', import.meta.url))
    }
  }
})
