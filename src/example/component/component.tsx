import React from "react"
import { useActions } from "../state/consumer"

export const Component = () => {
    const {actions, data} = useActions((state) => ({
        searchResult: state.echo.searchResult,
        value: state.delta.value
    }))

    return (
        <div>
            <input
                type='text'
                value={data.value}
                onChange={({target}) => {
                    actions.delta.setSearchValue({
                        value: target.value
                    })
                }}/>
            <div>
                Search result: {data.searchResult}
            </div>
        </div>
    )
}
