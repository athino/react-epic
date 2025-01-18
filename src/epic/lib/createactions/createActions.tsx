import { TDomainsBase } from "../../types/domainsBaseType"

export const createActions = <D extends TDomainsBase>() => {
    const actions = {} as TActions<D>

    return {
        actions: new Proxy(actions, {
            get(domainTarget, domainP) {
                return new Proxy(domainTarget, {
                    get(what, actionP) {
                        return (payload: any) => {
                            console.log('DISPATCHED: ', {
                                type: actionP,
                                domain: domainP,
                                payload: payload
                            })
                        }
                    }
                })
            }
        })
    }
}

type TActions<D extends TDomainsBase> = {
    [K in keyof D]: {
        [P in Parameters<D[K]>[1] as P['type']]: P extends {payload: any} ? (payload: P['payload']) => void : () => void
    }
}