import { TActions } from "./actionsType";
import { TActionTypeBase } from "./actionTypeBaseType";
import { TDomainsBase } from "./domainsBaseType";
import { TDomainTypeBase } from "./domainTypeBaseType";

export type TEffect<
    D extends TDomainsBase,
    TDomainType extends TDomainTypeBase<D>,
    TActionType extends TActionTypeBase<D, TDomainType>
> = {
    /** domainType */
    domainType: TDomainType

    /** actionType */
    actionType: TActionType

    /** handler */
    handler: (ctx: {
        state: any
        action: any
        actions: TActions<D>
    }) => Promise<void>
}
