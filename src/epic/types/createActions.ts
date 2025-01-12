import { TCreateReducer } from "./createReducer"
import { TInitializerBase } from "./initializerBase"

export type TCreateActions = <TInitializer extends TInitializerBase>(initializer: TInitializer) => {
    createReducer: TCreateReducer<TInitializer>
}
