import { TDomainsBase } from "../../types/domainsBaseType"
import { TDomainTypeBase } from "../../types/domainTypeBaseType"
import { TEffect } from "../../types/effectType"


export const createEffects = <D extends TDomainsBase>() => {
    const store = { effects: [] as TEffect<D, TDomainTypeBase<D>>[] }

    return {
        effects: {
            addEffects(arg: {
                effects: any[]
            }) {
                store.effects = arg.effects
            },
            handler(arg: {
                action: any
                state: any
            }) {
                store.effects.forEach((effect) => {
                    effect.handler({
                        store: {},
                        actions: {},
                        action: {}
                    })
                })

            }
        }
    }
}
