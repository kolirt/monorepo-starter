<script setup lang="ts">
import { AccordionItem, useForwardProps } from 'radix-vue'
import { type HTMLAttributes, computed } from 'vue'

import { cn } from '@/06-shared'

import AccordionContent from './AccordionContent.vue'
import AccordionTrigger from './AccordionTrigger.vue'
import { type AccordionItemProps } from './interface'

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionItem v-bind="forwardedProps" :class="cn('border-b', props.class)">
    <AccordionTrigger :class="{ 'disabled:opacity-25': props.disabled }">
      <slot v-if="$slots.hasOwnProperty('title')" name="title"></slot>
      <template v-else>{{ props.title }}</template>
    </AccordionTrigger>
    <AccordionContent>
      <slot />
    </AccordionContent>
  </AccordionItem>
</template>
