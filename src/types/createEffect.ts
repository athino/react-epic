import { TDomainsBase } from "./domainBase";

export type TCreateEffect<TDomains extends TDomainsBase> = <TEffect>(effect: TEffect) => TEffect
