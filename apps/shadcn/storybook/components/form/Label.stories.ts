import type { Meta, StoryObj } from '@storybook/vue3'

import { Label } from '@/06-shared'

import { as } from '../../utils/as'
import { asChild } from '../../utils/asChild'

const meta = {
  title: 'Form/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    asChild,
    as,
    for: {
      type: 'string',
      control: 'text',
      description: `The id of the form element that the label is bound to.`
    }
  },
  args: {
    default: 'Label text',
    asChild: undefined,
    as: undefined,
    for: undefined
  },
  parameters: {
    slots: {
      default: {
        description: 'Default slot'
      }
    }
  }
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const example: Story = {
  name: 'Example',
  args: {}
}
