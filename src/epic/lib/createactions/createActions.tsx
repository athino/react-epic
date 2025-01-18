import { TDomainsBase } from "../../types/domainsBaseType"

export const createActions = <D extends TDomainsBase>(arg: {
    domains: D
}) => {

    return {
        actions: { foo: 1}
    }
}
