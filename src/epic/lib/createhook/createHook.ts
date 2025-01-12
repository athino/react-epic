import { useSelector } from "react-redux";

type TOptionalSelector = (undefined | (() => any))

type TUseActionsReturn<T extends TOptionalSelector, A> = T extends undefined ? { actions: A } : { actions: A, data: ReturnType<NonNullable<T>> };

const createUtilityHook = <A>(arg: {
    actions: A
}) => <T extends TOptionalSelector>(selector?: T) => {
    const data = useSelector(() => selector ? selector() : undefined)

    const actions = arg.actions
    
    return (selector
        ? { data, actions }
        : { actions }
    ) as TUseActionsReturn<T, A>;
};

const useActions = createUtilityHook({
    actions: {}
})

const { actions: a1, data: d1 } = useActions(() => 1);
// const { actions: a2, data: d2 } = useActions();
