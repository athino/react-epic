import React from "react"
import { useActions } from "../state/hook"

export const Component = () => {
    const {actions, data} = useActions((state) => state.delta)

    const onClick = () => {
        actions.delta.deltaActionWithPayload({
            count: 1
        })
    }

    return (
        <div>
            <button onClick={() => onClick()}>
                Click
            </button>
            <pre>
                {JSON.stringify(data, null, 4)}
            </pre>
        </div>
    )
}
