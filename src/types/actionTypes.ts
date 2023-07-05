import { DomainsBase } from "./domainBase";

export type ActionTypes<Domains extends DomainsBase> = Parameters<Domains[keyof Domains]>[1]['type']
