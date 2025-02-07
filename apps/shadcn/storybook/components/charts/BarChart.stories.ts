import type { Meta, StoryObj } from '@storybook/vue3'

import { BarChart } from '@/06-shared'

type Data = {
  name: string
  total: number
  predict: number
  value: number
}

const meta = {
  title: 'Charts/BarChart',
  // @ts-ignore
  component: BarChart<Data>,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    data: [
      {
        name: 'Jan',
        total: Math.floor(Math.random() * 2000) + 1000,
        predict: Math.floor(Math.random() * 2000) + 1000,
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Feb',
        total: Math.floor(Math.random() * 2000) + 1000,
        predict: Math.floor(Math.random() * 2000) + 1000,
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Mar',
        total: Math.floor(Math.random() * 2000) + 1000,
        predict: Math.floor(Math.random() * 2000) + 1000,
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Apr',
        total: Math.floor(Math.random() * 2000) + 1000,
        predict: Math.floor(Math.random() * 2000) + 1000,
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'May',
        total: Math.floor(Math.random() * 2000) + 1000,
        predict: Math.floor(Math.random() * 2000) + 1000,
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Jun',
        total: Math.floor(Math.random() * 2000) + 1000,
        predict: Math.floor(Math.random() * 2000) + 1000,
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Jul',
        total: Math.floor(Math.random() * 2000) + 1000,
        predict: Math.floor(Math.random() * 2000) + 1000,
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Aug',
        total: Math.floor(Math.random() * 2000) + 1000,
        predict: Math.floor(Math.random() * 2000) + 1000,
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Sep',
        total: Math.floor(Math.random() * 2000) + 1000,
        predict: Math.floor(Math.random() * 2000) + 1000,
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Oct',
        total: Math.floor(Math.random() * 2000) + 1000,
        predict: Math.floor(Math.random() * 2000) + 1000,
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Nov',
        total: Math.floor(Math.random() * 2000) + 1000,
        predict: Math.floor(Math.random() * 2000) + 1000,
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Dec',
        total: Math.floor(Math.random() * 2000) + 1000,
        predict: Math.floor(Math.random() * 2000) + 100,
        value: Math.floor(Math.random() * 2000) + 1000
      }
    ],
    categories: ['total', 'predict', 'value'],
    index: 'value',
    customTooltip: undefined,
    type: undefined,
    roundedCorners: undefined,
    colors: undefined,
    margin: undefined,
    filterOpacity: undefined,
    xFormatter: undefined,
    yFormatter: undefined,
    showXAxis: undefined,
    showYAxis: undefined,
    showTooltip: undefined,
    showLegend: undefined,
    showGridLine: undefined
  }
} satisfies Meta<typeof BarChart<Data>>

export default meta

type Story = StoryObj<typeof meta>

export const typeGrouped: Story = {
  name: 'Type: grouped',
  args: {}
}

export const typeStacked: Story = {
  name: 'Type: stacked',
  args: {
    type: 'stacked'
  }
}
