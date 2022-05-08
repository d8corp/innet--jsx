import innet, { Handler, PluginHandler } from 'innet'

import { Children, JSXElement, Props } from '../types'

export interface JsxTemplateElement <P extends Props = Props, C extends Children = Children> extends JSXElement<JsxTemplate<P, C>, P, C> {}
export interface JsxTemplate <P extends Props = Props, C extends Children = Children> {
  (props: P, children: C, handler: Handler)
}

export function jsxTemplate (): PluginHandler {
  return (app: JsxTemplateElement, next, handler) => {
    if (typeof app.type === 'function') {
      const { children, props, type } = app
      return innet(type(props, children, handler), handler)
    }

    return next()
  }
}
