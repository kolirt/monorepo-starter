<script lang="ts" setup>
import { Primitive } from 'radix-vue'

import { cn } from '@/06-shared'

import { type HeadingProps, headingVariants } from './interface'

const props = withDefaults(defineProps<HeadingProps>(), {
  size: 'h1'
})
</script>

<template>
  <Primitive :as="props.size" :class="cn(headingVariants({ size: props.size }), props.class)">
    <slot></slot>
  </Primitive>
</template>

<style scoped></style>
