import { type PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export type ProgressProps = PrimitiveProps & {
  class?: HTMLAttributes['class']
  value?: number
  max?: number
}
