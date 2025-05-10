import { useApp } from 'innet'

import { type JsxComponentElement } from '../../jsxComponent'

export function useChildren <C = any> (): C {
  return useApp<JsxComponentElement>().props?.children as C
}
