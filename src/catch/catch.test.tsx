import { array, arrayAsync, nullish, object, stop } from '@innet/utils'
import innet, { createHandler } from 'innet'

import { jsxComponent } from '../jsxComponent'
import { jsxPlugins } from '../jsxPlugins'
import { Catch, CatchProps } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      catch: CatchProps
    }
  }
}

const handler = createHandler([
  nullish([stop]),
  array([arrayAsync]),
  object([
    jsxPlugins({
      catch: Catch,
    }),
    jsxComponent,
  ]),
])

function Test () {
  throw Error('test error')
}

async function TestAsync () {
  await new Promise(resolve => setTimeout(resolve, 50))
  throw Error('test error')
}

describe('catch', () => {
  it('should throw by default', () => {
    expect(() => innet(<Test />, handler)).toThrow(Error('test error'))
  })
  it('should handle throw', () => {
    const fn = jest.fn()

    innet(<catch fallback={fn}><Test /></catch>, handler)

    expect(fn).toBeCalledWith(Error('test error'))
  })
  it('should handle async throw', async () => {
    const fn = jest.fn()

    await innet(<catch fallback={fn}><TestAsync /></catch>, handler)

    expect(fn).toBeCalledWith(Error('test error'))
  })
})
