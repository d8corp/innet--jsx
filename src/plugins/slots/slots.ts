import innet, { type Handler, useHandler } from 'innet'

import { useChildren, useContext, useProps } from '../../hooks'
import { JSX_PLUGINS } from '../../jsxPlugins'
import { createContextHandler } from '../context'
import { slotsContext } from './constants'

export interface SlotsProps {
  from: any
  children: any
}

export interface SlotProps {
  name?: string
  children?: any
}

export function getSlots (handler: Handler, from: any): Record<string, any> {
  const result: Record<string, any> = {}

  if (from === undefined) {
    return result
  }

  from = Array.isArray(from) ? from : [from]

  for (let i = 0; i < from.length; i++) {
    const child: any = from[i]

    if (child && typeof child === 'object' && !Array.isArray(child)) {
      const { type, props } = child

      if (typeof type === 'string' && handler[JSX_PLUGINS][type] === slot) {
        const name = props?.name || ''

        if (name in result) {
          const children = props?.children === undefined
            ? []
            : Array.isArray(props.children)
              ? props.children
              : [props.children]

          if (Array.isArray(result[name])) {
            result[name].push(...children)
          } else {
            result[name] = [result[name], ...children]
          }
        } else {
          result[name] = props.children
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

  return result
}

export function useSlots () {
  return getSlots(useHandler(), useChildren())
}

export function slot () {
  const handler = useHandler()
  const props = useProps()
  const children = useChildren()
  const slots = useContext(slotsContext)
  const name = props?.name || ''

  innet(name in slots ? slots[name] : children, handler)
}

export function slots () {
  const handler = useHandler()
  const { from, children } = useProps<SlotsProps>()

  innet(children, createContextHandler(handler, slotsContext, Object.assign(
    {},
    slotsContext.get(handler),
    getSlots(handler, from),
  )))
}
