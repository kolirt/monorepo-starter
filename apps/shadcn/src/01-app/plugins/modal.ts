import { createModal as createModalMaster } from '@kolirt/vue-modal'

export function createModal() {
  return createModalMaster({
    modalStyle: {
      align: 'center'
    },
    overlayStyle: {
      'background-color': 'rgba(0, 0, 0, .6)'
    }
  })
}
