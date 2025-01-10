import { TDomainsBase } from "./domainBase";
import { TEffectBase } from "./effectBase";

export type TCreateEffect<TDomains extends TDomainsBase> = <TEffect extends TEffectBase<TDomains>>(effect: TEffect) => TEffect
