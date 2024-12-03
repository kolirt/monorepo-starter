import type { Component } from 'vue'
import type { RouteMeta } from 'vue-router'

import { Layouts } from '../config'
import type { Middleware } from '../types'

function getDefaultRouteMeta(): RouteMeta {
  return {
    layout: {
      type: Layouts.Error,
      component: null,
      isError404: true
    },
    middleware: []
  }
}

const imports = import.meta.glob('../layouts/*.vue', { import: 'default' })

const middleware: Middleware = async function (to) {
  console.log()

  if (to.name === undefined) {
    to.meta = getDefaultRouteMeta()
  }

  to.meta.layout.component = (await imports[`../layouts/${to.meta.layout.type}.vue`]()) as Component
}

export { middleware }
