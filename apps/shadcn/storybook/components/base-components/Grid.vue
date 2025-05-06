<script lang="ts" setup>
import { Grid, type GridProps } from '@/06-shared'

const props = withDefaults(defineProps<GridProps>(), {
  asChild: false,
  as: 'div',
  columns: '4'
})
</script>

<template>
  <slot></slot>

  <Grid v-bind="props">
    <div v-for="item in Number(props.columns)" class="flex justify-center border p-2" :key="item">
      <span>{{ item }}</span>
    </div>
  </Grid>
</template>

<style scoped></style>
