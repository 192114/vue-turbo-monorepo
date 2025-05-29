import { HstVue } from '@histoire/plugin-vue'
import { defineConfig } from 'histoire'

export default defineConfig({
  plugins: [HstVue()],
  setupFile: './.histoire/setup.ts',
  theme: {
    title: 'Vue Turbo UI',
    colors: {
      primary: {
        500: '#00bd7e',
      },
    },
  },
  tree: {
    groups: [
      {
        id: 'top',
        title: '', // No title
      },
    ],
  },
})
