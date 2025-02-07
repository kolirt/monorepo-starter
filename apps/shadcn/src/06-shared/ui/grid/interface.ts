import { type VariantProps, cva } from 'class-variance-authority'
import { type PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export const gridVariants = cva('grid gap-6', {
  variants: {
    columns: {
      '1': 'md:grid-cols-1 lg:grid-cols-1',
      '2': 'md:grid-cols-1 lg:grid-cols-2',
      '3': 'md:grid-cols-2 lg:grid-cols-3',
      '4': 'md:grid-cols-2 lg:grid-cols-4',
      '5': 'md:grid-cols-2 lg:grid-cols-5',
      '6': 'md:grid-cols-3 lg:grid-cols-6',
      '7': 'md:grid-cols-3 lg:grid-cols-7',
      '8': 'md:grid-cols-4 lg:grid-cols-8',
      '9': 'md:grid-cols-4 lg:grid-cols-9',
      '10': 'md:grid-cols-5 lg:grid-cols-10',
      '11': 'md:grid-cols-5 lg:grid-cols-11',
      '12': 'md:grid-cols-6 lg:grid-cols-12'
    }
  },
  defaultVariants: {
    columns: '1'
  }
})

type GridVariants = VariantProps<typeof gridVariants>

export type GridProps = PrimitiveProps & {
  columns?: Exclude<GridVariants['columns'], null | undefined>
} & {
  class?: HTMLAttributes['class']
}
