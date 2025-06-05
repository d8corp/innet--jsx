import { arraySync, nullish, object } from '@innet/utils'
import { createHandler } from 'innet'

import { jsxComponent } from '../../jsxComponent'

export const testHandler = createHandler([
  nullish([]),
  arraySync,
  object([
    jsxComponent,
  ]),
])
