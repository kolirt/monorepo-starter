<script setup lang="ts">
import { Primitive } from 'radix-vue'

import { cn } from '@/06-shared'

import AlertDescription from './AlertDescription.vue'
import AlertTitle from './AlertTitle.vue'
import { type AlertProps, alertVariants } from './interface'

const props = withDefaults(defineProps<AlertProps>(), {
  asChild: false,
  as: 'div',
  variant: 'default',
  icon: undefined,
  title: undefined,
  description: undefined
})
</script>

<template>
  <Primitive role="alert" :as-child="props.asChild" :as="props.as" :class="cn(alertVariants({ variant }), props.class)">
    <component v-if="props.icon" :is="props.icon" class="h-4 w-4" />

    <AlertTitle v-if="props.title">
      {{ props.title }}
    </AlertTitle>
    <AlertTitle v-else-if="$slots.hasOwnProperty('title')">
      <slot name="title" />
    </AlertTitle>

    <AlertDescription v-if="props.description">
      {{ props.description }}
    </AlertDescription>
    <AlertDescription v-else-if="$slots.hasOwnProperty('default')">
      <slot />
    </AlertDescription>
  </Primitive>
</template>
