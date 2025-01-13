import { deltaActions } from './deltaActions'

type TDeltaState = {
    count?: number
}

export const initalDeltaState: TDeltaState = {
    count: 0
}

export const deltaReducer = deltaActions.createReducer(initalDeltaState, {

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
