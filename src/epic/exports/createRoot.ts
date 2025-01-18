import { lib } from "../lib/lib"
import { TDomainsBase } from "../types/domainsBaseType"

/**
 * Utility to create root.
 */
export const createRoot = <D extends TDomainsBase>(arg: {
    /** 
     * Specify the reducer of each domain.
     */
    domains: D
}) => {

    const {reducer} = lib.createMainReducer({
        domains: arg.domains
    })

    const {store} = lib.createStore({
        reducer: reducer
    })

    const {actions} = lib.createActions<D>()
 
    return {
       /**
       * Utility to create effect that listens to actions.
       */
       createEffect(effect: any) {       
          return effect
       },
 
       /**
       * Utility to collect all effects defined by createEffect.
       */
       createEffects(effects: {
            /** 
             * Specify the effects that listen to actions.
             */
            effects: any
        }) {
 
          return {
 
                /**
                 * Utility to create a react hook for your app.
                 */
                createHook() {
                    return {
                        useActions: lib.createHook<D>({ actions })
                    }
                },
 
                /**
                 * Utility to create a provider component for your app.
                 */
                createProvider() {
                    return {
                        Provider: lib.createProvider({ store })
                    }
                }
            }
       },
       /**
       * Utility to create a react hook for your app.
       */
        createHook() {
            return {
                useActions: lib.createHook<D>({ actions })
            }
        },
 
       /**
       * Utility to create a provider component for your app.
       */
        createProvider() {
            return {
                Provider: lib.createProvider({ store })
            }
        }
    }
 
}
