import { DomainsBase } from "./domainBase";

export type EffectActionType<Domains extends DomainsBase, Domain extends keyof Domains> = Parameters<Domains[Domain]>[1]['type']
