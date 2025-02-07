import type { Meta, StoryObj } from '@storybook/vue3'
import { CheckIcon, ChevronRightIcon } from 'lucide-vue-next'

import { Alert, type AlertProps } from '@/06-shared'

import { as } from '../../utils/as'
import { asChild } from '../../utils/asChild'

const meta = {
  title: 'Base Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    asChild,
    as,
    variant: {
      type: 'string',
      control: 'inline-radio',
      options: ['default', 'destructive'] as Array<AlertProps['variant']>
    },
    icon: {
      control: 'select',
      options: ['Undefined', 'check', 'chevron-right'],
      mapping: {
        Undefined: undefined,
        check: CheckIcon,
        'chevron-right': ChevronRightIcon
      }
    },
    title: { type: 'string', control: 'text' },
    description: { type: 'string', control: 'text' }
  },
  args: {
    asChild: undefined,
    as: undefined,
    variant: undefined,
    icon: undefined,
    title: 'Alert title',
    description: 'Alert description'
  }
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const variantDefault: Story = {
  name: 'Variant: default',
  args: {}
}

export const variantDestructive: Story = {
  name: 'Variant: destructive',
  args: {
    variant: 'destructive'
  }
}

export const withIcon: Story = {
  name: 'With icon',
  args: {
    icon: CheckIcon
  }
}

export const withoutTitle: Story = {
  name: 'Without title',
  args: {
    title: undefined
  }
}

export const withoutDescription: Story = {
  name: 'Without description',
  args: {
    description: undefined
  }
}
