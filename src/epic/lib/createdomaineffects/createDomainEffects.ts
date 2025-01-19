import { TDomainsBase } from "../../types/domainsBaseType"
import { TEffect } from "../../types/effectType"

export const createDomainEffects = <D extends TDomainsBase>() => {
    const store = { effects: [] as TEffect<D, any, any>[] }
    
    return {
        /** Add effect */
        addEffect<TDomainType extends any>(effect: TEffect<D, any, any>) {
            store.effects = [...store.effects, effect]
        },

        /** Get effects */
        getEffects() {
            return store.effects
        }
    }
}
