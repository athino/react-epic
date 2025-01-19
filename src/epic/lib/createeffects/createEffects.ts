import { TDomainsBase } from "../../types/domainsBaseType"
import { TEffect } from "../../types/effectType"
import { lib } from "../lib"

export const createEffects = <D extends TDomainsBase>() => {
    const store = { effects: [] as TEffect<D, any, any>[] }

    return {
        effects: {
            addEffects(arg: {
                effects: TEffect<D, any, any>[]
            }) {
                store.effects = arg.effects
            },
            async handler(arg: {
                action: any
                store: any
            }) {
                store.effects.forEach((effect) => {
                    const type = arg.action.type.slice(arg.action.domain.length + 1)
                    if (effect.action === type) {
                        if (effect.domain === undefined || effect.domain === arg.action.domain) {
                            const {actions} = lib.createActions<D>({
                                dispatch: arg.store.dispatch
                            })
                            effect.handler({
                                state: arg.store.getState(),
                                actions: actions,
                                action: {
                                    ...arg.action,
                                    type: arg.action.type.slice(arg.action.domain.length + 1)
                                },
                                call: (runner) => runner()
                            })
                        }
                    }
                })
            }
        }
    }
}
