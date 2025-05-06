<script lang="ts" setup>
import { AccordionRoot, type AccordionRootEmits, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

import AccordionItem from './AccordionItem.vue'
import { type AccordionProps } from './interface'

const props = defineProps<AccordionProps>()
const emits = defineEmits<AccordionRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const type = computed(() => (props.multiple ? 'multiple' : 'single'))
</script>

<template>
  <AccordionRoot v-bind="forwarded" :type="type">
    <AccordionItem
      v-for="(item, index) in props.data"
      :disabled="item.disabled"
      :title="item.title"
      :value="index"
      :key="index"
    >
      {{ item.content }}
    </AccordionItem>
  </AccordionRoot>
</template>
