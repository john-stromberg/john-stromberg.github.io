import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 4317,
    strictPort: true,
  },
  preview: {
    port: 4317,
    strictPort: true,
  },
})
