import type { Meta, StoryObj } from '@storybook/vue3'

import { as } from '../../utils/as'
import { asChild } from '../../utils/asChild'
import AspectRatio from './AspectRatio.vue'

const meta = {
  title: 'Base Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    asChild,
    as,
    ratio: {
      type: 'number',
      control: 'text',
      description: `The desired ratio. Eg: 16/9`
    }
  },
  args: {
    asChild: undefined,
    as: undefined,
    ratio: 16 / 9
  },
  parameters: {
    slots: {
      default: {
        description: 'Default slot',
        template: `<img src="https://docs.openvino.ai/2025/_images/stable-diffusion-text-to-image-with-output_27_1.png" alt="Image" class="rounded-md object-cover w-full h-full" style="object-fit: cover;" />`
      }
    }
  }
} satisfies Meta<typeof AspectRatio>

export default meta

type Story = StoryObj<typeof meta>

export const ratio169: Story = {
  name: 'Ratio: 16 / 9',
  args: {
    ratio: 16 / 9
  }
}

export const ratio43: Story = {
  name: 'Ratio: 4 / 3',
  args: {
    ratio: 4 / 3
  }
}

export const ratio11: Story = {
  name: 'Ratio: 1 / 1',
  args: {
    ratio: 1 / 1
  }
}
