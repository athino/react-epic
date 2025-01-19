import { root } from "../state/root";

export const effects = root.createEffects()

effects.addEffect({
    domainType: 'echo',
    actionType: 'echoActionWithPayload',
    handler: async (ctx) => {
        console.log('ECHO EFFECT CTX: ', ctx)
    }
})
