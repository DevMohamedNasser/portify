import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config نظيف بدون أي Tailwind plugin
export default defineConfig({
  plugins: [react()],
  base: '/portify/',
})
