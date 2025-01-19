import { DefineActions } from "../../epic"

export type TDeltaActions = DefineActions<{

    setSearchValue: {
        payload: {
            value: string
        }
    }
    
}>
