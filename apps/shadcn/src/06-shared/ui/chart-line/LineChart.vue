<script generic="T extends Record<string, any>" lang="ts" setup>
import { Axis, type BulletLegendItemInterface, CurveType, Line } from '@unovis/ts'
import { VisAxis, VisLine, VisXYContainer } from '@unovis/vue'
import { useMounted } from '@vueuse/core'
import { computed, ref } from 'vue'

import { cn } from '@/06-shared'

import { ChartCrosshair, ChartLegend, defaultColors } from '../chart'
import { type LineChartProps } from './interface'

const emits = defineEmits<{
  legendItemClick: [d: BulletLegendItemInterface, i: number]
}>()

const props = withDefaults(defineProps<LineChartProps<T>>(), {
  customTooltip: undefined,
  curveType: CurveType.Basis,
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
</script>

<template>
  <div :class="cn('flex h-[400px] w-full flex-col items-end', $attrs.class ?? '')">
    <ChartLegend v-if="showLegend" @legend-item-click="handleLegendItemClick" v-model:items="legendItems" />

    <VisXYContainer :data="data" :margin="{ left: 20, right: 20 }" :style="{ height: isMounted ? '100%' : 'auto' }">
      <ChartCrosshair
        v-if="showTooltip"
        :colors="colors"
        :custom-tooltip="customTooltip"
        :index="index"
        :items="legendItems"
      />

      <template v-for="(category, i) in categories" :key="category">
        <VisLine
          :attributes="{
            [Line.selectors.line]: {
              opacity: legendItems.find((item) => item.name === category)?.inactive ? filterOpacity : 1
            }
          }"
          :color="colors[i]"
          :curve-type="curveType"
          :x="(d: Data, i: number) => i"
          :y="(d: Data) => d[category]"
        />
      </template>

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
