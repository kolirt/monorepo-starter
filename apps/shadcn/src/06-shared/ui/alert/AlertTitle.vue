<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

import { cn } from '@/06-shared'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h5 :class="cn('mb-1 font-medium leading-none tracking-tight', props.class)">
    <slot />
  </h5>
</template>
