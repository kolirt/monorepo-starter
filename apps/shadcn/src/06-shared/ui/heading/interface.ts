import { type VariantProps, cva } from 'class-variance-authority'
import type { HTMLAttributes } from 'vue'

export const headingVariants = cva('dark:text-white', {
  variants: {
    size: {
      h1: 'text-5xl font-extrabold',
      h2: 'text-4xl font-bold',
      h3: 'text-3xl font-bold',
      h4: 'text-2xl font-bold',
      h5: 'text-xl font-bold',
      h6: 'text-lg font-bold'
    }
  },
  defaultVariants: {
    size: 'h1'
  }
})

export type HeadingVariants = VariantProps<typeof headingVariants>

export type HeadingProps = {
  size?: Exclude<HeadingVariants['size'], null | undefined>
} & {
  class?: HTMLAttributes['class']
}
