

export const createEffects = () => {
    const store = {
        effects: [] as any[]
    }

    return {
        effects: {
            addEffects(arg: {
                effects: any[]
            }) {
                store.effects = arg.effects
            },
            handler(arg: {
                action: any
                state: any
            }) {
                console.log('EFFECT: ', arg)
                console.log('EFFECTS: ', store.effects)

            }
        }
    }
}
