<script lang="ts" setup>
import { Button, Card, Form, Input, PageWrapper } from '@/06-shared'
import { useForm } from '@kolirt/vue-validation-kit'
import { email, required } from '@kolirt/vue-validation-kit/rules'

const form = useForm<{
  email: string
  password: string
}>({
  email: null,
  password: null
}, {
  email: [required(), email()],
  password: [required()]
})

function login() {
  form.validate()
}
</script>

<template>
  <PageWrapper >
    <Form @submit="login" :form="form" >
      <Card title="Authentication" description="Enter your email below to login to your account"
            class="mx-auto max-w-sm">
        <div class="grid gap-4">
          <Input name="email" label="Email" placeholder="Enter your email" type="email"
                 v-model="form.payload.email" class="grid gap-2" />

          <div class="grid gap-2">
            <Input name="password" label="Password" placeholder="Enter your password" type="password"
                   v-model="form.payload.password" />
          </div>
        </div>

        <template #footer>
          <Button type="submit" class="w-full"> Create account</Button>
        </template>
      </Card>
    </Form>
  </PageWrapper>
</template>
