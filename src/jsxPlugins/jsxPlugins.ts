import { Handler, Next, PluginHandler } from 'innet'
import { Children, Props } from '../types'

export interface JSXElement <P extends Props = Props, C extends Children = Children> {
  type: string
  props?: P
  children?: C
}
export interface JSXPlugin <A extends JSXElement = JSXElement, H extends Handler = Handler> {
  (app: A, handler: H, next: Next)
}

export function jsxPlugins (plugins: Record<string, JSXPlugin>) {
  return (handler): PluginHandler => {
    Object.assign(handler, plugins)

    return (app: JSXElement, next, handler) => {
      if (typeof app.type === 'string' && typeof handler[app.type] === 'function') {
        return handler[app.type](app, handler, next)
      }

      return next()
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}
