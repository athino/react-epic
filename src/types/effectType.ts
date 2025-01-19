import { TActions } from "./actionsType";
import { TDomainsBase } from "./domainsBaseType";
import { TState } from "./stateType";

export type TActionType<D extends TDomainsBase, A extends keyof D> = Parameters<D[A]>[1]['type']

export type TEffect<D extends TDomainsBase, A extends keyof D, B extends TActionType<D, A>> = {
    domain: A
    action: B
    type: 'takeEvery' | 'takeLatest' | 'takeLeading'
    handler: (ctx: {
        action: (Parameters<D[A]>[1] & { type: B }) extends { payload: any } ? {
            domain: A
            type: B
            payload: (Parameters<D[A]>[1] & { type: B })['payload']
        } : {
            domain: A
            type: B
        }
        state: TState<D>
        actions: TActions<D>
        call<T extends (...args: any[]) => any>(func: T): ReturnType<T>
    }) => void
}
