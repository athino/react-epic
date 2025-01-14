import { state } from "../state/state";

export const echoEffect = state.createEffect({
    domainType: undefined,
    actionType: 'deltaActionWithPayload',
    handler: (arg) => {
        console.log('effect: ', arg)
    }
})
