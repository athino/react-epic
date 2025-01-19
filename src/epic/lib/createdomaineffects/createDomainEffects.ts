import { TDomainsBase } from "../../types/domainsBaseType"
import { TDomainTypeBase } from "../../types/domainTypeBaseType"
import { TEffect } from "../../types/effectType"

export const createDomainEffects = <D extends TDomainsBase>() => {
    const store = { effects: [] as TEffect<D, TDomainTypeBase<D>, any>[] }
    
    return {
        /** Add effect */
        addEffect<TDomainType extends TDomainTypeBase<D>>(effect: TEffect<D, TDomainType, any>) {
            store.effects = [...store.effects, effect]
        },

        /** Get effects */
        getEffects() {
            return store.effects
        }
    }
}
