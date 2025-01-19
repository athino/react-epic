import { TMergeUnion } from "./mergeUnionType"
import { TDomainsBase } from "./domainsBaseType"
import { TDomainTypeBase } from "./domainTypeBaseType"

export type TActionTypeBase<
    TDomains extends TDomainsBase,
    TDomainType extends TDomainTypeBase<TDomains>
> = TDomainType extends undefined
        ? TMergeUnion<TDomains[keyof TDomains]>
        : TDomainType extends keyof TDomains
            ? keyof TDomains[TDomainType]
            : never
