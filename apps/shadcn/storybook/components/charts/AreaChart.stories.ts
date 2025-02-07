import type { Meta, StoryObj } from '@storybook/vue3'
import { CurveType } from '@unovis/ts'

import { AreaChart, type AreaChartProps } from '@/06-shared'

type Data = {
  name: string
  total: number
  predict: number
  value: number
}

const meta = {
  title: 'Charts/AreaChart',
  // @ts-ignore
  component: AreaChart<Data>,
  tags: ['autodocs'],
  argTypes: {
    curveType: {
      control: 'inline-radio',
      options: Object.values(CurveType) as Array<AreaChartProps<Data>['curveType']>
    }
  },
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
    curveType: undefined,
    showGradiant: undefined,
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
} satisfies Meta<typeof AreaChart<Data>>

export default meta

type Story = StoryObj<typeof meta>

export const curveTypeBasis: Story = {
  name: 'CurveType: basis',
  args: {
    curveType: CurveType.Basis
  }
}

export const curveTypeBasisClosed: Story = {
  name: 'CurveType: basisClosed',
  args: {
    curveType: CurveType.BasisClosed
  }
}

export const curveTypeBasisOpen: Story = {
  name: 'CurveType: basisOpen',
  args: {
    curveType: CurveType.BasisOpen
  }
}

export const curveTypeCardinal: Story = {
  name: 'CurveType: cardinal',
  args: {
    curveType: CurveType.Cardinal
  }
}

export const curveTypeCardinalClosed: Story = {
  name: 'CurveType: cardinalClosed',
  args: {
    curveType: CurveType.CardinalClosed
  }
}

export const curveTypeCardinalOpen: Story = {
  name: 'CurveType: cardinalOpen',
  args: {
    curveType: CurveType.CardinalOpen
  }
}

export const curveTypeCatmullRom: Story = {
  name: 'CurveType: catmullRom',
  args: {
    curveType: CurveType.CatmullRom
  }
}

export const curveTypeCatmullRomClosed: Story = {
  name: 'CurveType: catmullRomClosed',
  args: {
    curveType: CurveType.CatmullRomClosed
  }
}

export const curveTypeCatmullRomOpen: Story = {
  name: 'CurveType: catmullRomOpen',
  args: {
    curveType: CurveType.CatmullRomOpen
  }
}

export const curveTypeLinear: Story = {
  name: 'CurveType: linear',
  args: {
    curveType: CurveType.Linear
  }
}

export const curveTypeLinearClosed: Story = {
  name: 'CurveType: linearClosed',
  args: {
    curveType: CurveType.LinearClosed
  }
}

export const curveTypeMonotoneX: Story = {
  name: 'CurveType: monotoneX',
  args: {
    curveType: CurveType.MonotoneX
  }
}

export const curveTypeMonotoneY: Story = {
  name: 'CurveType: monotoneY',
  args: {
    curveType: CurveType.MonotoneY
  }
}

export const curveTypeNatural: Story = {
  name: 'CurveType: natural',
  args: {
    curveType: CurveType.Natural
  }
}

export const curveTypeStep: Story = {
  name: 'CurveType: step',
  args: {
    curveType: CurveType.Step
  }
}

export const curveTypeStepAfter: Story = {
  name: 'CurveType: stepAfter',
  args: {
    curveType: CurveType.StepAfter
  }
}

export const curveTypeStepBefore: Story = {
  name: 'CurveType: stepBefore',
  args: {
    curveType: CurveType.StepBefore
  }
}
