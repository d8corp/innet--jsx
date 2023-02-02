import { array, arrayAsync, arrayClear, arraySingleLess, nullish, object, stop } from '@innet/utils'
import { createHandler } from 'innet'

import { jsxComponent } from '../../jsxComponent'
import { jsxPlugins } from '../../jsxPlugins'
import { slot, slots } from '.'

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
