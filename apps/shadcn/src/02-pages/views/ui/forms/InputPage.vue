<script setup lang="ts">
import { ref } from 'vue'

import { Card, Input, PageWrapper } from '@/06-shared'

const value = ref('')
</script>

<template>
  <PageWrapper title="Input">
    <Card title="Example">
      <pre class="text-black">value: {{ value }}</pre>

      <div class="space-y-2">
        <Input label="Label" v-model="value" />
      </div>
    </Card>
  </PageWrapper>
</template>

<style scoped></style>
