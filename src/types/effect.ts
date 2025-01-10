import { TDomainsBase } from "./domainBase"

type MergeUnion<T> = {
    [K in (T extends any ? keyof T : never)]: T extends { [P in K]?: any } ? T[K] : never;
};

export type TEffect<TDomains extends TDomainsBase, T extends (keyof MergeUnion<TDomains['domains'][keyof TDomains['domains']]>) | RegExp, D extends keyof TDomains['domains']> = {
    actionType: T
    effectType: 'takeLeading' | 'takeEvery' | 'takeLatest'
    domain?: D
    handler: (ctx: {
        action: (T extends keyof MergeUnion<TDomains['domains'][keyof TDomains['domains']]>
                ? (Parameters<MergeUnion<TDomains['domains'][keyof TDomains['domains']]>[T]>[0] extends { payload: any}
                    ? {type: T, payload: Parameters<MergeUnion<TDomains['domains'][keyof TDomains['domains']]>[T]>[0]['payload']} : { type: T })
                : { type: string, payload: unknown}),
        actions: {
            [K in keyof TDomains['domains']]: {
                [P in keyof TDomains['domains'][K]]: Parameters<TDomains['domains'][K][P]>[0] extends { payload: any } ? (payload: Parameters<TDomains['domains'][K][P]>[0]['payload']) => void : () => void 
            }
        }
    }) => void
}
