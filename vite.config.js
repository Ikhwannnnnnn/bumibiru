import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copy } from 'vite-plugin-copy';

export default defineConfig({
  plugins: [react(),
    copy({
      targets: [
        { src: 'node_modules/leaflet/dist/images/*', dest: 'dist/' }
      ],
    }),
  ],
  test: {
      environment: 'jsdom',
      setupFiles: './setupTests.js',
      globals: true,
  },
})
