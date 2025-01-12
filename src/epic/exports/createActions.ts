import { TInitializerBase } from "../types/initializerBase"
import { TReducer } from "../types/reducer"

 /**
 * Utility create actions for your app.
 */
export const createActions = <TInitializer extends TInitializerBase>(initializer: TInitializer) => {
    return {
        /**
         * Utility to create reducer based on the actions defined in createActions.
         */
        createReducer<TState>(reducer: TReducer<TState, TInitializer>) {
            return reducer
        }
    }
}
