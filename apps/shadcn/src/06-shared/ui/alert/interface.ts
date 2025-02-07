import { type VariantProps, cva } from 'class-variance-authority'
import { type PrimitiveProps } from 'radix-vue'
import type { Component, HTMLAttributes } from 'vue'

export const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export type AlertVariants = VariantProps<typeof alertVariants>

export type AlertProps = PrimitiveProps & {
  variant?: Exclude<AlertVariants['variant'], null | undefined>
} & {
  class?: HTMLAttributes['class']
  icon?: Component
  title?: string
  description?: string
}
