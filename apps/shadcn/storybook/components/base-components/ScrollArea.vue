<script setup lang="ts">
import { computed } from 'vue'

import { ScrollArea, type ScrollAreaProps } from '@/06-shared'

const props = withDefaults(defineProps<ScrollAreaProps>(), {
  as: 'div',
  asChild: false,
  type: 'auto',
  dir: 'ltr',
  scrollHideDelay: 200
})

const content = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maxime nobis quaerat suscipit voluptatibus. Aliquid aut beatae, dolorum et optio ratione suscipit tempora voluptatibus. Beatae deserunt doloribus harum labore numquam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maxime nobis quaerat suscipit voluptatibus. Aliquid aut beatae, dolorum et optio ratione suscipit tempora voluptatibus. Beatae deserunt doloribus harum labore numquam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maxime nobis quaerat suscipit voluptatibus. Aliquid aut beatae, dolorum et optio ratione suscipit tempora voluptatibus. Beatae deserunt doloribus harum labore numquam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maxime nobis quaerat suscipit voluptatibus. Aliquid aut beatae, dolorum et optio ratione suscipit tempora voluptatibus. Beatae deserunt doloribus harum labore numquam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maxime nobis quaerat suscipit voluptatibus. Aliquid aut beatae, dolorum et optio ratione suscipit tempora voluptatibus. Beatae deserunt doloribus harum labore numquam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maxime nobis quaerat suscipit voluptatibus. Aliquid aut beatae, dolorum et optio ratione suscipit tempora voluptatibus. Beatae deserunt doloribus harum labore numquam.</p>`

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <ScrollArea v-bind="delegatedProps" class="h-32">
    <slot></slot>

    <div v-html="content"></div>
  </ScrollArea>
</template>

<style scoped></style>
