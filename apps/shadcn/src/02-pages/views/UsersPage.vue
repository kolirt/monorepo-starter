<script setup lang="ts">
import { LayoutDashboardIcon, UsersIcon } from 'lucide-vue-next'

import { RouteNames } from '@/02-pages'

import { Button, PageWrapper } from '@/06-shared'

import type { BreadcrumbItemType } from '@/components/types'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const breadcrumbs: BreadcrumbItemType[] = [
  {
    label: 'Dashboard',
    to: { name: RouteNames.Home },
    icon: LayoutDashboardIcon
  },
  {
    label: 'Users',
    icon: UsersIcon
  }
]
</script>

<template>
  <PageWrapper title="Users" description="Here's a list of your tasks for this month!" :breadcrumbs="breadcrumbs">
    <template #top-right>
      <Button>Download</Button>
    </template>

    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lorem ipsum dolor.</TableHead>
            <TableHead>Lorem ipsum dolor.</TableHead>
            <TableHead>Lorem ipsum dolor.</TableHead>
            <TableHead>Lorem ipsum dolor.</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </div>
  </PageWrapper>
</template>
