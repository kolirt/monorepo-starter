import App from './App.vue'

import { Layouts } from '@/02-pages'

// eslint-disable-next-line no-restricted-imports
import '@/06-shared/assets/styles/main.scss'

import { createHead } from './plugins/head'
import { initApp } from './plugins/initApp'
import { createModal } from './plugins/modal'
import { createRouter } from './plugins/router'

console.log(Layouts)

initApp(App).then((app) => {
  app.use(createRouter())
  app.use(createHead())
  app.use(createModal())

  app.mount('#app')
})
