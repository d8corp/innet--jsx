import { useApp } from 'innet'

import { type JsxComponentElement } from '../../jsxComponent'

export function useProps <C extends object | undefined = any> (): C {
  return useApp<JsxComponentElement>().props as C
}
