import {createEffect} from '../common/state/state'

export const fetchUserEffect = createEffect({
    effectType: 'takeEvery',
    actionType: 'fetchOrder',
    domain: undefined,
    handler: ({action, actions, state}) => {
        actions.delta.fetchUser({id: '', nok: true})
        actions.echo.removeOrder()

        action
    }
})
