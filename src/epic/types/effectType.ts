import { TActions } from "./actionsType";
import { TActionTypeBase } from "./actionTypeBaseType";
import { TDomainsBase } from "./domainsBaseType";
import { TDomainTypeBase } from "./domainTypeBaseType";

export type TEffect<
    TDomains extends TDomainsBase,
    TDomainType extends TDomainTypeBase<TDomains>,
    TActionType extends TActionTypeBase<TDomains, TDomainType>
> = {
    /** domainType */
    domainType?: TDomainType

    /** actionType */
    actionType: TActionType

    /** handler */
    handler: (ctx: {
        state: any
        action: any
        actions: TActions<TDomains>
    }) => Promise<void>
}
