import { DefineActions } from "../../epic"

export type TEchoActions = DefineActions<{

    echoActionWithPayload: {
        payload: {
            value: string
        }
    }

    echoActionWithoutPayload: {
        payload: {
            
        }
    }

}>
