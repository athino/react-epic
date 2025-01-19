import { root } from "../state/root";

export const effects = root.createEffects()

effects.addEffect({
    domainType: 'delta',
    actionType: 'deltaActionWithPayload',
    handler: async (ctx) => {
        console.log('DELTA EFFECT CTX: ', ctx)
    }
})
