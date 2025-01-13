import { lib } from "../lib/lib"
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
        createReducer<TState>(initialState: TState, reducer: TReducer<TState, TInitializer>) {

            const realReducer = lib.createReducer({
                initialState: initialState,
                reducerObject: reducer
            })

            return realReducer as unknown as TReducer<TState, TInitializer>
        }
    }
}
