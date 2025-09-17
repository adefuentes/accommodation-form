import { defineConfig, mergeConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const viteConfig = defineConfig({
  plugins: [react(), tailwindcss()]
})

const vitestConfig = defineVitestConfig({
  test: {
    environment: 'happy-dom',
  },
})

export default mergeConfig(viteConfig, vitestConfig)
