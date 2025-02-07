<script setup lang="ts">
import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue'

import { cn } from '@/06-shared'

import { type AvatarProps, avatarVariant } from './interface'

const props = withDefaults(defineProps<AvatarProps>(), {
  asChild: false,
  as: 'div',
  size: 'default',
  shape: 'circle',
  fallback: undefined,
  src: undefined
})
</script>

<template>
  <AvatarRoot :as-child="props.asChild" :as="props.as" :class="cn(avatarVariant({ size, shape }), props.class)">
    <AvatarImage v-if="props.src" :src="props.src" />
    <AvatarFallback v-if="props.fallback">{{ props.fallback }}</AvatarFallback>
  </AvatarRoot>
</template>
