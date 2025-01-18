import { lib } from "../lib/lib"
import { TActionsBase } from "../types/actionsBaseType"
import { TReducerActions } from "../types/reducerActionsType"
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
            return {
                reducer: (state: State = initialState, action: TReducerActions<Actions>) => {
                    return lib.handleDomainReducer({
                        handler: reducer[action.type],
                        action: action,
                        state: state
                    })
                }
            }
       }
    }
}
