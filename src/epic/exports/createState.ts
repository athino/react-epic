import { TDomainsBase } from '../types/domainBase'
import { TDomainTypeBase } from '../types/domainTypeBase'
import { TEffect } from '../types/effect'
import { TActionTypeBase } from '../types/actionTypeBase'
import { lib } from '../lib/lib'

/**
* Utility to create states.
*/
export const createState = <TDomains extends TDomainsBase>(domains: {
    /** 
     * Specify the reducer for each domain of the root state.
     */
    domains: TDomains
 }) => {

    const store = lib.createStore({
        domains: domains.domains
    })

    const useActions = lib.createUtilityHook({
        domains: domains.domains,
        dispatch: store.dispatch
    })

    return {
        /**
         * Utility to create effect that listens to actions.
         */
        createEffect<TDomainType extends TDomainTypeBase<TDomains>, TActionType extends TActionTypeBase<TDomains, TDomainType>>(effect: TEffect<TDomains, TDomainType, TActionType>) {       
            return effect
        },
 
        /**
         * Utility to collect all effects defined by createEffect.
         */
        createEffects(effects: {
            /** 
             * Specify the effects that listen to actions.
             */
            effects: TEffect<TDomainsBase, TDomainTypeBase<TDomainsBase>, TActionTypeBase<TDomainsBase, TDomainTypeBase<TDomainsBase>>>[]
        }) {
            return {
 
                /**
                 * Utility to create a react hook for your app.
                 */
                createHook() {
                    return useActions
                },
 
                /**
                 * Utility to create a provider component for your app.
                 */
                createProvider() {
                    return lib.createProvider({ store })
                }
            }
        },
        /**
         * Utility to create a react hook for your app.
         */
        createHook() {
            return useActions
        },
 
        /**
         * Utility to create a provider component for your app.
         */
        createProvider() {
            return lib.createProvider({ store })
        }
    }
 }
 