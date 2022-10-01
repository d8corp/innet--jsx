import innet from 'innet'

import { Context, useContext } from './context'
import { testHandler } from './testHandler'

describe('context', () => {
  it('should work', () => {
    const color = new Context('blue')

    function Content () {
      const currentColor = useContext(color)
      return `color: ${currentColor}`
    }

    const result = innet(
      <>
        <Content />
        <context for={color} set='red'>
          <Content />
        </context>
      </>,
      testHandler,
    )

    expect(result).toEqual([
      'color: blue',
      'color: red',
    ])
  })
  it('should work with async function', async () => {
    const color = new Context('blue')

    async function Content () {
      const currentColor = useContext(color)
      return `color: ${currentColor}`
    }

    const result = await innet(
      <>
        <Content />
        <context for={color} set='red'>
          <Content />
        </context>
      </>,
      testHandler,
    )

    expect(result).toEqual([
      'color: blue',
      'color: red',
    ])
  })
})
