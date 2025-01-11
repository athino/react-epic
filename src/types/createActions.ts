import { TCreateReducer } from "./createReducer"
import { TInitializerBase } from "./initializerBase"

export type TCreateActions = <TInitializer extends TInitializerBase>(initializer: TInitializer) => {
    /**
     * Utility function to create a reducer.
     * 
     * Example:
     * 
     * ```
     * const { reducer } = createReducer({
     * 
     *   fetchUser({state, payload}) {
     *     state.user = payload.user
     *   },
     * 
     *   removeUser({state}) {
     *     state.user = undefined
     *   }
     * 
     * })
     * ```
     */
    createReducer: TCreateReducer<TInitializer>
}
