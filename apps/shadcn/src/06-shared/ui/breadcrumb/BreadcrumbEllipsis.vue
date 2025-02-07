<script lang="ts" setup>
import { MoreHorizontal } from 'lucide-vue-next'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/06-shared'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span role="presentation" :class="cn('flex h-9 w-9 items-center justify-center', props.class)" aria-hidden="true">
    <slot>
      <MoreHorizontal class="h-4 w-4" />
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>
