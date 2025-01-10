import { TDomainsBase } from "./domainBase";

export type TState<T> = {
    readonly [K in keyof T]: T[K] extends object
        ? T[K] extends Function
            ? T[K]
            : TState<T[K]>
        : T[K];
};

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
        }
        actions: {
            [K in keyof TDomains]: {
                [P in keyof TDomains[K]]: Parameters<TDomains[K][P]>[0] extends { payload: any } ? (payload: Parameters<TDomains[K][P]>[0]['payload']) => void : () => void 
            }
        }
        state: TState<{
            [K in keyof TDomains]: Parameters<TDomains[K][keyof TDomains[K]]>[0]['state']
        }>
    }): void
}) => {
    domainType?: string,
    actionType: string,
    handler(ctx: unknown): void
}
