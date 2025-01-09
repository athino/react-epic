import { DomainsBase } from "./domainBase";

export type RootState<Domains extends DomainsBase> = {
    [Key in keyof Domains]: ReturnType<Domains[Key]>
}
  