import { state } from './deltaState'
import { TDeltaActions } from './deltaActions'

export const reducer = state.createReducer<TDeltaActions>({

    deltaActionWithPayload({state, payload}) {
        state.value = payload.value
    },

    deltaActionWithoutPayload({state}) {

    }

})
