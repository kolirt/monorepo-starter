import { type VariantProps, cva } from 'class-variance-authority'
import { type PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground ',
        destructive: 'border-transparent bg-destructive text-destructive-foreground ',
        outline: 'text-foreground'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export type BadgeVariants = VariantProps<typeof badgeVariants>

export type BadgeProps = PrimitiveProps & {
  variant?: Exclude<BadgeVariants['variant'], null | undefined>
} & {
  class?: HTMLAttributes['class']
}
