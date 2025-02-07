import type { Component } from 'vue'
import 'vue-router'

import { Layouts, type Middleware } from '@/02-pages'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    layout: {
      type: Layouts
      component: null | Component
      isError404: boolean
    }
    middleware: Middleware[]
  }
}
