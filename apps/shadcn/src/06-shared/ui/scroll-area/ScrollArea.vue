<script setup lang="ts">
import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaViewport } from 'radix-vue'
import { computed } from 'vue'

import { cn } from '@/06-shared'

import ScrollBar from './ScrollBar.vue'
import { type ScrollAreaProps } from './interface'

const props = withDefaults(defineProps<ScrollAreaProps>(), {
  as: 'div',
  asChild: false,
  type: 'auto',
  dir: 'ltr',
  scrollHideDelay: 200
})

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <ScrollAreaRoot v-bind="delegatedProps" :class="cn('relative overflow-hidden', props.class)">
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
