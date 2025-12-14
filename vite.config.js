import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/GiDi_React_Site/',
  server: {
    host: '0.0.0.0',  // utile per accedere da altri dispositivi sulla rete locale
    port: 5173
  }
})

