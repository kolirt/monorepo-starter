<script setup lang="ts">
import { type HTMLAttributes, computed, getCurrentInstance } from 'vue'

import { cn } from '@/06-shared'

import CardContent from './CardContent.vue'
import CardDescription from './CardDescription.vue'
import CardFooter from './CardFooter.vue'
import CardHeader from './CardHeader.vue'
import CardTitle from './CardTitle.vue'

const props = defineProps<{
  title?: string
  description?: string
  class?: HTMLAttributes['class']
}>()

const instance = getCurrentInstance()

const needHeader = computed(() => needTitle.value || needDescription.value)
// eslint-disable-next-line
const needTitle = computed(() => instance?.slots.hasOwnProperty('title') || props.title)
// eslint-disable-next-line
const needDescription = computed(() => instance?.slots.hasOwnProperty('description') || props.description)
</script>

<template>
  <div :class="cn('rounded-lg border bg-card text-card-foreground shadow-sm', props.class)">
    <CardHeader v-if="needHeader">
      <CardTitle v-if="needTitle">
        <slot v-if="$slots.hasOwnProperty('title')" name="title"></slot>
        <template v-else-if="props.title">{{ props.title }}</template>
      </CardTitle>
      <CardDescription v-if="needDescription">
        <slot v-if="$slots.hasOwnProperty('description')" name="description"></slot>
        <template v-else-if="props.description">{{ props.description }}</template>
      </CardDescription>
    </CardHeader>

    <CardContent :top-padding="!needHeader">
      <slot />
    </CardContent>

    <CardFooter v-if="$slots.hasOwnProperty('footer')" class="flex justify-between px-6 pb-6">
      <slot name="footer"></slot>
    </CardFooter>
  </div>
</template>
