import type useEmblaCarousel from 'embla-carousel-vue'
import { type EmblaCarouselVueType } from 'embla-carousel-vue'
import type { HTMLAttributes, UnwrapRef } from 'vue'

type CarouselApi = EmblaCarouselVueType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

export type UnwrapRefCarouselApi = UnwrapRef<CarouselApi>

export type CarouselEmits = {
  (e: 'init-api', payload: UnwrapRefCarouselApi): void
}

export type WithClassAsProps = {
  class?: HTMLAttributes['class']
}

export type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
} & {
  class?: HTMLAttributes['class']
  orientation?: 'horizontal' | 'vertical'
  arrows?: boolean
  onlyActiveArrows?: boolean
}
