import { TActions } from "./actionsType";
import { TDomainsBase } from "./domainsBaseType";
import { TDomainTypeBase } from "./domainTypeBaseType";

export type TEffect<
    TDomains extends TDomainsBase,
    TDomainType extends TDomainTypeBase<TDomains>,
> = {
    /** domainType */
    domainType?: TDomainType

    /** actionType */
    actionType: string

    /** handler */
    handler: (ctx: {
        state: any
        action: any
        actions: TActions<TDomains>
    }) => Promise<void>
}
