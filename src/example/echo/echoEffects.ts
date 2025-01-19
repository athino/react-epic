import { root } from "../state/root";

export const effects = root.createEffects()

effects.addEffect({
    domain: 'delta',
    action: 'deltaActionWithPayload',
    type: 'takeEvery',
    handler(ctx) {
        console.log('ECHO EFFECT CTX: ', ctx)

        ctx.actions.echo.echoActionWithPayload({ value: '1' })
    }
})
