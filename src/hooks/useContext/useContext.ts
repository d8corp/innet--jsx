import { useHandler } from 'innet'

import { type Context } from '../../utils'

export function useContext <D = any, Def = D> (context: Context<D, Def>): D | Def {
  return context.get(useHandler())
}
