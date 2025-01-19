import { state } from './deltaState'
import { TDeltaActions } from './deltaActions'

export const reducer = state.createReducer<TDeltaActions>({

    setSearchValue({state, payload}) {
        state.value = payload.value
    }
    
})
