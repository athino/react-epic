import { deltaActions } from './deltaActions'

type TDeltaState = {
    deltaId?: string
}

export const deltaReducer = deltaActions.createReducer<TDeltaState>({

    deltaActionWithPayload({state, payload}) {
        state.deltaId = payload.id
    },

    deltaActionWithoutPayload({state}) {

    },

    commonWithPayload({state, payload}) {

    },

    commonActionWithoutPayload({state}) {

    }
    
})
