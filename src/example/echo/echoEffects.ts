import { createEffect } from "../state/root";

export const echoEffect = createEffect({
    domainType: undefined,
    actionType: 'echoActionWithPayload',
    handler: async (arg) => {
        console.log('effect: ', arg)
    }
})
