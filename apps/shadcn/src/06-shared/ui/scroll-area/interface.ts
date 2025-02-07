import { type ScrollAreaRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export type ScrollAreaProps = ScrollAreaRootProps & {
  class?: HTMLAttributes['class']
}
