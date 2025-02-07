<script setup lang="ts">
import { Separator } from 'radix-vue'
import { computed } from 'vue'

import { cn } from '@/06-shared'

import { type SeparatorProps } from './interface'

const props = withDefaults(defineProps<SeparatorProps>(), {
  asChild: false,
  as: 'div',
  orientation: 'horizontal',
  decorative: false,
  label: undefined
})

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="
      cn('relative shrink-0 bg-border', props.orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full', props.class)
    "
  >
    <span
      v-if="props.label || $slots.hasOwnProperty('default')"
      :class="
        cn(
          'absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background text-xs text-muted-foreground',
          props.orientation === 'vertical' ? 'w-[1px] px-1 py-2' : 'h-[1px] px-2 py-1'
        )
      "
    >
      <template v-if="props.label">{{ props.label }}</template>
      <slot v-else-if="$slots.hasOwnProperty('default')"></slot>
    </span>
  </Separator>
</template>
