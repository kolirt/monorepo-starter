<script lang="ts" setup>
import { ValidationForm, useForm } from '@kolirt/vue-validation-kit'

const emits = defineEmits<{
  submit: []
}>()

const props = defineProps<{
  form: ReturnType<typeof useForm>
}>()
</script>

<template>
  <ValidationForm @submit="emits('submit')" :form="props.form">
    <slot></slot>
  </ValidationForm>
</template>

<style scoped></style>
