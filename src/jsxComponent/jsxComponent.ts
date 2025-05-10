import innet, { type HandlerPlugin, NEXT, useApp, useHandler } from 'innet'

import { type JSXElement, type Props } from '../types'
import { GenericComponent } from '../utils'

export type JsxComponent <P extends Props = Props> = (props: P) => any
export type JsxComponentElement <P extends Props = Props> = JSXElement<JsxComponent<P>, P>

export const EMPTY_PROPS = Object.freeze({})

export function jsxComponent (): HandlerPlugin {
  return () => {
    const app = useApp<JsxComponentElement>()

    if (typeof app.type !== 'function') return NEXT

    const handler = useHandler()
    const run = 'dev' in app ? app.dev : app.type
    const result = run(app.props || EMPTY_PROPS)

    if (
      result &&
      typeof result === 'object' &&
      (Symbol.iterator in result || Symbol.asyncIterator in result) &&
      typeof result.next === 'function'
    ) {
      const data = result.next()

      innet(new GenericComponent(data, result), handler)
      return
    }

    innet(result, handler)
  }
}
