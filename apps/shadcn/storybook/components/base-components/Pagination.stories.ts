import type { Meta, StoryObj } from '@storybook/vue3'

import { Pagination } from '@/06-shared'

import { as } from '../../utils/as'
import { asChild } from '../../utils/asChild'

const meta = {
  title: 'Base Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    asChild,
    as,
    data: {
      control: 'object',
      description: `Paginator data.`,
      required: true
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the pagination will be disabled.'
    },
    loading: {
      control: 'boolean',
      description: 'If `true`, the pagination will be loading.'
    }
  },
  args: {
    asChild: undefined,
    as: undefined,
    data: {
      current_page: 1,
      data: [{ id: 1 }, { id: 2 }, { id: 3 }],
      from: 1,
      last_page: 10,
      per_page: 10,
      to: 10,
      total: 100
    },
    disabled: undefined,
    loading: undefined
  }
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const example: Story = {
  name: 'Example',
  args: {}
}
