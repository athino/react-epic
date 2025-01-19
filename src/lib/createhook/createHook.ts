import { useSelector } from "react-redux"
import { TActions } from "../../types/actionsType"
import { TDomainsBase } from "../../types/domainsBaseType"
import { TState } from "../../types/stateType"

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never
type TOptionalSelector<State> = (undefined | ((state: Expand<State>) => any))
type TUseActionsReturn<State, T extends TOptionalSelector<State>, Actions> = T extends undefined ? { actions: Expand<Actions> } : { actions: Expand<Actions>, data: Expand<ReturnType<NonNullable<T>>> };

export const createHook = <D extends TDomainsBase>(arg: {
    actions: TActions<D>
}) => {

    return <T extends TOptionalSelector<TState<D>>>(selector?: T) => {
        const data = useSelector<Expand<TState<D>>>((state) => selector ? selector(state) : undefined)
        const actions = arg.actions
        
        return (selector
            ? { data, actions }
            : { actions }
        ) as unknown as TUseActionsReturn<TState<D>, T, TActions<D>>
    }
}
