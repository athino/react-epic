import { createEffectsClass } from "../lib/createEffectsClass"
import { createHooksClass } from "../lib/createHooksClass"
import { DomainsBase } from "../types/domainBase"
import { Hooks } from "../types/hooks"
import { Effects } from "../types/effects"

export class Root<Reducers extends DomainsBase> {
  Hooks!: Hooks<Reducers>
  Effects!: Effects<Reducers>
  constructor(reducers: Reducers) {
    const { Hooks } = createHooksClass({ domains: reducers })
    const { Effects } = createEffectsClass()
    Object.assign(this, {
      Hooks,
      Effects
    })
  }
}
