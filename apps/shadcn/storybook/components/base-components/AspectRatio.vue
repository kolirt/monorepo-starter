<script setup lang="ts">
import { type AspectRatioProps, AspectRatio as MasterAspectRatio } from '@/06-shared'

const props = withDefaults(defineProps<AspectRatioProps>(), {
  asChild: false,
  as: 'div',
  ratio: 16 / 9
})
</script>

<template>
  <div style="width: 300px">
    <MasterAspectRatio v-bind="props">
      <slot></slot>
    </MasterAspectRatio>
  </div>
</template>

<style scoped></style>
