import { TDomainsBase } from "../../types/domainsBaseType"

export const createMainReducer = <D extends TDomainsBase>(arg: {
    domains: D
}) => {

    const reducer = new Proxy(arg.domains, {
        get(domainsTarget, domainsP) {
            if (typeof domainsP !== 'string') return (s: any) => s
            const reducer: any = domainsTarget[domainsP]
            return (state: any, action: any) => {
                if (!reducer) return state
                if (action.domain !== domainsP) return state

                return reducer(state, action)
            }
        }
    }) as unknown as (s: any, a: any) => any 

    return {
        reducer
    }
}
