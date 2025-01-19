import { TDomainsBase } from "../../types/domainsBaseType"
import { TDomainTypeBase } from "../../types/domainTypeBaseType"
import { TEffect } from "../../types/effectType"

export const createDomainEffects = <D extends TDomainsBase>() => {
    const store = {
        effects: [] as any[]
    }
    return {
        /**g gre  */
        addEffect<TDomainType extends TDomainTypeBase<D>>(effect: TEffect<D, TDomainType>) {
            store.effects = [...store.effects, effect]
        },

        /** efregr */
        getEffects() {
            return store.effects
        }
    }
}
