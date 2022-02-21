import { Handler, Next, PluginHandler } from 'innet'

export interface JSXPlugin {
  (app, handler: Handler, next: Next)
}

export function jsxPlugins (plugins: Record<string, JSXPlugin>) {
  return (handler): PluginHandler => {
    Object.assign(handler, plugins)

    return (app, next, handler) => {
      if (typeof app.type === 'string' && typeof handler[app.type] === 'function') {
        return handler[app.type](app, handler, next)
      }

      return next()
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}
