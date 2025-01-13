

export const createEffectHandler = (arg1: {
    effects: any[]
}) => {
    

    return (arg: {
        action: any
        state: any
    }) => {
        console.log(arg1.effects)
        console.log(arg)
    }

}
