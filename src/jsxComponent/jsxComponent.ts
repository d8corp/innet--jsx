import innet, { type HandlerPlugin, NEXT, useApp, useHandler } from 'innet'

import { type Children, type JSXElement, type Props } from '../types'
import { GenericComponent } from '../utils'

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

export function jsxComponent (): HandlerPlugin {
  return () => {
    const app = useApp<JsxTemplateElement>()

    if (typeof app.type !== 'function') return NEXT

    const handler = useHandler()
    const result = app.type(app.props)

    if (result && (Symbol.iterator in result || Symbol.asyncIterator in result) && typeof result.next === 'function') {
      const data = result.next()

      innet(new GenericComponent(data, result), handler)
      return
    }

    innet(result, handler)
  }
}
