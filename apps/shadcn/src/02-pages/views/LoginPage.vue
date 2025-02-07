<script setup lang="ts">
import { Button, Card, PageWrapper } from '@/06-shared'
import { Input } from '@/06-shared'
</script>

<template>
  <PageWrapper class="items-center justify-center">
    <Card title="Authentication">
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </div>

      <template #footer>
        <Button class="w-full"> Create account</Button>
      </template>
    </Card>
  </PageWrapper>
</template>
