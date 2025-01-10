
import React from "react"
import { useActions } from "../common/state/state"

export const Component = () => {
    
    const {actions, data} = useActions(({delta}) => ({
        userId: delta.userId
    }))

    return (
        <button onClick={() => actions.delta.fetchUser({id: '3', nok: true})}>
            {data.userId}
        </button>
    )
}
