import { TDomainsBase } from "./domainBase";

export type TMergeUnion<T> = keyof { [K in (T extends any ? keyof T : never)]: T extends { [P in K]?: any } ? T[K] : never; }

export type TCreateEffect<TDomains extends TDomainsBase> = <
    TDomainType extends keyof TDomains | undefined,
    TActionType extends TDomainType extends undefined
        ? (((TMergeUnion<TDomains[keyof TDomains]>)))
        : (TDomainType extends keyof TDomains ? keyof TDomains[TDomainType] : never)
>(effect: {
    domainType: TDomainType,
    actionType: TActionType,
    handler(ctx: {
        action: {
            actionType: TActionType,
            domainType: TDomainType extends undefined ? string : TDomainType
        },
        actions: {
            [K in keyof TDomains]: {
                [P in keyof TDomains[K]]: Parameters<TDomains[K][P]>[0] extends { payload: any } ? (payload: Parameters<TDomains[K][P]>[0]['payload']) => void : () => void 
            }
        }
    }): void
}) => void
