import { TCreateHooks } from "./createHooks";
import { TDomainsBase } from "./domainBase";

export type TCreateEffects<TDomains extends TDomainsBase> = <TEffect>(arg: { effects: Array<unknown>}) => {
    createHooks: TCreateHooks<TDomains>
}
