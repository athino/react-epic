import React from "react"
import { useActions } from "../state/hook"

export const Component = () => {
    const {actions} = useActions()

    return (
        <div>
            <input
                type='text'
                value={''}/>
                {}
        </div>
    )
}
