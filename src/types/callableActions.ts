import { DefinePayload } from "./definePayload";
import { DomainsBase } from "./domainBase";

export type CallableActions<Domains extends DomainsBase> = {
    [Key in keyof Domains]: {
      [P in Parameters<Domains[Key]>[1] as P['type']]: DefinePayload<P['payload']>
    }
}