import { layoutMiddleware } from './middlewares'

const GlobalMiddlewares = [layoutMiddleware]

enum Layouts {
  Default = 'DefaultLayout',
  Auth = 'AuthLayout',
  Error = 'ErrorLayout'
}

enum RouteNames {
  Home = 'home',
  Login = 'login'
}

export { GlobalMiddlewares, Layouts, RouteNames }
