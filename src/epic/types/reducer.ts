import { TInitializerBase } from "./initializerBase";
import { TReducerCtx } from "./reducerCtx";

export type TReducer<TState, TInitializer extends TInitializerBase> = {
    [K in keyof ReturnType<TInitializer>]: (ctx: TReducerCtx<TState, ReturnType<TInitializer>[K]>) => void
}
