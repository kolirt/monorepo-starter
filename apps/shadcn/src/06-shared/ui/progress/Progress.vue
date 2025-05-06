<script lang="ts" setup>
import { ProgressIndicator, ProgressRoot } from 'radix-vue'
import { computed } from 'vue'

import { cn } from '@/06-shared'

import { type ProgressProps } from './interface'

const props = withDefaults(defineProps<ProgressProps>(), {
  asChild: false,
  as: 'div',
  value: 0,
  max: 100
})

const calculatedValue = computed(() => {
  const calculatedValue = ((props.value ?? 0) / props.max) * 100
  return Number(Math.min(100, (calculatedValue * 100) / 100).toFixed(2))
})
</script>

<template>
  <ProgressRoot
    :as="props.as"
    :as-child="props.asChild"
    :class="cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', props.class)"
  >
    <ProgressIndicator
      class="h-full w-full flex-1 bg-primary transition-all"
      :style="`transform: translateX(-${100 - (calculatedValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>
