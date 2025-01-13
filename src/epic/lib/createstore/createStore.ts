import { configureStore, Middleware } from "@reduxjs/toolkit"
import { TDomainsBase } from "../../types/domainBase"

export const createStore = (arg: {
    domains: TDomainsBase
    middleware: any
}) => {
    const reducer: any = new Proxy(arg.domains, {
        get(domainsTarget, domainsP) {
            if (typeof domainsP !== 'string') return
            const reducer = domainsTarget[domainsP]
            if (!reducer) return (s: any) => s
            return reducer
        }
    })

    const middleware: Middleware = (store) => (next) => (action) => {
        const result = next(action)
        console.log(arg.middleware.getEffects())
        return result
    };
    
    const store = configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    })

    return store
}
