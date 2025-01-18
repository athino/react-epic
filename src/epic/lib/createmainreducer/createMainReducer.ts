import { TDomainsBase } from "../../types/domainsBaseType"

export const createMainReducer = <D extends TDomainsBase>(arg: {
    /** 
     * Specify the reducer of each domain.
     */
    domains: D
}) => {

    return {
        reducer: (state: any) => state
    }
}
