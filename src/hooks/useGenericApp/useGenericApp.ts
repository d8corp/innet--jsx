import { type Children } from '../../types'
import { Context } from '../../utils'
import { useContext } from '../useContext'

export const genericAppContext = new Context()

export function useGenericApp <C extends Children = Children> (): C {
  return useContext(genericAppContext)
}
