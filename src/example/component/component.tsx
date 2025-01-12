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
                Count: {data.count}
            </pre>
        </div>
    )
}
