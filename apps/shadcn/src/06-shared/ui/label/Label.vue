<script setup lang="ts">
import { Label } from 'radix-vue'
import { computed } from 'vue'

import { cn } from '@/06-shared'

import { type LabelProps } from './interface'

const props = withDefaults(defineProps<LabelProps>(), {
  asChild: false,
  as: 'label',
  for: undefined
})

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <Label
    v-bind="delegatedProps"
    :class="
      cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', props.class)
    "
  >
    <slot />
  </Label>
</template>
