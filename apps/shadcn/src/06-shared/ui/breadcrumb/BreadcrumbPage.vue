<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

import { cn } from '@/06-shared'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span role="link" :class="cn('font-normal text-foreground', props.class)" aria-current="page" aria-disabled="true">
    <slot />
  </span>
</template>
