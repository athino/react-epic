import { root } from "../state/root";

export const effects = root.createEffects()

effects.addEffect({
    domain: 'echo',
    action: 'echoActionWithPayload',
    handler(ctx) {
        
    }
})
