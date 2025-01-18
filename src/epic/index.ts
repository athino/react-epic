import {lib} from './lib/lib'
import {TActionsBase} from './types/actionsBaseType'
import {TStateBase} from './types/stateBaseType'

/**
 * Generic utility type to construct the payload of each action.
 */
export type DefineActions<A extends TActionsBase> = A

/**
 * Generic utility type to construct the state type.
 */
export type DefineState<S extends TStateBase> = S

/**
 * Utility function to construct the inital state.
 */
export const createState = <S extends TStateBase>(state: S) => {
   const initialState = state

   return {
      /**
       * Utility function to construct the reducer for the state.
       */
      createReducer: <A extends TActionsBase>(reducer: TReducer<A, S>) => {
         return (state: S = initialState, action: TActions<A>) => {
            return lib.handleDomainReducer({
               handler: reducer[action.type],
               action: action,
               state: state
            })
         }
      }
   }
}

type TReducer<A extends TActionsBase, S extends TStateBase> = {
   [K in keyof A]: (ctx: keyof A[K]['payload'] extends never ? { state: S } : { state: S, payload: A[K]['payload'] }) => void
}

type TActions<A extends TActionsBase> = {
   [K in keyof A]: keyof A[K]['payload'] extends never ? { type: K } : {
      type: K
      payload: A[K]['payload']
   }
}[keyof A]
