

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
                if ([undefined, domain].includes(effect.domainType)) {
                    effect.handler({
                        action: arg.action
                    });
                }
            }
        })
    }

}
