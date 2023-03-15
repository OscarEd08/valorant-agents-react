import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://OscarEd08.github.io/valorant-agents-react/",
  plugins: [react()],
})
