import { TMergeUnion } from "./createEffect"
import { TDomainsBase } from "./domainBase"
import { TDomainTypeBase } from "./domainTypeBase"

export type TActionTypeBase<
    TDomains extends TDomainsBase,
    TDomainType extends TDomainTypeBase<TDomains>
> = TDomainType extends undefined
        ? TMergeUnion<TDomains[keyof TDomains]>
        : TDomainType extends keyof TDomains
            ? keyof TDomains[TDomainType]
            : never
