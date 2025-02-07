import type { Spacing } from '@unovis/ts'
import { type Component } from 'vue'

type KeyOf<T extends Record<string, any>> = Extract<keyof T, string>

export interface DonutChartProps<T extends Record<string, any>> {
  /**
   * The source data, in which each entry is a dictionary.
   */
  data: T[]
  /**
   * Sets the key to map the data to the axis.
   */
  index: KeyOf<T>
  /**
   * Sets the name of the key containing the quantitative chart values.
   */
  category: KeyOf<T>
  /**
   * Change the type of the chart
   * @default "donut"
   */
  type?: 'donut' | 'pie'
  /**
   * Function to sort the segment
   */
  sortFunction?: (a: any, b: any) => number | undefined
  /**
   * Controls the formatting for the label.
   */
  valueFormatter?: (tick: number, i?: number, ticks?: number[]) => string
  /**
   * Render custom tooltip component.
   */
  customTooltip?: Component
  /**
   * Change the default colors.
   */
  colors?: string[]
  /**
   * Margin of each the container
   */
  margin?: Spacing
  /**
   * Change the opacity of the non-selected field
   * @default 0.2
   */
  filterOpacity?: number
  /**
   * Controls the visibility of tooltip.
   * @default true
   */
  showTooltip?: boolean
  /**
   * Controls the visibility of legend.
   * @default true
   */
  showLegend?: boolean
}
