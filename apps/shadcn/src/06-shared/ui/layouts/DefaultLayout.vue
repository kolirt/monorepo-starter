<script setup lang="ts">
import { MenuIcon, XIcon } from 'lucide-vue-next'
import { ref } from 'vue'

import { ScrollArea } from '@/06-shared'

const menuOpened = ref(false)

function toggleMenu() {
  menuOpened.value = !menuOpened.value
}
</script>

<template>
  <div class="flex h-screen flex-col">
    <nav class="h-16 border-b">
      <div class="flex h-full items-center justify-between p-3">
        <div class="flex h-full items-center">
          <button @click="toggleMenu" class="mr-2 rounded p-2 lg:hidden" :class="{ 'bg-gray-100': menuOpened }">
            <XIcon v-if="menuOpened" />
            <MenuIcon v-else />
          </button>

          <slot name="nav-left"></slot>
        </div>

        <div class="flex h-full items-center">
          <slot name="nav-right"></slot>
        </div>
      </div>
    </nav>

    <div class="relative flex flex-1 overflow-hidden">
      <aside
        class="absolute inset-y-0 z-20 flex h-full w-8/12 flex-col border-r bg-background lg:left-0 lg:w-64"
        :class="{
          'left-0': menuOpened,
          '-left-full': !menuOpened
        }"
      >
        <ScrollArea type="auto" class="flex-1">
          <slot name="aside"></slot>
        </ScrollArea>

        <div v-if="$slots.hasOwnProperty('aside-bottom')" class="border-t px-3 py-3">
          <slot name="aside-bottom"></slot>
        </div>
      </aside>

      <div @click="toggleMenu" class="absolute inset-0 z-10 bg-gray-900/50" :class="{ hidden: !menuOpened }"></div>

      <div class="flex-1 lg:ml-64">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
aside {
  transition: left 0.3s;
}
</style>
