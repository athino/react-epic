import { root } from "../state/root";

export const effects = root.createEffects()

effects.addEffect({
    domainType: 'echo',
    handler: async (ctx) => {
        console.log('ECHO EFFECT CTX: ', ctx)
    }
})
