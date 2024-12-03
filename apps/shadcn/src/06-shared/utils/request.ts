import { type Method, type Options, request as requestMaster } from '@monorepo-starter/request'

import { Layouts } from '@/02-pages'

function request<T = any>(method: Method, url: string, data: Record<string, any> = {}, options: Options = {}) {
  console.log(Layouts)
  return requestMaster<T>(method, url, data, {
    timeout: 5_000,
    ...options,
    onNotification(type, message) {
      console.log(type, message)
    },
    onValidationError(errors) {
      console.log(errors)
    }
  })
}

export { request }
