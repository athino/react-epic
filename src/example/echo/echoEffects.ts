import { root } from "../state/root";

export const effects = root.createEffects()

effects.addEffect({
    domain: 'delta',
    action: 'deltaActionWithPayload',
    handler: async (ctx) => {
        console.log('ECHO EFFECT CTX: ', ctx)
    }
})
