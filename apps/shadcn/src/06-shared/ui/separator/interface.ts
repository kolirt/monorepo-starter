import { type SeparatorProps as MasterSeparatorProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export type SeparatorProps = MasterSeparatorProps & {
  class?: HTMLAttributes['class']
  label?: string
}
