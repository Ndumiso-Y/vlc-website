// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'
  return {
    base: '/', // Updated for cPanel deployment
    plugins: [
      react(),
      ...(isBuild
        ? [
            imagetools({
              defaultDirectives: () => {
                const p = new URLSearchParams()
                p.set('format', 'avif;webp;png')
                p.set('w', '480;768;1024;1280;1536')
                p.set('quality', '60')
                p.set('withoutEnlargement', 'true')
                p.set('metadata', 'true')
                return p
              }
            })
          ]
        : [])
    ],
    server: {
      hmr: { overlay: true }
    },
    optimizeDeps: { exclude: ['vite-imagetools'] }
  }
})
