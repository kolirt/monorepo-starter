<script setup lang="ts">
import { AspectRatio } from 'radix-vue'

import { type AspectRatioProps } from './interface'

const props = withDefaults(defineProps<AspectRatioProps>(), {
  asChild: false,
  as: 'div',
  ratio: 16 / 9
})
</script>

<template>
  <AspectRatio v-bind="props">
    <slot />
  </AspectRatio>
</template>
