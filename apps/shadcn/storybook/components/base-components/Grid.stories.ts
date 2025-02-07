import type { Meta, StoryObj } from '@storybook/vue3'

import { type GridProps } from '@/06-shared'

import { as } from '../../utils/as'
import { asChild } from '../../utils/asChild'
import Grid from './Grid.vue'

const meta = {
  title: 'Base Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    asChild,
    as,
    columns: {
      type: 'string',
      control: 'inline-radio',
      description: `Number of columns.`,
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as Array<GridProps['columns']>
    }
  },
  args: {
    asChild: undefined,
    as: undefined,
    columns: undefined
  }
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof meta>

export const columns1: Story = {
  name: 'Columns: 1',
  args: {
    columns: '1'
  }
}

export const columns2: Story = {
  name: 'Columns: 2',
  args: {
    columns: '2'
  }
}

export const columns3: Story = {
  name: 'Columns: 3',
  args: {
    columns: '3'
  }
}

export const columns4: Story = {
  name: 'Columns: 4',
  args: {
    columns: '4'
  }
}

export const columns5: Story = {
  name: 'Columns: 5',
  args: {
    columns: '5'
  }
}

export const columns6: Story = {
  name: 'Columns: 6',
  args: {
    columns: '6'
  }
}

export const columns7: Story = {
  name: 'Columns: 7',
  args: {
    columns: '7'
  }
}

export const columns8: Story = {
  name: 'Columns: 8',
  args: {
    columns: '8'
  }
}

export const columns9: Story = {
  name: 'Columns: 9',
  args: {
    columns: '9'
  }
}

export const columns10: Story = {
  name: 'Columns: 10',
  args: {
    columns: '10'
  }
}

export const columns11: Story = {
  name: 'Columns: 11',
  args: {
    columns: '11'
  }
}

export const columns12: Story = {
  name: 'Columns: 12',
  args: {
    columns: '12'
  }
}
