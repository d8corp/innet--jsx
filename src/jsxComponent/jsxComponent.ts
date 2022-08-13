import innet, { Handler, PluginHandler } from 'innet'

import { Children, JSXElement, Props } from '../types'

export interface JsxTemplateElement <P extends Props = Props, C extends Children = Children> extends JSXElement<JsxComponent<P>, P, C> {}

type RequiredKeys<T> = { [K in keyof T]-?: ({} extends { [P in K]: T[K] } ? never : K) }[keyof T]

export interface JsxComponent <P extends Props = undefined> {
  (
    props: RequiredKeys<P> extends never ? undefined : P,
    ...rest: any[]
  ): any
  (
    props: P extends undefined ? {} : P,
    ...rest: any[]
  ): any
  (
    props: {} extends P ? undefined : P,
    ...rest: any[]
  ): any
}

let _handler: Handler
let _children: Children
let _props: any

export function useHandler <H extends Handler = Handler>(): H {
  return _handler as H
}
export function useChildren <C extends Children = Children> (): C {
  return _children as C
}
export function useProps <C extends any = any> (): C {
  return _props
}

export function jsxComponent (): PluginHandler {
  return (app: JsxTemplateElement, next, handler) => {
    if (typeof app.type === 'function') {
      _handler = handler
      _children = app.children
      _props = app.props
      return innet(app.type(_props), handler)
    }

    return next()
  }
}
