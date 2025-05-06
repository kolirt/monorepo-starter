<script lang="ts" setup>
import { Primitive } from 'radix-vue'
import { computed } from 'vue'

import { cn } from '@/06-shared'

import { type GridProps, gridVariants } from './interface'

const props = withDefaults(defineProps<GridProps>(), {
  asChild: false,
  as: 'div',
  columns: '4'
})

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <Primitive v-bind="delegatedProps" :class="cn(gridVariants({ columns: props.columns }), props.class)">
    <slot></slot>
  </Primitive>
</template>

<style scoped></style>
