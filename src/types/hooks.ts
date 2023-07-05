import { TypedUseSelectorHook } from "react-redux"
import { DomainsBase } from "./domainBase"
import { RootState } from "./rootState"
import { CallableActions } from "./callableActions"

export type Hooks<Domains extends DomainsBase> = {
    new(domains: {
      [Key in keyof Domains]: {
        domain: Key
        effects: any[]
        add: (effect: any) => void
      }
    }): {
      useSelector: TypedUseSelectorHook<RootState<Domains>>,
      useActions: () => {
        actions: CallableActions<Domains>
      },
      useProvider: any
    }
}
