<script setup lang="ts">
import { ArrowLeftIcon } from 'lucide-vue-next'

import { Button, cn } from '@/06-shared'

import type { WithClassAsProps } from './interface'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    @click="scrollPrev"
    :disabled="!canScrollPrev"
    variant="outline"
    size="icon-xs"
    :icon="ArrowLeftIcon"
    :class="
      cn(
        'absolute touch-manipulation rounded-full',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class
      )
    "
  />
</template>
