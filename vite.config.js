import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", //
  build: {
    outDir: "dist", // output directory for the build
    emptyOutDir: true, // empty the output directory before building
  },
})
