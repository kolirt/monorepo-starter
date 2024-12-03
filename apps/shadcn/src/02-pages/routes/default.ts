import { Layouts, RouteNames } from '@/02-pages'

import { group, page } from '../utils'

export default group(
  {
    layout: Layouts.Default,
    middleware: []
  },
  [
    page('', RouteNames.Home, () => import('@/02-pages/ui/HomePage.vue')),
    page('login', RouteNames.Login, () => import('@/02-pages/ui/LoginPage.vue'))
  ]
)
