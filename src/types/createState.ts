import { TCreateEffect } from "./createEffect";
import { TCreateEffects } from "./createEffects";
import { TCreateHooks } from "./createHooks";
import { TDomainsBase } from "./domainBase";

export type TCreateState = <TDomains extends TDomainsBase>(arg: { domains: TDomains }) => {
    createEffect: TCreateEffect<TDomains>
    createEffects: TCreateEffects<TDomains>
    createHooks: TCreateHooks<TDomains>
}
