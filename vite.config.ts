import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    dedupe: ['vue', 'vue-router'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
