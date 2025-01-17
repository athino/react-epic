import { createActions } from './exports/createActions'

/**
 * Generic utility type to construct the payload of each action.
 */
export type DefineActions<A extends ActionsBase> = A

/**
 * Generic utility type to construct the state type.
 */
export type DefineState<S extends StateBase> = S

/**
 * Utility function to construct the inital state.
 */
export const createState = <S extends StateBase>(state: S) => {

   return {
      /**
       * Utility function to construct the reducer for the state.
       */
      createReducer: <A extends ActionsBase>(reducer: {
         [K in keyof A]: (ctx: keyof A[K]['payload'] extends never ? { state: S } : { state: S, payload: A[K]['payload'] }) => void
      }) => {
         type Action = {
            [K in keyof A]: {
               type: K
               payload: A[K]['payload']
            }
         }[keyof A]

         type State = {
            [K in keyof S]: S[K]
         }

         return (state: State, action: Action) => {
            const newState = {...state}
            reducer[action.type](createCtx(action, newState))
            return newState
         }
      }
   }
}

type StateBase = Record<string, any>
type ActionsBase = Record<string, {
   payload: undefined | Record<string, any>
}>

const createCtx = <T, P, S, A extends { type: T, payload: P }>(action: A, state: S) => ({
   state: state,
   payload: action.payload
})
