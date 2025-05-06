<script lang="ts" setup>
import { Loader2Icon } from 'lucide-vue-next'
import { Primitive } from 'radix-vue'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import { cn } from '@/06-shared'

import { type ButtonProps, buttonVariants } from './interface'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'default',
  size: 'default',
  to: undefined,
  href: undefined,
  target: undefined,
  icon: undefined,
  iconPosition: 'left',
  disabled: undefined,
  loading: undefined
})

const as = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const iconOnly = computed(() => {
  switch (props.size) {
    case 'icon-xs':
    case 'icon-s':
    case 'icon-default':
    case 'icon-l':
    case 'icon-xl':
      return true

    default:
      return false
  }
})

const iconClasses = computed(() => {
  switch (props.size) {
    case 'xs':
    case 's':
    case 'default':
    case 'icon-xs':
    case 'icon-s':
    case 'icon-default':
      return 'h-4 w-4'

    case 'l':
    case 'icon-l':
      return 'h-5 w-5'

    case 'xl':
    case 'icon-xl':
      return 'h-6 w-6'

    default:
      return 'h-4 w-4'
  }
})

const binds = computed(() => {
  const binds: Record<string, any> = {
    class: cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)
  }

  if (props.disabled || props.loading) binds.disabled = true

  if (props.to) binds.to = props.to

  if (props.href) binds.href = props.href

  if (props.target) binds.target = props.target

  return binds
})
</script>

<template>
  <Primitive v-bind="binds" :as="as">
    <component
      v-if="props.iconPosition === 'left' && props.icon"
      :is="props.loading ? Loader2Icon : props.icon"
      :class="[{ 'animate-spin': props.loading }, iconClasses]"
    />

    <span
      v-if="$slots.hasOwnProperty('default') && !iconOnly"
      :class="{ 'text-transparent': props.loading && !props.icon }"
    >
      <slot />
    </span>

    <Loader2Icon v-if="props.loading && !props.icon" class="absolute !ml-0 animate-spin" :class="iconClasses" />

    <component
      v-if="props.iconPosition === 'right' && props.icon"
      :is="props.loading ? Loader2Icon : props.icon"
      :class="[{ 'animate-spin': props.loading }, iconClasses]"
    />
  </Primitive>
</template>
