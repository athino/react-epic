import {createEffect} from '../common/state/state'

export const fetchUserEffect = createEffect({
    domainType: 'echo',
    actionType: 'fetchOrder',
    handler: ({action}) => {
        action
    }
})
