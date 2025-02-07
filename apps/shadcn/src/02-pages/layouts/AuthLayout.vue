<script setup lang="ts">
import { ScrollArea } from '@/06-shared'
</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="relative flex flex-1 overflow-hidden">
      <ScrollArea type="auto" as="main" class="flex-1">
        <div class="p-6">
          <slot></slot>
        </div>
      </ScrollArea>
    </div>
  </div>
</template>

<style lang="scss" scoped>
aside {
  transition: left 0.3s;
}
</style>
