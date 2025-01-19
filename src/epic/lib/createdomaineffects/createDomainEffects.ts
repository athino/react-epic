import { TDomainsBase } from "../../types/domainsBaseType"
import { TActionType, TEffect } from "../../types/effectType"

export const createDomainEffects = <D extends TDomainsBase>() => {
    const store = { effects: [] as TEffect<D, any, any>[] }

    return {
        /** Add effect */
        addEffect<A extends keyof D, B extends TActionType<D, A>>(effect: TEffect<D, A, B>) {
            store.effects = [...store.effects, {
                ...effect,
                // @ts-ignore
                id: Symbol()
            }]
        },

        /** Get effects */
        getEffects() {
            return store.effects
        }
    }
}
