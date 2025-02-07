<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next'

import { Button, cn } from '@/06-shared'

import type { WithClassAsProps } from './interface'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    @click="scrollNext"
    :disabled="!canScrollNext"
    variant="outline"
    size="icon-xs"
    :icon="ArrowRightIcon"
    :class="
      cn(
        'absolute touch-manipulation rounded-full',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class
      )
    "
  />
</template>
