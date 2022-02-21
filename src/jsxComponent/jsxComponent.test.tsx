import { nullish, object, stop } from '@innet/utils'
import innet, { createHandler } from 'innet'

import { jsxComponent } from '.'

const handler = createHandler([
  nullish([stop]),
  object([jsxComponent]),
])

describe('jsxComponent', () => {
  test('simple', () => {
    class Test {
      props: { id?: number }

      init (props) {
        return props?.id
      }
    }

    expect(innet(<Test />, handler)).toBe(undefined)
    expect(innet(<Test id={42} />, handler)).toBe(42)
  })
  test('children', () => {
    class Test {
      init (props, children) {
        return props?.show ? children : null
      }
    }

    expect(innet(<Test>{42}</Test>, handler)).toBe(null)
    expect(innet(<Test show>{42}</Test>, handler)).toEqual([42])
  })
})
