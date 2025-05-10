import { nullish, object } from '@innet/utils'
import innet, { createHandler, type HandlerPlugin } from 'innet'

import { useChildren } from '../hooks'
import { jsxPlugins } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      test: any
    }
  }
}

describe('jsxPlugins', () => {
  test('example', () => {
    const log = jest.fn()
    const test: HandlerPlugin = () => log(useChildren())

    const handler = createHandler([
      nullish([]),
      object([
        jsxPlugins({
          test,
        }),
      ]),
    ])

    innet(<test>{null}</test>, handler)

    expect(log).toBeCalledTimes(1)
    expect(log).toBeCalledWith(null)
  })
})
