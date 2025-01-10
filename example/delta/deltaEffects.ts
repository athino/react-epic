import {createEffect} from '../common/state/state'

export const fetchUserEffect = createEffect({
    domainType: 'delta',
    actionType: 'removeUser',
    handler: ({action}) => {

        action

    }
})
