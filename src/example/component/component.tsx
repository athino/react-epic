
import React from "react"
import { useActions } from "../state/hook"

export const Component = () => {
    
    const {actions, data} = useActions(({delta}) => ({
        userId: 'delta.userId'
    }))

    return (
        <button onClick={() => actions.delta.deltaActionWithPayload}>
            {data.userId}
        </button>
    )
}
