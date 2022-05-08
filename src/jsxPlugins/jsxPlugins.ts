import { Handler, Next, PluginHandler } from 'innet'
import { Children, JSXElement, Props } from '../types'

export interface JSXPluginElement <P extends Props = Props, C extends Children = Children> extends JSXElement<string, P, C> {}
export interface JSXPlugin <A extends JSXPluginElement = JSXPluginElement, H extends Handler = Handler> {
  (app: A, handler: H, next: Next)
}

export function jsxPlugins (plugins: Record<string, JSXPlugin>) {
  return (handler): PluginHandler => {
    Object.assign(handler, plugins)

    return (app: JSXPluginElement, next, handler) => {
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
