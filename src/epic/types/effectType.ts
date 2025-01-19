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
    handler: (ctx: any) => Promise<void>
}
