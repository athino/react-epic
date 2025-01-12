
import React from "react"
import { useActions } from "../state/hook"

export const Component = () => {
    const {actions, data} = useActions((state) => state)

    return (
        <button onClick={() => actions.delta.deltaActionWithPayload({
            count: 1
        })}>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </button>
    )
}
