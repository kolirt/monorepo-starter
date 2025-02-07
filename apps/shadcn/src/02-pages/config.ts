import { layoutMiddleware } from './middlewares'

const GlobalMiddlewares = [layoutMiddleware]

enum Layouts {
  Default = 'DefaultLayout',
  Ui = 'UiLayout',
  Auth = 'AuthLayout',
  Error = 'ErrorLayout'
}

enum RouteNames {
  Home = 'home',
  Tabs = 'tabs',
  Users = 'users',
  Settings = 'settings',
  Test = 'test',
  Login = 'login'
}

enum UiRouteNames {
  Accordion = 'ui.components.accordion',

  Input = 'ui.forms.input'
}

export { GlobalMiddlewares, Layouts, RouteNames, UiRouteNames }
