import innet, { useHandler } from 'innet'

import { EMPTY } from '../../jsxComponent'
import { Context } from '../../utils'

type GetArray<T extends ReadonlyArray<Context>> = {
  [K in keyof T]: T[K] extends Context<any, infer D> ? D : never
}

export interface ContextProviderProps <C extends Context | ReadonlyArray<Context>> {
  for: C
  set: C extends ReadonlyArray<Context> ? GetArray<C> : C extends Context<any, infer D> ? D : never
  children: any
}

export function ContextProvider <C extends Context | ReadonlyArray<Context>> (props: ContextProviderProps<C>): any {
  let handler = useHandler()

  if (Array.isArray(props.for)) {
    if (props.for.some((context, index) => context.get(handler) !== props.set[index])) {
      handler = Object.create(handler)
      props.for.forEach((context, index) => {
        context.set(handler, (props.set)[index])
      })
    }
  } else if (props.for instanceof Context) {
    if (props.for.get(handler) !== props.set) {
      handler = Object.create(handler)
      props.for.set(handler, props.set)
    }
  }

  innet(props.children, handler)

  return EMPTY
}
