import { TDomainsBase } from "./domainBase";

export type TDomainTypeBase<TDomains extends TDomainsBase> = keyof TDomains | undefined
