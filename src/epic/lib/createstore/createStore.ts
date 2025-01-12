import { configureStore } from "@reduxjs/toolkit"
import { TDomainsBase } from "../../types/domainBase"

export const createStore = (arg: {
    domains: TDomainsBase
}) => {

    const reducer: any = new Proxy(arg.domains, {
        get(domainsTarget, domainsP) {
            if (typeof domainsP !== 'string') return
            const reducer = domainsTarget[domainsP]
            if (!reducer) return

            return (state: any = {}, action: any) => {
                const actionReducer =  reducer[action.type]
                if (!actionReducer) return state

                const newState = {...state}

                actionReducer({
                    state: newState,
                    payload: action.payload
                })

                return newState
            }
        }
    })

    return configureStore({ reducer })
}
