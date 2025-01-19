import React from "react"
import { useActions } from "../state/consumer"

export const Component = () => {
    const {actions, data} = useActions(({echo, delta}) => ({
        searchResult: echo.searchResult,
        value: delta.value,
        searching: echo.searching
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
                Search result: {data.searching ? 'Searching...' : data.searchResult}
            </div>
        </div>
    )
}
