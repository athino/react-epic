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
                    
                    // create actions instance here...
                    const actions = {}
                    effect.handler({
                        state: arg.state,
                        actions: actions,
                        action: {
                            ...arg.action,
                            type: arg.action.type.slice(arg.action.domain.length + 1)
                        }
                    })
                })

            }
        }
    }
}
