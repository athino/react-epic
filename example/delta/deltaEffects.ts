import {createEffect} from '../common/state/state'

export const fetchUserEffect = createEffect({
    effectType: 'takeEvery',
    actionType: 'fetchOrder',
    handler: ({action, actions}) => {
        actions.echo.fetchUser({id: '', nok: true})
        actions.delta.removeOrder()

        action.type

        action
    }
})
