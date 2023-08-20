import { type HandlerPlugin, NEXT, type Plugin, useApp, useHandler } from 'innet'

import { type Children, type JSXElement, type Props } from '../types'

export interface JSXPluginElement <P extends Props = Props, C extends Children = Children> extends JSXElement<string, P, C> {}

export const JSX_PLUGINS: unique symbol = Symbol('JSX_PLUGINS')

export function jsxPlugins (plugins: Record<string, HandlerPlugin>): Plugin {
  return handler => {
    handler[JSX_PLUGINS] = plugins

    return () => {
      const app = useApp<Record<string, any>>()

      if (typeof app.type !== 'string') return NEXT

      const jsxPlugin: HandlerPlugin = useHandler()[JSX_PLUGINS][app.type]

      if (typeof jsxPlugin !== 'function') return NEXT

      return jsxPlugin()
    }
  }
}
