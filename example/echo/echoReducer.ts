import { createReducer } from './echoActions'

type TEchoState = {
    userId?: string
}

export const { reducer } = createReducer<TEchoState>({
    
    fetchOrder({ state, payload }) {
        state.userId = payload.id
    },

    removeOrder({ state }) {
        state.userId = undefined
    }
    
})
