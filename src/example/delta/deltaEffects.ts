import { state } from "../state/state";

export const deltaEffect = state.createEffect({
    domainType: 'delta',
    actionType: 'deltaActionWithPayload',
    handler: async (arg) => {
        console.log('effect: ', arg)
    }
})
