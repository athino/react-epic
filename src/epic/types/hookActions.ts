import { TDomainsBase } from "./domainBase";

export type THookActions<TDomains extends TDomainsBase> = {
    [K in keyof TDomains]: {
        [P in keyof TDomains[K]]: Parameters<TDomains[K][P]>[0] extends { payload: any } ? (payload: Parameters<TDomains[K][P]>[0]['payload']) => void : () => void 
    }
}
