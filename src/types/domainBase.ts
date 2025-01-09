

export type TDomainsBase = {
    domains: {
        [domain: string]: {
            [action: string]: (ctx: any) => void
        }
    }
}
