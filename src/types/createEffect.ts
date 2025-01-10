import { TDomainsBase } from "./domainBase";

type TDomainTypeBase<TDomains extends TDomainsBase> = keyof TDomains | undefined

type TActionTypeBase<TDomains extends TDomainsBase, TDomainType extends TDomainTypeBase<TDomains>> = TDomainType extends undefined ? (((keyof TDomains[keyof TDomains]))) : (TDomainType extends keyof TDomains ? keyof TDomains[TDomainType] : never)

type TEffectBase<TDomains extends TDomainsBase, TActionType extends TActionTypeBase<TDomains, TDomainType>, TDomainType extends TDomainTypeBase<TDomains>> = {
    effectType: 'takeLeading' | 'takeEvery' | 'takeLatest'
    domainType: keyof TDomains | undefined
}

export type TCreateEffect<TDomains extends TDomainsBase> = <TDomainType extends keyof TDomains | undefined, TActionType extends TActionTypeBase<TDomains, TDomainType>, TEffect extends TEffectBase<TDomains, TActionType, TDomainType>>(effect: {
    domainType: TDomainType,
    actionType: TActionType
}) => void
