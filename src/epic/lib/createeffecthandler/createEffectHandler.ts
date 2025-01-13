

export const createEffectHandler = (arg: {
    effects: any[]
}) => {
    
    const handler = (arg: {
        action: any
        state: any
    }) => {
        console.log(arg)
    }

    return handler
}
