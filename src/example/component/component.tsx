import React from "react"
import { useActions } from "../state/hook"

export const Component = () => {
    const {actions, data} = useActions((state) => state.delta)

    const onClick = () => {
        actions.delta.deltaActionWithPayload({
            count: 2
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
