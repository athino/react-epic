import { state } from './echoState'
import { TEchoActions } from './echoActions'

export const reducer = state.createReducer<TEchoActions>({

    setSearchResult({state, payload}) {
        state.searchResult = payload.searchResult
        state.searching = false
    },

    setSearching({state, payload}) {
        state.searching = payload.searching
    }

})
