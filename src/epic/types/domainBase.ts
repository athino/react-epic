import { TReducerCtx } from "./reducerCtx"

export type TDomainsBase =  {
    [domain: string]: {
        [action: string]: (ctx: TReducerCtx<any, any>) => void
    }
}
