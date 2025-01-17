import { DefineActions } from "../../epic"

export type TDeltaActions = DefineActions<{

    deltaActionWithPayload: {
        payload: {
            value: string
        }
    }

    deltaActionWithoutPayload: {
        payload: undefined
    }
    
}>
