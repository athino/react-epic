import { TDomainsBase } from "../../types/domainsBaseType"

export const createActions = <D extends TDomainsBase>(arg: {
    domains: D
}) => {
    const actions = {} as {
        [K in keyof D]: {
            [P in Parameters<D[K]>[1] as P['type']]: P extends {payload: any} ? (payload: P['payload']) => void : () => void
        }
    }

    return {
        actions: new Proxy(actions, {
            get(domainTarget, domainP) {
                return new Proxy(domainTarget, {
                    get(what, actionP) {
                        console.log(actionP)
                    }
                })
            }
        })
    }
}
