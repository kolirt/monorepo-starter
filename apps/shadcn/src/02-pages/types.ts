import type { Component } from 'vue'
import type { RouteLocationNormalized, RouteMeta } from 'vue-router'

type Middleware = (to: RouteLocationNormalized, from: RouteLocationNormalized) => false | void | {}

type Route = {
  path: string
  name?: string
  component: Component
  meta: RouteMeta
  children?: Route[]
}

export type { Middleware, Route }
