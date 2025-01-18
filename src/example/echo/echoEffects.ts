import { createEffect } from "../state/root";

export const echoEffect = createEffect({
    domainType: undefined,
    actionType: 'echoActionWithPayload',
    handler: async () => {
        console.log('effect: ')
    }
})
