import { Layouts, UiRouteNames } from '@/02-pages'

import { group, page } from '../utils'

export default group(
  {
    prefix: 'ui',
    layout: Layouts.Ui,
    middleware: []
  },
  [
    ...group(
      {
        prefix: 'components'
      },
      [page('accordion', UiRouteNames.Accordion, () => import('@/02-pages/views/ui/components/AccordionPage.vue'))]
    ),

    ...group(
      {
        prefix: 'form'
      },
      [page('input', UiRouteNames.Input, () => import('@/02-pages/views/ui/forms/InputPage.vue'))]
    )
  ]
)
