import { Layouts } from '../config'
import type { Route } from '../types'

export function page(path: Route['path'], name: Route['name'], component: Route['component']): Route {
  return {
    path: `/${path}`,
    name,
    component,
    meta: {
      layout: {
        type: Layouts.Default,
        component: null,
        isError404: false
      },
      middleware: []
    }
  }
}
