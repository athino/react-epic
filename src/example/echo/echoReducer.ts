import { createReducer } from './echoState'
import { TEchoActions } from './echoActions'

export const echoReducer = createReducer<TEchoActions>({

    echoActionWithPayload({state, payload}) {
        state.value = payload.value
    },

    echoActionWithoutPayload({state}) {

    }

})

echoReducer({ value: '' }, {
    type: 'echoActionWithoutPayload'
})
