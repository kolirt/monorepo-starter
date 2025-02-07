import { createRouter as createRouterMaster, createWebHistory } from 'vue-router'

import { routes } from '@/02-pages'

import { createMiddleware } from './middleware'

export function createRouter() {
  const router = createRouterMaster({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

  createMiddleware(router)

  return router
}
