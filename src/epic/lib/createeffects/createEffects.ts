import { TDomainsBase } from "../../types/domainsBaseType"
import { TDomainTypeBase } from "../../types/domainTypeBaseType"
import { TEffect } from "../../types/effectType"
import { lib } from "../lib"

export const createEffects = <D extends TDomainsBase>() => {
    const store = { effects: [] as TEffect<D, TDomainTypeBase<D>>[] }

    return {
        effects: {
            addEffects(arg: {
                effects: TEffect<D, TDomainTypeBase<D>>[]
            }) {
                store.effects = arg.effects
            },
            async handler(arg: {
                action: any
                store: any
            }) {
                store.effects.forEach((effect) => {
                    const type = arg.action.type.slice(arg.action.domain.length + 1)
                    if (effect.actionType === type) {
                        if (effect.domainType === undefined || effect.domainType === arg.action.domain) {
                            const {actions} = lib.createActions({
                                dispatch: arg.store.dispatch
                            })
                            effect.handler({
                                state: arg.store.getState(),
                                actions: actions,
                                action: {
                                    ...arg.action,
                                    type: arg.action.type.slice(arg.action.domain.length + 1)
                                }
                            })
                        }
                    }
                })
            }
        }
    }
}
