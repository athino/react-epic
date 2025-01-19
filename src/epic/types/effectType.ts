import { TActions } from "./actionsType";
import { TDomainsBase } from "./domainsBaseType";

export type TEffect<
    D extends TDomainsBase,
    TDomainType extends keyof D,
    TActionType extends any
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
