import { state } from "../state/state";

export const echoEffect = state.createEffect({
    domainType: undefined,
    actionType: 'echoActionWithPayload',
    handler: async (arg) => {
        console.log('effect: ', arg)
    }
})
