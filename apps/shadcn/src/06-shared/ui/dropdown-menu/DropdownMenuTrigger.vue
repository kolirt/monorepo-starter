<script lang="ts" setup>
import { DropdownMenuTrigger, type DropdownMenuTriggerProps, useForwardProps } from 'radix-vue'

const props = defineProps<DropdownMenuTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuTrigger v-bind="forwardedProps" class="outline-none">
    <slot />
  </DropdownMenuTrigger>
</template>
