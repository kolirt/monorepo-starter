<script lang="ts" setup>
// import { ActivityIcon, DollarSignIcon, UsersRoundIcon, WeightIcon } from 'lucide-vue-next'
import { Button, Grid, PageWrapper } from '@/06-shared'

// import MetricCard, { type MetricCardPropsType } from '@/components/cards/MetricCard.vue'
// import AreaChartCard, { type AreaChartCardPropsType } from '@/components/cards/chart/AreaChartCard.vue'
// import BarChartCard, { type BarChartCardPropsType } from '@/components/cards/chart/BarChartCard.vue'
// import DonutChartCard, { type DonutChartCardPropsType } from '@/components/cards/chart/DonutChartCard.vue'
// import LineChartCard, { type LineChartCardPropsType } from '@/components/cards/chart/LineChartCard.vue'

/*const cards1: MetricCardPropsType[] = [
  {
    title: 'Total Revenue',
    icon: DollarSignIcon,
    value: '$45,231.89',
    subValue: '+20.1% from last month'
  },
  {
    title: 'Subscriptions',
    icon: UsersRoundIcon,
    value: '+2350',
    subValue: '+180.1% from last month'
  },
  {
    title: 'Sales',
    icon: WeightIcon,
    value: '+12,234',
    subValue: '+19% from last month'
  },
  {
    title: 'Active Now',
    icon: ActivityIcon,
    value: '+573',
    subValue: '+201 since last hour'
  }
]*/

/*const cards2: (
  | ({ component: typeof AreaChartCard } & { data: AreaChartCardPropsType })
  | ({ component: typeof BarChartCard } & { data: BarChartCardPropsType })
  | ({ component: typeof DonutChartCard } & { data: DonutChartCardPropsType })
  | ({ component: typeof LineChartCard } & { data: LineChartCardPropsType })
)[] = [
  {
    component: AreaChartCard,
    data: {
      title: 'Total Revenue',
      data: {
        categories: ['total'],
        index: 'name',
        data: [
          { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Jul', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Aug', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Sep', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Oct', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Nov', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Dec', total: Math.floor(Math.random() * 5000) + 1000 }
        ]
      }
    }
  },
  {
    component: BarChartCard,
    data: {
      title: 'Total Revenue',
      data: {
        categories: ['total'],
        index: 'name',
        data: [
          { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Jul', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Aug', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Sep', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Oct', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Nov', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Dec', total: Math.floor(Math.random() * 5000) + 1000 }
        ]
      }
    }
  },
  {
    component: DonutChartCard,
    data: {
      title: 'Total Revenue',
      data: {
        category: 'total',
        index: 'name',
        data: [
          { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Jul', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Aug', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Sep', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Oct', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Nov', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Dec', total: Math.floor(Math.random() * 5000) + 1000 }
        ]
      }
    }
  },
  {
    component: LineChartCard,
    data: {
      title: 'Total Revenue',
      data: {
        categories: ['total'],
        index: 'name',
        data: [
          { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Jul', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Aug', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Sep', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Oct', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Nov', total: Math.floor(Math.random() * 5000) + 1000 },
          { name: 'Dec', total: Math.floor(Math.random() * 5000) + 1000 }
        ]
      }
    }
  }
]*/
</script>

<template>
  <PageWrapper description="Here's a list of your tasks for this month!" title="Dashboard 12">
    <Grid columns="4">
      <Button>123</Button>

      <!--      <MetricCard
        v-for="(item, index) in cards1"
        :title="item.title"
        :icon="item.icon"
        :value="item.value"
        :sub-value="item.subValue"
        :key="index"
      />-->
    </Grid>

    <Grid columns="2">
      <!--      <component v-for="(item, index) in cards2" :is="item.component" v-bind="item.data" :key="index" />-->
    </Grid>
  </PageWrapper>
</template>
