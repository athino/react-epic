// @ts-nocheck

import { TCreateState } from '../types/createState'

/**
 * Utility function to create state.
 * 
 * Example:
 * 
 * ```
 * import {reducer as echoReducer} from './echo/echoReducer'
 * import {reducer as deltaReducer} from './delta/deltaReducer'
 * 
 * const { createEffect, createEffects } = createState({
 * 
 *   domains: {
 *     echo: echoReducer,
 *     delta: deltaReducer
 *   }
 * 
 * })
 * ```
 */
export const createState: TCreateState = (a) => {
  const createCreateHooks = (b) => () => {
    return {
      useActions: () => {},
      useProvider: () => {}
    }
  }

  return {
    createHooks: createCreateHooks(),
    createEffects: (c) => {
      return {
        createHooks: createCreateHooks(c)
      }
    },
    createEffect: (d) => {}
  }
}
