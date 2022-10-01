import innet, { Handler } from 'innet'

import { JSXPluginElement } from '../jsxPlugins'

export type Fallback = (e: Error) => void

export interface CatchProps {
  fallback?: Fallback
}

export function Catch ({ children, type, props }: JSXPluginElement<CatchProps>, handler: Handler) {
  let result

  try {
    result = innet(children, handler)

    if (result instanceof Promise && props?.fallback) {
      result = result.catch(props.fallback)
    }
  } catch (e) {
    result = props?.fallback(e)
  }

  return result
}
