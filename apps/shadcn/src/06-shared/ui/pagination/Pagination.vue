<script setup lang="ts">
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon
} from 'lucide-vue-next'
import {
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot
} from 'radix-vue'
import { ref, watch } from 'vue'

import { Button } from '@/06-shared'

import { type PaginationProps } from './interface'

const emits = defineEmits<{
  load: [number]
}>()

const props = withDefaults(defineProps<PaginationProps>(), {
  asChild: false,
  as: 'div',
  data: undefined,
  disabled: undefined,
  loading: undefined
})

const currentPage = ref(props.data.current_page)

function onPage(page: number) {
  emits('load', page)
  currentPage.value = page
}

watch(
  () => props.data.current_page,
  () => {
    currentPage.value = props.data.current_page
  }
)
</script>

<template>
  <PaginationRoot
    @update:page="onPage"
    v-slot="{ page }"
    show-edges
    :as-child="props.asChild"
    :as="props.as"
    :total="props.data.total"
    :sibling-count="1"
    :items-per-page="props.data.per_page"
    :disabled="props.disabled || props.loading"
    :page="currentPage"
  >
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst as-child>
        <Button variant="outline" size="icon-default" :icon="ChevronsLeftIcon" />
      </PaginationFirst>

      <PaginationPrev as-child>
        <Button variant="outline" size="icon-default" :icon="ChevronLeftIcon" />
      </PaginationPrev>

      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :value="item.value" as-child :key="index">
          <Button
            :variant="item.value === page ? 'default' : 'outline'"
            :loading="item.value === page && props.loading"
            class="w-10 p-0"
          >
            {{ item.value }}
          </Button>
        </PaginationListItem>

        <PaginationEllipsis v-else :index="index" class="flex h-10 w-10 items-center justify-center" :key="item.type">
          <MoreHorizontalIcon />
        </PaginationEllipsis>
      </template>

      <PaginationNext as-child>
        <Button variant="outline" size="icon-default" :icon="ChevronRightIcon" />
      </PaginationNext>

      <PaginationLast as-child>
        <Button variant="outline" size="icon-default" :icon="ChevronsRightIcon" />
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>
