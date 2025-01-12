
import React from "react"
import { useActions } from "../state/hook"

export const Component = () => {
    const {actions, data} = useActions((state) => state)

    const onClick = () => {
        actions.delta.deltaActionWithPayload({
            count: 1
        })
    }

    return (
        <button onClick={() => onClick()}>
            <pre>
                {JSON.stringify(data, null, 4)}
            </pre>
        </button>
    )
}
