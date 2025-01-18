import {lib} from './lib/lib'
import {TActionsBase} from './types/actionsBaseType'
import {TActions} from './types/actionsType'
import {TReducer} from './types/reducerType'
import {TStateBase} from './types/stateBaseType'

/**
 * Generic utility type to construct the payload of each action.
 */
export type DefineActions<Actions extends TActionsBase> = Actions

/**
 * Generic utility type to construct the state type.
 */
export type DefineState<State extends TStateBase> = State

/**
 * Utility function to construct the inital state.
 */
export const createState = <State extends TStateBase>(state: State) => {
   const initialState = state

   return {
      /**
       * Utility function to construct the reducer for the state.
       */
      createReducer: <Actions extends TActionsBase>(reducer: TReducer<Actions, State>) => {
         return (state: State = initialState, action: TActions<Actions>) => {
            return lib.handleDomainReducer({
               handler: reducer[action.type],
               action: action,
               state: state
            })
         }
      }
   }
}
