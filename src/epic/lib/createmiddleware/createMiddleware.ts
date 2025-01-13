import { createEffectHandler } from "../createeffecthandler/createEffectHandler"

export const createMiddleWare = () => {
    const _store = {
        effectHandler: undefined as any
    }

    return {
        addEffects(effects: any[]) {
            _store.effectHandler = createEffectHandler({ effects })
        },
        getEffectHandler() {
            return _store.effectHandler
        }
    }
}
