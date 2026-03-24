import { NEXT, useApp, useHandler } from 'innet'

import { JSX_PLUGINS } from '../../jsxPlugins'
import { type JSXElement, type JSXSource, type Props } from '../../types'
import { enrichErrorStack } from '../enrichErrorStack'

function getAppName (app: any) {
  return typeof app === 'function' ? app.name : String(app)
}

function getStack (app: any, stack = ''): string {
  if (typeof app === 'object' && app !== null && app.source) {
    return `${stack}\n    at ${getAppName(app.type)} (${app.source.fileName}:${app.source.lineNumber}:${app.source.columnNumber})${getStack(app.parent)}`
  }

  return stack
}

export function renderJSXDev (
  type: string | Function | undefined,
  props: Props,
  key: string,
  isStatic: boolean,
  source: JSXSource,
  self: any,
): JSXElement {
  if (type === undefined) {
    return props.children
  }

  if (key !== undefined) {
    props.key = key
  }

  const parent = useApp()

  const dev = typeof type === 'function'
    ? (props: any) => {
        try {
          return type(props)
        } catch (err: any) {
          const stack = getStack(app)

          const error = Error(`Render component <${getAppName(type)}> exception${stack}`, { cause: err })
          throw enrichErrorStack(error)
        }
      }
    : () => {
        try {
          const plugin = useHandler()[JSX_PLUGINS][type]
          return plugin ? plugin() : NEXT
        } catch (err: any) {
          const stack = getStack(app)

          const error = Error(`DEV Error: Render plugin <${getAppName(type)}> exception${stack}`, { cause: err })
          throw enrichErrorStack(error)
        }
      }

  const app = {
    type,
    props,
    source,
    parent,
    dev,
  }

  return app
}
