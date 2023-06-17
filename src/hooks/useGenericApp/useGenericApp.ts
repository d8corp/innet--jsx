import { Context } from '../../utils'
import { useContext } from '../useContext'

export const genericAppContext = new Context()

export function useGenericApp <C> (): C {
  return useContext(genericAppContext)
}
