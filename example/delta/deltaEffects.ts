import {createEffect} from '../common/state/state'

export const fetchUserEffect = createEffect({
    domainType: 'delta',
    actionType: 'fetchOrder',
    handler: ({action, actions, state}) => {
        action

        actions.delta.fetchOrder

        state.delta.userId
    }
})

export const fetchOrderEffect = createEffect({
    domainType: 'echo',
    actionType: 'removeOrder',
    handler: ({action, actions, state}) => {
        action

        actions.delta.fetchOrder

        state.delta.userId

        action.payload
    }
})
