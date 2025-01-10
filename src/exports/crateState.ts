import { TDomainsBase } from "../types/domainBase"
import { MergeUnion, TEffect } from "../types/effect"

export const crateState = <TDomains extends TDomainsBase>(arg: TDomains) => {

  return {
    createEffects: (effects: {
      effects: Array<any>
    }) => {
      return {
        createHooks: () => {
          return {
            useActions: () => {},
            Provider: () => {}
          }
        }
      }
    },
    createEffect: <T extends (keyof MergeUnion<TDomains['domains'][keyof TDomains['domains']]>) | RegExp, TDomain extends keyof TDomains['domains'] | undefined>(effect: TEffect<TDomains, T, TDomain>) => {
      
    }
  }
}
