import { type HandlerPlugin, NEXT, type Plugin, useApp, useHandler } from 'innet'

import { type JSXElement, type Props } from '../types'

export type JSXPluginElement <P extends Props = Props> = JSXElement<string, P>

export const JSX_PLUGINS: unique symbol = Symbol('JSX_PLUGINS')

export function jsxPlugins (plugins: Record<string, HandlerPlugin>): Plugin {
  return handler => {
    handler[JSX_PLUGINS] = plugins

    return () => {
      const app = useApp<Record<string, any>>()

      if (typeof app.type !== 'string') return NEXT

      if (app.dev) return app.dev()

      const jsxPlugin: HandlerPlugin = useHandler()[JSX_PLUGINS][app.type]

      if (typeof jsxPlugin !== 'function') return NEXT

      return jsxPlugin()
    }
  }
}
