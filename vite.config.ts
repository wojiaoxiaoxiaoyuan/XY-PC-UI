import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: resolve(__dirname, 'shared/public'),
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'shared')
    }
  },
  plugins: [vue()],
  server: {
    host: true,
    port: 10000
  }
})
