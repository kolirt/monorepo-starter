<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { ScrollArea } from '@/06-shared'

import type { BreadcrumbItemType } from '../breadcrumb'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '../breadcrumb'

const props = defineProps<{
  title?: string
  description?: string
  breadcrumbs?: BreadcrumbItemType[]
}>()
</script>

<template>
  <ScrollArea type="auto" as="main" class="h-full">
    <div class="flex-1 space-y-6 p-6">
      <div
        v-if="props.breadcrumbs || props.title || props.description || $slots.hasOwnProperty('top-right')"
        class="space-y-3"
      >
        <Breadcrumb v-if="props.breadcrumbs">
          <BreadcrumbList>
            <template v-for="(item, index) in props.breadcrumbs" :key="index">
              <BreadcrumbItem>
                <BreadcrumbLink v-if="item.to" :as="RouterLink" :to="item.to" class="inline-flex items-center">
                  <component v-if="item.icon" :is="item.icon" :size="16" class="mr-1"></component>
                  {{ item.label }}
                </BreadcrumbLink>
                <BreadcrumbPage v-else class="inline-flex items-center">
                  <component v-if="item.icon" :is="item.icon" :size="16" class="mr-1"></component>
                  {{ item.label }}
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator v-if="index !== props.breadcrumbs.length - 1" />
            </template>
          </BreadcrumbList>
        </Breadcrumb>

        <div
          v-if="props.title || props.description || $slots.hasOwnProperty('top-right')"
          class="flex items-center justify-between"
        >
          <div>
            <h2 v-if="props.title" class="text-2xl font-bold tracking-tight">{{ props.title }}</h2>
            <p v-if="props.description" class="text-muted-foreground">{{ props.description }}</p>
          </div>

          <div class="flex items-center space-x-2">
            <slot name="top-right"></slot>
          </div>
        </div>
      </div>

      <slot></slot>
    </div>
  </ScrollArea>
</template>

<style scoped></style>
