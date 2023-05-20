import innet, { type Handler, useHandler } from 'innet'

import { useChildren, useProps } from '../../hooks'

export interface ContextProps <D = any> {
  for: Context<D>
  set?: D
}

export function useContext <D = any, Def = D> (context: Context<D, Def>): D | Def {
  return context.get(useHandler())
}

export class Context <D = any, Def = D> {
  readonly key: string

  constructor (public readonly defaultValue?: Def, name?: string) {
    this.key = Symbol(name) as unknown as string
  }

  get (handler: Handler): D | Def {
    return this.key in handler ? handler[this.key] : this.defaultValue
  }
}

export function createContextHandler <D> (handler: Handler, context: Context<D>, value: D): Handler {
  const childrenHandler = Object.create(handler)
  childrenHandler[context.key] = value
  return childrenHandler
}

export function context () {
  const props = useProps<ContextProps>()

  innet(useChildren(), createContextHandler(useHandler(), props.for, props.set))
}
