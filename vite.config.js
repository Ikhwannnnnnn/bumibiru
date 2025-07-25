import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/leaflet/dist/images/*',
          dest: 'leaflet-images'
        }
      ]
    })
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    globals: true,
  }
})
