import innet, { Handler, PluginHandler } from 'innet'

import { Children, JSXElement, Props } from '../types'

export interface JsxTemplateElement <P extends Props = Props, C extends Children = Children> extends JSXElement<JsxComponent<P, C>, P, C> {}

export interface JsxComponent <P extends Props = Props, C extends Children = Children> {
  (props: P, children: C): any
}

let _handler: Handler

export function useHandler (): Handler {
  return _handler
}
export function setHandler (handler: Handler) {
  _handler = handler
}

export function jsxComponent (): PluginHandler {
  return (app: JsxTemplateElement, next, handler) => {
    if (typeof app.type === 'function') {
      _handler = handler
      return innet(app.type(app.props, app.children), handler)
    }

    return next()
  }
}
