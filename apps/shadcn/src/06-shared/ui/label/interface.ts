import { type LabelProps as MasterLabelProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export type LabelProps = MasterLabelProps & {
  class?: HTMLAttributes['class']
}
