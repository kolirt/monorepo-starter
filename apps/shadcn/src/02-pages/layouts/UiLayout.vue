<script setup lang="ts">
import { LayoutDashboardIcon } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

import { RouteNames, UiRouteNames } from '@/02-pages'

import { Button, DefaultLayout } from '@/06-shared'

const route = useRoute()

const menu = [
  {
    label: 'Components',
    items: [
      {
        label: 'Accordion',
        to: { name: UiRouteNames.Accordion },
        icon: LayoutDashboardIcon
      }
    ]
  },
  {
    label: 'Forms',
    items: [
      {
        label: 'Input',
        to: { name: UiRouteNames.Input },
        icon: LayoutDashboardIcon
      }
    ]
  }
]
</script>

<template>
  <DefaultLayout>
    <template #nav-left>
      <RouterLink :to="{ name: UiRouteNames.Accordion }" class="inline-flex items-center">
        <span class="font-semibold text-foreground">Ui kit</span>
      </RouterLink>
    </template>

    <template #nav-right>
      <Button :to="{ name: RouteNames.Home }"> Back to dashboard</Button>
    </template>

    <template #aside>
      <div
        v-for="(item, index) in menu"
        class="px-6 py-4"
        :class="{ 'border-b': index !== menu.length - 1 }"
        :key="index"
      >
        <h4 class="mb-2 rounded-md text-sm font-semibold text-foreground">
          {{ item.label }}
        </h4>

        <div
          v-for="(subitem, subindex) in item.items"
          class="grid grid-flow-row auto-rows-max text-sm"
          :key="`${index}-${subindex}`"
        >
          <RouterLink
            :to="subitem.to"
            class="inline-flex items-center py-2 font-medium text-muted-foreground transition-colors hover:underline"
            :class="{
              '!font-semibold !text-foreground': route.name === subitem.to.name
            }"
          >
            <component :is="subitem.icon" :size="16" class="mr-2" />

            <span>{{ subitem.label }}</span>
          </RouterLink>
        </div>
      </div>
    </template>

    <template #default>
      <slot></slot>
    </template>
  </DefaultLayout>
</template>

<style lang="scss" scoped>
aside {
  transition: left 0.3s;
}
</style>
