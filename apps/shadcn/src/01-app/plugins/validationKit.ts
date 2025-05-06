import { createValidation as createValidationMaster } from '@kolirt/vue-validation-kit'
import { en } from '@kolirt/vue-validation-kit/localization'

export function createValidation() {
  return createValidationMaster({
    locale: 'en',
    messages: { en },
    clearErrorOnInput: true,
    silentRevalidation: true
  })
}
