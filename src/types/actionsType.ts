import { TDomainsBase } from "./domainsBaseType";

export type TActions<D extends TDomainsBase> = {
    [K in keyof D]: {
        [P in Parameters<D[K]>[1] as P['type']]: P extends {payload: any} ? (payload: P['payload']) => void : () => void
    }
}
