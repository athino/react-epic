import { echoActions } from './echoActions'

type TEchoState = {
    echoId?: string
}

export const initalDeltaState: TEchoState = {
    echoId: undefined
}

export const echoReducer = echoActions.createReducer(initalDeltaState, {

    echoActionWithPayload({state, payload}) {

    },

    echoActionWithoutPayload({state}) {
        
    },

    commonWithPayload({state, payload}) {

    },

    commonActionWithoutPayload({state}) {

    }

})
