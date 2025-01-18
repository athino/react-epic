import { createReducer } from './deltaState'
import { TDeltaActions } from './deltaActions'

export const { reducer } = createReducer<TDeltaActions>({

    deltaActionWithPayload(ctx) {
        ctx.state.value = ctx.payload.value
        console.log('ctx in delta: ', ctx)

    },

    deltaActionWithoutPayload({state}) {

    }

})
