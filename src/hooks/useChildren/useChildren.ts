import { useApp } from 'innet'

import { type JsxTemplateElement } from '../../jsxComponent'
import { type Children } from '../../types'

export function useChildren <C extends Children = Children> (): C {
  return useApp<JsxTemplateElement>().children as C
}
