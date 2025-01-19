import { TDomainsBase } from "./domainsBaseType";

export type TDomainTypeBase<TDomains extends TDomainsBase> = keyof TDomains | undefined
