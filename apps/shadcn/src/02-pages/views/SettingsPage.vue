<script setup lang="ts">
import { LayoutDashboardIcon, SettingsIcon } from 'lucide-vue-next'

import { RouteNames } from '@/02-pages'

import { PageWrapper } from '@/06-shared'

import type { BreadcrumbItemType } from '@/components/types'

const breadcrumbs: BreadcrumbItemType[] = [
  {
    label: 'Dashboard',
    to: { name: RouteNames.Home },
    icon: LayoutDashboardIcon
  },
  {
    label: 'Settings',
    icon: SettingsIcon
  }
]
</script>

<template>
  <PageWrapper title="Settings" description="Here's a list of your tasks for this month!" :breadcrumbs="breadcrumbs">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur dolor dolorem ea esse et impedit laborum
      nihil odit quis. Aperiam at delectus eveniet facere incidunt libero minima rerum totam?
    </p>
  </PageWrapper>
</template>
