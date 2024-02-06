import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({ 
  server:{
    host: true,
    port:81,
  },
  plugins: [react()],
  base:"/My-Portfolio/",
  css:{
    modules:{
      localsConvention:"camelCase"
    }
  }
})
