import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // v-- 新增下面这部分 server 配置
  server: {
    watch: {
      usePolling: true,
    },
  },
})