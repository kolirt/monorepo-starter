<script setup lang="ts">
import { LayoutDashboardIcon } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

import { RouteNames } from '@/02-pages'

import {
  Avatar,
  DefaultLayout,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/06-shared'

const route = useRoute()

const menu = [
  {
    label: 'Main',
    items: [
      {
        label: 'Dashboard',
        to: { name: RouteNames.Home },
        icon: LayoutDashboardIcon
      } /*,
      {
        label: 'Tabs',
        to: { name: RouteNames.Tabs },
        icon: LayoutDashboardIcon
      }*/
    ]
  }
  /*{
    label: 'Shop',
    items: [
      {
        label: 'Users',
        to: { name: RouteNames.Users },
        icon: UsersIcon
      }
    ]
  },
  {
    label: 'Settings',
    items: [
      {
        label: 'Settings',
        to: { name: RouteNames.Settings },
        icon: SettingsIcon
      },
      {
        label: 'Test',
        to: { name: RouteNames.Test },
        icon: SettingsIcon
      }
    ]
  }*/
]
</script>

<template>
  <DefaultLayout>
    <template #nav-left>
      <RouterLink :to="{ name: RouteNames.Home }" class="inline-flex items-center">
        <span class="font-semibold text-foreground">Crm panel</span>
      </RouterLink>
    </template>

    <template #nav-right>
      <DropdownMenu>
        <DropdownMenuTrigger as="button" class="aspect-square h-full">
          <Avatar size="sm" fallback="CN" class="h-full w-full" />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" class="min-w-40">
          <DropdownMenuLabel class="flex font-normal">
            <div class="flex flex-col space-y-1">
              <p class="text-sm font-medium leading-none">shadcn</p>
              <p class="text-xs leading-none text-muted-foreground">m@example.com</p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem as="button" class="w-full cursor-pointer">Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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
