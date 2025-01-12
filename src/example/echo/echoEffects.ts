import { state } from "../state/state";

export const echoEffect = state.createEffect({
    domainType: 'echo',
    actionType: 'echoActionWithPayload'
})
