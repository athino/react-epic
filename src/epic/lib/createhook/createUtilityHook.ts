import { useSelector } from "react-redux";
import { createHookActions } from "../createhookactions/createHookActions";
import { TDomainsBase } from "../../types/domainBase";
import { TState } from "../../types/state";

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never
type TOptionalSelector<State> = (undefined | ((state: Expand<State>) => any))
type TUseActionsReturn<State, T extends TOptionalSelector<State>, Actions> = T extends undefined ? { actions: Expand<Actions> } : { actions: Expand<Actions>, data: Expand<ReturnType<NonNullable<T>>> };

export const createUtilityHook = <TDomains extends TDomainsBase>(arg: {
    domains: TDomains,
    dispatch: any
}) => {

    const hookActions = createHookActions({
        domains: arg.domains,
        dispatch: arg.dispatch
    })

    return <T extends TOptionalSelector<TState<TDomains>>>(selector?: T) => {
        const data = useSelector<Expand<TState<TDomains>>>((state) => selector ? selector(state) : undefined)
        const actions = hookActions
        
        return (selector
            ? { data, actions }
            : { actions }
        ) as unknown as TUseActionsReturn<TState<TDomains>, T, typeof hookActions>;
    };    
}