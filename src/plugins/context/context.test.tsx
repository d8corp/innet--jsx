import innet from 'innet'

import { useContext } from '../../hooks'
import { Context } from '../../utils'
import { testHandler } from './testHandler'

describe('context', () => {
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
        <context for={color} set='red'>
          <Content />
        </context>
      </>,
      testHandler,
    )

    expect(log).toBeCalledTimes(2)
    expect(log).toBeCalledWith('color: blue')
    expect(log).toBeCalledWith('color: red')
  })
})
