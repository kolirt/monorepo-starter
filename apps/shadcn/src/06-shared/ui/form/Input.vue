<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import type { HTMLAttributes } from 'vue'

import { Label, cn } from '@/06-shared'

const props = defineProps<{
  // modelValue?: string | number
  label?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div v-auto-animate :class="cn('space-y-2', props.class)">
    <Label v-if="props.label">{{ props.label }}</Label>

    <input
      :class="
        cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )
      "
    />

    <p class="text-sm font-medium text-destructive">error</p>
  </div>
</template>
