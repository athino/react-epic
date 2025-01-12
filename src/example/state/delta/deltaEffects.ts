import { state } from "../state";

export const deltaEffect = state.createEffect({
    domainType: 'delta',
    actionType: 'deltaActionWithPayload'
})
