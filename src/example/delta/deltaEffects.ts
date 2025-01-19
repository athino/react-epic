import { root } from "../state/root";

export const effects = root.createEffects()

effects.addEffect({
    domain: 'echo',
    action: 'echoActionWithPayload',
    handler(ctx) {
        ctx.action.type
        ctx.action.domain
        ctx.action.payload

        console.log('CTX IN DELTA', ctx)

        ctx.actions
        const mok = ctx.call(() =>1)
    }
})
