import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'mostlyeveryweekend-art' with your repository name if different
export default defineConfig({
  base: '/mostlyeveryweekend-art/',
  plugins: [react()],
})
