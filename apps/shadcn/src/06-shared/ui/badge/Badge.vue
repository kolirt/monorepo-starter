<script setup lang="ts">
import { Primitive } from 'radix-vue'
import { computed } from 'vue'

import { cn } from '@/06-shared'

import { type BadgeProps, badgeVariants } from './interface'

const props = withDefaults(defineProps<BadgeProps>(), {
  asChild: false,
  as: 'div',
  variant: 'default'
})

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <Primitive v-bind="delegatedProps" :class="cn(badgeVariants({ variant }), props.class)">
    <slot />
  </Primitive>
</template>
