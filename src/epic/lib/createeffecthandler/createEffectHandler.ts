

export const createEffectHandler = (arg1: {
    effects: any[]
}) => {
    
    return async (arg: {
        action: any
        state: any
    }) => {
        const domain = arg.action.domain
        const type = arg.action.type
        const payload = arg.action.payload

        arg1.effects.forEach((effect) => {
            if (effect.actionType === type) {
                if (effect.domainType === undefined) {
                    effect.handler({
                        action: arg.action
                    })
                } else if (effect.domainType === domain) {
                    effect.handler({
                        action: arg.action
                    })
                }
            }
        })
    }

}
