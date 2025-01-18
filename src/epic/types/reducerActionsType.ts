import { TActionsBase } from "./actionsBaseType";

export type TReducerActions<A extends TActionsBase> = {
   [K in keyof A]: keyof A[K]['payload'] extends never ? { type: K } : {
      type: K
      payload: A[K]['payload']
   }
}[keyof A]
