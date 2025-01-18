import { lib } from "../lib/lib"
import { TActionsBase } from "../types/actionsBaseType"
import { TActions } from "../types/actionsType"
import { TReducer } from "../types/reducerType"
import { TStateBase } from "../types/stateBaseType"

/**
 * Utility function to construct the inital state.
 */
export const createState = <State extends TStateBase>(initialState: State) => {

    return {
       /**
        * Utility function to construct the reducer for the state.
        */
        createReducer: <Actions extends TActionsBase>(reducer: TReducer<Actions, State>) => {
            const _reducer = (state: State = initialState, action: TActions<Actions>) => {
                return lib.handleDomainReducer({
                    handler: reducer[action.type],
                    action: action,
                    state: state
                })
            }
            _reducer.actions = Object.keys(reducer)
            return {
                reducer: _reducer as (state: State, action: TActions<Actions>) => State
            }
       }
    }
}
