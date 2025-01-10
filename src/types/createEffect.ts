import { TDomainsBase } from "./domainBase";

export type TMergeUnion<T> = keyof { [K in (T extends any ? keyof T : never)]: T extends { [P in K]?: any } ? T[K] : never; }

type TDomainTypeBase<TDomains extends TDomainsBase> = keyof TDomains | undefined

type TActionTypeBase<TDomains extends TDomainsBase, TDomainType extends TDomainTypeBase<TDomains>> = TDomainType extends undefined ? (((TMergeUnion<TDomains[keyof TDomains]>))) : (TDomainType extends keyof TDomains ? keyof TDomains[TDomainType] : never)

type TEffectBase<TDomains extends TDomainsBase, TActionType extends TActionTypeBase<TDomains, TDomainType>, TDomainType extends TDomainTypeBase<TDomains>> = {
    effectType: 'takeLeading' | 'takeEvery' | 'takeLatest'
    domainType: keyof TDomains | undefined
}

export type TCreateEffect<TDomains extends TDomainsBase> = <TDomainType extends keyof TDomains | undefined, TActionType extends TActionTypeBase<TDomains, TDomainType>, TEffect extends TEffectBase<TDomains, TActionType, TDomainType>>(effect: {
    domainType: TDomainType,
    actionType: TActionType,
    handler(ctx: {
        action:{
            actionType: TActionType,
            domainType: TDomainType extends undefined ? string : TDomainType
        }
    }): void
}) => void
