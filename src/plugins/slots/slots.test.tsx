import innet, { createHandler, useApp } from 'innet'

import { useChildren } from '../../hooks'
import { useSlots } from './slots'
import { testHandler } from './testHandler'

describe('slots', () => {
  it('should work', () => {
    const log = jest.fn()

    const handler = createHandler([
      () => () => {
        log(useApp())
      },
    ], testHandler)

    function Content () {
      return (
        <slots from={useChildren()}>
          <slot name='header' />
          <slot />
          <slot name='footer' />
        </slots>
      )
    }

    const app = (
      <Content>
        <slot name='footer'>
          footer
        </slot>
        custom
        <slot name='header'>
          header
        </slot>
        content
      </Content>
    )

    innet(app, handler)

    expect(log).toBeCalledTimes(4)
    expect(log).toBeCalledWith('header')
    expect(log).toBeCalledWith('custom')
    expect(log).toBeCalledWith('content')
    expect(log).toBeCalledWith('footer')
  })
  it('should work with default value', () => {
    const log = jest.fn()
    const handler = createHandler([
      () => () => {
        log(useApp())
      },
    ], testHandler)

    function Content () {
      return (
        <slots from={useChildren()}>
          <slot name='header'>
            default header
          </slot>
          <slot>
            default content
          </slot>
          <slot name='footer'>
            default footer
          </slot>
        </slots>
      )
    }

    innet(
      <Content>
        custom content
      </Content>,
      handler,
    )

    expect(log).toBeCalledTimes(3)
    expect(log).toBeCalledWith('default header')
    expect(log).toBeCalledWith('custom content')
    expect(log).toBeCalledWith('default footer')
  })
  it('should work with couple same slots', () => {
    const log = jest.fn()
    const handler = createHandler([
      () => () => {
        log(useApp())
      },
    ], testHandler)

    function Content () {
      return (
        <slots from={useChildren()}>
          <slot name='header'>
            default header
          </slot>
          <slot>
            default content
          </slot>
          <slot name='footer'>
            default footer
          </slot>
        </slots>
      )
    }

    innet(
      <Content>
        <slot name='header'>
          first header
        </slot>
        <slot name='header'>
          second header
        </slot>
        custom content
      </Content>,
      handler,
    )

    expect(log).toBeCalledTimes(4)
    expect(log).toBeCalledWith('first header')
    expect(log).toBeCalledWith('second header')
    expect(log).toBeCalledWith('custom content')
    expect(log).toBeCalledWith('default footer')
  })
  it('should work with getSlots', () => {
    const log = jest.fn()
    function Content () {
      log(useSlots())
    }

    innet(
      <Content>
        <slot name='header'>
          first header
        </slot>
        <slot name='header'>
          second header
        </slot>
        custom content
      </Content>,
      testHandler,
    )

    expect(log).toBeCalledTimes(1)
    expect(log).toBeCalledWith({
      '': ['custom content'],
      header: [
        'first header',
        'second header',
      ],
    })
  })
})
