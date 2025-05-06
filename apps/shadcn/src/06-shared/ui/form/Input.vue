<script lang="ts" setup>
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import { ValidationField } from '@kolirt/vue-validation-kit'
import { type HTMLAttributes, useId } from 'vue'

import { Label, cn } from '@/06-shared'

const props = withDefaults(
  defineProps<{
    name: string
    type?: 'text' | 'email' | 'password' | 'number'
    label?: string
    placeholder?: string
    class?: HTMLAttributes['class']
  }>(),
  {
    type: 'text'
  }
)
const id = useId()
const value = defineModel()
</script>

<template>
  <ValidationField
    v-auto-animate
    v-slot="{ fieldName, firstError }"
    :name="props.name"
  >
    <Label v-if="props.label" :for="id">{{ props.label }}</Label>

    <input
      v-model="value"
      :id="id"
      :name="fieldName"
      :type="props.type"
      :placeholder="props.placeholder"
      :class="
        cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )
      "
    />

    <p v-if="firstError" class="text-sm font-medium text-destructive">{{ firstError }}</p>
  </ValidationField>
</template>
