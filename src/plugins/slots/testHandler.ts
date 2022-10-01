import { array, arrayAsync, arrayClear, arraySingleLess, nullish, object, stop } from '@innet/utils'
import { createHandler } from 'innet'

import { jsxComponent } from '../../jsxComponent'
import { jsxPlugins } from '../../jsxPlugins'
import { slot, SlotProps, slots, SlotsProps } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      slot: SlotProps
      slots: SlotsProps
    }
  }
}

export const testHandler = createHandler([
  nullish([stop]),
  array([
    arrayAsync,
    arrayClear,
    arraySingleLess,
  ]),
  object([
    jsxPlugins({
      slot,
      slots,
    }),
    jsxComponent,
  ]),
])
