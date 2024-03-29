import innet, { type Handler, useHandler } from 'innet'

import { useChildren, useProps } from '../../hooks'
import { JSX_PLUGINS } from '../../jsxPlugins'
import { type Children } from '../../types'
import { createContextHandler } from '../context'
import { slotsContext } from './constants'

export interface SlotsProps {
  from: any
}

export interface SlotProps {
  name?: string
}

export function getSlots (handler: Handler, from: Children): Record<string, any> {
  const result: Record<string, any> = {}

  if (Array.isArray(from)) {
    for (let i = 0; i < from.length; i++) {
      const child: any = from[i]

      if (child && typeof child === 'object' && !Array.isArray(child)) {
        const { type, props, children } = child

        if (typeof type === 'string' && handler[JSX_PLUGINS][type] === slot) {
          const name = props?.name || ''

          if (name in result) {
            result[name].push(...children)
          } else {
            result[name] = children
          }

          continue
        }
      }

      if ('' in result) {
        result[''].push(child)
      } else {
        result[''] = [child]
      }
    }
  }

  return result
}

export function useSlots () {
  return getSlots(useHandler(), useChildren())
}

export function slot () {
  const handler = useHandler()
  const props = useProps()
  const children = useChildren()
  const slots = slotsContext.get(handler)
  const name = props?.name || ''

  innet(name in slots ? slots[name] : children, handler)
}

export function slots () {
  const handler = useHandler()
  const children = useChildren()
  const { from } = useProps<SlotsProps>()

  innet(children, createContextHandler(handler, slotsContext, Object.assign(
    {},
    slotsContext.get(handler),
    getSlots(handler, from),
  )))
}
