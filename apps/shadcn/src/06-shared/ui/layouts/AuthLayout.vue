<script lang="ts" setup>
</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="relative flex flex-1 overflow-hidden">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
aside {
  transition: left 0.3s;
}
</style>
