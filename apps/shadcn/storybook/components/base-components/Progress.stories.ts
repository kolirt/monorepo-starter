import type { Meta, StoryObj } from '@storybook/vue3'

import { Progress } from '@/06-shared'

import { as } from '../../utils/as'
import { asChild } from '../../utils/asChild'

const meta = {
  title: 'Base Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    asChild,
    as,
    value: {
      type: 'number',
      control: 'number',
      description: 'The current value of the progress bar.'
    },
    max: {
      type: 'number',
      control: 'number',
      description: 'The maximum value of the progress bar.'
    }
  },
  args: {
    asChild: undefined,
    as: undefined,
    value: 35,
    max: undefined
  }
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

export const example: Story = {
  name: 'Example',
  args: {}
}
