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
            [K in keyof A]: keyof A[K]['payload'] extends never ? { type: K } : {
               type: K
               payload: A[K]['payload']
            }
         }[keyof A]

         type State = {
            [K in keyof S]: S[K]
         }

         return (state: State, action: Action) => {
            return handleReducer({
               handler: reducer[action.type],
               action: action,
               state: state
            })
         }
      }
   }
}

type StateBase = Record<string, any>
type ActionsBase = Record<string, {
   payload: Record<string, any>
}>

const handleReducer = <S, F extends Function, A extends object>(arg: {
   handler: F
   action: A
   state: S
}) => {
   const state = {...arg.state}
   if ('payload' in arg.action
      && typeof arg.action.payload === 'object'
      && !!Object.keys(arg.action.payload || {}).length) {
      arg.handler({
         state: state,
         payload: arg.action.payload
      })
   } else {
      arg.handler({
         state: state
      })
   }

   return state
}
