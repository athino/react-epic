import { TCreateEffect } from "./createEffect";
import { TCreateEffects } from "./createEffects";
import { TCreateHooks } from "./createHooks";
import { TDomainsBase } from "./domainBase";

export type TCreateState = <TDomains extends TDomainsBase>(arg: {
    domains: TDomains
}) => {
    /**
     * Utility function to create an effect.
     * 
     * Example:
     * 
     * ```
     * import { createEffect } from './common/state'
     * 
     * const { effect } = createEffect({
     * 
     * })
     * ```
     */
    createEffect: TCreateEffect<TDomains>
    /**
     * Utility function to create an effects.
     * 
     * Example:
     * 
     * ```
     * const { createHooks } = createEffects({
     * 
     * })
     * ```
     */
    createEffects: TCreateEffects<TDomains>
    /**
     * Utility function to create react hooks.
     * 
     * Example:
     * 
     * ```
     * const { useActions, useProvider } = createHooks()
     * ```
     */
    createHooks: TCreateHooks<TDomains>
}
