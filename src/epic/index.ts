import { createActions } from './exports/createActions'

/**
 * Generic utility type to construct the payload of each action.
 */
export type DefineActions<A extends Actions> = A

/**
 * Generic utility type to construct the state type.
 */
export type DefineState<S extends State> = S

/**
 * Utility function to construct the inital state.
 */
export const createState = <S extends State>(state: S) => {

   return {
      /**
       * Utility function to construct the reducer for the state.
       */
      createReducer: <A extends Actions>(reducer: {
         [K in keyof A]: (state: S, payload: A[K]['payload']) => void
      }) => {

      }
   }
}

type State = Record<string, any>
type Actions = Record<string, {
   payload: any
}>
