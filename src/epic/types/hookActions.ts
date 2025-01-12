import { TDomainsBase } from "./domainBase";

export type THookActions<TDomains extends TDomainsBase> = {
    [K in keyof TDomains]: {
        [N in keyof TDomains[K]]: (payload: Parameters<TDomains[K][N]>[0]['payload']) => void
    }
}
