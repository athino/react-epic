import { deltaActions } from './deltaActions'

type TDeltaState = {
    count?: number
}

export const deltaReducer = deltaActions.createReducer<TDeltaState>({

    deltaActionWithPayload({state, payload}) {
        state.count = (state.count || 0) + payload.count
    },

    deltaActionWithoutPayload({state}) {

    },

    commonWithPayload({state, payload}) {

    },

    commonActionWithoutPayload({state}) {

    }
    
})
