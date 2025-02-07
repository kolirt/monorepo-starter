import type { Preview } from '@storybook/vue3'

import '@/06-shared/assets/styles/main.scss'

const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
