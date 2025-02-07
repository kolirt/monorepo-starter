<script setup lang="ts">
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
  <AccordionRoot :type="type" v-bind="forwarded">
    <AccordionItem
      v-for="(item, index) in props.data"
      :title="item.title"
      :disabled="item.disabled"
      :value="index"
      :key="index"
    >
      {{ item.content }}
    </AccordionItem>
  </AccordionRoot>
</template>
