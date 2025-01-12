import { useSelector } from "react-redux";
import { createHookActions } from "../createhookactions/createHookActions";
import { TDomainsBase } from "../../types/domainBase";
import { TState } from "../../types/state";

type TOptionalSelector<State> = (undefined | ((state: State) => any))
type TUseActionsReturn<State, T extends TOptionalSelector<State>, Actions> = T extends undefined ? { actions: Actions } : { actions: Actions, data: ReturnType<NonNullable<T>> };

export const createUtilityHook = <TDomains extends TDomainsBase>(arg: {
    domains: TDomains,
    dispatch: any
}) => {

    const hookActions = createHookActions({
        domains: arg.domains,
        dispatch: arg.dispatch
    })

    return <T extends TOptionalSelector<TState<TDomains>>>(selector?: T) => {
        const data = useSelector<TState<TDomains>>((state) => selector ? selector(state) : undefined)
        const actions = hookActions
        
        return (selector
            ? { data, actions }
            : { actions }
        ) as TUseActionsReturn<TState<TDomains>, T, typeof hookActions>;
    };    
}