import type { RouteMeta } from 'vue-router'

import type { Route } from '../types'

export function group(
  meta: {
    prefix?: string
    layout?: RouteMeta['layout']['type']
    middleware?: RouteMeta['middleware']
  },
  routes: Route[]
) {
  return routes.map((route) => {
    if (meta.prefix) {
      route.path = `/${meta.prefix}${route.path}`
    }

    if (meta.layout) {
      route.meta.layout.type = meta.layout
    }

    if (meta.middleware) {
      route.meta.middleware.push(...meta.middleware)
    }

    return route
  })
}
