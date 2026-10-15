import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Configuração do Vite para publicação no GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/atelier-de-sabores/',
})
