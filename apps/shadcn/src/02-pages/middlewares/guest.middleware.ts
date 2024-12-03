import { useAuth } from '@/05-entities/auth'

import { RouteNames } from '../config'
import type { Middleware } from '../types'

const middleware: Middleware = function () {
  const { user } = useAuth()
  if (user.value) {
    return { name: RouteNames.Home }
  }
}

export { middleware }
