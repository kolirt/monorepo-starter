import { request } from '@/06-shared'

export function login() {
  return request('post', 'auth/login')
}

export function user() {
  return request('get', 'auth/user')
}

export function logout() {
  return request('post', 'auth/logout')
}
