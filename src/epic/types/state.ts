import { TDomainsBase } from "./domainBase";

export type TState<TDomains extends TDomainsBase> = {
    [K in keyof TDomains]: Parameters<TDomains[K][keyof TDomains[K]]>[0]['state']
}
