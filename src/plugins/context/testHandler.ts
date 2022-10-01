import { array, arrayAsync, arrayClear, arraySingleLess, nullish, object, stop } from '@innet/utils'
import { createHandler } from 'innet'

import { jsxComponent } from '../../jsxComponent'
import { jsxPlugins } from '../../jsxPlugins'
import { context as contextPlugin, ContextProps } from './context'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      context: ContextProps
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
      context: contextPlugin,
    }),
    jsxComponent,
  ]),
])
