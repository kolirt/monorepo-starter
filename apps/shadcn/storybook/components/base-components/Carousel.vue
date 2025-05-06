<script lang="ts" setup>
import { Carousel, type CarouselProps } from '@/06-shared'

const props = withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal',
  arrows: false,
  onlyActiveArrows: false
})
</script>

<template>
  <div style="width: 400px; height: 400px">
    <Carousel v-bind="props">
      <slot></slot>
    </Carousel>
  </div>
</template>

<style scoped></style>
