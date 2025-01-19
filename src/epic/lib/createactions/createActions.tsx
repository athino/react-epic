import { TActions } from "../../types/actionsType"
import { TDomainsBase } from "../../types/domainsBaseType"

export const createActions = <D extends TDomainsBase>(arg: {
    dispatch: Function
}) => {
    let cancelled = false

    return {
        cancel() {
            cancelled = true
        },
        call(runner: Function) {
            if (cancelled) return
            runner()
        },
        actions: new Proxy({} as TActions<D>, {
            get(domainTarget, domainP) {
                return new Proxy(domainTarget, {
                    get(what, actionP) {
                        return (payload: any) => {
                            if (cancelled) return

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
