import { type App, type Component, createApp } from 'vue'

import { AuthApi, useAuth } from '@/05-entities/auth'

export function initApp(rootComponent: Component) {
  // eslint-disable-next-line
  return new Promise<App<typeof rootComponent>>(async (resolve) => {
    const app = createApp(rootComponent)

    const { isAuth, /*setUser,*/ clearUser } = useAuth()

    if (isAuth()) {
      await AuthApi.user()
        // .then((data) => setUser(data.result.user))
        .catch(() => clearUser())
    }

    resolve(app)
  })
}
