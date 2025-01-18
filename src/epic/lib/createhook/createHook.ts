import { useSelector } from "react-redux"
import { TActions } from "../../types/actionsType"
import { TDomainsBase } from "../../types/domainsBaseType"
import { TState } from "../../types/stateType"

export const createHook = <D extends TDomainsBase>(arg: {
    actions: TActions<D>
}) => {

    return (selector?: (state: TState<D>) => any) => {
        const data = useSelector<TState<D>>((state) => selector ? selector(state) : undefined)
        const actions = arg.actions
        
        return (selector
            ? { data, actions }
            : { actions }
        )
    }
}
