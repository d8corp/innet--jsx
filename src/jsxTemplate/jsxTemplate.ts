import innet, { PluginHandler } from 'innet'

import { Children, Props } from '../types'

export interface JsxTemplate <P extends Props = Props, C extends Children = Children> {
  (props: P, children: C)
}

export function jsxTemplate (): PluginHandler {
  return (app, next, handler) => {
    if (typeof app.type === 'function') {
      const { children, props, type } = app
      return innet(type(props, children, handler), handler)
    }

    return next()
  }
}
