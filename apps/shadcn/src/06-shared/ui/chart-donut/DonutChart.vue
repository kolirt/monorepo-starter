<script generic="T extends Record<string, any>" lang="ts" setup>
import { Donut } from '@unovis/ts'
import { VisDonut, VisSingleContainer } from '@unovis/vue'
import { useMounted } from '@vueuse/core'
import { computed, ref } from 'vue'

import { cn } from '@/06-shared'

import { ChartSingleTooltip, defaultColors } from '../chart'
import { type DonutChartProps } from './interface'

const props = withDefaults(defineProps<DonutChartProps<T>>(), {
  type: 'donut',
  sortFunction: () => undefined,
  valueFormatter: (tick: number) => `${tick}`,
  customTooltip: undefined,
  colors: undefined,
  margin: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  filterOpacity: 0.2,
  showTooltip: true,
  showLegend: true
})

type KeyOfT = Extract<keyof T, string>
type Data = (typeof props.data)[number]

const category = computed(() => props.category as KeyOfT)
const index = computed(() => props.index as KeyOfT)

const isMounted = useMounted()
const activeSegmentKey = ref<string>()
const colors = computed(() =>
  props.colors?.length
    ? props.colors
    : defaultColors(props.data.filter((d) => d[props.category]).filter(Boolean).length)
)
const legendItems = computed(() =>
  props.data.map((item, i) => ({
    name: item[props.index],
    color: colors.value[i],
    inactive: false
  }))
)

const totalValue = computed(() =>
  props.data.reduce((prev, curr) => {
    return prev + curr[props.category]
  }, 0)
)
</script>

<template>
  <div :class="cn('flex h-48 w-full flex-col items-end', $attrs.class ?? '')">
    <VisSingleContainer :data="data" :margin="{ left: 20, right: 20 }" :style="{ height: isMounted ? '100%' : 'auto' }">
      <ChartSingleTooltip
        :custom-tooltip="customTooltip"
        :index="category"
        :items="legendItems"
        :selector="Donut.selectors.segment"
        :value-formatter="valueFormatter"
      />

      <VisDonut
        :arc-width="type === 'donut' ? 20 : 0"
        :central-label="type === 'donut' ? valueFormatter(totalValue) : ''"
        :color="colors"
        :events="{
          [Donut.selectors.segment]: {
            click: (d: Data, ev: PointerEvent, i: number, elements: HTMLElement[]) => {
              if (d?.data?.[index] === activeSegmentKey) {
                activeSegmentKey = undefined
                elements.forEach((el) => (el.style.opacity = '1'))
              } else {
                activeSegmentKey = d?.data?.[index]
                elements.forEach((el) => (el.style.opacity = `${filterOpacity}`))
                elements[i].style.opacity = '1'
              }
            }
          }
        }"
        :show-background="false"
        :sort-function="sortFunction"
        :value="(d: Data) => d[category]"
      />

      <slot />
    </VisSingleContainer>
  </div>
</template>
