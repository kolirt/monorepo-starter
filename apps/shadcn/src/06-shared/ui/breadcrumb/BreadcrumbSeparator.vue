<script lang="ts" setup>
import { ChevronRight } from 'lucide-vue-next'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/06-shared'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li role="presentation" :class="cn('[&>svg]:size-3.5', props.class)" aria-hidden="true">
    <slot>
      <ChevronRight />
    </slot>
  </li>
</template>
