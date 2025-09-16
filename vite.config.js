import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),       // ✅ Enables React JSX support
    tailwindcss(), // ✅ Enables Tailwind CSS
  ],
})