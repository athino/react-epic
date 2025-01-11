import { ReactNode } from 'react'
import { TDomainsBase } from './types/domainBase'
import { TInitializerBase } from './types/initializerBase'
import { TReducer } from './types/reducer'
import { TDomainTypeBase } from './types/domainTypeBase'
import { TEffect } from './types/effect'
import { TActionTypeBase } from './types/actionTypeBase'
import { TSelectorBase } from './types/selectorBase'

/**
 * Utility to create global state for your app.
 */
export const epic = {

    /**
     * Utility create actions for your app.
     */
    createActions<TInitializer extends TInitializerBase>(initializer: TInitializer) {
        return {
            /**
             * Utility to create reducer based on the actions defined in createActions.
             */
            createReducer<TState>(reducer: TReducer<TState, TInitializer>) {
                return reducer
            }
        }
    },

    /**
     * Utility to create states.
     */
    createStates<TDomains extends TDomainsBase>(domains: {
        /** 
         * Specify the reducer for each domain of the root state.
         */
        domains: TDomains
    }) {

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
                        return <TData>(selector: TSelectorBase<TDomains, TData>) => ({
                            data: selector(domains.domains),
                            actions: domains.domains
                        })
                    },

                    /**
                     * Utility to create a provider component for your app.
                     */
                    createProvider() {
                        return (props: {
                            children: ReactNode
                        }) => props.children
                    }
                }
            },
            /**
             * Utility to create a react hook for your app.
             */
            createHook() {
                return () => ({
                    data: {},
                    actions: {}
                })
            },

            /**
             * Utility to create a provider component for your app.
             */
            createProvider() {
                return (props: { children: ReactNode}) => null
            },
        }
    }
    
}
