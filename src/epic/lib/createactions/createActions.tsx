import { TActions } from "../../types/actionsType"
import { TDomainsBase } from "../../types/domainsBaseType"

export const createActions = <D extends TDomainsBase>(arg: {
    dispatch: Function
}) => {
    const actions = {} as TActions<D>

    return {
        actions: new Proxy(actions, {
            get(domainTarget, domainP) {
                return new Proxy(domainTarget, {
                    get(what, actionP) {
                        return (payload: any) => {
                            arg.dispatch({
                                type: `${domainP as string}:${actionP as string}`,
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
