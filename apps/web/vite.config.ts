import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { loadEnv } from 'vite'
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
  const isDev = command === 'serve'
  const env = loadEnv(mode, '.', '')
  const alias = {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  }

  if (isDev) {
    alias['@shadow/ui'] = fileURLToPath(new URL('../../packages/ui/src', import.meta.url))
  } else {
    alias['@shadow/ui'] = fileURLToPath(new URL('../../packages/ui/dist', import.meta.url))
  }

  const replaceReg = new RegExp(`^${env.VITE_API_PREFIX}`)

  return {
    plugins: [vue()],
    resolve: {
      alias,
    },
    build: {
      target: 'es2020',
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: isDev,
      minify: isDev ? false : 'esbuild',
      // 优化 chunk 分割
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router'],
            'ui-vendor': ['@shadow/ui'],
            'utils-vendor': ['@vueuse/core', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          },
        },
      },
      // 优化构建性能
      chunkSizeWarningLimit: 1000,
      // 确保 CSS 正确处理
      cssCodeSplit: true,
    },
    // 依赖预构建优化
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@shadow/ui',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
      ],
      exclude: ['@shadow/ui'], // 排除 UI 包，因为它需要特殊处理
    },
    server: {
      port: 4000,
      open: true,
      host: true,
      cors: true,
      proxy: {
        [env.VITE_API_PREFIX]: {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(replaceReg, ''),
        },
      },
    },
    preview: {
      port: 4100,
      host: true,
      open: true,
    },
  }
})
