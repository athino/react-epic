import React from "react"
import { useActions } from "../state/hook"

export const Component = () => {
    const {actions} = useActions()

    actions.delta.deltaActionWithPayload({ value: '' })
    actions.delta.deltaActionWithoutPayload()

    return (
        <div>
            <input
                type='text'
                value={''}/>
        </div>
    )
}
