import { createReducer } from './echoState'
import { TEchoActions } from './echoActions'

export const reducer = createReducer<TEchoActions>({

    echoActionWithPayload({state, payload}) {
        state.value = payload.value
    },

    echoActionWithoutPayload({state}) {

    }

})
