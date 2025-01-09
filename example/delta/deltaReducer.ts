import { createReducer } from './deltaActions'

type TDeltaState = {
    userId?: string
}

export const { createSubdomain } = createReducer<TDeltaState>({
    
    fetchUser({ state, payload }) {
        state.userId = payload.id
    },

    removeUser({ state }) {
        state.userId = undefined
    }
    
})
