import { deltaActions } from './deltaActions'

type TDeltaState = {
    value: string
}

const state: TDeltaState = {
    value: ''
}

export const deltaReducer = deltaActions.createReducer(state, {

    deltaActionWithPayload({state, payload}) {
        state.value = payload.value
    },

    deltaActionWithoutPayload({state}) {

    },

    commonWithPayload({state, payload}) {

    },

    commonActionWithoutPayload({state}) {

    }
    
})
