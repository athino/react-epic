import { TActionsBase } from "./actionsBaseType";
import { TStateBase } from "./stateBaseType";

export type TReducer<A extends TActionsBase, S extends TStateBase> = {
   [K in keyof A]: (ctx: keyof A[K]['payload'] extends never ? { state: S } : { state: S, payload: A[K]['payload'] }) => void
}
