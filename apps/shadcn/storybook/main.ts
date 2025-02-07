import type { StorybookConfig } from '@storybook/vue3-vite'
import { dirname, join } from 'path'

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['./components/**/*.mdx', './components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('storybook-addon-vue-slots')
  ],
  framework: {
    name: getAbsolutePath('@storybook/vue3-vite'),
    options: {}
  }
}

export default config
