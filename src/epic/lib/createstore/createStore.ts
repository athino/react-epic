import { configureStore } from "@reduxjs/toolkit"
import { TDomainsBase } from "../../types/domainBase"

export const createStore = (arg: {
    domains: TDomainsBase
}) => {
    const reducer: any = new Proxy(arg.domains, {
        get(domainsTarget, domainsP) {
            if (typeof domainsP !== 'string') return
            const reducer = domainsTarget[domainsP]
            if (!reducer) return (s: any) => s
            return reducer
        }
    })
    return configureStore({ reducer })
}
