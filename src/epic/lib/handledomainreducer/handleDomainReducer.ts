

export const handleDomainReducer = <S, F extends Function, A extends object>(arg: {
    handler: F
    action: A
    state: S
 }) => {
    const state = {...arg.state}
    if ('payload' in arg.action
       && typeof arg.action.payload === 'object'
       && !!Object.keys(arg.action.payload || {}).length) {
       arg.handler({
          state: state,
          payload: arg.action.payload
       })
    } else {
       arg.handler({
          state: state
       })
    }
 
    return state
 }
 