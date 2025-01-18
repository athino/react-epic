import { state } from "../state/root";

export const deltaEffect = state.createEffect({
    domainType: 'delta',
    actionType: 'deltaActionWithPayload',
    handler: async (arg) => {
        console.log('effect: ', arg)
    }
})
