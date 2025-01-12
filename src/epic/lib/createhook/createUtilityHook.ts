import { useSelector } from "react-redux";

type TOptionalSelector = (undefined | ((state: any) => any))
type TUseActionsReturn<T extends TOptionalSelector, Actions> = T extends undefined ? { actions: Actions } : { actions: Actions, data: ReturnType<NonNullable<T>> };

export const createUtilityHook = <Actions>(arg: {
    actions: Actions
}) => <T extends TOptionalSelector>(selector?: T) => {
    const data = useSelector((state) => selector ? selector(state) : undefined)
    const actions = arg.actions
    
    return (selector
        ? { data, actions }
        : { actions }
    ) as TUseActionsReturn<T, Actions>;
};
