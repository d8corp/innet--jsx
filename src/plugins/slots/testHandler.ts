import { arraySync, createConditionPlugin, nullish, object } from '@innet/utils'
import { createHandler, type NEXT, useApp } from 'innet'

import { type EMPTY, jsxComponent } from '../../jsxComponent'
import { jsxPlugins } from '../../jsxPlugins'
import type { JSXElement } from '../../types'
import type { ContextProps } from '../context'
import { slot, type SlotProps, slots, type SlotsProps } from '.'

declare global {
  namespace JSX {
    type Element =
      | ArrayElement
      | FunctionElement
      | JSXElement
      | boolean
      | null
      | number
      | string
      | undefined
      | typeof EMPTY
      | typeof NEXT
      | void

    interface ArrayElement extends Array<Element> {}

    type FunctionElement = () => Element

    interface ElementChildrenAttribute {
      children: {}
    }
    interface IntrinsicElements {
      slots: SlotsProps
      slot: SlotProps
      context: ContextProps
    }
  }
}

export const testHandler = createHandler([
  nullish([]),
  createConditionPlugin(() => useApp() === undefined)([]),
  arraySync,
  object([
    jsxPlugins({
      slot,
      slots,
    }),
    jsxComponent,
  ]),
])
