import { state } from '../state'

export const echoEffect = state.createEffect({
    domainType: undefined,
    actionType: 'commonActionWithoutPayload'
})
