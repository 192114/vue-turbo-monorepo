import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import type { InlineConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    // '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  // viteFinal: async (config: InlineConfig) => {
  //   return mergeConfig(config, {
  //     css: {
  //       postcss: {
  //         plugins: {
  //           '@tailwindcss/postcss': {},
  //         },
  //       },
  //     },
  //   })
  // },
}

export default config
