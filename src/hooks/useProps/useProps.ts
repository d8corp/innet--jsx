import { useApp } from 'innet'

import { EMPTY_PROPS, type JsxComponentElement } from '../../jsxComponent'

export function useProps <C extends object = any> (): C {
  return useApp<JsxComponentElement>().props as C || EMPTY_PROPS as C
}
