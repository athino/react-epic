import { ActionBase } from './actionBase'

export type DomainsBase = {
    [domain: string]: (state: any, action: ActionBase) => any
}
