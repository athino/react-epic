import { createReducer } from './deltaState'
import { TDeltaActions } from './deltaActions'

export const { reducer } = createReducer<TDeltaActions>({

    deltaActionWithPayload({state, payload}) {
        state.value = payload.value
    },

    deltaActionWithoutPayload({state}) {

    }

})
