<script generic="T extends Record<string, any>" lang="ts" setup>
import type { BulletLegendItemInterface } from '@unovis/ts'
import { Axis, GroupedBar, StackedBar } from '@unovis/ts'
import { VisAxis, VisGroupedBar, VisStackedBar, VisXYContainer } from '@unovis/vue'
import { useMounted } from '@vueuse/core'
import { computed, ref } from 'vue'

import { cn } from '@/06-shared'

import { ChartCrosshair, ChartLegend, defaultColors } from '../chart'
import { type BarChartProps } from './interface'

const emits = defineEmits<{
  legendItemClick: [d: BulletLegendItemInterface, i: number]
}>()

const props = withDefaults(defineProps<BarChartProps<T>>(), {
  customTooltip: undefined,
  type: 'grouped',
  roundedCorners: 0,
  colors: undefined,
  margin: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  filterOpacity: 0.2,
  xFormatter: undefined,
  yFormatter: undefined,
  showXAxis: true,
  showYAxis: true,
  showTooltip: true,
  showLegend: true,
  showGridLine: true
})

type KeyOfT = Extract<keyof T, string>
type Data = (typeof props.data)[number]

const index = computed(() => props.index as KeyOfT)
const colors = computed(() => (props.colors?.length ? props.colors : defaultColors(props.categories.length)))
const legendItems = ref<BulletLegendItemInterface[]>(
  props.categories.map((category, i) => ({
    name: category,
    color: colors.value[i],
    inactive: false
  }))
)

const isMounted = useMounted()

function handleLegendItemClick(d: BulletLegendItemInterface, i: number) {
  emits('legendItemClick', d, i)
}

const VisBarComponent = computed(() => (props.type === 'grouped' ? VisGroupedBar : VisStackedBar))
const selectorsBar = computed(() => (props.type === 'grouped' ? GroupedBar.selectors.bar : StackedBar.selectors.bar))
</script>

<template>
  <div :class="cn('flex h-[400px] w-full flex-col items-end', $attrs.class ?? '')">
    <ChartLegend v-if="showLegend" @legend-item-click="handleLegendItemClick" v-model:items="legendItems" />

    <VisXYContainer :data="data" :margin="margin" :style="{ height: isMounted ? '100%' : 'auto' }">
      <ChartCrosshair
        v-if="showTooltip"
        :colors="colors"
        :custom-tooltip="customTooltip"
        :index="index"
        :items="legendItems"
      />

      <VisBarComponent
        :attributes="{
          [selectorsBar]: {
            opacity: (d: Data, i: number) => {
              const pos = i % categories.length
              return legendItems[pos]?.inactive ? filterOpacity : 1
            }
          }
        }"
        :bar-padding="0.05"
        :color="colors"
        :rounded-corners="roundedCorners"
        :x="(d: Data, i: number) => i"
        :y="categories.map((category) => (d: Data) => d[category])"
      />

      <VisAxis
        v-if="showXAxis"
        :grid-line="false"
        :tick-format="xFormatter ?? ((v: number) => data[v]?.[index])"
        :tick-line="false"
        tick-text-color="hsl(var(--vis-text-color))"
        type="x"
      />
      <VisAxis
        v-if="showYAxis"
        :attributes="{
          [Axis.selectors.grid]: {
            class: 'text-muted'
          }
        }"
        :domain-line="false"
        :grid-line="showGridLine"
        :tick-format="yFormatter"
        :tick-line="false"
        tick-text-color="hsl(var(--vis-text-color))"
        type="y"
      />

      <slot />
    </VisXYContainer>
  </div>
</template>
