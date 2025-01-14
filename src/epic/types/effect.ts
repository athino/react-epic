import { TActionTypeBase } from "./actionTypeBase";
import { TMergeUnion } from "./createEffect";
import { TDomainsBase } from "./domainBase";
import { TDomainTypeBase } from "./domainTypeBase";

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
    handler: (arg: any) => void
}
