import { type Handler, type Next, type PluginHandler } from 'innet'

import { type Children, type JSXElement, type Props } from '../types'

export interface JSXPluginElement <P extends Props = Props, C extends Children = Children> extends JSXElement<string, P, C> {}
export interface JSXPlugin <A extends JSXPluginElement = JSXPluginElement<any>, H extends Handler = Handler> {
  (app: A, handler: H, next: Next): any
}

export function jsxPlugins (plugins: Record<string, JSXPlugin>) {
  return (handler: Handler): PluginHandler => {
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
    type IntrinsicElements = Record<string, any>
  }
}
