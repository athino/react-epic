
import React from "react"
import { useActions } from "../state/hook"
import { useSelector } from "react-redux"

export const Component = () => {
    
    const {actions, data} = useActions(({delta}) => ({
        userId: 'delta'
    }))

    const state = useSelector((state) => state)

    return (
        <button onClick={() => actions.delta.deltaActionWithPayload({
            count: 1
        })}>
            <pre>{JSON.stringify(state, null, 4)}</pre>
        </button>
    )
}
