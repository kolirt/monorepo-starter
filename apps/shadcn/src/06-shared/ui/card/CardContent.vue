<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

import { cn } from '@/06-shared'

const props = defineProps<{
  topPadding?: boolean
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('p-6', [props.class, { 'pt-0': !props.topPadding }])">
    <slot />
  </div>
</template>
