import { deltaActions } from './deltaActions'

type TDeltaState = {
    count: number
}

const state: TDeltaState = {
    count: 9
}

export const deltaReducer = deltaActions.createReducer(state, {

    deltaActionWithPayload({state, payload}) {
        state.count = state.count + state.count
    },

    deltaActionWithoutPayload({state}) {

    },

    commonWithPayload({state, payload}) {

    },

    commonActionWithoutPayload({state}) {

    }
    
})
