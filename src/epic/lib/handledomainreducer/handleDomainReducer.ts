

export const handleDomainReducer = <S, F extends Function, A extends object>(arg: {
    handler: F
    action: A
    state: S
}) => {
    const state = {...arg.state}
    let ctx
    if ('payload' in arg.action
        && typeof arg.action.payload === 'object'
        && !!Object.keys(arg.action.payload || {}).length) {
        ctx = { state: state, payload: arg.action.payload }
    } else {
        ctx = { state: state }
    }
    arg.handler(ctx)
    return state
}
