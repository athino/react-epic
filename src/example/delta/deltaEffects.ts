import { root } from "../state/root";

export const effects = root.createEffects()

effects.addEffect({
    domain: 'echo',
    action: 'echoActionWithPayload',
    type: 'takeEvery',
    handler(ctx) {
        
    }
})
