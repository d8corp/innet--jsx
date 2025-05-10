import { array, arraySync, nullish, object } from '@innet/utils'
import innet, { createHandler } from 'innet'

import { jsxComponent } from '.'

const handler = createHandler([
  nullish([]),
  array([arraySync]),
  object([
    jsxComponent,
  ]),
])

describe('jsxComponent', () => {
  test('simple', () => {
    const log = jest.fn()

    function Test (props: any) {
      log(props?.id)
    }

    innet(<Test />, handler)

    expect(log).toBeCalledTimes(1)
    expect(log).toBeCalledWith(undefined)

    innet(<Test id={42} />, handler)

    expect(log).toBeCalledTimes(2)
    expect(log).toBeCalledWith(42)
  })
  test('children', () => {
    const log = jest.fn()

    function Test ({ show, children }: any) {
      log(show ? children : null)
    }

    innet(<Test>{42}</Test>, handler)

    expect(log).toBeCalledTimes(1)
    expect(log).toBeCalledWith(null)

    innet(<Test show>{42}</Test>, handler)

    expect(log).toBeCalledTimes(2)
    expect(log).toBeCalledWith(42)

    innet(<Test show>{4}{2}</Test>, handler)

    expect(log).toBeCalledTimes(3)
    expect(log).toBeCalledWith([4, 2])
  })
})
