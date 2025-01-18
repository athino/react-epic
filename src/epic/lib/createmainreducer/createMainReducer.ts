import { combineReducers } from "@reduxjs/toolkit"
import { TDomainsBase } from "../../types/domainsBaseType"

export const createMainReducer = <D extends TDomainsBase>(arg: {
    domains: D
}) => {

    const combinedReducer = combineReducers(arg.domains)

    return {
        reducer: (state: any, action: any) => {

            if (action.domain) {
                return {
                    ...state,
                    [action.domain]: arg.domains[action.domain]!(state[action.domain], {
                        ...action,
                        type: action.type.slice(action.domain.length + 1)
                    })
                }
            }

            return combinedReducer(state, action)
        }
    }
}
