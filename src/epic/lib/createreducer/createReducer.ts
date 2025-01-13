

export const createReducer = (arg: {
    reducerObject: any
    initialState: any
}) => {
    return (state = arg.initialState, action: any) => {
        const actionReducer =  arg.reducerObject[action.type]
        if (!actionReducer) return state
        const newState = {...state}
        const ctx = {
            state: newState,
            payload: action.payload
        }
        actionReducer(ctx)
        return newState
    }
}
