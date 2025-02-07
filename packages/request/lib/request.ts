import axios, { type AxiosRequestConfig, type Canceler } from 'axios'

import type { Method, Options } from './types'
import { prepareParams, toFormData, unrefs } from './utils'

const axiosTokens: Record<string, Canceler> = {}

function request<T = any>(
  method: Method,
  url: string,
  data: Record<string, any> = {},
  options: Options = {}
): Promise<T> {
  const config: AxiosRequestConfig = {
    ...options,
    method,
    url,
    timeout: options.timeout ?? 5_000
  }

  if (options && 'onUploadProgress' in options) {
    config.onUploadProgress = (progressEvent) => {
      // @ts-ignore
      options.onUploadProgress({
        loaded: progressEvent.loaded,
        total: progressEvent.total,
        percent: progressEvent.total ? Math.floor((progressEvent.loaded * 100) / progressEvent.total) : undefined
      })
    }
  }

  if (['delete', 'put', 'patch'].includes(method)) {
    config.data['_method'] = method
    config.method = 'post'
  }

  if (method === 'get') {
    config.params = prepareParams(unrefs(data))
  } else {
    if (options.asJson) {
      config.data = prepareParams(unrefs(data))
    } else {
      config.data = toFormData(unrefs(data))
    }
  }

  if (options.single ?? true) {
    if (axiosTokens[url]) {
      axiosTokens[url]()
    }

    config.cancelToken = new axios.CancelToken((token) => {
      axiosTokens[url] = token
    })
  }

  return axios
    .request(config)
    .then((data) => {
      if (data.data.description && options.onNotification) {
        options.onNotification('success', data.data.description)
      }

      return data.data
    })
    .catch((data) => {
      if (data.response.data.description && options.onNotification) {
        options.onNotification('error', data.response.data.description)
      }

      if (data.response.data.errors && options.onValidationError) {
        options.onValidationError(data.response.data.errors)
      }

      throw data.response.data
    })
}

export { request }
