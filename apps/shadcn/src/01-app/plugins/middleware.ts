import type { Router } from 'vue-router'

import { GlobalMiddlewares, type Middleware, RouteNames } from '@/02-pages'

export function createMiddleware(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const middlewares = [...GlobalMiddlewares, ...((to.meta.middleware ?? []) as Middleware[])]

    for (const middleware of middlewares) {
      const value = await middleware(to, from)

      if (typeof value === 'object') return next(value)

      if (value === false) return next({ name: RouteNames.Home })
    }

    return next()
  })
}
