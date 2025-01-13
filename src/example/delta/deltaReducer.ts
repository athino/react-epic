import { deltaActions } from './deltaActions'

type TDeltaState = {
    count: number
}

export const initalDeltaState: TDeltaState = {
    count: 9
}

export const deltaReducer = deltaActions.createReducer(initalDeltaState, {

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
