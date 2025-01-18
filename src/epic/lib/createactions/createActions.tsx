import { TActions } from "../../types/actionsType"
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
