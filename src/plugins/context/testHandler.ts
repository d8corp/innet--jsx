import { arraySync, nullish, object } from '@innet/utils'
import { createHandler } from 'innet'

import { jsxComponent } from '../../jsxComponent'
import { jsxPlugins } from '../../jsxPlugins'
import { context } from './context'

export const testHandler = createHandler([
  nullish([]),
  arraySync,
  object([
    jsxPlugins({
      context,
    }),
    jsxComponent,
  ]),
])
