import { TDomainsBase } from '../../types/domainBase'

export const createHookActions = (arg: {
    domains: TDomainsBase,
    dispatch: any
}) => {

    const hookActions = new Proxy(arg.domains, {
        get(domainsTarget, domainsP) {
            if (typeof domainsP !== 'string') return
            const reducer = domainsTarget[domainsP]
            if (!reducer) return

            return new Proxy(reducer, {
                get(reducerTarget, reducerP) {
                    return (payload?: any) => {
                        arg.dispatch({
                            type: reducerP,
                            payload: payload
                        })
                    }
                }
            })
        }
    })

    return hookActions as unknown as Record<string, any>
}

