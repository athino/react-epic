import { TDomainsBase } from "./domainBase";

export type EffectActionType<Domains extends TDomainsBase, Domain extends keyof Domains> = Domains[Domain]
