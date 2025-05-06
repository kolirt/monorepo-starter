<script lang="ts" setup>
import { cn } from '@/06-shared'

import CarouselContent from './CarouselContent.vue'
import CarouselNext from './CarouselNext.vue'
import CarouselPrevious from './CarouselPrevious.vue'
import type { CarouselEmits, CarouselProps } from './interface'
import { useProvideCarousel } from './useCarousel'

const emits = defineEmits<CarouselEmits>()

const props = withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal',
  arrows: false,
  onlyActiveArrows: false
})

const { canScrollNext, canScrollPrev, carouselApi, carouselRef, orientation, scrollNext, scrollPrev } =
  useProvideCarousel(props, emits)

defineExpose({
  canScrollNext,
  canScrollPrev,
  carouselApi,
  carouselRef,
  orientation,
  scrollNext,
  scrollPrev
})

function onKeyDown(event: KeyboardEvent) {
  const prevKey = props.orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft'
  const nextKey = props.orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight'

  if (event.key === prevKey) {
    event.preventDefault()
    scrollPrev()

    return
  }

  if (event.key === nextKey) {
    event.preventDefault()
    scrollNext()
  }
}
</script>

<template>
  <div
    @keydown="onKeyDown"
    role="region"
    tabindex="0"
    :class="cn('relative', props.class)"
    aria-roledescription="carousel"
  >
    <CarouselContent>
      <slot :can-scroll-next :can-scroll-prev :carousel-api :carousel-ref :orientation :scroll-next :scroll-prev />
    </CarouselContent>

    <template v-if="props.arrows">
      <CarouselPrevious v-if="canScrollPrev || !props.onlyActiveArrows" />
      <CarouselNext v-if="canScrollNext || !props.onlyActiveArrows" />
    </template>
  </div>
</template>
