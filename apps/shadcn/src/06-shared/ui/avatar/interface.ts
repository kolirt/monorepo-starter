import { type VariantProps, cva } from 'class-variance-authority'
import { type AvatarImageProps, type PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export const avatarVariant = cva(
  'inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden',
  {
    variants: {
      size: {
        sm: 'h-8 w-8 text-xs',
        default: 'h-10 w-10 text-xl',
        lg: 'h-16 w-16 text-3xl'
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md'
      }
    },
    defaultVariants: {
      size: 'default',
      shape: 'circle'
    }
  }
)

export type AvatarVariants = VariantProps<typeof avatarVariant>

export type AvatarProps = PrimitiveProps & {
  size?: Exclude<AvatarVariants['size'], null | undefined>
  shape?: Exclude<AvatarVariants['shape'], null | undefined>
} & {
  class?: HTMLAttributes['class']
  fallback?: string
  src?: AvatarImageProps['src']
}
