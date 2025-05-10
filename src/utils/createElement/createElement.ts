import { type JsxComponent } from '../../jsxComponent'
import { type Props } from '../../types'

export function createElement (type: JsxComponent, props: Props, children: any) {
  if (!children?.length && !props) return { type }

  props = props ?? {}

  if (children?.length) {
    props.children = children
  }

  return { type, props }
}
