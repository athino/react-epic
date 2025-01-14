import { TDomainsBase } from '../../types/domainBase'
import { THookActions } from '../../types/hookActions'

export const createHookActions = <TDomains extends TDomainsBase>(arg: {
    domains: TDomains,
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
                            payload: payload,
                            domain: domainsP
                        })
                    }
                }
            })
        }
    }) as unknown as THookActions<TDomains>

    return hookActions
}
