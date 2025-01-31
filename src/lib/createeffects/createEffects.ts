import { TDomainsBase } from "../../types/domainsBaseType"
import { TEffect } from "../../types/effectType"
import { lib } from "../lib"

export const createEffects = <D extends TDomainsBase>() => {
    const store = {
        effects: [] as any[],
        cancellers: {} as any,
        promises: {} as any
    }

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
                        if (effect.domain === arg.action.domain) {
                            const {actions, cancel, call} = lib.createActions<D>({
                                dispatch: arg.store.dispatch
                            })
                            switch (effect.type) {
                                case 'takeEvery': {
                                    effect.handler({
                                        getState: arg.store.getState,
                                        actions: actions,
                                        action: {
                                            ...arg.action,
                                            type: arg.action.type.slice(arg.action.domain.length + 1)
                                        },
                                        call: call
                                    })

                                    break
                                }
                                case 'takeLatest': {
                                    store.cancellers[effect.id]?.()
                                    store.cancellers[effect.id] = cancel
                                    effect.handler({
                                        getState: arg.store.getState,
                                        actions: actions,
                                        action: {
                                            ...arg.action,
                                            type: arg.action.type.slice(arg.action.domain.length + 1)
                                        },
                                        call: call
                                    })

                                    break
                                }
                                case 'takeLeading': {
                                    if (!store.promises[effect.id]) {
                                        store.promises[effect.id] = true
                                        effect.handler({
                                            getState: arg.store.getState,
                                            actions: actions,
                                            action: {
                                                ...arg.action,
                                                type: arg.action.type.slice(arg.action.domain.length + 1)
                                            },
                                            call: call
                                        })
                                        .then(() => store.promises[effect.id] = false)
                                        .catch(() => store.promises[effect.id] = false)
                                    }
                                    
                                    break
                                }
                            }     
                        }
                    }
                })
            }
        }
    }
}
