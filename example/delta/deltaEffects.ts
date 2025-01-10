import {createEffect} from '../common/state/state'

export const fetchUserEffect = createEffect({
    domainType: 'delta',
    actionType: 'fetchOrder',
    handler: ({action}) => {
        action
    }
})
