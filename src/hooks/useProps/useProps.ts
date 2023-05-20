import { useApp } from 'innet'

import { type JsxTemplateElement } from '../../jsxComponent'

export function useProps <C extends object | undefined = any> (): C {
  return useApp<JsxTemplateElement>().props as C
}
