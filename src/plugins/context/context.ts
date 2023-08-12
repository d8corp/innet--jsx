import innet, { type Handler, useHandler } from 'innet'

import { useChildren, useProps } from '../../hooks'
import { type Context } from '../../utils'

export interface ContextProps <D = any> {
  for: Context<D>
  set?: D
}

export function createContextHandler <D> (handler: Handler, context: Context<D>, value: D): Handler {
  const childrenHandler = Object.create(handler)
  context.set(childrenHandler, value)
  return childrenHandler
}

export function context () {
  const props = useProps<ContextProps>()

  innet(useChildren(), createContextHandler(useHandler(), props.for, props.set))
}
