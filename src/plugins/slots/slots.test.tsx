import innet from 'innet'

import { useChildren } from '../../jsxComponent'
import { useSlots } from './slots'
import { testHandler } from './testHandler'

describe('slots', () => {
  it('should work', () => {
    function Content () {
      return (
        <slots from={useChildren()}>
          <slot name='header' />
          <slot />
          <slot name='footer' />
        </slots>
      )
    }

    const result = innet(
      <Content>
        <slot name='footer'>
          footer
        </slot>
        custom
        <slot name='header'>
          header
        </slot>
        content
      </Content>,
      testHandler,
    )

    expect(result).toEqual([
      'header',
      [
        'custom',
        'content',
      ],
      'footer',
    ])
  })
  it('should work with default value', () => {
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

    const result = innet(
      <Content>
        custom content
      </Content>,
      testHandler,
    )

    expect(result).toEqual([
      'default header',
      'custom content',
      'default footer',
    ])
  })
  it('should work with couple same slots', () => {
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

    const result = innet(
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

    expect(result).toEqual([
      ['first header', 'second header'],
      'custom content',
      'default footer',
    ])
  })
  it('should work with getSlots', () => {
    function Content () {
      const { '': content, header, footer } = useSlots()

      return (
        <>
          {header && (
            <div class='header'>
              {header}
            </div>
          )}
          <div class='content'>
            {content}
          </div>
          {footer && (
            <div class='footer'>
              {footer}
            </div>
          )}
        </>
      )
    }

    const result = innet(
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

    expect(result).toEqual([
      {
        children: [['first header', 'second header']],
        props: { class: 'header' },
        type: 'div',
      },
      {
        children: [['custom content']],
        props: { class: 'content' },
        type: 'div',
      },
    ])
  })
})
