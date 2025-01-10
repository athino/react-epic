import { TDomainsBase } from "./domainBase";

export type TCreateHooks<TDomains extends TDomainsBase> = () => {
    useProvider: () => { Provider: () => any }
    useActions: () => { actions: unknown, data: unknown }
}

