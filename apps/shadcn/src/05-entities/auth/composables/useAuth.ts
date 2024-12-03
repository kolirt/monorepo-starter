import { type Ref, reactive, toRef } from 'vue'

import { type AuthApiTypes } from '../api'

const state = reactive({
  user: null as AuthApiTypes.AuthUser | null
})

export function useAuth() {
  function isAuth() {
    const res = localStorage.getItem('isAuth')
    return res ? !!JSON.parse(res) : false
  }

  function setUser(user: AuthApiTypes.AuthUser) {
    state.user = user
    localStorage.setItem('isAuth', JSON.stringify(true))
  }

  function clearUser() {
    state.user = null
    localStorage.removeItem('isAuth')
  }

  return {
    user: toRef(state, 'user') as Ref<AuthApiTypes.AuthUser>,
    isAuth,
    setUser,
    clearUser
  }
}
