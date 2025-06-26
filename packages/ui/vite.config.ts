import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.{vue,ts,tsx}'],
      exclude: ['src/**/*.stories.ts', 'src/**/*.test.ts', 'src/**/*.spec.ts'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/dist/src/', '/dist/'),
        content,
      }),
      // 优化类型生成
      insertTypesEntry: true,
      logLevel: 'warn',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'shadow-ui',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'tailwindcss', 'tailwind-merge', 'class-variance-authority', 'clsx'],
      output: {
        globals: {
          vue: 'Vue',
          tailwindcss: 'tailwindcss',
          'tailwind-merge': 'tailwindMerge',
          'class-variance-authority': 'cva',
          clsx: 'clsx',
        },
      },
    },
    sourcemap: true,
    target: 'es2020',
    minify: 'esbuild',
    cssCodeSplit: false,
  },
})
