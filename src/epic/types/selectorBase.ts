import { TDomainsBase } from "./domainBase";
import { TState } from "./state";

export type TSelectorBase<TDomains extends TDomainsBase, TData> = (state: TState<TDomains>) => TData
