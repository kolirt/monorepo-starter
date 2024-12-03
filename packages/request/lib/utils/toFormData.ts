import { serialize } from 'object-to-formdata'

function toFormData(data: Record<string, any>): FormData {
  return serialize(data, {
    indices: true,
    booleansAsIntegers: true
  })
}

export { toFormData }
