import { type Props } from '../../types'

export function renderJSX (type: string | undefined, props: Props, key?: string) {
  if (type === undefined) {
    return props.children
  }

  if (key !== undefined) {
    props.key = key
  }

  return { type, props }
}
