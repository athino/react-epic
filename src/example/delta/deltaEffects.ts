import { createEffect } from "../state/root";

export const deltaEffect = createEffect({
    domainType: 'delta',
    actionType: 'deltaActionWithPayload',
    handler: async (arg) => {
        console.log('effect: ', arg)
    }
})
