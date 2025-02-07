<script setup lang="ts">
import { Accordion, type AccordionItem, Card, PageWrapper } from '@/06-shared'

const data: AccordionItem[] = [
  {
    title: 'Accordion 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, fugiat?'
  },
  {
    title: 'Accordion 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, fugiat?'
  },
  {
    title: 'Accordion 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, fugiat?'
  },
  {
    title: 'Accordion 4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, fugiat?'
  },
  {
    title: 'Accordion 5 (disabled)',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, fugiat?',
    disabled: true
  }
]
</script>

<template>
  <PageWrapper title="Accordion">
    <Card title="Example">
      <div class="space-y-6">
        <Accordion :data="data" />
      </div>
    </Card>
  </PageWrapper>
</template>

<style scoped></style>
