import { echoActions } from './echoActions'

type TEchoState = {
    echoId?: string
}

const state: TEchoState = {
    echoId: undefined
}

export const echoReducer = echoActions.createReducer(state, {

    echoActionWithPayload({state, payload}) {

    },

    echoActionWithoutPayload({state}) {
        
    },

    commonWithPayload({state, payload}) {

    },

    commonActionWithoutPayload({state}) {

    }

})
