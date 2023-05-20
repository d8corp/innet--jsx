import { arraySync, createConditionPlugin, nullish, object } from '@innet/utils'
import { createHandler, useApp } from 'innet'

import { jsxComponent } from '../../jsxComponent'
import { jsxPlugins } from '../../jsxPlugins'
import { slot, slots } from '.'

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
