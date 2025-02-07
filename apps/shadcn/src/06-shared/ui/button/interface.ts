import { type VariantProps, cva } from 'class-variance-authority'
import type { AnchorHTMLAttributes, Component, HTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        xs: 'h-8 px-2.5 py-2 text-xs font-medium space-x-2',
        s: 'h-9 px-2.5 py-2 text-sm font-medium space-x-2',
        default: 'h-10 px-3 py-2.5 text-sm font-medium space-x-2.5',
        l: 'h-11 px-3.5 py-3 text-base font-medium space-x-3',
        xl: 'h-12 px-4 py-3.5 text-base font-medium space-x-3.5',

        'icon-xs': 'h-8 w-8',
        'icon-s': 'h-9 w-9',
        'icon-default': 'h-10 w-10',
        'icon-l': 'h-11 w-11',
        'icon-xl': 'h-12 w-12'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

type ButtonVariants = VariantProps<typeof buttonVariants>

export type ButtonProps = {
  variant?: Exclude<ButtonVariants['variant'], null | undefined>
  size?: Exclude<ButtonVariants['size'], null | undefined>
} & {
  class?: HTMLAttributes['class']
  to?: RouteLocationRaw
  href?: AnchorHTMLAttributes['href']
  target?: AnchorHTMLAttributes['target']
  icon?: Component
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  loading?: boolean
}
