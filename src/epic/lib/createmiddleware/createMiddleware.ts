

export const createMiddleWare = () => {
    const _store = {
        effects: [] as any[]
    }

    return {
        addEffects(effects: any[]) {
            _store.effects = effects
        },
        getEffects() {
            return _store.effects
        }
    }
}
