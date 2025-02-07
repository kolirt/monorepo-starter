import { type PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { type Paginator } from '@monorepo-starter/request'

export type PaginationProps = PrimitiveProps & {
  class?: HTMLAttributes['class']
  data: Paginator<Record<string, any>>
  disabled?: boolean
  loading?: boolean
}
