import { state } from './echoState'
import { TEchoActions } from './echoActions'

export const reducer = state.createReducer<TEchoActions>({

    echoActionWithPayload({state, payload}) {
        state.value = payload.value
    },

    echoActionWithoutPayload({state}) {

    }

})
