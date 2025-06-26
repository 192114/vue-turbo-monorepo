import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  const alias = {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  }

  if (isDev) {
    alias['@shadow/ui'] = fileURLToPath(new URL('../../packages/ui/src', import.meta.url))
  } else {
    alias['@shadow/ui'] = fileURLToPath(new URL('../../packages/ui/dist', import.meta.url))
  }

  return {
    plugins: [vue()],
    resolve: {
      alias,
    },
  }
})
