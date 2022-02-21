import innet, { Handler, PluginHandler } from 'innet'

import { Children, Props } from '../types'

export function jsxComponent (): PluginHandler {
  return (target, next, handler) => {
    if (
      typeof target.type === 'function' &&
      target.type.prototype &&
      typeof target.type.prototype.init === 'function'
    ) {
      const { children, props, type } = target
      const component = new type(props, children, handler)
      return innet(component.init(props, children, handler), handler)
    }

    return next()
  }
}

export interface Component <P extends Props = Props, C extends Children = Children> {
  init (props?: P, children?: C, handler?: Handler, ...other: any[]): any
}

export interface ComponentConstructor <P extends Props = Props, C extends Children = Children> {
  new (props?: Props, children?: Children, handler?: Handler): Component<P, C>
}

declare global {
  namespace JSX {
    type ElementClass = Component
  }
}
