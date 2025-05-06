import { Layouts, RouteNames } from '@/02-pages'

import { group, page } from '../utils'

export default [
  ...group(
    {
      layout: Layouts.Default,
      middleware: []
    },
    [
      page('', RouteNames.Home, () => import('@/02-pages/views/HomePage.vue'))
      // page('users', RouteNames.Users, () => import('@/02-pages/views/UsersPage.vue')),
      // page('settings', RouteNames.Settings, () => import('@/02-pages/views/SettingsPage.vue')),
      // page('test', RouteNames.Test, () => import('@/02-pages/views/TestPage.vue'))
    ]
  ),
  ...group(
    {
      layout: Layouts.Auth,
      middleware: []
    },
    [page('login', RouteNames.Login, () => import('@/02-pages/views/auth/LoginPage.vue'))]
  )
]
