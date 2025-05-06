<script lang="ts" setup>
import { cn } from '@/06-shared'

import type { WithClassAsProps } from './interface'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation } = useCarousel()
</script>

<template>
  <div
    role="group"
    :class="cn('min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-4' : 'pt-4', props.class)"
    aria-roledescription="slide"
  >
    <slot />
  </div>
</template>
