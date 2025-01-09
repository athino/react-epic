import { TDomainsBase } from "./domainBase"

type MergeUnion<T> = {
    [K in (T extends any ? keyof T : never)]: T extends { [P in K]?: any } ? T[K] : never;
};

export type TEffect<TDomains extends TDomainsBase, T extends keyof MergeUnion<TDomains['domains'][keyof TDomains['domains']]> | RegExp> = {
    actionType: T
    effectType: 'takeLeading' | 'takeEvery' | 'takeLatest'
    handler: (ctx: {
        action: {
            type: T
            payload: (T extends keyof MergeUnion<TDomains['domains'][keyof TDomains['domains']]>
                ? (Parameters<MergeUnion<TDomains['domains'][keyof TDomains['domains']]>[T]>[0] extends { payload: any}
                    ? Parameters<MergeUnion<TDomains['domains'][keyof TDomains['domains']]>[T]>[0]['payload'] : undefined)
                : unknown)
        },
        actions: {
            [K in keyof TDomains['domains']]: {
                [P in keyof TDomains['domains'][K]]: Parameters<TDomains['domains'][K][P]>[0] extends { payload: any } ? (payload: Parameters<TDomains['domains'][K][P]>[0]['payload']) => void : () => void 
            }
        }
    }) => void
}
