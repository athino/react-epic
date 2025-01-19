import { DefineActions } from "../../epic"

export type TEchoActions = DefineActions<{

    setSearchResult: {
        payload: {
            searchResult: number
        }
    }

    setSearching: {
        payload: {
            searching: boolean
        }
    }

}>
