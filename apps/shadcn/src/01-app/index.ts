import App from './App.vue'

// eslint-disable-next-line no-restricted-imports
import '@/06-shared/assets/styles/main.scss'

import { createHead } from './plugins/head'
import { initApp } from './plugins/initApp'
import { createModal } from './plugins/modal'
import { createRouter } from './plugins/router'
import { createValidation } from './plugins/validationKit'

initApp(App).then((app) => {
  app.use(createRouter())
  app.use(createHead())
  app.use(createModal())
  app.use(createValidation())

  app.mount('#app')
})
