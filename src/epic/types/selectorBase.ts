import { TDomainsBase } from "./domainBase";

export type TSelectorBase<TDomains extends TDomainsBase, TData> = (state: TDomains) => TData
