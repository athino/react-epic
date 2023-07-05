import { ActionPayload } from "./actionPayload"
import { CallableActions } from "./callableActions"
import { DomainsBase } from "./domainBase"
import { EffectActionType } from "./effectActionType"
import { RootState } from "./rootState"

export type Effects<Domains extends DomainsBase> = {
    new <Domain extends keyof Domains>(context: { domain: Domain }): {
      domain: Domain
      effects: unknown[]
      add: <ActionType extends (EffectActionType<Domains, Domain> | RegExp)>(effect: {
        actionType: ActionType
        effectType: 'takeLeading' | 'takeEvery' | 'takeLatest'
        handler: (context: {
          action: ActionType extends RegExp
            ? { type: string, payload: unknown }
            : { type: ActionType, payload: ActionPayload<Domains, Domain, ActionType>}
          actions: CallableActions<Domains>
          getState: () => RootState<Domains>
        }) => Promise<void>
      }) => void
    }
}
  