import { combineReducers } from "@reduxjs/toolkit"
import { TDomainsBase } from "../../types/domainsBaseType"

export const createMainReducer = <D extends TDomainsBase>(arg: {
    domains: D
}) => {

    const reducer = combineReducers(arg.domains)

    return {
        reducer
    }
}
