import { jsxPlugins } from '.'
import { nullish, object, stop } from '@innet/utils'
import innet, { createHandler } from 'innet'

describe('jsxPlugins', () => {
  test('example', () => {
    function test ({ children }) {
      return children
    }

    const handler = createHandler([
      nullish([stop]),
      object([
        jsxPlugins({
          test,
        }),
      ]),
    ])

    expect(innet(<test>{null}</test>, handler)).toEqual([null])
  })
})
