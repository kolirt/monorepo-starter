import type { AxiosRequestConfig } from 'axios'

type Paginator<T extends Record<string, any>> = {
  current_page: number
  data: T[]
  from: number | null
  last_page: number
  per_page: number
  to: number | null
  total: number
}

type Method = 'get' | 'delete' | 'head' | 'options' | 'post' | 'put' | 'patch'

type Options = {
  baseURL?: AxiosRequestConfig['baseURL']
  headers?: AxiosRequestConfig['headers']
  withCredentials?: AxiosRequestConfig['withCredentials']
  onUploadProgress?: (progressEvent: { loaded?: number; total?: number; percent?: number }) => void
  asJson?: boolean
  timeout?: AxiosRequestConfig['timeout']
  single?: boolean
  onNotification?: (type: 'success' | 'error', message: string | string[]) => void
  onValidationError?: (errors: Record<string, string[]>) => void
}

export type { Paginator, Method, Options }
