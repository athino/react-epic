import { TInitializerBase } from "./initializerBase";
import { TReducer } from "./reducer";

export type TCreateReducer<TInitializer extends TInitializerBase> = <TState>(reducer: TReducer<TState, TInitializer>) => ({ reducer: TReducer<TState, TInitializer> })
