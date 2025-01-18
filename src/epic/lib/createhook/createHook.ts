import { useSelector } from "react-redux"

export const createHook = (arg: {
    actions: any
}) => {

    return (selector?: any) => {
        const data = useSelector((state) => selector ? selector(state) : undefined)
        const actions = arg.actions
        
        return (selector
            ? { data, actions }
            : { actions }
        )
    }
}
