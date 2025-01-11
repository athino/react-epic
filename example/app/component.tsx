
import React from "react"
import { useActions } from "../state/state"

export const Component = () => {
    
    const {actions, data} = useActions(({delta}) => ({
        userId: 'delta.userId'
    }))

    return (
        <button onClick={() => actions.delta.deltaActionWithPayload({id: '3', nok: true})}>
            {data.userId}
        </button>
    )
}
