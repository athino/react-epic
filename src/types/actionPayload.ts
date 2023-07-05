import { DomainsBase } from "./domainBase";

export type ActionPayload<Domains extends DomainsBase, Domain extends keyof Domains, ActionType> =
  Extract<Parameters<Domains[Domain]>[1], { type: ActionType }>['payload']
