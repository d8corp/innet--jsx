import innet from 'innet'

import { useContext } from '../../hooks'
import { Context } from '../../utils'
import { ContextProvider } from './ContextProvider'
import { testHandler } from './testHandler'

describe('ContextProvider', () => {
  it('should work', () => {
    const log = jest.fn()
    const color = new Context('blue')

    function Content () {
      const currentColor = useContext(color)
      log(`color: ${currentColor}`)
    }

    innet(
      <>
        <Content />
        <ContextProvider for={color} set='red'>
          <Content />
        </ContextProvider>
      </>,
      testHandler,
    )

    expect(log).toBeCalledTimes(2)
    expect(log).toBeCalledWith('color: blue')
    expect(log).toBeCalledWith('color: red')
  })
  it('should work with multiple set', () => {
    const log = jest.fn()
    const color = new Context('blue')
    const size = new Context('m')

    function Content () {
      log(`color: ${useContext(color)}, size: ${useContext(size)}`)
    }

    innet(
      <>
        <Content />
        <ContextProvider for={[color, size] as const} set={['red', 'l']}>
          <Content />
        </ContextProvider>
      </>,
      testHandler,
    )

    expect(log).toBeCalledTimes(2)
    expect(log).toBeCalledWith('color: blue, size: m')
    expect(log).toBeCalledWith('color: red, size: l')
  })
})
