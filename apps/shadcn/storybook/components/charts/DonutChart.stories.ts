import type { Meta, StoryObj } from '@storybook/vue3'

import { DonutChart, type DonutChartProps } from '@/06-shared'

type Data = {
  name: string
  value: number
}

const meta = {
  title: 'Charts/DonutChart',
  // @ts-ignore
  component: DonutChart<Data>,
  tags: ['autodocs'],
  argTypes: {
    type: {
      type: 'string',
      control: 'inline-radio',
      description: 'Change the type of the chart.',
      options: ['donut', 'pie'] as DonutChartProps<Data>['type'][]
    }
  },
  args: {
    data: [
      {
        name: 'Jan',
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Feb',
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Mar',
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Apr',
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'May',
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Jun',
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Jul',
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Aug',
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Sep',
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Oct',
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Nov',
        value: Math.floor(Math.random() * 2000) + 1000
      },
      {
        name: 'Dec',
        value: Math.floor(Math.random() * 2000) + 1000
      }
    ],
    index: 'value',
    category: 'value',
    type: undefined,
    sortFunction: undefined,
    valueFormatter: undefined,
    customTooltip: undefined,
    colors: undefined,
    margin: undefined,
    filterOpacity: undefined,
    showTooltip: undefined,
    showLegend: undefined
  }
} satisfies Meta<typeof DonutChart<Data>>

export default meta

type Story = StoryObj<typeof meta>

export const typeDonut: Story = {
  name: 'Type: donut',
  args: {}
}

export const typePie: Story = {
  name: 'Type: pie',
  args: {
    type: 'pie'
  }
}
