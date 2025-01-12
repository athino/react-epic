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

                actionReducer({
                    state: state,
                    payload: action.payload
                })

                return state
            }
        }
    })

    return configureStore({ reducer })
}
