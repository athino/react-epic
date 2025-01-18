import { TDomainsBase } from "../../types/domainsBaseType"

export const createActions = <D extends TDomainsBase>(arg: {
    domains: D
}) => {

    const mfeaf = Object.entries(arg.domains).map(([domain, entry]) => ({
        // @ts-ignore
        [domain]: entry.actions
    }))

    console.log(mfeaf)

    return {
        actions: { } as {
            [K in keyof D]: {
                [P in Parameters<D[K]>[1] as P['type']]: P extends {payload: any} ? (payload: P['payload']) => void : () => void
            }
        }
    }
}
