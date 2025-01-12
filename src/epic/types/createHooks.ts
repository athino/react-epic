import { ReactNode } from "react";
import { TDomainsBase } from "./domainBase";
import { TState } from "./createEffect";

export type TCreateHooks<TDomains extends TDomainsBase> = () => {
    useProvider: () => { Provider: (props: { children: ReactNode }) => ReactNode }
    useActions: <T extends (state: TState<{
                [K in keyof TDomains]: Parameters<TDomains[K][keyof TDomains[K]]>[0]['state']
            }>) => any>(selector: T) => {
        data: ReturnType<T>
        actions: {
            [K in keyof TDomains]: {
                [P in keyof TDomains[K]]: Parameters<TDomains[K][P]>[0] extends { payload: any } ? (payload: Parameters<TDomains[K][P]>[0]['payload']) => void : () => void 
            }
        }
    }
}
