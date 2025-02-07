import type { Meta, StoryObj } from '@storybook/vue3'

import { Badge, type BadgeProps } from '@/06-shared'

import { as } from '../../utils/as'
import { asChild } from '../../utils/asChild'

const meta = {
  title: 'Base Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    default: { control: 'text' },
    asChild,
    as,
    variant: {
      type: 'string',
      control: 'inline-radio',
      description: `Variant of the badge.`,
      options: ['default', 'secondary', 'destructive', 'outline'] as Array<BadgeProps['variant']>
    }
  },
  args: {
    default: 'Badge text',
    asChild: undefined,
    as: undefined,
    variant: undefined
  },
  parameters: {
    slots: {
      default: {
        description: 'Default slot'
      }
    }
  }
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const VariantDefault: Story = {
  name: 'Variant: default',
  args: {}
}

export const VariantSecondary: Story = {
  name: 'Variant: secondary',
  args: {
    variant: 'secondary'
  }
}

export const VariantDestructive: Story = {
  name: 'Variant: destructive',
  args: {
    variant: 'destructive'
  }
}

export const VariantOutline: Story = {
  name: 'Variant: outline',
  args: {
    variant: 'outline'
  }
}
