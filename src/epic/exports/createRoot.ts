import { internal } from "../lib/lib"
import { TDomainsBase } from "../types/domainsBaseType"
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

    const root = internal.createRoot<D>(arg.domains)
 
    return {
       /**
       * Utility to create effect that listens to actions.
       */
       createEffects() {
            return root.createEffects()
       },
 
       /**
       * Utility to collect all effects defined by createEffect.
       */
       createConsumer(arg: {
            /** 
             * Specify the effects that listen to actions.
             */
            effects: TEffect<D, any, any>[]
        }) {

            root.addEffects(arg)
 
            return {
 
                /**
                 * Utility to create a react hook for your app.
                 */
                createHook() {
                    return root.createHook()
                },
 
                /**
                 * Utility to create a provider component for your app.
                 */
                createProvider() {
                    return root.createProvider()
                }

            }

       }

    }

}
