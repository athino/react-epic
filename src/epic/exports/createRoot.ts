import { lib } from "../lib/lib"
import { TDomainsBase } from "../types/domainsBaseType"
import { TDomainTypeBase } from "../types/domainTypeBaseType"
import { TEffect } from "../types/effectType"

/**
 * Utility to create root.
 */
export const createRoot = <D extends TDomainsBase>(arg: {
    /** 
     * Specify the reducer of each domain.
     */
    domains: D
}) => {

    const {effects} = lib.createEffects()

    const {reducer} = lib.createMainReducer({
        domains: arg.domains
    })

    const {store} = lib.createStore({
        reducer: reducer,
        effects: effects
    })

    const {actions} = lib.createActions<D>({ 
        dispatch: store.dispatch
    })
 
    return {
       /**
       * Utility to create effect that listens to actions.
       */
       createEffects<TDomainType extends TDomainTypeBase<D>>(effect: TEffect<D, TDomainType>) {       
          return [effect]
       },
 
       /**
       * Utility to collect all effects defined by createEffect.
       */
       createConsumer(arg: {
            /** 
             * Specify the effects that listen to actions.
             */
            effects: any[]
        }) {

            effects.addEffects({
                effects: arg.effects
            })
 
            return {
 
                /**
                 * Utility to create a react hook for your app.
                 */
                createHook() {
                    return lib.createHook<D>({ actions })
                },
 
                /**
                 * Utility to create a provider component for your app.
                 */
                createProvider() {
                    return lib.createProvider({ store })
                }

            }

       }

    }

}
