import { TDomainsBase } from "../../types/domainsBaseType"
import { lib } from "../lib"

export const createRoot = <D extends TDomainsBase>(domains: D) => {
    const {reducer} = lib.createMainReducer({ domains })

    const {effects} = lib.createEffects<D>()

    const {store} = lib.createStore({
        reducer: reducer,
        effects: effects
    })

    const {actions} = lib.createActions<D>({ 
        dispatch: store.dispatch
    })

    return {
        addEffects: effects.addEffects,
        createHook: () => lib.createHook<D>({ actions }),
        createProvider: () => lib.createProvider({ store })
    }
}
