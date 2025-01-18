import { createEffect } from "../state/root";

export const deltaEffect = createEffect({
    domainType: 'delta',
    actionType: 'deltaActionWithPayload',
    handler: async () => {
        console.log('effect: ')
    }
})
