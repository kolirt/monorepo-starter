<script lang="ts" setup>
import { ModalTarget } from '@kolirt/vue-modal'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <component :is="route.meta?.layout?.component ?? 'div'">
      <RouterView />
    </component>

    <ModalTarget />
  </div>
</template>

<style scoped></style>
