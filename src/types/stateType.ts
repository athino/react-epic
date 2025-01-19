import { TDomainsBase } from "./domainsBaseType";

export type TState<D extends TDomainsBase> = {
    [K in keyof D]: Exclude<Parameters<D[K]>[0], undefined>
}
