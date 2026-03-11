import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repoName = 's4s'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  const basePath = process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/'
  const nodeEnv = isProduction ? 'production' : 'development'

  return {
    base: basePath,
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          'process.env.NODE_ENV': JSON.stringify('development'),
        },
      },
    },
  }
})
