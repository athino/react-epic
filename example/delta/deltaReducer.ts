import { createReducer } from './deltaActions'

type TDeltaState = {
    userId?: string
}

export const { reducer } = createReducer<TDeltaState>({

    fetchUser({ state, payload }) {
        state.userId = payload.id
    },

    removeUser({ state }) {
        state.userId = undefined
    },

    fetchOrder({ state }) {
        state.userId = undefined
    }

})
