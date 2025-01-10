import { TDomainsBase } from "../types/domainBase"
import { TEffect } from "../types/effect"

type MergeUnion<T> = {
  [K in (T extends any ? keyof T : never)]: T extends { [P in K]?: any } ? T[K] : never;
};

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
    createEffect: <T extends (keyof MergeUnion<TDomains['domains'][keyof TDomains['domains']]>) | RegExp, K extends keyof TDomains['domains'] | undefined>(effect: TEffect<TDomains, T, K>) => {
      
    }
  }
}
