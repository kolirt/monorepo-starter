import type { Meta, StoryObj } from '@storybook/vue3'

import { Separator, type SeparatorProps } from '@/06-shared'

import { as } from '../../utils/as'
import { asChild } from '../../utils/asChild'

const meta = {
  title: 'Base Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    default: { control: 'text' },
    asChild,
    as,
    orientation: {
      type: 'string',
      control: 'inline-radio',
      description: 'Orientation of the component.',
      options: ['horizontal', 'vertical'] as Array<SeparatorProps['orientation']>
    },
    decorative: {
      type: 'boolean',
      control: 'boolean',
      description:
        'Whether or not the component is purely decorative.<br>' +
        'When `true`, accessibility-related attributes are updated so that that the rendered element is removed from the accessibility tree.'
    },
    label: {
      type: 'string',
      control: 'text'
    }
  },
  args: {
    default: 'Separator text',
    asChild: undefined,
    as: undefined,
    orientation: undefined,
    decorative: undefined,
    label: undefined
  },
  parameters: {
    slots: {
      default: {
        description: 'Default slot'
      }
    }
  }
} satisfies Meta<typeof Separator>

export default meta

type Story = StoryObj<typeof meta>

export const example: Story = {
  name: 'Example',
  args: {}
}
