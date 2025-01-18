import React from "react"
import { useActions } from "../state/hook"

export const Component = () => {
    const {actions, data} = useActions((state: any) => state)

    const onChange = (value: string) => {
        actions.delta.deltaActionWithPayload({ value })
    }

    return (
        <div>
            <input
                type='text'
                onChange={({target}) => onChange(target.value)}
                value={data.delta.value}/>
        </div>
    )
}
